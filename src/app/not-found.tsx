"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-[#0d1117] shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/40 font-mono">
            error — 404
          </span>
        </div>
        <div className="space-y-4 p-6 font-mono text-sm">
          <div>
            <p className="text-green-400">$ find page</p>
            <p className="text-red-400 mt-1">Error: Page not found (404)</p>
          </div>
          <div>
            <p className="text-green-400">$ echo $PWD</p>
            <p className="text-white/80 mt-1">/unknown</p>
          </div>
          <div>
            <p className="text-green-400">$ ls -la</p>
            <p className="text-muted-foreground mt-1 italic">
              Cette page n&apos;existe pas ou a été déplacée.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 text-center"
      >
        <h1 className="text-8xl font-bold tracking-tighter text-blue-500/20 sm:text-9xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oups ! La page que tu cherches a disparu dans le void.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
          <Link href="/">
            <Home size={18} className="mr-2" />
            Retour à l&apos;accueil
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/">
            <ArrowLeft size={18} className="mr-2" />
            Revenir en arrière
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 flex items-center gap-2 text-muted-foreground/50"
      >
        <Terminal size={16} />
        <span className="font-mono text-xs">lucas@portfolio ~ %</span>
      </motion.div>
    </div>
  );
}
