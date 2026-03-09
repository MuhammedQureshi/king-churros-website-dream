import { Crown, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/#about-us" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Offers", href: "/#offers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground tracking-wide">
            KING <span className="text-primary">CHURROS</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className={`text-sm font-body font-medium transition-colors ${
                    location.pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <Link to="/menu" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors">
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
