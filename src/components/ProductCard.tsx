
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full product-card transition-all duration-300">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 bg-dealhunt-secondary text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.badge}
        </div>
      )}

      {/* Image container with fixed height */}
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 mb-1">{product.category}</span>
        <h3 className="font-medium mb-1 line-clamp-2 h-12">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-dealhunt-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm font-medium text-green-600">
                  {discount}% off
                </span>
              </>
            )}
          </div>
          <Button className="w-full mt-3 bg-dealhunt-primary hover:bg-dealhunt-primary/90">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
