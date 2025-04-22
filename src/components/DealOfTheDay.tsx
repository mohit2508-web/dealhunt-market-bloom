
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const DealOfTheDay = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-dealhunt-primary/5 to-dealhunt-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left side - Image */}
          <div className="md:w-1/2 relative">
            <div className="absolute top-4 left-4 bg-dealhunt-secondary text-white font-bold px-4 py-2 rounded-full z-10">
              Deal of the Day
            </div>
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&q=80&w=1470&h=750&auto=format&fit=crop"
              alt="Deal of the Day"
              className="w-full h-full object-cover aspect-video md:aspect-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
            <div>
              <span className="text-sm text-gray-500">Electronics</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-2">
                Ultra HD Smart TV 55" 4K Resolution
              </h2>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  4.6 (245 reviews)
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                Experience stunning picture quality with this Ultra HD Smart TV. Features include 
                voice control, streaming apps, and a sleek design that will enhance any living room.
              </p>
              
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-dealhunt-primary">
                  $399.99
                </span>
                <span className="text-xl text-gray-500 line-through ml-3">
                  $699.99
                </span>
                <span className="ml-3 text-lg font-medium text-green-600">
                  43% off
                </span>
              </div>
              
              {/* Timer */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  Hurry! Offer ends in:
                </p>
                <div className="flex space-x-3">
                  <div className="bg-gray-100 px-3 py-2 rounded-md text-center">
                    <span className="text-lg font-bold block">23</span>
                    <span className="text-xs text-gray-500">Hours</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded-md text-center">
                    <span className="text-lg font-bold block">45</span>
                    <span className="text-xs text-gray-500">Mins</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded-md text-center">
                    <span className="text-lg font-bold block">19</span>
                    <span className="text-xs text-gray-500">Secs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <Button className="w-full py-6 text-lg bg-dealhunt-secondary hover:bg-dealhunt-secondary/90">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
