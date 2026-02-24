import { ConfettiButton } from "@/components/ui/confetti";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Projetos() {
  return (
    <div className="container flex justify-center items-center">
      <div className="group w-72 rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src="https://picsum.photos/400/300"
            alt="Projeto Nome"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          <h1 className="text-lg font-bold tracking-tight text-card-foreground">
            Projeto Nome
          </h1>

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Impactos
            </span>
          </div>

          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              Impacto 1
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              Impacto 2
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              Impacto 3
            </li>
          </ul>

          <ConfettiButton className="w-full rounded-lg font-semibold text-sm gap-1.5 mt-2 transition-all duration-200">
            Mais Informações
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </ConfettiButton>
        </div>
      </div>
    </div>
  );
}
