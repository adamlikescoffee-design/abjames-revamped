import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Users, Loader2, Mail, MapPin, DollarSign, MessageSquare, StickyNote } from "lucide-react";

interface Pledge {
  id: string;
  name: string;
  email: string;
  amount: number;
  city_country: string | null;
  notes: string | null;
  message: string | null;
  created_at: string;
}

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login", { state: { from: "/admin" } });
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    const fetchPledges = async () => {
      const { data } = await supabase
        .from("pledges")
        .select("*")
        .order("created_at", { ascending: false });
      setPledges(data || []);
      setLoading(false);
    };
    fetchPledges();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  const totalAmount = pledges.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users size={22} className="text-primary" />
            <h1 className="text-xl font-heading font-bold text-foreground">Pledge Admin</h1>
          </div>
          <button onClick={handleSignOut} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-heading">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary border border-border rounded-lg p-5">
            <p className="text-muted-foreground text-sm font-heading mb-1">Total Pledges</p>
            <p className="text-3xl font-heading font-bold text-foreground">{pledges.length}</p>
          </div>
          <div className="bg-secondary border border-border rounded-lg p-5">
            <p className="text-muted-foreground text-sm font-heading mb-1">Total Pledged</p>
            <p className="text-3xl font-heading font-bold text-primary">${totalAmount.toLocaleString()}</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 size={32} className="animate-spin text-primary" />
          </div>
        ) : pledges.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No pledges yet.</p>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block bg-secondary border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Name</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Email</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Amount</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Location</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Message</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pledges.map((pledge) => (
                    <tr key={pledge.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm text-foreground font-medium">{pledge.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <a href={`mailto:${pledge.email}`} className="text-primary hover:underline">{pledge.email}</a>
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground font-semibold">${pledge.amount}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{pledge.city_country || "—"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground max-w-[200px] truncate">{pledge.message || "—"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{new Date(pledge.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {pledges.map((pledge) => (
                <div key={pledge.id} className="bg-secondary border border-border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-foreground">{pledge.name}</span>
                    <span className="font-heading font-bold text-primary">${pledge.amount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-muted-foreground" />
                    <a href={`mailto:${pledge.email}`} className="text-primary hover:underline">{pledge.email}</a>
                  </div>
                  {pledge.city_country && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{pledge.city_country}</span>
                    </div>
                  )}
                  {pledge.message && (
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MessageSquare size={14} className="mt-0.5 shrink-0" />
                      <span>{pledge.message}</span>
                    </div>
                  )}
                  {pledge.notes && (
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <StickyNote size={14} className="mt-0.5 shrink-0" />
                      <span>{pledge.notes}</span>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">{new Date(pledge.created_at).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
