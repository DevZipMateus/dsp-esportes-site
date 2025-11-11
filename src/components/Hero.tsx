import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import heroFutebol1 from "@/assets/hero-futebol-1.jpg";
import heroFutebol2 from "@/assets/hero-futebol-2.jpg";
import heroBasquete from "@/assets/hero-basquete.jpg";
import heroVolei from "@/assets/hero-volei.jpg";
import heroCorrida from "@/assets/hero-corrida.jpg";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    heroFutebol1,
    heroFutebol2,
    heroBasquete,
    heroVolei,
    heroCorrida,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background pt-24 md:pt-20 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 0.3 : 0,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="sr-only">DSP ESPORTES - Uniformes esportivos personalizados</h1>
          <img src={logo} alt="DSP ESPORTES Logo" className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto mx-auto mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-light text-stone-950">
            Mais que produtos, parceiros de treino
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-zinc-950 px-4 sm:px-0">
            Uniformes esportivos personalizados e artigos de qualidade há mais de 20 anos. 
            Atendimento especializado para atletas profissionais e amadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Entre em contato
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
            const element = document.getElementById("products");
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }} className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Ver produtos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;