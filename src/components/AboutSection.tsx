import churroAbout from "@/assets/churro-about.png";

const features = [
  {
    num: "1",
    title: "Premium Quality Ingredients",
    desc: "Our passion for churros begins with selecting the finest ingredients. Every detail matters to ensure an exceptional taste experience.",
  },
  {
    num: "2",
    title: "Cozy & Warm Atmosphere",
    desc: "Our cozy haven is filled with warmth and inspiration. Relax, enjoy a churro, and be inspired by delightful conversations.",
  },
  {
    num: "3",
    title: "Personalized Experience",
    desc: "We craft churros reflecting your preferences, creating unique treats specially for you. Every visit becomes an unforgettable event.",
  },
  {
    num: "4",
    title: "Expert Churro Artisans",
    desc: "Our artisans have extensive experience and are ready to showcase their exceptional talents in churro making.",
  },
];

const AboutSection = () => {
  return (
    <section id="about-us" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          KING CHURROS <span className="text-gradient-gold">is</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-10">
            {features.slice(0, 2).map((f) => (
              <div key={f.num} className="relative">
                <span className="absolute -left-2 -top-4 text-7xl font-display font-bold text-primary/10">
                  {f.num}
                </span>
                <div className="relative">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={churroAbout}
              alt="King Churros"
              className="w-56 md:w-72 drop-shadow-2xl animate-float"
            />
          </div>

          <div className="space-y-10">
            {features.slice(2, 4).map((f) => (
              <div key={f.num} className="relative">
                <span className="absolute -left-2 -top-4 text-7xl font-display font-bold text-primary/10">
                  {f.num}
                </span>
                <div className="relative">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border border-primary text-primary px-8 py-3 rounded-full font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
