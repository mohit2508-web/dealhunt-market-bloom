import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dealhunt-primary text-white py-2 sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Top navigation */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Deal<span className="text-dealhunt-secondary">Hunt</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
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

          {/* Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-dealhunt-secondary">
                <User className="h-5 w-5 mr-1" />
                <span className="hidden lg:inline">Login</span>
              </Button>
            </Link>
            <Button variant="ghost" className="text-white hover:text-dealhunt-secondary">
              <Heart className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">Wishlist</span>
            </Button>
            <Button variant="ghost" className="text-white hover:text-dealhunt-secondary">
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Search Bar - Visible only on mobile */}
        <div className="md:hidden py-2">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 rounded-md text-black"
            />
            <Button className="absolute right-0 top-0 h-full bg-dealhunt-secondary hover:bg-dealhunt-secondary/90 rounded-l-none px-3">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dealhunt-primary border-t border-gray-700 py-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-white hover:text-dealhunt-secondary justify-start">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
              <Button variant="ghost" className="text-white hover:text-dealhunt-secondary justify-start">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" className="text-white hover:text-dealhunt-secondary justify-start">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        )}

        {/* Categories Navigation */}
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
