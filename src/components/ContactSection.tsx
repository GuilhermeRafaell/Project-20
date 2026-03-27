import { FormEvent, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon, InstagramIcon, Send } from "lucide-react";

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/guilherme-rafael-a08b69230/" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/GuilhermeRafaell?tab=repositories" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/guilherm6/" },
];

const WHATSAPP_NUMBER = "5534988720751";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanMessage = message.trim();

    if (!cleanMessage) {
      return;
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    const personalizedMessage = [
      "Olá Guilherme! Tudo bem?",
      cleanName ? `Meu nome é ${cleanName}.` : "",
      cleanEmail ? `Meu email é ${cleanEmail}.` : "",
      "",
      "Mensagem:",
      cleanMessage,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(personalizedMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Bora <span className="gradient-text">Conversar?</span>
          </h2>
          <p className={`text-muted-foreground text-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Tem um projeto em mente ou quer bater um papo? Manda mensagem!
          </p>
        </div>

        <Card className={`glass glow ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              <Button type="submit" className="w-full gradient-bg text-primary-foreground font-semibold gap-2 glow">
                <Send className="h-4 w-4" /> Enviar Mensagem
              </Button>
            </form>

            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-border/50">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
