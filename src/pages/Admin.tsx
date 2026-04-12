import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Users, Loader2, Mail, MapPin, MessageSquare, StickyNote, Trash2, Plus, X, Phone, Download, BookOpen, Pencil } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Pledge {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  amount: number;
  city_country: string | null;
  notes: string | null;
  message: string | null;
  created_at: string;
}

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
}

const emptyForm = { name: "", email: "", phone: "", amount: "", city_country: "", notes: "", message: "" };
const emptyJournalForm = { title: "", content: "" };

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  // Journal state
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [journalLoading, setJournalLoading] = useState(true);
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [journalForm, setJournalForm] = useState(emptyJournalForm);
  const [editingJournalId, setEditingJournalId] = useState<string | null>(null);
  const [journalSubmitting, setJournalSubmitting] = useState(false);

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

  useEffect(() => {
    if (!user) return;
    const fetchJournal = async () => {
      const { data } = await supabase
        .from("wheelchair_journal")
        .select("*")
        .order("published_at", { ascending: false });
      setJournalEntries(data || []);
      setJournalLoading(false);
    };
    fetchJournal();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const handleDelete = async (id: string, name: string) => {
    const { error } = await supabase.from("pledges").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete pledge");
      return;
    }
    setPledges((prev) => prev.filter((p) => p.id !== id));
    toast.success(`Deleted pledge from ${name}`);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.amount) {
      toast.error("Name, email, and amount are required");
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase
      .from("pledges")
      .insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        amount: Number(form.amount),
        city_country: form.city_country || null,
        notes: form.notes || null,
        message: form.message || null,
      })
      .select()
      .single();
    setSubmitting(false);
    if (error) {
      toast.error("Failed to add pledge");
      return;
    }
    setPledges((prev) => [data, ...prev]);
    setForm(emptyForm);
    setShowAddForm(false);
    toast.success(`Added pledge from ${form.name}`);
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  const totalAmount = pledges.reduce((sum, p) => sum + p.amount, 0);

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Amount", "City/Country", "Message", "Notes", "Date"];
    const rows = pledges.map((p) => [
      p.name,
      p.email,
      p.phone || "",
      p.amount,
      p.city_country || "",
      (p.message || "").replace(/"/g, '""'),
      (p.notes || "").replace(/"/g, '""'),
      new Date(p.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pledges-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users size={22} className="text-primary" />
            <h1 className="text-xl font-heading font-bold text-foreground">Pledge Admin</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-2">← Home</Link>
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

        {/* Add Pledge Button / Form */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            {!showAddForm && (
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm hover:bg-primary/90 transition-colors"
              >
                <Plus size={16} />
                Add Pledge
              </button>
            )}
            {pledges.length > 0 && (
              <button
                onClick={exportCSV}
                className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg font-heading text-sm hover:bg-muted transition-colors"
              >
                <Download size={16} />
                Export CSV
              </button>
            )}
          </div>
          {showAddForm && (
            <div className="bg-secondary border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-foreground">Add New Pledge</h2>
                <button onClick={() => { setShowAddForm(false); setForm(emptyForm); }} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Amount (AUD) *</label>
                  <input
                    type="number"
                    min="1"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">City / Country</label>
                  <input
                    type="text"
                    value={form.city_country}
                    onChange={(e) => setForm({ ...form, city_country: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Message</label>
                  <input
                    type="text"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Notes</label>
                  <input
                    type="text"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => { setShowAddForm(false); setForm(emptyForm); }}
                    className="px-4 py-2 rounded-lg text-sm font-heading text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {submitting && <Loader2 size={14} className="animate-spin" />}
                    Add Pledge
                  </button>
                </div>
              </form>
            </div>
          )}
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
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Phone</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Amount</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Location</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Message</th>
                    <th className="text-left text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Date</th>
                    <th className="text-right text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pledges.map((pledge) => (
                    <tr key={pledge.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm text-foreground font-medium">{pledge.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <a href={`mailto:${pledge.email}`} className="text-primary hover:underline">{pledge.email}</a>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{pledge.phone || "—"}</td>
                      <td className="px-4 py-3 text-sm text-foreground font-semibold">${pledge.amount}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{pledge.city_country || "—"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground max-w-[200px] truncate">{pledge.message || "—"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{new Date(pledge.created_at).toLocaleDateString()}</td>
                      <td className="px-4 py-3 text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <button className="text-destructive hover:text-destructive/80 transition-colors p-1">
                              <Trash2 size={16} />
                            </button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete pledge?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently remove the ${pledge.amount} pledge from {pledge.name}. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(pledge.id, pledge.name)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </td>
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
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-primary">${pledge.amount}</span>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="text-destructive hover:text-destructive/80 transition-colors p-1">
                            <Trash2 size={16} />
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete pledge?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently remove the ${pledge.amount} pledge from {pledge.name}. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(pledge.id, pledge.name)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-muted-foreground" />
                    <a href={`mailto:${pledge.email}`} className="text-primary hover:underline">{pledge.email}</a>
                  </div>
                  {pledge.phone && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone size={14} />
                      <a href={`tel:${pledge.phone}`} className="text-primary hover:underline">{pledge.phone}</a>
                    </div>
                  )}
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
