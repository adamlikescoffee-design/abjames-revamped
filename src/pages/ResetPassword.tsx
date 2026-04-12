import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Lock, KeyRound } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.get("type") === "recovery") {
      setIsRecovery(true);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsRecovery(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password updated successfully!");
      navigate("/admin/login");
    }
  };

  if (!isRecovery) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <Lock size={32} className="text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Invalid or expired reset link.</p>
          <button onClick={() => navigate("/admin/login")} className="text-primary hover:underline font-heading text-sm">
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <KeyRound size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Set New Password</h1>
          <p className="text-muted-foreground text-sm mt-2">Enter your new password below.</p>
        </div>
        <form onSubmit={handleReset} className="space-y-4 bg-secondary border border-border rounded-lg p-6">
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-2">New Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
              placeholder="At least 6 characters"
            />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-2">Confirm Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
              placeholder="Repeat your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
