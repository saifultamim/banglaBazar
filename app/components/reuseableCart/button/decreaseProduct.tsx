import { CartItem } from "@/app/cart/product";

export const decreaseProduct = (index:number,cartItems:CartItem[],setCartItems:React.Dispatch<React.SetStateAction<CartItem[]>>) => {
    const updatedCart = cartItems.map((product, i) =>
        i === index
            ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
            : product
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
};
