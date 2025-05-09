import { Search, ShoppingCart, User, Heart, Menu, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const navigate = useNavigate();
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <header className="bg-dealhunt-primary text-white py-2 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="text-2xl font-bold">
            Deal<span className="text-dealhunt-secondary">Hunt</span>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-3xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 rounded-l-md text-black"
              />
              <Button className="absolute right-0 top-0 h-full bg-dealhunt-secondary hover:bg-dealhunt-secondary/90 rounded-l-none px-4">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="ghost" className="text-white hover:text-dealhunt-secondary">
                  <User className="h-5 w-5 mr-1" />
                  <span className="hidden lg:inline">{user.email}</span>
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-dealhunt-secondary"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  <span className="hidden lg:inline">Logout</span>
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:text-dealhunt-secondary">
                  <User className="h-5 w-5 mr-1" />
                  <span className="hidden lg:inline">Login</span>
                </Button>
              </Link>
            )}
            <Button 
              variant="ghost" 
              className="text-white hover:text-dealhunt-secondary"
              onClick={() => toast.info("Wishlist feature coming soon!")}
            >
              <Heart className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">Wishlist</span>
            </Button>
            <Link to="/cart">
              <Button 
                variant="ghost" 
                className="text-white hover:text-dealhunt-secondary relative"
              >
                <ShoppingCart className="h-5 w-5 mr-1" />
                <span className="hidden lg:inline">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-dealhunt-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="md:hidden py-2">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 rounded-md text-black"
            />
            <Button 
              className="absolute right-0 top-0 h-full bg-dealhunt-secondary hover:bg-dealhunt-secondary/90 rounded-l-none px-3"
              onClick={() => toast.info("Search feature coming soon!")}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-dealhunt-primary border-t border-gray-700 py-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {user ? (
                <>
                  <Button variant="ghost" className="text-white hover:text-dealhunt-secondary justify-start">
                    <User className="h-5 w-5 mr-2" />
                    {user.email}
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-dealhunt-secondary justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:text-dealhunt-secondary justify-start w-full">
                    <User className="h-5 w-5 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
              <Button 
                variant="ghost" 
                className="text-white hover:text-dealhunt-secondary justify-start"
                onClick={() => toast.info("Wishlist feature coming soon!")}
              >
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
              <Link to="/cart">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-dealhunt-secondary justify-start"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </Link>
            </div>
          </div>
        )}

        <nav className="hidden md:flex py-2 space-x-6 text-sm">
          <Link to="/" className="hover:text-dealhunt-secondary">All</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Today's Deals</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Electronics</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Home & Kitchen</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Fashion</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Books</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Toys & Games</Link>
          <Link to="/" className="hover:text-dealhunt-secondary">Health & Beauty</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
