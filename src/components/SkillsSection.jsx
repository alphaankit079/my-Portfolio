import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Wrench, ChevronRight } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden text-foreground"
    >

      {/* background glow (safe with stars/meteors) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies I use to build modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">

          {/* SIDEBAR */}
          <div className="space-y-4">
            {categories.map((category, i) => {
              const Icon = category.icon;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    "w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background/50 border-border hover:border-primary/40 hover:bg-secondary/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                      <Icon size={20} />
                    </div>

                    <div className="text-left">
                      <h3 className="font-semibold">{category.label}</h3>
                      <p className="text-sm opacity-70">
                        {skills.filter(s => s.category === category.id).length} Skills
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="opacity-70 group-hover:translate-x-1 transition" />
                </motion.button>
              );
            })}
          </div>

          {/* SKILLS GRID */}
          <AnimatePresence mode="wait">

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-6"
            >

              {filteredSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative p-6 rounded-3xl border border-border bg-background/60 backdrop-blur-md hover:border-primary/40 transition-all duration-300"
                >

                  {/* glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 hover:opacity-100 transition" />

                  <div className="relative z-10">

                    <div className="flex justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* progress bar */}
                    <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-primary to-purple-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                  </div>
                </motion.div>
              ))}

            </motion.div>

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};