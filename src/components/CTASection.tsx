import { MapPin, Clock, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Visit <span className="text-gradient-gold">King Churros</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Location</h3>
            <p className="text-muted-foreground text-sm font-body">123 Churro Avenue<br />Downtown, CA 90210</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Hours</h3>
            <p className="text-muted-foreground text-sm font-body">Mon–Fri: 9AM – 10PM<br />Sat–Sun: 10AM – 11PM</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Contact</h3>
            <p className="text-muted-foreground text-sm font-body">(555) 123-4567<br />hello@kingchurros.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
