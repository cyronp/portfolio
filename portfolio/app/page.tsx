"use client";

import { Github, Linkedin, FileUser } from "lucide-react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-6 py-16 max-w-6xl">
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
            <div className="space-y-1">
              <p className="text-xl md:text-2xl ">Olá! Me chamo</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Vitor Henrique
              </h1>
            </div>
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
                  className="px-3 py-1 rounded-md bg-black/10 text-secondary-foreground text-xs font-medium"
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
            <a
              href="/Curriculo_Vitor_Henrique_Desenvolvedor_Frontend.pdf"
              download="Curriculo_Vitor_Henrique_Desenvolvedor_Frontend.pdf"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                confetti({
                  origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                  },
                });
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <FileUser className="h-4 w-4" />
              Currículo
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
