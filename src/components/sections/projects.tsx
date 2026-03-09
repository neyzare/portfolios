"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderCode } from "lucide-react";

type Project = {
  title: string;
  description: string;
  category: "formation" | "personnel" | "Alternance";
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Organiser — Application de Gestion",
    description:
      "Application web complète de gestion avec authentification, CRUD et dashboard. Développée dans le cadre de ma formation.",
    category: "formation",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "#",
  },
  {
    title: "Smash-food",
    description:
      "site de fast-food développé dans le cadre de ma formation, avec une interface moderne et des fonctionnalités de commande en ligne.",
    category: "formation",
    tags: ["PHP", "MYSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Personnel",
    description:
      "Ce portfolio que vous consultez actuellement, conçu avec Next.js et shadcn/ui pour présenter mes compétences et réalisations.",
    category: "personnel",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "#",
    demo: "#",
  },
  {
    title: "API REST",
    description:
      "API RESTful complète avec documentation Swagger, authentification JWT et tests unitaires.",
    category: "formation",
    tags: ["Java", "Spring Boot", "MySQL", "Swagger"],
    github: "#",
  },
  {
    title: "Finantrack — Application de Suivi Financier",
    description:
      "Application mobile cross-platform avec interface intuitive et fonctionnalités hors-ligne.",
    category: "personnel",
    tags: ["React Native", "TypeScript", "Firebase"],
    github: "#",
  },
  {
    title: "Alternance - Entreprise",
    description:
      "Alternance au sein d'une entreprise. Participation au développement et à la maintenance des sites web de mon entreprise",
    category: "Alternance",
    tags: ["Python", "Wordpress"],
  },
];

const filters = [
  { key: "all", label: "Tout" },
  { key: "formation", label: "Formation" },
  { key: "personnel", label: "Personnel" },
  { key: "alternance", label: "Alternance" },
] as const;

const categoryLabel: Record<string, string> = {
  formation: "Projet Formation",
  Alternance: "Alternance",
  personnel: "Projet Personnel",
};

const categoryColor: Record<string, string> = {
  formation: "bg-blue-500/80",
  Alternance: "bg-emerald-500/80",
  personnel: "bg-violet-500/80",
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          04 — Réalisations
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Projets
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group h-full overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/30 transition-all">

                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-muted">
                    <FolderCode size={40} className="text-muted-foreground/30" />
                    <Badge
                      className={`absolute top-3 left-3 text-[10px] uppercase text-white border-0 ${categoryColor[project.category]}`}
                    >
                      {categoryLabel[project.category]}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={14} className="mr-1.5" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1.5" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
