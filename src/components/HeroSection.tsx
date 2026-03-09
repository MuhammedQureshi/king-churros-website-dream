import churroHero from "@/assets/churro-hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-warm flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight italic text-foreground">
            Discover the{" "}
            <span className="text-gradient-gold">perfect taste</span>{" "}
            in every bite!
          </h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-lg">
            Our churros aren't just a treat – they're an art form. 
            Join us for a unique culinary journey where every bite 
            is a meeting with perfect flavor.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-gold-light transition-colors">
            Choose Your Churro
          </button>
        </div>

        <div className="relative flex justify-center">
          <img
            src={churroHero}
            alt="Delicious golden churro"
            className="w-72 md:w-96 animate-float drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
