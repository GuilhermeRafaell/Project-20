import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "conquistas", label: "Conquistas" },
  { id: "galeria", label: "Galeria" },
  { id: "projetos", label: "Projetos" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
];

export default function ActiveSectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontrar a entrada mais visível
        let mostVisible = entries[0];
        let maxRatio = entries[0]?.intersectionRatio || 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry;
          }
        });

        // Atualizar para a seção mais visível que está intersectando
        if (mostVisible && mostVisible.isIntersecting) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-20% 0px -30% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={`Ir para ${section.label}`}
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "gradient-bg scale-125 shadow-lg"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
          {/* Label tooltip */}
          <span
            className={`absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md glass text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
              activeSection === section.id ? "text-primary font-semibold" : "text-muted-foreground"
            }`}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}
