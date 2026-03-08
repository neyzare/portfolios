"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          05 — Me contacter
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h2>

        <div className="mt-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Vous avez un projet, une opportunité ou simplement envie d&apos;échanger ?
            N&apos;hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles
            collaborations et discussions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:lucas.narguet451@email.com"
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div className="rounded-lg bg-blue-500/10 p-2.5">
                <Mail size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground">Écrivez-moi</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-narguet-826458294/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div className="rounded-lg bg-blue-500/10 p-2.5">
                <Linkedin size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-xs text-muted-foreground">Mon profil</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500"
              />
            </a>
            <a
              href="https://github.com/neyzare"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div className="rounded-lg bg-blue-500/10 p-2.5">
                <Github size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs text-muted-foreground">Mes repos</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500"
              />
            </a>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:lucas.narguet@email.com">
                <Mail size={16} className="mr-2" /> Envoyer un email
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
