import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop =
          section.offsetTop - 120;

        const sectionHeight =
          section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(
            `#${section.getAttribute("id")}`
          );
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-0 w-full z-30 px-4">
        <div
          className={`max-w-7xl mx-auto rounded-3xl border transition-all duration-500 ${
            isScrolled
              ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
              : "bg-black/20 backdrop-blur-xl border-white/5"
          }`}
        >
          <div className="flex items-center justify-between px-6 md:px-8 py-4">
            {/* Logo */}
            <a
              href="#hero"
              className="relative flex items-center gap-3 group"
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Logo Circle */}
              <div className="relative w-11 h-11 rounded-2xl bg-linear-to-br from-primary via-cyan-400 to-blue-500 flex items-center justify-center text-black font-black text-lg shadow-[0_0_25px_rgba(0,255,255,0.4)] group-hover:rotate-12 transition-all duration-500">
                A
              </div>

              {/* Logo Text */}
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-wide text-white">
                  Ankit
                </span>

                <span className="text-xs uppercase tracking-[0.35em] text-primary">
                  Full Stack Developer
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                    activeSection === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {/* Active Background */}
                  {activeSection ===
                    item.href && (
                    <span className="absolute inset-0 bg-linear-to-r from-primary/30 to-cyan-400/20 rounded-full border border-primary/20 backdrop-blur-xl"></span>
                  )}

                  {/* Hover Effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 rounded-full transition-all duration-300"></span>

                  {/* Text */}
                  <span className="relative z-10">
                    {item.name}
                  </span>
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="#contact"
                className="relative ml-4 overflow-hidden px-7 py-3 rounded-full bg-linear-to-r from-primary via-cyan-400 to-blue-500 text-black font-bold shadow-[0_0_35px_rgba(0,255,255,0.35)] hover:scale-105 transition-all duration-500"
              >
                {/* Shine */}
                <span className="absolute inset-0 translate-x-[-120%] hover:translate-x-[120%] bg-white/30 skew-x-12 transition-transform duration-1000"></span>

                <span className="relative z-10">
                  Hire Me
                </span>
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="md:hidden text-white relative z-50"
            >
              {isMenuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 text-3xl transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() =>
              setIsMenuOpen(false)
            }
            className={`relative transition-all duration-300 ${
              activeSection === item.href
                ? "text-primary scale-110"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.name}

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></span>
          </a>
        ))}

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="mt-6 px-8 py-4 rounded-full bg-linear-to-r from-primary to-cyan-400 text-black text-lg font-bold shadow-[0_0_35px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </>
  );
};