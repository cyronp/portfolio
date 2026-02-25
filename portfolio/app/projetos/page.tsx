import { ProjectCard } from "@/components/project-card";

export default function Projetos() {
  return (
    <div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <ProjectCard
        title="Stock Management"
        image="/stock-management.png"
        description="Sistema fullstack de gestão de estoque, vendas e dashboards estratégicos para uma floricultura local."
        features={[
          "Automatização de processos manuais",
          "Gerenciamento de Estoque",
          "Registros de vendas",
        ]}
        techStack={[
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "Typescript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "Node",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "TailwindCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "Prisma",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          },
        ]}
        repoUrl="https://github.com/cyronp/stock-management-system"
      />
      <ProjectCard
        title="MeAjudAI"
        image="/meajudai.png"
        description="Aplicativo de controle financeiro pessoal com integração da inteligência artificial do Gemini."
        features={[
          "Visualização amigável financeira",
          "Integração com IA",
          "Categorização automática",
        ]}
        techStack={[
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "Typescript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "TailwindCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "Gemini",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
          },
        ]}
        repoUrl="https://github.com/cyronp/MeAjudAI"
      />
      <ProjectCard
        title="TasteNSpeak"
        image="/tastenspeak.png"
        description="Plataforma de avaliação e descoberta de restaurantes e cafés locais, com foco para casais."
        features={[
          "Cadastro de Restaurantes/Cafés",
          "Avaliações e opiniões",
          "Contador de visitas",
        ]}
        techStack={[
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "Typescript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "Node",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "TailwindCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "Supabase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
          },
        ]}
        repoUrl="https://github.com/cyronp/TasteNSpeak"
      />
      <ProjectCard
        title="QuestionMaker"
        image="/questionmaker.png"
        description="Ferramenta de criação automática de flashcards utilizando a inteligência artificial do Gemini."
        features={[
          "Criação de flashcards automatizado",
          "Integração com IA",
          "Persistência do histórico de flashcards",
        ]}
        techStack={[
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          },
          {
            name: "SpringBoot",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          },
          {
            name: "Gemini",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
          },
        ]}
        repoUrl="https://github.com/cyronp/Java-Gemini-QuestionMaker"
      />
      <ProjectCard
        title="ElderlyCare"
        image="/elderlycare.png"
        description="Sistema de gerenciamento para lares de idosos com cadastramento de cuidados e notificações inteligentes de cuidados."
        features={[
          "Gerenciamento de lar de idosos",
          "Notificações de cuidados",
          "Cadastramento de necessidades dos idosos",
        ]}
        techStack={[
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          },
          {
            name: "FastAPI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          },
        ]}
        repoUrl="https://github.com/cyronp/Vivencias-ElderlyCare"
      />
    </div>
  );
}
