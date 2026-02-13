import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Trophy, Code } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Particles background */}
      <ParticlesBackground />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center space-y-8">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Badge className="glass text-foreground px-4 py-1.5 text-sm gap-2">
            🏃 Atletismo
          </Badge>
          <Badge className="glass text-foreground px-4 py-1.5 text-sm gap-2">
            🏈 Flag Football
          </Badge>
          <Badge className="glass text-foreground px-4 py-1.5 text-sm gap-2">
            💻 Analista de Sistemas
          </Badge>
        </div>

        {/* Main heading */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Velocidade na pista, Inteligência em campo
            <br />
            <span className="gradient-text">precisão no código.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atleta de Atletismo , Flag Football e desenvolvedor de software. Unindo disciplina esportiva 
            com excelência técnica para criar soluções que fazem a diferença.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Button
            size="lg"
            className="gradient-bg text-primary-foreground font-semibold gap-2 glow"
            onClick={() => scrollTo("#conquistas")}
          >
            <Trophy className="h-4 w-4" />
            Ver Conquistas
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 gap-2"
            onClick={() => scrollTo("#projetos")}
          >
            <Code className="h-4 w-4" />
            Ver Projetos
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up pt-12" style={{ animationDelay: "0.7s" }}>
          <button
            onClick={() => scrollTo("#sobre")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
