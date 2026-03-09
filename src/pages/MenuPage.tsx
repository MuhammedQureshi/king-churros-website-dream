import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import churroClassic from "@/assets/churro-classic.png";
import churroChocolate from "@/assets/churro-chocolate.png";
import churroCaramel from "@/assets/churro-caramel.png";
import churroStrawberry from "@/assets/churro-strawberry.png";
import churroMatcha from "@/assets/churro-matcha.png";
import churroNutella from "@/assets/churro-nutella.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProducts = [
  {
    name: "Classic Churro",
    desc: "Golden fried, coated in cinnamon sugar perfection.",
    price: "$4.50",
    rating: 4.9,
    image: churroClassic,
    category: "Classics",
  },
  {
    name: "Chocolate Dip",
    desc: "Rich dark chocolate sauce with crispy churros.",
    price: "$6.00",
    rating: 5.0,
    image: churroChocolate,
    category: "Classics",
  },
  {
    name: "Caramel Cream",
    desc: "Filled with dulce de leche caramel cream.",
    price: "$6.00",
    rating: 4.7,
    image: churroCaramel,
    category: "Classics",
  },
  {
    name: "Strawberry Bliss",
    desc: "Fresh strawberries with pink cream on warm churros.",
    price: "$7.00",
    rating: 4.8,
    image: churroStrawberry,
    category: "Specials",
  },
  {
    name: "Matcha Dream",
    desc: "Matcha green tea dusted churros with white chocolate drizzle.",
    price: "$7.50",
    rating: 4.6,
    image: churroMatcha,
    category: "Specials",
  },
  {
    name: "Nutella Bites",
    desc: "Mini churro bites with powdered sugar and Nutella dip.",
    price: "$5.50",
    rating: 4.9,
    image: churroNutella,
    category: "Bites",
  },
];

const categories = ["All", "Classics", "Specials", "Bites"];

import { useState } from "react";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-md mx-auto">
            Handcrafted churros made fresh daily with the finest ingredients
          </p>

          {/* Category filters */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {filtered.map((product) => (
              <div
                key={product.name}
                className="bg-gradient-card rounded-2xl p-6 text-center border border-border hover:glow-gold transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary text-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1 font-body">
                    {product.rating} <Star className="w-3 h-3 fill-primary text-primary" />
                  </span>
                </div>
                <span className="text-xs font-body text-primary uppercase tracking-wider">{product.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">{product.name}</h3>
                <p className="text-muted-foreground text-xs font-body mt-1 mb-4 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-foreground">{product.price}</span>
                  <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-gold-light transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MenuPage;
