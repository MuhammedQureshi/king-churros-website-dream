import churroHero from "@/assets/churro-animation.png";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.08)_0%,_transparent_60%)]" />

      <div className="container relative z-10 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Image first on mobile for visual impact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-first md:order-last"
        >
          <div className="relative w-full h-full sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem]">
            <div className="absolute inset-0" />
            <img
              src={churroHero}
              alt="Delicious King Churros with chocolate"
              className="relative w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-warm animate-float"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight italic">
            Discover the{" "}
            <span className="text-gold">Royal Taste</span> in Every Bite!
          </h1>
          <p className="mt-4 md:mt-6 text-foreground/70 font-body text-sm md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Our churros aren't just a treat — they're an experience. Freshly made, 
            perfectly crispy, and drizzled with heavenly toppings.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">
            <a
              href="https://www.just-eat.co.uk/restaurants-king-churros"
              target="_blank"
              className="w-full sm:w-auto bg-gold font-body font-semibold px-8 py-3 rounded-full text-sm tracking-wide uppercase shadow-gold hover:opacity-90 transition-opacity text-center"
            >
              Order Now
            </a>
            <a
              href="/menu"
              className="w-full sm:w-auto border border-gold/40 text-gold font-body font-semibold px-8 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-gold/10 transition-colors text-center"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

