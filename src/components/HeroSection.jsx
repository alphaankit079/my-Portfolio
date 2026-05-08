import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

// ✅ React Icons replacement
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

const techIcons = ["⚛️", "💻", "🚀", "⚡", "🌐"];

export const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-[140px] rounded-full"
          style={{
            transform: `translateY(${offset * 0.05}px)`,
          }}
        />

        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/10 blur-[140px] rounded-full"
          style={{
            transform: `translateY(${offset * -0.05}px)`,
          }}
        />
      </div>

      {/* 🌟 Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {techIcons.map((icon, i) => (
          <div
            key={i}
            className="absolute text-2xl sm:text-3xl opacity-20 animate-bounce"
            style={{
              top: `${15 + i * 18}%`,
              left: `${10 + i * 16}%`,
              animationDuration: `${3 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border bg-card/40 backdrop-blur-md text-sm text-muted-foreground">
          🚀 Available for Freelance Work
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-primary">Ankit</span>
          <br />
          <span className="bg-linear-to-r from-primary to-cyan-500 text-transparent bg-clip-text">
            MERN Stack Developer
          </span>
        </h1>

        {/* Typing Animation */}
        <h2 className="mt-5 text-lg sm:text-xl text-muted-foreground">
          <Typewriter
            words={[
              "I build scalable web apps",
              "I design modern UI/UX",
              "I love React & Node.js",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h2>

        {/* Description */}
        <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          I build modern, scalable and high-performance web applications using
          React, Node.js, Express, and MongoDB.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <HiArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border bg-card/30 backdrop-blur-md text-foreground hover:bg-card transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Tech Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
          {["React", "Node.js", "MongoDB", "TailwindCSS"].map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-border bg-card/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="text-sm mb-1">Scroll</span>
        <HiArrowDown size={18} />
      </div>
    </section>
  );
};