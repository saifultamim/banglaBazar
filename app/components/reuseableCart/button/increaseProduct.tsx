import { CartItem } from "@/app/cart/product";


export const increaseProduct = (index:number,cartItems:CartItem[],setCartItems:React.Dispatch<React.SetStateAction<CartItem[]>>) => {
  const updatedCart = cartItems.map((product,i) =>
  i === index
       ? { ...product, quantity: product.quantity + 1 }
      : product
 );
setCartItems(updatedCart);
localStorage.setItem('cart', JSON.stringify(updatedCart));
};

