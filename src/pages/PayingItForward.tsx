import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Accessibility, Heart, Users, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect, useCallback } from "react";
import angel1 from "@/assets/angel-1.jpg";
import angel2 from "@/assets/angel-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PayingItForward = () => {
  const [pledgeData, setPledgeData] = useState({ name: "", email: "", amount: "20", city_country: "", notes: "", message: "" });
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
        amount: parseFloat(pledgeData.amount),
      });

      if (error) throw error;
      setPledgeSubmitted(true);
      fetchStats();
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

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8">
            <ArrowLeft size={16} />
            {t.payingItForward.backHome}
          </Link>

          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">{t.payingItForward.title}</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">{t.payingItForward.p1}</p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mt-4">{t.payingItForward.p2}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Accessibility size={22} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{t.payingItForward.wheelchairTitle}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">{t.payingItForward.wheelchairDesc}</p>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">{t.payingItForward.wheelchairStory1}</p>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">{t.payingItForward.wheelchairStory2}</p>
            <p className="text-foreground font-medium leading-relaxed mb-8 max-w-3xl">{t.payingItForward.wheelchairStory3}</p>
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { src: angel1, alt: "Adam with Angel" },
                { src: angel2, alt: "Meeting with Angel on the street" },
              ].map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t.payingItForward.pledgeTitle}</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users size={20} className="text-primary" />
                <span className="text-lg font-heading font-semibold text-foreground">{t.payingItForward.proposedTarget}</span>
              </div>

              {/* Progress Bar */}
              {stats && (
                <div className="max-w-md mx-auto mb-8">
                  <div className="flex justify-between text-sm font-heading font-semibold mb-2">
                    <span className="text-foreground">{stats.pledge_count} / 100 {t.payingItForward.pledgesReceived}</span>
                    <span className="text-primary">${stats.total_amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-3 bg-secondary border border-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${Math.min((stats.pledge_count / 100) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 text-right">
                    ${stats.total_amount.toLocaleString()} {t.payingItForward.pledgedOf}
                  </p>
                </div>
              )}
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
                <p>{t.payingItForward.wereCurrentlyTaking} <strong className="text-foreground">{t.payingItForward.pledgeOnly}</strong> {t.payingItForward.pledgeOnlyDesc}</p>
                <p>{t.payingItForward.estimatedCost} <strong className="text-foreground">{t.payingItForward.costAmount}</strong>{t.payingItForward.costWaiting}</p>
                <p>{t.payingItForward.lookingFor} <strong className="text-foreground">{t.payingItForward.hundredPeople}</strong>{t.payingItForward.anyAmount}</p>
                <p>{t.payingItForward.onceConfirmed} <strong className="text-foreground">{t.payingItForward.emailPledgers}</strong> {t.payingItForward.atThatPoint}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={100}>
            <div className="max-w-md mx-auto">
              {pledgeSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                  <Heart size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t.payingItForward.pledgeThankYou}</h3>
                  <p className="text-muted-foreground">
                    {t.payingItForward.pledgeRecorded} <strong className="text-foreground">${pledgeData.amount}</strong> {t.payingItForward.pledgeRecordedEnd}
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-5 bg-secondary border border-border rounded-lg p-6">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">{t.payingItForward.pledgeFormName}</label>
                    <input type="text" required value={pledgeData.name} onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" placeholder={t.payingItForward.namePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">{t.payingItForward.pledgeFormEmail}</label>
                    <input type="email" required value={pledgeData.email} onChange={(e) => setPledgeData({ ...pledgeData, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" placeholder={t.payingItForward.emailPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">{t.payingItForward.pledgeFormAmount}</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                      <input type="number" required min="1" value={pledgeData.amount} onChange={(e) => setPledgeData({ ...pledgeData, amount: e.target.value })} className="w-full bg-background border border-border rounded-lg pl-8 pr-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" placeholder={t.payingItForward.amountPlaceholder} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t.payingItForward.pledgeFormSuggested}</p>
                  </div>
                  <button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50">
                    {submitting ? <Loader2 size={16} className="animate-spin" /> : <Heart size={16} />}
                    {t.payingItForward.pledgeFormButton}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">{t.payingItForward.pledgeFormDisclaimer}</p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.payingItForward.involvedTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.payingItForward.involvedText}</p>
              <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all">{t.payingItForward.getInTouch}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayingItForward;
