import ProductCard, { Product } from "./ProductCard";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 15999,
    originalPrice: 24999,
    rating: 4.5,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Electronics",
    badge: "Deal",
  },
  {
    id: 2,
    name: "Smart Watch with Health Monitoring",
    price: 11999,
    originalPrice: 15999,
    rating: 4.3,
    reviewCount: 95,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Electronics",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 1999,
    originalPrice: 2499,
    rating: 4.2,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 1499,
    originalPrice: 2499,
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Home & Kitchen",
    badge: "Eco-friendly",
  },
  {
    id: 6,
    name: "Bestselling Fiction Novel",
    price: 999,
    originalPrice: 1499,
    rating: 4.4,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Books",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 4999,
    originalPrice: 7499,
    rating: 4.3,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Indoor Plant in Decorative Pot",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviewCount: 92,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    category: "Home & Decor",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
