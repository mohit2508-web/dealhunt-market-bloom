
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-dealhunt-primary to-dealhunt-primary/80 text-white">
      <div className="container mx-auto py-10 md:py-20 px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Amazing Deals Everyday at <span className="text-dealhunt-secondary">DealHunt</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Find incredible savings on the products you love. 
            New deals updated daily!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-6">
              Shop Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Today's Deals
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dealhunt-secondary/10 -skew-x-12 transform origin-top-right hidden lg:block"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-dealhunt-secondary/20 -skew-x-12 transform origin-bottom-right hidden lg:block"></div>
    </div>
  );
};

export default Hero;
