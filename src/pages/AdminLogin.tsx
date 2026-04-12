import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Invalid credentials");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Admin Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 bg-secondary border border-border rounded-lg p-6">
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
