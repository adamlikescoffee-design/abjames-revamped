import { BookOpen, CalendarDays, Link as LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import { format } from "date-fns";
import { toast } from "sonner";
import wheelchairDonated from "@/assets/wheelchair-donated.png";
import wheelchairQuitoDelivery from "@/assets/wheelchair-quito-delivery.png";
import wheelchairBusTicket from "@/assets/wheelchair-bus-ticket.png";
import wheelchairHenryDelivery from "@/assets/wheelchair-henry-delivery.png";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  published_at: string;
}

const JournalSection = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const { data } = await supabase
        .from("wheelchair_journal")
        .select("*")
        .order("published_at", { ascending: false });
      setEntries(data || []);
      setLoading(false);
    };
    fetchEntries();
  }, []);

  useEffect(() => {
    if (!loading && entries.length > 0 && window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [loading, entries]);

  if (loading) return null;
  if (entries.length === 0) return null;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen size={18} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Journal Updates
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {entries.map((entry, idx) => {
              const slug = entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              const anchor = `journal-${slug}`;
              const copyLink = () => {
                const url = `${window.location.origin}/paying-it-forward#${anchor}`;
                navigator.clipboard.writeText(url);
                toast.success("Link copied to clipboard!");
              };
              return (
              <ScrollReveal key={entry.id} delay={idx * 80}>
                <div id={anchor} className="md:pl-12 relative scroll-mt-24">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                  <div className="bg-secondary/50 border border-border/50 rounded-xl p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <CalendarDays size={12} />
                      {format(new Date(entry.published_at), "MMMM d, yyyy · h:mm a")}
                      <button onClick={copyLink} className="ml-auto text-muted-foreground hover:text-primary transition-colors" title="Copy link to this entry">
                        <LinkIcon size={14} />
                      </button>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {entry.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                        part.match(/^https?:\/\//) ? (
                          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{part}</a>
                        ) : part
                      )}
                    </p>
                    {entry.title.toLowerCase().includes("donated") && (
                      <div className="mt-4 max-w-xs">
                        <img
                          src={wheelchairDonated}
                          alt="The donated wheelchair"
                          className="rounded-xl shadow-lg w-full object-cover"
                        />
                      </div>
                    )}
                    {entry.title.toLowerCase().includes("delivered to quito") && (
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="max-w-xs">
                          <img
                            src={wheelchairQuitoDelivery}
                            alt="Wheelchair packaged for delivery to Quito"
                            className="rounded-xl shadow-lg w-full object-cover"
                          />
                        </div>
                        <div className="max-w-xs">
                          <img
                            src={wheelchairBusTicket}
                            alt="Bus ticket for wheelchair delivery to Quito"
                            className="rounded-xl shadow-lg w-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    {entry.title.toLowerCase().includes("huge thanks to henry") && (
                      <div className="mt-4 max-w-sm">
                        <img
                          src={wheelchairHenryDelivery}
                          alt="Henry Padilla delivering the wheelchair in Quito"
                          className="rounded-xl shadow-lg w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
