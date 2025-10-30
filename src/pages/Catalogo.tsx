import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import catalogo1 from "@/assets/catalogo-1.jpg";
import catalogo2 from "@/assets/catalogo-2.jpg";
import catalogo3 from "@/assets/catalogo-3.jpg";
import catalogo4 from "@/assets/catalogo-4.jpg";
import catalogo5 from "@/assets/catalogo-5.jpg";
import catalogo6 from "@/assets/catalogo-6.jpg";
import catalogo7 from "@/assets/catalogo-7.jpg";
import catalogo8 from "@/assets/catalogo-8.jpg";
import catalogo9 from "@/assets/catalogo-9.jpg";
import catalogo10 from "@/assets/catalogo-10.jpg";
import catalogo11 from "@/assets/catalogo-11.jpg";
import catalogo12 from "@/assets/catalogo-12.jpg";
import catalogo13 from "@/assets/catalogo-13.jpg";
import catalogo14 from "@/assets/catalogo-14.jpg";
import catalogo15 from "@/assets/catalogo-15.jpg";

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-bebas tracking-wider">
              CATÁLOGO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Equipamentos de Proteção - Conheça nossa linha completa
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-slide-up">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo1} 
                      alt="Catálogo de Equipamentos de Proteção - Página 1" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo2} 
                      alt="Catálogo de Equipamentos de Proteção - Página 2" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo3} 
                      alt="Catálogo de Equipamentos de Proteção - Página 3" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo4} 
                      alt="Catálogo de Equipamentos de Proteção - Página 4" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo5} 
                      alt="Catálogo de Equipamentos de Proteção - Página 5" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo6} 
                      alt="Catálogo de Equipamentos de Proteção - Página 6" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo7} 
                      alt="Catálogo de Equipamentos de Proteção - Página 7" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo8} 
                      alt="Catálogo de Equipamentos de Proteção - Página 8" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo9} 
                      alt="Catálogo de Equipamentos de Proteção - Página 9" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo10} 
                      alt="Catálogo de Equipamentos de Proteção - Página 10" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo11} 
                      alt="Catálogo de Equipamentos de Proteção - Página 11" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo12} 
                      alt="Catálogo de Equipamentos de Proteção - Página 12" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo13} 
                      alt="Catálogo de Equipamentos de Proteção - Página 13" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo14} 
                      alt="Catálogo de Equipamentos de Proteção - Página 14" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                    <img 
                      src={catalogo15} 
                      alt="Catálogo de Equipamentos de Proteção - Página 15" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4 h-12 w-12" />
              <CarouselNext className="right-4 h-12 w-12" />
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Quer saber mais sobre nossos produtos? Entre em contato!
            </p>
            <a 
              href="https://wa.me/553134234540" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-all shadow-red text-lg font-medium"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
