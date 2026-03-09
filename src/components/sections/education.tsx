"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const educationItems = [
  {
    title: "Bachelor Développeur Concepteur d'Applications",
    school: "École d'Informatique",
    location: "France",
    period: "2023 - 2026",
    status: "EN COURS",
    description:
      "Formation approfondie en conception et développement d'applications. Apprentissage des architectures logicielles, du développement full-stack, de la gestion de projet agile et des bonnes pratiques de développement.",
    skills: [
      "Architecture logicielle",
      "Développement Full-Stack",
      "Gestion de projet Agile",
      "UX/UI Design",
      "DevOps",
      "Tests & Qualité",
    ],
  },
  {
    title: "Bac pro sen - RIS (Réseaux Informatiques et Systèmes communicants)",
    school: "Lycée",
    location: "France",
    period: "2020 - 2023",
    status: null,
    description:
      "Le baccalauréat professionnel Systèmes Numériques option RISC forme des techniciens capables d'intervenir sur les équipements dans le domaine des télécommunications et des réseaux informatiques.\n",
      skills: [
          "Administration réseaux",
          "Configuration routeurs et switchs",
          "Installation systèmes (Windows / Linux)",
          "Maintenance informatique",
          "Diagnostic et dépannage matériel",
          "Câblage réseau",
          "Adressage IP et protocoles réseau",
          "Support technique utilisateurs",
      ],
  },
];

export function EducationSection() {
  return (
    <section id="parcours" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          03 — Formation
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Mon Parcours
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-0.5 bg-border" />
          <div className="space-y-10">
            {educationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-background flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                </div>
                <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.school}</p>
                    </div>
                    {item.status && (
                      <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20">
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
