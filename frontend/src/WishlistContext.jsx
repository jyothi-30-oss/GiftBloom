import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => [...currentWishlist, product]);
    alert(`${product.name} added to wishlist!`);
  };

  const removeFromWishlist = (index) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter((_, i) => i !== index)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}