
import { CartItem } from '@/app/cart/product';
import React from 'react';

export const deleteProduct = (index:number,cartItems:CartItem[],setCartItems:React.Dispatch<React.SetStateAction<CartItem[]>>) => {
     const updatedCart = cartItems.filter((_, i) => i !== index);
 setCartItems(updatedCart);
 localStorage.setItem('cart', JSON.stringify(updatedCart));
};

