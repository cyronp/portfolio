import { ConfettiButton } from "@/components/ui/confetti";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  impacts: string[];
  repoUrl?: string;
}

export function ProjectCard({
  title,
  image,
  impacts,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className="group w-72 md:w-96 rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h1 className="text-lg font-bold tracking-tight text-card-foreground">
          {title}
        </h1>

        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-wider">
            Impactos
          </span>
        </div>

        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {impacts.map((impact, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {impact}
            </li>
          ))}
        </ul>

        {repoUrl ? (
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <ConfettiButton className="w-full rounded-lg font-semibold text-sm gap-1.5 mt-2 transition-all duration-200 cursor-pointer">
              Mais Informações
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ConfettiButton>
          </Link>
        ) : (
          <ConfettiButton className="w-full rounded-lg font-semibold text-sm gap-1.5 mt-2 transition-all duration-200 cursor-pointer">
            Mais Informações
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </ConfettiButton>
        )}
      </div>
    </div>
  );
}
