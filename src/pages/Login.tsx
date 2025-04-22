import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication - in production, this would connect to a backend
    if (email === "admin@dealhunt.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ email, role: "admin" }));
      toast.success("Welcome back, admin!");
      navigate("/"); // Redirect to home/buying section
    } else if (email === "user@dealhunt.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ email, role: "customer" }));
      toast.success("Welcome back!");
      navigate("/"); // Redirect to home/buying section
    } else {
      toast.error("Invalid credentials. Try user@dealhunt.com/password or admin@dealhunt.com/password");
    }
    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    toast.info("Password reset functionality will be implemented soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center text-2xl font-bold">
          Deal<span className="text-dealhunt-secondary">Hunt</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dealhunt-secondary focus:border-dealhunt-secondary"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dealhunt-secondary focus:border-dealhunt-secondary"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button 
                  type="button" 
                  className="font-medium text-dealhunt-secondary hover:text-dealhunt-secondary/90"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-dealhunt-secondary hover:bg-dealhunt-secondary/90"
              disabled={isLoading}
            >
              <UserRound className="mr-2 h-4 w-4" />
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New to DealHunt?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/register">
                <Button variant="outline" className="w-full">
                  Create an account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
