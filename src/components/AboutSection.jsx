import { motion } from "framer-motion";
import { Briefcase, Code, User } from "lucide-react";

// LEFT SIDE animation (soft fade up)
const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

// RIGHT SIDE animation (subtle premium slide)
const fadeRight = {
  hidden: { opacity: 0, x: 25, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1 },
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative text-foreground"
    >
      <div className="container mx-auto max-w-6xl">

        {/* TITLE */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            className="space-y-6"
          >

            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate{" "}
              <span className="text-primary">
                MERN Stack Developer
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in building scalable, responsive, and high-performance
              web applications using React.js, Node.js, MongoDB, and Express.js.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy turning complex problems into simple, clean and intuitive
              solutions while constantly improving my full-stack development skills.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>

              <a
                href="/resume-101.pdf"
                className="px-6 py-3 rounded-full border border-border bg-card/30 backdrop-blur-md hover:bg-card transition-all duration-300 text-center"
              >
                Download Resume
              </a>

            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 pt-4 text-sm text-muted-foreground">

              <span className="px-3 py-1 rounded-full border border-border bg-card/20">
                ⚡ Fast Learner
              </span>

              <span className="px-3 py-1 rounded-full border border-border bg-card/20">
                💻 Clean Code
              </span>

              <span className="px-3 py-1 rounded-full border border-border bg-card/20">
                🚀 Problem Solver
              </span>

            </div>

          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <div className="space-y-6">

            {/* CARD 1 */}
            <motion.div
              variants={fadeRight}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-md"
            >
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Scalable MERN applications with clean architecture.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeRight}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-md"
            >
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Clean, modern and user-friendly interfaces.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeRight}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-md"
            >
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    End-to-end web apps using modern tech stack.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};