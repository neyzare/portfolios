"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Database, Container } from "lucide-react";

const skillCategories = [
  {
    title: "Front-end",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Angular"],
  },
  {
    title: "Back-end",
    icon: Server,
    skills: ["Node.js", "Java", "Python", "PHP", "Spring Boot", "Express.js", "API REST"],
  },
  {
    title: "Base de Données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma", "SQL"],
  },
  {
    title: "DevOps & Outils",
    icon: Container,
    skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "VS Code", "Figma"],
  },
];

export function SkillsSection() {
  return (
    <section id="competences" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          02 — Savoir-faire
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Compétences
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-500/10 p-2">
                        <category.icon size={20} className="text-blue-500" />
                      </div>
                      <CardTitle className="text-base">{category.title}</CardTitle>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-blue-500"
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
