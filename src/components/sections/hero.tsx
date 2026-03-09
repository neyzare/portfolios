"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin } from "lucide-react";

const roles = [
  "Développeur Full-Stack",
  "Concepteur d'Applications",
  "Passionné de Tech",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center py-20"
    >
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
            Portfolio
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Lucas
            <br />
            <span className="text-blue-500">Narguet</span>
          </h1>
          <div className="mt-4 flex h-8 items-center font-mono text-lg text-muted-foreground">
            <span>{text}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-blue-500" />
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Étudiant en Bachelor Développeur Concepteur d&apos;Applications —
            Passionné par le développement informatique, la conception des solutions prospères et durables dans le temps.
          </p>
          <div className="mt-8 flex gap-8">
            {[
              { value: "5+", label: "Projets" },
              { value: "1", label: "Stage" },
              { value: "3+", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() =>
                document
                  .getElementById("projets")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir mes projets
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={16} className="mr-2" />
                Télécharger mon CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a
                href="https://www.linkedin.com/in/lucas-narguet-826458294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-[#0d1117] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/40 font-mono">
                terminal — lucas@portfolio
              </span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <TerminalLine prompt="$ whoami" output="Lucas Narguet" delay={0.3} />
              <TerminalLine
                prompt="$ cat formation.txt"
                output="Bachelor Développeur Concepteur d'Applications"
                delay={0.6}
              />
              <TerminalBlock
                prompt="$ cat skills.json"
                delay={0.9}
                content={`{
  "frontend": ["React", "Next.js", "TypeScript", "Tailwind"],
  "backend": ["Node.js", "Java", "Python", "PHP"],
  "database": ["PostgreSQL", "MySQL", "MongoDB"],
  "devops": ["Docker", "Git", "Linux"]
}`}
              />
              <TerminalLine
                prompt="$ echo $STATUS"
                output="✓ Disponible pour de nouvelle opportunités"
                delay={1.2}
                outputClass="text-green-400"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}

function TerminalLine({
  prompt,
  output,
  delay,
  outputClass,
}: {
  prompt: string;
  output: string;
  delay: number;
  outputClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="mb-3"
    >
      <p className="text-green-400">{prompt}</p>
      <p className={outputClass || "text-white/80"}>{output}</p>
    </motion.div>
  );
}

function TerminalBlock({
  prompt,
  content,
  delay,
}: {
  prompt: string;
  content: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="mb-3"
    >
      <p className="text-green-400">{prompt}</p>
      <pre className="text-yellow-300/80 whitespace-pre-wrap text-xs mt-1">
        {content}
      </pre>
    </motion.div>
  );
}
