import { Crown, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          <span className="font-display text-sm font-bold text-foreground">KING CHURROS</span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground text-sm font-body">
          <a href="#" className="hover:text-primary transition-colors">News</a>
          <a href="#" className="hover:text-primary transition-colors">Telegram</a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
