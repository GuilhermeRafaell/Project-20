import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Timer, Medal, Briefcase, Rocket } from "lucide-react";

const metrics = [
  { icon: Timer, value: "8+", label: "Anos no Atletismo", delay: "0s" },
  { icon: Medal, value: "25+", label: "Provas Disputadas", delay: "0.1s" },
  { icon: Briefcase, value: "5+", label: "Anos em TI", delay: "0.2s" },
  { icon: Rocket, value: "15+", label: "Projetos Entregues", delay: "0.3s" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            Desde cedo divido minha vida entre a pista de atletismo e a tela do computador. 
            A disciplina do esporte me ensinou foco e resiliência — qualidades que aplico diariamente 
            na criação de software. Cada sprint na pista me inspira a entregar código limpo e performático, 
            e cada projeto me dá a mesma satisfação de cruzar a linha de chegada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <Card
              key={i}
              className={`glass text-center glow group hover:scale-105 transition-transform duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: m.delay }}
            >
              <CardContent className="pt-6 pb-6 space-y-2">
                <m.icon className="h-8 w-8 mx-auto text-primary group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
