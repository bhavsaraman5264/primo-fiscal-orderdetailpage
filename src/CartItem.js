import { formatCurrency } from "./utils/calculations";

const CartItem = ({ item }) => (
  <div className="cartItem flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
    <img 
      src={item.image} 
      alt={item.name}
      className="w-16 h-16 object-cover rounded-lg"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold text-gray-800">{formatCurrency(item.price * item.quantity)}</p>
      <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
    </div>
  </div>
);

export default CartItem;