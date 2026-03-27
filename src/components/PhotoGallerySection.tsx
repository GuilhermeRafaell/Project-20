import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

type PhotoCategory = "all" | "atletismo" | "flag" | "podium";

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  category: "atletismo" | "flag" | "podium";
  date: string;
  location: string;
  achievement?: string;
}

// Array de fotos - substitua com suas fotos reais
const photos: Photo[] = [
  {
    id: 1,
    src: "/fotos/SummerBowlSaoCarlos.jpg",
    title: "Summer Bowl 2025",
    description: "Conquista do 1° lugar no Summer Bowl",
    category: "podium",
    date: "8 Novembro 2025",
    location: "São Carlos, SP",
    achievement: "🥇 1° Lugar"
  },
  {
    id: 2,
    src: "/fotos/treinoVelocidade.jpg",
    title: "Treino de Velocidade",
    description: "Sessão de treino focada em explosão e velocidade",
    category: "atletismo",
    date: "19 Janeiro 2025",
    location: "Leme, SP"
  },
  {
    id: 3,
    src: "/fotos/IMG_4980.JPG",
    title: "Flag Football - Gators",
    description: "Jogo decisivo da Copa Brasil com os Gators",
    category: "flag",
    date: "19 Julho 2025",
    location: "CTT - São Paulo, DF"
  },
  {
    id: 4,
    src: "/fotos/MineirodeFlag2024.jpg",
    title: "Campeonato Mineiro",
    description: "2° lugar no Campeonato Mineiro de Flag",
    category: "podium",
    date: "15 Dezembro 2024",
    location: "Monte Santo De Minas, MG",
    achievement: "🥈 2° Lugar"
  },
  {
    id: 5,
    src: "/fotos/DSC_9516.JPG",
    title: "Largada dos 100m",
    description: "Momento da largada na prova dos 100m rasos",
    category: "atletismo",
    date: "29 Setembro 2024",
    location: "Uberlândia, MG"
  },
  {
    id: 6,
    src: "/fotos/wielers.jpg",
    title: "Time Weilers",
    description: "Equipe Weilers no Paulista de Flag",
    category: "flag",
    date: "25 Maio 2025",
    location: "Sorocaba, SP"
  },
  {
    id: 7,
    src: "/fotos/PodioOlimpiadasUFU2023.jpg",
    title: "Olimpíada UFU",
    description: "3° lugar no revezamento 4x100m",
    category: "podium",
    date: "29 Setembro 2023",
    location: "UFU - Uberlândia",
    achievement: "🥉 3° Lugar"
  },
  {
    id: 8,
    src: "/fotos/57010.jpg",
    title: "Aquecimento Pré-Prova",
    description: "Rotina de aquecimento antes da competição",
    category: "atletismo",
    date: "11 Maio 2025",
    location: "Pista Sesi Gravatas"
  },
  {
    id: 9,
    src: "/fotos/interceptacao2024.jpg",
    title: "Interceptação",
    description: "Momento decisivo do jogo com interceptação",
    category: "flag",
    date: "28 Julho 2024",
    location: "Campo Ribeirao Preto, SP"
  }
];

export default function PhotoGallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<PhotoCategory>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter(p => p.category === filter);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setLightboxIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const newIndex = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const prevPhoto = () => {
    const newIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const categoryLabels = {
    all: "Todas",
    atletismo: "Atletismo",
    flag: "Flag Football",
    podium: "Pódios"
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03] pointer-events-none" />
      
      <div className="container relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Galeria de <span className="gradient-text">Conquistas</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`} 
             style={{ animationDelay: "0.1s" }}>
            Momentos que marcaram minha jornada esportiva: treinos, competições e vitórias.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} 
             style={{ animationDelay: "0.2s" }}>
          {(Object.keys(categoryLabels) as PhotoCategory[]).map((key) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              className={filter === key 
                ? "gradient-bg text-primary-foreground" 
                : "border-primary/30 hover:bg-primary/10"}
              onClick={() => setFilter(key)}
            >
              {categoryLabels[key]}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, i) => (
            <Card
              key={photo.id}
              className={`group relative overflow-hidden glass cursor-pointer hover:glow transition-all duration-300 hover:scale-[1.02] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.05}s` }}
              onClick={() => openLightbox(photo)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.achievement && (
                      <Badge className="gradient-bg text-primary-foreground w-fit">
                        {photo.achievement}
                      </Badge>
                    )}
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {photo.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {photo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhuma foto encontrada nesta categoria.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-xl border-primary/20">
          <DialogTitle className="sr-only">
            {selectedPhoto?.title}
          </DialogTitle>
          
          {selectedPhoto && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background transition-all hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background transition-all hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-6 space-y-3 border-t border-border/50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {selectedPhoto.achievement && (
                      <Badge className="gradient-bg text-primary-foreground mb-2">
                        {selectedPhoto.achievement}
                      </Badge>
                    )}
                    <h3 className="font-display font-bold text-2xl">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {selectedPhoto.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {selectedPhoto.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {selectedPhoto.location}
                  </span>
                </div>

                {/* Counter */}
                <div className="text-center text-sm text-muted-foreground pt-2">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
