import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const athleteSkills = [
  { name: "Velocidade", level: 95 },
  { name: "Resistência", level: 85 },
  { name: "Disciplina", level: 98 },
  { name: "Foco sob pressão", level: 90 },
  { name: "Trabalho em equipe", level: 88 },
];

const techSkills = [
  { name: "React / React Native", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Java / Spring Boot", level: 80 },
  { name: "SQL / PostgreSQL", level: 88 },
];

const tools = ["Git", "Docker", "AWS", "Figma", "Jira", "VS Code", "Postman", "Linux"];

function ProgressBar({ value, delay, visible }: { value: number; delay: string; visible: boolean }) {
  return (
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
        style={{ width: visible ? `${value}%` : "0%", transitionDelay: delay }}
      />
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container relative" ref={ref}>
        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Skills & <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className={`text-muted-foreground max-w-xl mx-auto text-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            A disciplina do esporte se reflete na qualidade do código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Athletic Skills */}
          <Card className={`glass glow ${isVisible ? "animate-slide-in-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 space-y-5">
              <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                🏃 Habilidades Atléticas
              </h3>
              {athleteSkills.map((s, i) => (
                <div key={s.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-primary font-medium">{s.level}%</span>
                  </div>
                  <ProgressBar value={s.level} delay={`${0.3 + i * 0.1}s`} visible={isVisible} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tech Skills */}
          <Card className={`glass glow ${isVisible ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 space-y-5">
              <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                💻 Habilidades Técnicas
              </h3>
              {techSkills.map((s, i) => (
                <div key={s.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-primary font-medium">{s.level}%</span>
                  </div>
                  <ProgressBar value={s.level} delay={`${0.3 + i * 0.1}s`} visible={isVisible} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tools */}
        <div className={`mt-8 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <h3 className="font-display text-lg font-semibold mb-4">Ferramentas & Outras Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((t) => (
              <Badge key={t} variant="outline" className="px-4 py-1.5 text-sm border-primary/20 hover:bg-primary/10 transition-colors">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
