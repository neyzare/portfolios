"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, User } from "lucide-react";

export function ProfileSection() {
  return (
    <section id="profil" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          01 — À propos
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Mon Profil
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                  Je m'appelle <strong className="text-foreground">Lucas</strong>, je suis{" "}
                  <strong className="text-foreground">étudiant en informatique</strong> passionné par le{" "}
                  <strong className="text-foreground">développement web</strong>. Avec une solide formation
                  en informatique et une expérience pratique à travers différents projets, je cherche à
                  créer des <strong className="text-foreground">solutions innovantes</strong> et efficaces.
              </p>

              <p>
                  Je ne m'intéresse pas uniquement au développement. Je suis également passionné par la{" "}
                  <strong className="text-foreground">finance</strong>,
                  <strong className="text-foreground"> l'économie</strong>, les{" "}
                  <strong className="text-foreground">sciences</strong>,
                  <strong className="text-foreground"> l'astronomie</strong> et la{" "}
                  <strong className="text-foreground">psychologie</strong>. Curieux de nature, je considère
                  chaque jour comme une{" "}
                  <strong className="text-foreground">opportunité d'apprendre</strong> et de développer
                  de nouvelles connaissances.
              </p>

              <p>
                  Je travaille principalement avec des technologies modernes comme{" "}
                  <strong className="text-foreground">React</strong> et{" "}
                  <strong className="text-foreground">Next.js</strong>. Je m'intéresse aussi aux{" "}
                  <strong className="text-foreground">bases de données</strong>, au{" "}
                  <strong className="text-foreground">développement sécurisé</strong> et aux{" "}
                  <strong className="text-foreground">pratiques DevOps</strong>.
              </p>

              <p>
                  <strong className="text-foreground">Autodidacte et curieux</strong>, j'aime explorer de
                  nouvelles technologies et relever des{" "}
                  <strong className="text-foreground">défis techniques</strong>. Mon objectif est de
                  continuer à progresser et de contribuer à des{" "}
                  <strong className="text-foreground">projets innovants</strong>.
              </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/lucas-narguet-826458294/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:lucas.narguetdev@proton.me"
                className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
              >
                <Mail size={16} />lucas.narguetdev@proton.me
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative text-center">
              <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-muted">
                <User size={64} className="text-muted-foreground/50" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Lucas Narguet</h3>
              <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin size={14} /> France
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
