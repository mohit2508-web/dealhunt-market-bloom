import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    link: "/",
  },
  {
    id: 2,
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    link: "/",
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    link: "/",
  },
  {
    id: 4,
    name: "Books",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=80&w=300&h=300&auto=format&fit=crop",
    link: "/",
  },
];

const CategorySection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
            >
              <div className="aspect-square w-full relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4 text-center w-full">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
