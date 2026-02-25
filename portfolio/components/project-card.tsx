import { ConfettiButton } from "@/components/ui/confetti";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface TechStack {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  techStack?: TechStack[];
  repoUrl?: string;
}

export function ProjectCard({
  title,
  image,
  description,
  features,
  techStack,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className="group w-full rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h1 className="text-lg font-bold tracking-tight text-card-foreground">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tecnologias
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <TooltipProvider>
                {techStack.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <div className="p-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={5}>
                      {tech.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-wider">
            Funções Principais
          </span>
        </div>

        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {feature}
            </li>
          ))}
        </ul>

        {repoUrl ? (
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <ConfettiButton className="w-full rounded-lg font-semibold text-sm gap-1.5 mt-2 transition-all duration-200 cursor-pointer">
              Acessar repositório
              <Github className="h-4 w-4" />
            </ConfettiButton>
          </Link>
        ) : (
          <ConfettiButton className="w-full rounded-lg font-semibold text-sm gap-1.5 mt-2 transition-all duration-200 cursor-pointer">
            Acessar repositório
            <Github className="h-4 w-4" />
          </ConfettiButton>
        )}
      </div>
    </div>
  );
}
