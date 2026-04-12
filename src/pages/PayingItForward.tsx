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
  const [pledgeData, setPledgeData] = useState({ name: "", email: "", phone: "", amount: "20", city_country: "", notes: "", message: "" });
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
      const { error } = await supabase.from("pledges").insert({
        name: pledgeData.name,
        email: pledgeData.email,
        phone: pledgeData.phone || null,
        amount: parseFloat(pledgeData.amount),
        city_country: pledgeData.city_country || null,
        notes: pledgeData.notes || null,
        message: pledgeData.message || null,
      });

      if (error) throw error;
      setPledgeSubmitted(true);
      fetchStats();

      // Send to Make.com webhook
      try {
        const webhookRes = await fetch("https://hook.eu2.make.com/tfo11b2di0h29prq78ey4v7zj08yib2y", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: pledgeData.name,
            email: pledgeData.email,
            phone: pledgeData.phone || null,
            amount: parseFloat(pledgeData.amount),
            city_country: pledgeData.city_country || null,
            notes: pledgeData.notes || null,
            message: pledgeData.message || null,
          }),
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

      <MediaHighlights />

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {t.payingItForward.involvedTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.payingItForward.involvedText}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all rounded-lg"
              >
                {t.payingItForward.getInTouch}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayingItForward;
