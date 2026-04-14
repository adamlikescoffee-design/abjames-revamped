import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";
import { Loader2, Lock, Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = useAuth();

  const redirectTo = (location.state as { from?: string })?.from || "/admin";

  // If already authenticated, redirect to admin
  useEffect(() => {
    if (session) {
      navigate(redirectTo, { replace: true });
    }
  }, [session, navigate, redirectTo]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoading(false);
      toast.error("Invalid credentials");
    } else {
      // Wait for onAuthStateChange to propagate the session before navigating
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_IN") {
          subscription.unsubscribe();
          navigate(redirectTo);
        }
      });
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) {
        toast.error("Google sign-in failed");
        setGoogleLoading(false);
        return;
      }
      if (result.redirected) return;
      navigate(redirectTo);
    } catch {
      toast.error("Google sign-in failed");
      setGoogleLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setResetSent(true);
    }
  };

  // Forgot password mode
  if (forgotMode) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Reset Password</h1>
            <p className="text-muted-foreground text-sm mt-2">Enter your email and we'll send you a reset link.</p>
          </div>

          {resetSent ? (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center space-y-3">
              <p className="text-foreground font-heading font-semibold">Check your email</p>
              <p className="text-muted-foreground text-sm">We've sent a password reset link to <strong className="text-foreground">{email}</strong>.</p>
              <button onClick={() => { setForgotMode(false); setResetSent(false); }} className="text-primary hover:underline font-heading text-sm mt-2">
                ← Back to Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-4 bg-secondary border border-border rounded-lg p-6">
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
                  placeholder="admin@example.com"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                Send Reset Link
              </button>
              <button type="button" onClick={() => setForgotMode(false)} className="w-full text-muted-foreground hover:text-foreground text-sm font-heading transition-colors">
                ← Back to Login
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Main login
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Admin Login</h1>
        </div>
        <div className="space-y-4 bg-secondary border border-border rounded-lg p-6">
          {/* Google Sign-In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium text-sm py-3 rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 border border-gray-300"
          >
            {googleLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            )}
            Sign in with Google
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-heading tracking-wider">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Email/Password */}
          <form onSubmit={handleLogin} className="space-y-4">
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 pr-12 text-foreground outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
                <span className="text-xs text-muted-foreground font-heading">Remember me</span>
              </label>
              <button type="button" onClick={() => setForgotMode(true)} className="text-xs text-primary hover:underline font-heading">
                Forgot password?
              </button>
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
    </div>
  );
};

export default AdminLogin;
