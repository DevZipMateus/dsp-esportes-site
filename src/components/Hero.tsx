import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const Hero = () => {
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
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background pt-24 md:pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-wider font-bebas">
            DSP ESPORTES
          </h1>
          <h2 className="text-2xl mb-8 font-light text-stone-950 md:text-3xl">
            Mais que produtos, parceiros de treino
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-zinc-950">
            Uniformes esportivos personalizados e artigos de qualidade há mais de 20 anos. 
            Atendimento especializado para atletas profissionais e amadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
              <MessageCircle className="mr-2" />
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
          }} className="text-lg px-8 py-6">
              Ver produtos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;