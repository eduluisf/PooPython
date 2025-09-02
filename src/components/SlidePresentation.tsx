import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Home, Book, Layers, Shield, Repeat, Laptop } from "lucide-react";

import { IntroSlide } from "./slides/IntroSlide";
import { ClassesObjectsSlide } from "./slides/ClassesObjectsSlide";
import { InheritanceSlide } from "./slides/InheritanceSlide";
import { EncapsulationSlide } from "./slides/EncapsulationSlide";
import { PolymorphismSlide } from "./slides/PolymorphismSlide";
import { ExercisesSlide } from "./slides/ExercisesSlide";

const slides = [
  { 
    id: 'intro', 
    title: 'Introducción a POO', 
    component: IntroSlide,
    icon: Home 
  },
  { 
    id: 'classes', 
    title: 'Clases y Objetos', 
    component: ClassesObjectsSlide,
    icon: Book 
  },
  { 
    id: 'inheritance', 
    title: 'Herencia', 
    component: InheritanceSlide,
    icon: Layers 
  },
  { 
    id: 'encapsulation', 
    title: 'Encapsulación', 
    component: EncapsulationSlide,
    icon: Shield 
  },
  { 
    id: 'polymorphism', 
    title: 'Polimorfismo', 
    component: PolymorphismSlide,
    icon: Repeat 
  },
  { 
    id: 'exercises', 
    title: 'Ejercicios Prácticos', 
    component: ExercisesSlide,
    icon: Laptop 
  }
];

export function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (currentSlide > 0) prevSlide();
          break;
        case 'ArrowRight':
          if (currentSlide < slides.length - 1) nextSlide();
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(slides.length - 1);
          break;
        default:
          // Números 1-6 para ir directamente a slides
          const slideNumber = parseInt(event.key);
          if (slideNumber >= 1 && slideNumber <= slides.length) {
            setCurrentSlide(slideNumber - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header con navegación de slides */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🐍</span>
                </div>
                <h1 className="text-xl">POO con Python</h1>
              </div>
              <div className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} de {slides.length}
              </div>
            </div>

            {/* Navegación por tabs */}
            <div className="flex flex-wrap gap-1 mb-4">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <Button
                    key={slide.id}
                    variant={currentSlide === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToSlide(index)}
                    className="flex items-center gap-2 text-xs"
                  >
                    <Icon className="w-3 h-3" />
                    <span className="hidden sm:inline">{slide.title}</span>
                    <span className="sm:hidden">{index + 1}</span>
                  </Button>
                );
              })}
            </div>

            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contenido del slide actual */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <CurrentSlideComponent />
          </CardContent>
        </Card>

        {/* Controles de navegación */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Atajos de teclado */}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          <div>Usa las teclas ← → para navegar | Home/End para ir al inicio/final</div>
          <div>Números 1-6 para ir directamente a cada slide</div>
        </div>
      </div>
    </div>
  );
}