import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

import HeroBanner from "@/components/pay-it-forward/HeroBanner";
import WheelchairStory from "@/components/pay-it-forward/WheelchairStory";
import PledgeSection from "@/components/pay-it-forward/PledgeSection";
import MediaHighlights from "@/components/pay-it-forward/MediaHighlights";
import JournalSection from "@/components/pay-it-forward/JournalSection";

const PayingItForward = () => {
  const [pledgeData, setPledgeData] = useState({ firstName: "", lastName: "", email: "", phone: "", amount: "20", city: "", country: "", notes: "", message: "" });
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [stats, setStats] = useState<{ pledge_count: number; total_amount: number } | null>(null);
  const { t } = useLanguage();

  const fetchStats = useCallback(async () => {
    const { data } = await supabase.rpc("get_pledge_stats");
    if (data && data.length > 0) {
      setStats({ pledge_count: Number(data[0].pledge_count), total_amount: Number(data[0].total_amount) });
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const handlePledgeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const fullName = `${pledgeData.firstName} ${pledgeData.lastName}`.trim();
      const { error } = await supabase.from("pledges").insert({
        name: fullName,
        email: pledgeData.email,
        phone: pledgeData.phone || null,
        amount: parseFloat(pledgeData.amount),
        city_country: [pledgeData.city, pledgeData.country].filter(Boolean).join(", ") || null,
        notes: pledgeData.notes || null,
        message: pledgeData.message || null,
      });

      if (error) throw error;
      setPledgeSubmitted(true);
      fetchStats();

      // Send to Make.com webhook
      try {
        const webhookPayload = {
          name: fullName,
          email: pledgeData.email,
          phone: pledgeData.phone || "",
          pledge_amount: pledgeData.amount,
          location: [pledgeData.city, pledgeData.country].filter(Boolean).join(", ") || "",
          notes: pledgeData.notes || "",
          message: pledgeData.message || "",
        };
        console.log("Pledge webhook payload:", JSON.stringify(webhookPayload));
        console.log("pledge_amount value:", webhookPayload.pledge_amount, "type:", typeof webhookPayload.pledge_amount);

        const formBody = new FormData();
        formBody.append("name", webhookPayload.name);
        formBody.append("email", webhookPayload.email);
        formBody.append("phone", webhookPayload.phone);
        formBody.append("pledge_amount", String(webhookPayload.pledge_amount));
        formBody.append("location", webhookPayload.location);
        formBody.append("notes", webhookPayload.notes);
        formBody.append("message", webhookPayload.message);

        // Log all FormData entries for verification
        for (const [key, value] of formBody.entries()) {
          console.log(`FormData entry: ${key} = ${value}`);
        }

        const webhookRes = await fetch("https://hook.eu2.make.com/tfo11b2di0h29prq78ey4v7zj08yib2y", {
          method: "POST",
          body: formBody,
        });
        if (!webhookRes.ok) {
          toast.warning("Your pledge was saved, but the notification failed to send. We'll follow up manually.");
        }
      } catch (webhookErr) {
        console.error("Webhook error:", webhookErr);
        toast.warning("Your pledge was saved, but the notification failed to send. We'll follow up manually.");
      }
    } catch (err) {
      console.error("Pledge error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroBanner />


      <WheelchairStory />

      <JournalSection />

      <PledgeSection
        stats={stats}
        pledgeData={pledgeData}
        setPledgeData={setPledgeData}
        pledgeSubmitted={pledgeSubmitted}
        submitting={submitting}
        onSubmit={handlePledgeSubmit}
      />

      

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-primary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-heading text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                ✦ Pay It Forward
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                {t.payingItForward.involvedTitle}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {t.payingItForward.involvedText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-10 py-4 hover:brightness-110 hover:scale-105 transition-all rounded-full shadow-lg shadow-primary/20"
                >
                  {t.payingItForward.getInTouch}
                </Link>
                <a
                  href="https://www.facebook.com/groups/abjamesfriends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-foreground border border-border font-heading font-semibold tracking-wider text-sm px-10 py-4 hover:border-primary/50 hover:scale-105 transition-all rounded-full"
                >
                  Join the Facebook Group
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fireside & Liberty Digital Promo */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal animation="up" delay={0}>
              <a
                href="https://www.firesidebusinessadvice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    🔥
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {t.payingItForward.firesidePromo}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.payingItForward.firesidePromoDesc}
                </p>
                <span className="text-primary font-heading font-semibold tracking-wider text-xs hover:underline">
                  {t.payingItForward.firesidePromoLink}
                </span>
              </a>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={100}>
              <a
                href="https://www.libertydigital.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    🚀
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {t.payingItForward.libertyPromo}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.payingItForward.libertyPromoDesc}
                </p>
                <span className="text-primary font-heading font-semibold tracking-wider text-xs hover:underline">
                  {t.payingItForward.libertyPromoLink}
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayingItForward;
