import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="pb-20">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="font-medium text-foreground">
          Lucas Narguet <span className="text-blue-500">.</span>
        </p>
        <p>Fait main — 2026</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/lucas-narguet-826458294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/neyzare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:lucas.narguet451@email.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
