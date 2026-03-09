import { Plus, Star } from "lucide-react";
import churroClassic from "@/assets/churro-classic.png";
import churroChocolate from "@/assets/churro-chocolate.png";
import churroCaramel from "@/assets/churro-caramel.png";

const products = [
  {
    name: "Classic Churro",
    desc: "Golden fried, coated in cinnamon sugar perfection.",
    price: "$4.50",
    rating: 4.9,
    image: churroClassic,
  },
  {
    name: "Chocolate Dip",
    desc: "Rich dark chocolate sauce with crispy churros.",
    price: "$6.00",
    rating: 5.0,
    image: churroChocolate,
  },
  {
    name: "Caramel Cream",
    desc: "Filled with dulce de leche caramel cream.",
    price: "$6.00",
    rating: 4.7,
    image: churroCaramel,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-8 flex-wrap">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-gradient-card rounded-2xl p-6 w-64 text-center border border-border hover:glow-gold transition-all duration-300 group"
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

              <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
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

        <p className="text-center text-muted-foreground text-sm font-body mt-10 underline underline-offset-4 cursor-pointer hover:text-primary transition-colors">
          See full menu →
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
