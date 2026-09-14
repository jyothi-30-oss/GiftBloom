const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Teddy Bear - Red",
    description: "Cute red teddy bear for your loved ones.",
    price: 499,
    category: "Teddy Bears",
    occasion: ["Birthday", "Valentine"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Toys", "Cute Gifts"],
    image: "/products/teddy-red.jpeg",
    stock: 15
  },

  {
    name: "Teddy Bear - Blue",
    description: "Soft blue teddy bear with a cute design.",
    price: 499,
    category: "Teddy Bears",
    occasion: ["Birthday", "Valentine"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Toys", "Cute Gifts"],
    image: "/products/teddy-blue.jpeg",
    stock: 12
  },

  {
    name: "Teddy Bear - Green",
    description: "Lovely green teddy bear gift.",
    price: 499,
    category: "Teddy Bears",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Toys", "Cute Gifts"],
    image: "/products/teddy-green.jpeg",
    stock: 10
  },

  {
    name: "Teddy Bear - Purple",
    description: "Beautiful purple teddy bear for special occasions.",
    price: 549,
    category: "Teddy Bears",
    occasion: ["Birthday", "Valentine"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Toys", "Cute Gifts"],
    image: "/products/teddy-purple.jpeg",
    stock: 10
  },

  {
    name: "Teddy Bear - Pink",
    description: "Adorable pink teddy bear for someone special.",
    price: 549,
    category: "Teddy Bears",
    occasion: ["Birthday", "Valentine"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Toys", "Cute Gifts"],
    image: "/products/teddy-pink.jpeg",
    stock: 10
  },

  {
    name: "Personalized Keychain",
    description: "Personalized keychain with your name.",
    price: 199,
    category: "Keychains",
    occasion: ["Birthday", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Personalized Gifts", "Accessories"],
    image: "/products/keychain-personalized.jpeg",
    stock: 25
  },

  {
    name: "Couple Keychain",
    description: "Matching keychain set for couples.",
    price: 249,
    category: "Keychains",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Couples", "Accessories"],
    image: "/products/keychain-couple.jpeg",
    stock: 20
  },

  {
    name: "Cartoon Couple Keychain",
    description: "Cute cartoon couple keychain.",
    price: 299,
    category: "Keychains",
    occasion: ["Valentine", "Birthday"],
    ageGroup: ["18-30"],
    interests: ["Couples", "Cute Gifts"],
    image: "/products/keychain-cartoon couple.jpeg",
    stock: 15
  },

  {
    name: "Name Keychain",
    description: "Stylish name keychain for everyday use.",
    price: 199,
    category: "Keychains",
    occasion: ["Birthday"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Personalized Gifts", "Accessories"],
    image: "/products/keychain-name.jpeg",
    stock: 20
  },

  {
    name: "Animal Keychain",
    description: "Cute animal-shaped keychain.",
    price: 229,
    category: "Keychains",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Animals", "Accessories"],
    image: "/products/keychain-animal.jpeg",
    stock: 18
  },

  {
    name: "Wooden Keychain",
    description: "Natural wooden keychain with a stylish design.",
    price: 249,
    category: "Keychains",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Personalized Gifts", "Accessories"],
    image: "/products/keychain-wooden.jpeg",
    stock: 15
  },

  {
    name: "Name Bracelet",
    description: "Personalized bracelet with your name.",
    price: 349,
    category: "Bracelets",
    occasion: ["Birthday", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Accessories", "Personalized Gifts"],
    image: "/products/bracelet-name.jpeg",
    stock: 20
  },

  {
    name: "Couple Bracelet",
    description: "Matching bracelets for couples.",
    price: 499,
    category: "Bracelets",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30"],
    interests: ["Couples", "Accessories"],
    image: "/products/bracelet-couple.jpeg",
    stock: 15
  },

  {
    name: "Beaded Bracelet",
    description: "Beautiful handmade-style beaded bracelet.",
    price: 299,
    category: "Bracelets",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Accessories", "Fashion"],
    image: "/products/bracelet-beaded.jpeg",
    stock: 25
  },

  {
    name: "Heart Bracelet",
    description: "Elegant heart-shaped bracelet.",
    price: 399,
    category: "Bracelets",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30"],
    interests: ["Couples", "Accessories"],
    image: "/products/bracelet-heart.jpeg",
    stock: 18
  },

  {
    name: "Charm Bracelet",
    description: "Stylish charm bracelet for gifting.",
    price: 449,
    category: "Bracelets",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Accessories", "Fashion"],
    image: "/products/bracelet-charm.jpeg",
    stock: 15
  },

  {
    name: "Chocolate Gift Box",
    description: "Premium chocolate box for special occasions.",
    price: 699,
    category: "Chocolates",
    occasion: ["Birthday", "Valentine", "Festival"],
    ageGroup: ["Under 18", "18-30", "31-50"],
    interests: ["Chocolate", "Gifts"],
    image: "/products/chocolate-gift box.jpeg",
    stock: 20
  },

  {
    name: "Heart Chocolate Box",
    description: "Heart-shaped chocolate gift box.",
    price: 599,
    category: "Chocolates",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Chocolate", "Couples"],
    image: "/products/chocolate-heart.jpeg",
    stock: 15
  },

  {
    name: "Premium Chocolate Hamper",
    description: "Premium collection of chocolates for gifting.",
    price: 999,
    category: "Chocolates",
    occasion: ["Birthday", "Anniversary", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Chocolate", "Gifts"],
    image: "/products/chocolate-premium hamper.jpeg",
    stock: 10
  },

  {
    name: "Birthday Chocolate Box",
    description: "Special chocolate box for birthdays.",
    price: 649,
    category: "Chocolates",
    occasion: ["Birthday"],
    ageGroup: ["Under 18", "18-30", "31-50"],
    interests: ["Chocolate", "Birthday Gifts"],
    image: "/products/chocolate-birthday box.jpeg",
    stock: 15
  },

  {
    name: "Mini Chocolate Box",
    description: "Small and affordable chocolate gift.",
    price: 299,
    category: "Chocolates",
    occasion: ["Birthday", "Festival"],
    ageGroup: ["Under 18", "18-30"],
    interests: ["Chocolate", "Gifts"],
    image: "/products/chocolate-mini box.jpeg",
    stock: 30
  },

  {
    name: "Personalized Mug",
    description: "Custom mug for your loved ones.",
    price: 299,
    category: "Mugs",
    occasion: ["Birthday", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Coffee", "Personalized Gifts"],
    image: "/products/mug-personalized.jpeg",
    stock: 20
  },

  {
    name: "Photo Mug",
    description: "Personalized mug with your favorite photo.",
    price: 349,
    category: "Mugs",
    occasion: ["Birthday", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Coffee", "Photos"],
    image: "/products/mug-photo.jpeg",
    stock: 20
  },

  {
    name: "Couple Mug",
    description: "Cute mug designed for couples.",
    price: 399,
    category: "Mugs",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30"],
    interests: ["Coffee", "Couples"],
    image: "/products/mug-couple.jpeg",
    stock: 15
  },

  {
    name: "Love Quote Mug",
    description: "Beautiful mug with a romantic quote.",
    price: 329,
    category: "Mugs",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Coffee", "Love Gifts"],
    image: "/products/mug-love quote.jpeg",
    stock: 18
  },

  {
    name: "Wooden Photo Frame",
    description: "Elegant wooden frame for your favorite memory.",
    price: 599,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Home Decor"],
    image: "/products/photo frame-wooden.jpeg",
    stock: 12
  },

  {
    name: "LED Photo Frame",
    description: "Beautiful LED frame that gives your memories a warm glow.",
    price: 899,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary", "Valentine"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Home Decor"],
    image: "/products/photo frame-led.jpeg",
    stock: 10
  },

  {
    name: "Acrylic Photo Frame",
    description: "Modern acrylic frame with a stylish finish.",
    price: 699,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Home Decor"],
    image: "/products/photo frame-acrylic.jpeg",
    stock: 15
  },

  {
    name: "Couple Photo Frame",
    description: "Romantic photo frame designed for couples.",
    price: 799,
    category: "Photo Frames",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Couples"],
    image: "/products/photo frame-couple.jpeg",
    stock: 12
  },

  {
    name: "Collage Photo Frame",
    description: "Multi-photo frame for displaying your favorite memories.",
    price: 999,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Family"],
    image: "/products/photo frame-collage.jpeg",
    stock: 10
  },

  {
    name: "Heart-Shaped Photo Frame",
    description: "Heart-shaped frame for romantic memories.",
    price: 749,
    category: "Photo Frames",
    occasion: ["Valentine", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Couples"],
    image: "/products/photo frame-heart shaped.jpeg",
    stock: 10
  },

  {
    name: "Birthday Photo Frame",
    description: "Colorful personalized frame for birthday memories.",
    price: 649,
    category: "Photo Frames",
    occasion: ["Birthday"],
    ageGroup: ["Under 18", "18-30", "31-50"],
    interests: ["Photos", "Birthday Gifts"],
    image: "/products/photo frame-birthday.jpeg",
    stock: 15
  },

  {
    name: "Family Photo Frame",
    description: "Beautiful frame for your favorite family memories.",
    price: 899,
    category: "Photo Frames",
    occasion: ["Birthday", "Festival", "Anniversary"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Family"],
    image: "/products/photo frame-family.jpeg",
    stock: 12
  },

  {
    name: "Mom & Dad Photo Frame",
    description: "A special frame to celebrate your parents.",
    price: 799,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary", "Festival"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Family"],
    image: "/products/photo frame-mom&dad.jpeg",
    stock: 10
  },

  {
    name: "3D Photo Frame",
    description: "Creative 3D-style frame for a unique gift.",
    price: 1099,
    category: "Photo Frames",
    occasion: ["Birthday", "Anniversary", "Valentine"],
    ageGroup: ["18-30", "31-50"],
    interests: ["Photos", "Home Decor"],
    image: "/products/photo frame-3d.jpeg",
    stock: 8
  }

];

const seedProducts = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Delete old products
    await Product.deleteMany();

    console.log("Old products deleted");

    // Insert new products
    await Product.insertMany(products);

    console.log(`${products.length} products added successfully!`);

    process.exit();

  } catch (error) {

    console.log("Error:", error.message);

    process.exit(1);
  }
};

seedProducts();
