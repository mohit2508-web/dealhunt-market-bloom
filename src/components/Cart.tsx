
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="bg-white rounded-lg shadow">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
