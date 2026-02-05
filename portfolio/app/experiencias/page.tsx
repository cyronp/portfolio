"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: "aguas-joinville",
    company: "Companhia Águas de Joinville",
    role: "Estagiário de desenvolvimento web",
    period: "Agosto 2025 - Atual",
    responsibilities: [
      "Desenvolvi aplicações web fullstack para digitalização e otimização de processos internos da companhia.",
      "Eliminei 1 dia semanal de trabalho manual dos técnicos de saneamento ao criar um sistema responsável pela extração, tratamento e envio automatizado de dados de coletas de amostras para sistemas internos.",
      "Implementei APIs RESTful utilizando Node.js para integração entre aplicações e padronização da comunicação entre sistemas.",
      "Realizei manutenção e deploy de aplicações em servidores locais, utilizando Docker, Nginx e Ubuntu.",
      "Otimizei a geração de relatórios operacionais através da criação de consultas SQL complexas em PostgreSQL, apoiando a tomada de decisão das equipes internas.",
      "Stack: React, JavaScript, PHP, Python, Git, TailwindCSS, PostgreSQL, Node.js, Next.js.",
      "Local Deploy: Docker, Ubuntu, Nginx",
    ],
  },
  {
    id: "floricultura",
    company: "Projeto Independente - Sistema de Gestão Comercial",
    role: "Desenvolvedor Fullstack",
    period: "Dezembro 2025 - Janeiro 2026",
    responsibilities: [
      "Desenvolvi uma aplicação web fullstack para a digitalização do controle de estoque e fluxo de vendas de uma floricultura, substituindo processos manuais em papel.",
      "Projetei e implementei um Dashboard de métricas utilizando Recharts, permitindo a visualização em tempo real do desempenho de vendas e saúde financeira do negócio.",
      "Estruturei a aplicação em um Monorepo utilizando Next.js e TypeScript, garantindo a consistência de tipos e facilitando a manutenção do código.",
      "Implementei regras de negócio para controle de validade de produtos perecíveis e gestão de categorias através do Prisma ORM.",
      "Construí uma interface moderna e responsiva focada em usabilidade com Shadcn/UI e TailwindCSS, utilizando TanStack Table para manipulação eficiente de grandes volumes de dados.",
      "Stack: React, TypeScript, Next.js, Prisma, SQLite, TailwindCSS, Shadcn/UI, TanStack Table, Recharts.",
    ],
  },
  {
    id: "du-tintas",
    company: "Freelancer - Du Tintas Automotivas",
    role: "Desenvolvedor Frontend",
    period: "Janeiro 2025 - Fev 2025",
    responsibilities: [
      "Desenvolvimento de landing page para comércio físico com foco em conversão.",
      "Interface mobile-first priorizando usabilidade e SEO.",
      "Configuração de hospedagem, domínio e publicação da aplicação.",
      "Melhorias de estrutura que contribuíram para o aumento de CTR da empresa.",
      "Tech Stack: HTML, CSS, Javascript.",
      "Deploy: VPS, Custom Domain.",
    ],
  },
];

export default function ExperienciasPage() {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiences[0]);

  return (
    <div className="bg-background">
      <main className="container mx-auto px-6 py-16 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Minha experiência:
        </h1>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar - Company List */}
          <div className="space-y-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`w-full text-left px-4 py-3 transition-all cursor-pointer text-sm ${
                  selectedExp.id === exp.id
                    ? "bg-primary/10 text-primary border-l-3 border-primary font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content - Experience Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedExp.role}{" "}
                <span className="text-primary">@ {selectedExp.company}</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                {selectedExp.period}
              </p>
            </div>

            <div className="space-y-4">
              {selectedExp.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span>▸</span>
                  <p className="text-foreground leading-relaxed">{resp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
