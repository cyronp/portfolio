import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <img
            src="vitor.png"
            alt="Vitor Henrique"
            className="w-64 h-auto object-cover rounded-lg"
          />

          {/* Title & Subtitle */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/50 text-primary text-xs font-medium mb-2">
              Desenvolvedor FullStack
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Vitor Henrique
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor FullStack com 1 ano de experiência sólida e em
              constante evolução profissional. Possuo experiência no
              desenvolvimento profissional de aplicações utilizando TypeScript,
              React, Node.js, Next.js e Python, além de conhecimentos em UI/UX.
              Ao longo da minha trajetória, fui responsável pelo desenvolvimento
              de aplicações que reduziram significativamente processos manuais,
              otimizando fluxos que antes demandavam horas de execução, sempre
              com foco em facilidade de uso e performance.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 justify-center">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "Next.js",
                "Python",
                "UI/UX",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.linkedin.com/in/vitorhenriquesilveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/cyronp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
