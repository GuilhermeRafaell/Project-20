import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  { year: "2025", event: "Summer Bowl", result: "🥇 1° Lugar", modality: "Flag", highlight: true },
  { year: "2025", event: "Paulista de Flag", result: "Weilers", modality: "Flag", highlight: false },
  { year: "2025", event: "1ª Participação Copa Brasil", result: "Gators", modality: "Flag", highlight: true },
  { year: "2024", event: "Campeonato Mineiro de Flag", result: "🥈 2° Lugar", modality: "Flag", highlight: true },
  { year: "2023", event: "Olimpíada UFU", result: "🥉 3° Lugar", modality: "Revezamento 4x100m", highlight: false },
];

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="conquistas" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container relative" ref={ref}>
        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Conquistas no <span className="gradient-text">Atletismo e Flag Football</span>
          </h2>
          <p className={`text-muted-foreground max-w-xl mx-auto text-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Cada medalha carrega dias dedicação, suor e consistência. Mesmo que poucas conquistas sejam oficialmente registradas, cada treino, cada prova e cada vitória pessoal é um marco na minha jornada esportiva.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {achievements.map((a) => (
              <div
                key={`${a.year}-${a.event}`}
                className={`relative flex flex-col sm:flex-row items-start gap-4 ${achievements.indexOf(a) % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 + achievements.indexOf(a) * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-background z-10" />

                {/* Spacer */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <Card className={`w-full sm:w-1/2 glass group hover:glow transition-all duration-300 hover:scale-[1.02] ${a.highlight ? "border-primary/30" : ""}`}>
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <Badge variant="outline" className="text-primary border-primary/30 shrink-0">
                        {a.year}
                      </Badge>
                      <span className="text-xl">{a.result.split(" ")[0]}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg">{a.event}</h3>
                    <p className="text-sm mt-1">
                      <span 
                        className={a.result === "Gators" || a.result === "Weilers" ? "font-semibold" : "text-muted-foreground"}
                        style={(() => {
                          if (a.result === "Gators") return { color: "#01dbcd" };
                          if (a.result === "Weilers") return { color: "#ffb200" };
                          return undefined;
                        })()}
                      >
                        {a.result}
                      </span>
                    </p>
                    <Badge className="mt-3 gradient-bg text-primary-foreground text-xs">{a.modality}</Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
