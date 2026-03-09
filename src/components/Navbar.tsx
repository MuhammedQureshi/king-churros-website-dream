import { Crown, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const navItems = ["Home", "Menu", "About Us", "Reviews", "Offers"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground tracking-wide">
            KING <span className="text-primary">CHURROS</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors">
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
