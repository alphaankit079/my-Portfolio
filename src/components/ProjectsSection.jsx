import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React and Tailwind CSS.",
    tags: ["React", "TailwindCSS", "Vite"],
    live: "https://my-portfolio-nmit.vercel.app/",
    image: "/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description:
      "Interactive data visualization dashboard for analyzing business metrics.",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "ExpressJS"],
    live: "https://blackcoffer-dashboard-jet.vercel.app/",
    image: "/projects/dashboard.png",
  },
  {
    id: 3,
    title: "Todo-App",
    description:
      "A high-performance, minimalist task management application.",
    tags: ["React.js", "TailwindCSS"],
    live: "https://todo-app-ashy-tau-q4i11hu7ks.vercel.app/",
    image: "/projects/todo.png",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some projects showcasing my frontend and full-stack development skills.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-card/40 backdrop-blur-xl border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >

              {/* Glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-primary/10 via-transparent to-purple-500/10" />

              {/* Project Image */}
              <div className="h-52 relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <h3 className="text-white text-xl font-bold tracking-wide">
                    {project.title}
                  </h3> */}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Live Demo <ExternalLink size={18} />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/alphaankit079"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            View More Projects <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};