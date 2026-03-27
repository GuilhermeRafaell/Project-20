import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const radarData = [
  { skill: "Disciplina", atletica: 98, tecnica: 90 },
  { skill: "Consistência", atletica: 94, tecnica: 88 },
  { skill: "Velocidade", atletica: 95, tecnica: 86 },
  { skill: "Estratégia", atletica: 89, tecnica: 84 },
  { skill: "Trabalho em equipe", atletica: 95, tecnica: 91 },
  { skill: "Foco sob pressão", atletica: 90, tecnica: 87 },
];

const chartConfig = {
  atletica: {
    label: "Habilidades Atléticas",
    color: "hsl(210 100% 56%)",
  },
  tecnica: {
    label: "Habilidades Técnicas",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const tools = ["Git", "Docker", "AWS", "Figma", "Jira", "VS Code", "Postman", "Linux"];

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

        <Card className={`glass glow ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">Radar de Competências</h3>
            </div>

            <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[380px] w-full max-w-[560px]">
              <RadarChart data={radarData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <PolarGrid gridType="circle" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
                <Radar
                  name="Habilidades Atléticas"
                  dataKey="atletica"
                  stroke="var(--color-atletica)"
                  fill="var(--color-atletica)"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
                <Radar
                  name="Habilidades Técnicas"
                  dataKey="tecnica"
                  stroke="var(--color-tecnica)"
                  fill="var(--color-tecnica)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>

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
