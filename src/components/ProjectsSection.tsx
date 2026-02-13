import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Filter = "all" | "pessoal" | "profissional";

const projects = [
  {
    title: "TrackMyRun",
    description: "App para registro de treinos e corridas, com métricas de desempenho e histórico de evolução.",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "pessoal" as const,
    icon: "🏃",
  },
  {
    title: "Sprint Planner",
    description: "Ferramenta de planejamento de sprints para equipes ágeis com Kanban e relatórios visuais.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "profissional" as const,
    icon: "📋",
  },
  {
    title: "Nutrition Tracker",
    description: "Controle nutricional personalizado para atletas, com cálculo de macros e planos alimentares.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    category: "pessoal" as const,
    icon: "🥗",
  },
  {
    title: "DevOps Dashboard",
    description: "Painel centralizado para monitoramento de deploys, pipelines CI/CD e métricas de infraestrutura.",
    tags: ["Vue.js", "Docker", "AWS"],
    category: "profissional" as const,
    icon: "⚙️",
  },
  {
    title: "Athlete Portfolio",
    description: "Este portfólio! Landing page moderna para apresentar conquistas e projetos.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    category: "pessoal" as const,
    icon: "🌐",
  },
  {
    title: "HR Management System",
    description: "Sistema completo de gestão de RH com folha de pagamento, férias e avaliações.",
    tags: ["Angular", "Java", "Spring Boot"],
    category: "profissional" as const,
    icon: "👥",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="container" ref={ref}>
        <div className="text-center mb-10">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Projetos de <span className="gradient-text">Software</span>
          </h2>
          <p className={`text-muted-foreground max-w-xl mx-auto text-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Soluções que constroem pontes entre o esporte e a tecnologia.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex justify-center gap-2 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {([["all", "Todos"], ["pessoal", "Pessoais"], ["profissional", "Profissionais"]] as const).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              className={filter === key ? "gradient-bg text-primary-foreground" : "border-primary/30 hover:bg-primary/10"}
              onClick={() => setFilter(key)}
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Card
              key={p.title}
              className={`glass group hover:glow transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-border text-muted-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1.5">
                    <Github className="h-4 w-4" /> Código
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1.5">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
