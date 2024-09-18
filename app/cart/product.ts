export type ProductImages =  "Beef Bone-In Premium" | "Himsagar Mango" | "Nazirshail Rice" | "Pure It Kit" | "Masur Dal Premium"
  | "Broiler Chicken wo Skin" | "Chicken Egg" | "Desi Onion" | "Bombay Sweets Chanachur" | "KurKure S&O"
  | "Ruchi Jhal Chanachur" | "Amul Dark Chocolate" | "Potato White" | "Capsicum" | "Green Chili" | "Long Begun"
  | "Mutton Premium" | "Roast Chicken";


  export interface CartItem {
    productName: string;
    productWeight: string;
    productPrice: string;
    quantity: number;
  }