const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Find out which churro{" "}
          <span className="text-gradient-gold">suits you best</span>
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Take our quick quiz and discover your perfect churro match!
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-gold-light transition-colors">
          Take the Quiz
        </button>
      </div>
    </section>
  );
};

export default CTASection;
