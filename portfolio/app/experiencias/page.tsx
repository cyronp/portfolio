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
    role: "Estagiário de Desenvolvimento de Software",
    period: "Agosto 2025 - Atual",
    responsibilities: [
      "Desenvolvi aplicações web full stack com React, Typescript e Nodejs, digitalizando e otimizando processos internos, resultando em uma melhora na gestão e rastreabilidade das informações de negócios da companhia.",
      "Eliminei 1 dia semanal de trabalho manual dos técnicos de saneamento ao criar um sistema responsável pela extração, tratamento e envio automatizado de dados de coletas de amostras, integrando a sistemas internos com Python e PostgreSQL.",
      "Implementei APIs REST para integração entre aplicações com Nodejs, garantindo alta performance e baixo tempo de resposta ao lidar com bancos de dados com grandes volumes de informações.",
      "Realizei deploy, manutenção e monitoramento de aplicações em servidores locais utilizando Docker, Nginx e Ubuntu, além de automatizar pipelines de CI/CD, reduzindo erros manuais e tempo de entrega",
      "Liderei a refatoração de interfaces legadas em HTML e CSS para React e TailwindCSS, resultando em um ganho de 30% na velocidade de desenvolvimento por meio da reutilização de componentes",
      "Tech Stack: React, Javascript, Typescript, PHP, Python, Git, TailwindCSS, PostgreSQL, Nodejs, Docker, Ubuntu, Nginx, HTML, CSS."
    ],
  },
  {
    id: "floricultura",
    company: "Floricultura Fleur D'or",
    role: "Desenvolvedor Fullstack",
    period: "Dezembro 2025 - Fevereiro 2026",
    responsibilities: [
      "Desenvolvi uma aplicação web full stack utilizando React, Typescript e Nextjs para a digitalização do controle de estoque e fluxo de vendas de uma floricultura, substituindo processos manuais em papel.",
      "Implementei dashboards de métricas utilizando Prisma e API Routes, permitindo a visualização e atualização em tempo real do desempenho das vendas, horários de pico e margens de lucro, proporcionando uma visualização geral do negócio.",
      "Estruturei a aplicação em um Monorepo utilizando Nodejs e Typescript garantindo a consistência de tipos e facilitando a manutenção e utilização do código no uso local.",
      "Implementei regras de negócio para controle de validade de produtos perecíveis e gestão de categorias através do Prisma ORM.",
      "Construí uma interface moderna e responsiva focada em usabilidade com TailwindCSS, acelerando em até 40% o fluxo de trabalho dos colaboradores.",
      "Tech Stack: Nodejs, React, TypeScript, Next.js, Prisma, SQLite, TailwindCSS, Shadcn/UI, TanStack Table, Recharts",
    ],
  },
  {
    id: "univille",
    company: "Univille",
    role: "Iniciação Científica ",
    period: "Junho 2025 - Janeiro 2026",
    responsibilities: [
      "Título: A GAMIFICAÇÃO COMO ESTRATÉGIA PARA INCENTIVAR A RECICLAGEM",
      "Autor de pesquisa científica, com foco no uso de Tecnologias da Informação para o incentivo a reciclagem. Experiência em análise qualitativa de dados, revisão sistemática de literatura e estudo de mecânicas de engajamento (UX/Gamificação) aplicadas ao contexto escolar e social.",
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
