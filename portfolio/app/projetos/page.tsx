import { ProjectCard } from "@/components/project-card";

export default function Projetos() {
  return (
    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
      <ProjectCard
        title="Projeto Nome"
        image="https://picsum.photos/400/300"
        impacts={["Impacto 1", "Impacto 2", "Impacto 3"]}
        repoUrl="https://github.com/seu-usuario/seu-repo"
      />
    </div>
  );
}
