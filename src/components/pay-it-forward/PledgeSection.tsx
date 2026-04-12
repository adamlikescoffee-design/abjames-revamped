import { Heart, Users, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

interface PledgeSectionProps {
  stats: { pledge_count: number; total_amount: number } | null;
  pledgeData: { firstName: string; lastName: string; email: string; phone: string; amount: string; city_country: string; notes: string; message: string };
  setPledgeData: (data: any) => void;
  pledgeSubmitted: boolean;
  submitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const PledgeSection = ({ stats, pledgeData, setPledgeData, pledgeSubmitted, submitting, onSubmit }: PledgeSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          {/* Left: Info */}
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t.payingItForward.pledgeTitle}
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <Users size={20} className="text-primary" />
                <span className="text-lg font-heading font-semibold text-foreground">
                  {t.payingItForward.proposedTarget}
                </span>
              </div>

              {stats && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-heading font-semibold mb-2">
                    <span className="text-foreground">
                      {stats.pledge_count} / 100 {t.payingItForward.pledgesReceived}
                    </span>
                    <span className="text-primary">${stats.total_amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-3 bg-background border border-border rounded-full overflow-hidden">
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

              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t.payingItForward.wereCurrentlyTaking}{" "}
                  <strong className="text-foreground">{t.payingItForward.pledgeOnly}</strong>{" "}
                  {t.payingItForward.pledgeOnlyDesc}
                </p>
                <p>
                  {t.payingItForward.estimatedCost}{" "}
                  <strong className="text-foreground">{t.payingItForward.costAmount}</strong>
                  {t.payingItForward.costWaiting}
                </p>
                <p>
                  {t.payingItForward.lookingFor}{" "}
                  <strong className="text-foreground">{t.payingItForward.hundredPeople}</strong>
                  {t.payingItForward.anyAmount}
                </p>
                <p>
                  {t.payingItForward.onceConfirmed}{" "}
                  <strong className="text-foreground">{t.payingItForward.emailPledgers}</strong>{" "}
                  {t.payingItForward.atThatPoint}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal animation="up" delay={100}>
            <div className="lg:sticky lg:top-24">
              {pledgeSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
                  <Heart size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {t.payingItForward.pledgeThankYou}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.payingItForward.pledgeRecorded}{" "}
                    <strong className="text-foreground">${pledgeData.amount}</strong>{" "}
                    {t.payingItForward.pledgeRecordedEnd}
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5 bg-background border border-border rounded-2xl p-8 shadow-lg">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-2">
                    Wheelchair for Angel Pledge Form
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                        {t.payingItForward.pledgeFormFirstName}
                      </label>
                      <input
                        type="text"
                        required
                        value={pledgeData.firstName}
                        onChange={(e) => setPledgeData({ ...pledgeData, firstName: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder={t.payingItForward.firstNamePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                        {t.payingItForward.pledgeFormLastName}
                      </label>
                      <input
                        type="text"
                        required
                        value={pledgeData.lastName}
                        onChange={(e) => setPledgeData({ ...pledgeData, lastName: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder={t.payingItForward.lastNamePlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormPhone}
                    </label>
                    <input
                      type="tel"
                      value={pledgeData.phone}
                      onChange={(e) => setPledgeData({ ...pledgeData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder={t.payingItForward.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={pledgeData.email}
                      onChange={(e) => setPledgeData({ ...pledgeData, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder={t.payingItForward.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormAmount}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                      <input
                        type="number"
                        required
                        min="1"
                        value={pledgeData.amount}
                        onChange={(e) => setPledgeData({ ...pledgeData, amount: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg pl-8 pr-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder={t.payingItForward.amountPlaceholder}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t.payingItForward.pledgeFormSuggested}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormCityCountry}
                    </label>
                    <input
                      type="text"
                      value={pledgeData.city_country}
                      onChange={(e) => setPledgeData({ ...pledgeData, city_country: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder={t.payingItForward.cityCountryPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormNotes}
                    </label>
                    <textarea
                      value={pledgeData.notes}
                      onChange={(e) => setPledgeData({ ...pledgeData, notes: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors min-h-[80px] resize-y"
                      placeholder={t.payingItForward.notesPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      {t.payingItForward.pledgeFormMessage}
                    </label>
                    <textarea
                      value={pledgeData.message}
                      onChange={(e) => setPledgeData({ ...pledgeData, message: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors min-h-[80px] resize-y"
                      placeholder={t.payingItForward.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3.5 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? <Loader2 size={16} className="animate-spin" /> : <Heart size={16} />}
                    {t.payingItForward.pledgeFormButton}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">{t.payingItForward.pledgeFormDisclaimer}</p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;
