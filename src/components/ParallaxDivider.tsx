import { useEffect, useRef } from "react";
import churroAnimation from "@/assets/churro-animation.png";

interface ParallaxDividerProps {
  className?: string;
}

const ParallaxDivider = ({ className = "" }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const offset = (rect.top + scrollY) - scrollY;
      const parallax = offset * 0.4;
      ref.current.style.backgroundPositionY = `${parallax}px`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative h-64 md:h-80 overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${churroAnimation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-brown-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default ParallaxDivider;
