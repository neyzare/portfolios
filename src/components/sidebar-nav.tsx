"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Home,
  User,
  Code2,
  GraduationCap,
  FolderKanban,
  Mail,
  Sun,
  Moon,
  Linkedin,
} from "lucide-react";

const navItems = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "profil", label: "Profil", icon: User },
  { id: "competences", label: "Compétences", icon: Code2 },
  { id: "parcours", label: "Parcours", icon: GraduationCap },
  { id: "projets", label: "Projets", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

function useDockItemScale(mouseX: MotionValue<number>, ref: React.RefObject<HTMLButtonElement | null>) {
  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 150;
    return val - rect.x - rect.width / 2;
  });

  const scale = useTransform(distance, [-100, 0, 100], [1, 1.4, 1]);
  const smoothScale = useSpring(scale, { mass: 0.1, stiffness: 200, damping: 15 });

  return smoothScale;
}

function DockItem({
  icon: Icon,
  label,
  isActive,
  onClick,
  mouseX,
}: {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useDockItemScale(mouseX, ref);

  return (
    <motion.button
      ref={ref}
      style={{ scale }}
      onClick={onClick}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
        isActive
          ? "bg-blue-500/15 text-blue-500"
          : "text-muted-foreground hover:bg-white/10 hover:text-foreground dark:hover:bg-white/10"
      )}
    >
      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />

      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {label}
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
      </span>

      {isActive && (
        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
      )}
    </motion.button>
  );
}

function DockAction({
  icon: Icon,
  label,
  onClick,
  href,
  mouseX,
}: {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useDockItemScale(mouseX, ref);

  const inner = (
    <motion.button
      ref={ref}
      style={{ scale }}
      onClick={onClick}
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground dark:hover:bg-white/10"
    >
      <Icon size={18} />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {label}
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}

export function DockNav() {
  const [activeSection, setActiveSection] = useState("accueil");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
        className="flex items-center gap-1 rounded-2xl border border-white/[0.08] bg-background/60 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-black/50"
      >
        {navItems.map(({ id, label, icon }) => (
          <DockItem
            key={id}
            icon={icon}
            label={label}
            isActive={activeSection === id}
            onClick={() => scrollTo(id)}
            mouseX={mouseX}
          />
        ))}

        <div className="mx-1 h-8 w-px bg-white/10" />

        <DockAction
          icon={Linkedin}
          label="LinkedIn"
          href="https://linkedin.com/in/lucas-narguet"
          mouseX={mouseX}
        />

        {mounted && (
          <DockAction
            icon={theme === "dark" ? Sun : Moon}
            label={theme === "dark" ? "Mode clair" : "Mode sombre"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            mouseX={mouseX}
          />
        )}
      </motion.div>
    </div>
  );
}
