import { useWishlist } from "./WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty 💔</h2>
          <p>Add your favorite gifts here!</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item, index) => (
            <div className="wishlist-card" key={index}>
              
              <div className="wishlist-icon">💝</div>

              <h3>{item.name}</h3>

              <p className="wishlist-price">
                ₹{item.price}
              </p>

              <button
                className="wishlist-remove"
                onClick={() => removeFromWishlist(index)}
              >
                🗑️ Remove
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
