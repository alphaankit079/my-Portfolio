import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border bg-background overflow-hidden">

      {/* soft glow background */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">
              Ankit<span className="text-primary">.dev</span>
            </h2>

            <p className="text-muted-foreground text-sm mt-2 max-w-sm leading-relaxed">
              Full Stack Developer crafting modern, scalable and
              high-performance web experiences.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["hero", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-muted-foreground hover:text-primary transition group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">

            {/* BACK TO TOP */}
            <a
              href="#hero"
              className="flex items-center gap-2 px-5 py-2 rounded-full
              bg-primary/10 hover:bg-primary hover:text-white
              text-primary transition-all duration-300
              hover:scale-105"
            >
              Back To Top <HiArrowUp size={16} />
            </a>

            {/* ICONS */}
            <div className="flex gap-2">

              <a
                href="https://github.com/alphaankit079"
                target="_blank"
                className="p-2 rounded-xl border border-border hover:bg-primary/10 hover:scale-110 transition"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-kumar-3b75aa203/"
                target="_blank"
                className="p-2 rounded-xl border border-border hover:bg-primary/10 hover:scale-110 transition"
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="mailto:ankit.singh28112011@gmail.com"
                className="p-2 rounded-xl border border-border hover:bg-primary/10 hover:scale-110 transition"
              >
                <FaEnvelope size={16} />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-border my-8 opacity-50" />

        {/* BOTTOM TEXT (MINIMAL SIGNATURE) */}
        <div className="text-center text-xs text-muted-foreground">
          Built with React, Tailwind & passion ⚡
        </div>

      </div>
    </footer>
  );
};