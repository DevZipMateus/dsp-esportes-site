import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import camiseta1 from "@/assets/camiseta-1.jpg";
import camiseta2 from "@/assets/camiseta-2.jpg";
import camiseta3 from "@/assets/camiseta-3.jpg";
import camiseta4 from "@/assets/camiseta-4.jpg";
import camiseta5 from "@/assets/camiseta-5.jpg";
import camiseta6 from "@/assets/camiseta-6.jpg";

const CamisetasPersonalizadas = () => {
  const camisetas = [
    { id: 1, src: camiseta1, alt: "Uniforme Esportivo Personalizado - Modelo 1" },
    { id: 2, src: camiseta2, alt: "Uniforme Esportivo Personalizado - Modelo 2" },
    { id: 3, src: camiseta3, alt: "Uniforme Esportivo Personalizado - Modelo 3" },
    { id: 4, src: camiseta4, alt: "Uniforme Esportivo Personalizado - Modelo 4" },
    { id: 5, src: camiseta5, alt: "Uniforme Esportivo Personalizado - Modelo 5" },
    { id: 6, src: camiseta6, alt: "Uniforme Esportivo Personalizado - Modelo 6" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-bebas tracking-wider">
              CAMISETAS PERSONALIZADAS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uniformes esportivos exclusivos com design personalizado para seu time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-slide-up">
            {camisetas.map((camiseta) => (
              <div 
                key={camiseta.id}
                className="bg-card rounded-lg shadow-elegant overflow-hidden hover:shadow-red transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-background flex items-center justify-center p-6" style={{ height: "280px" }}>
                  <img 
                    src={camiseta.src} 
                    alt={camiseta.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <a 
                    href="https://wa.me/553134234540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover font-medium transition-colors underline"
                  >
                    Mais informações, clique aqui
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-card rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-primary mb-4 font-bebas">
              PERSONALIZE SEU UNIFORME
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Crie uniformes exclusivos para seu time com nossos designs personalizados. 
              Entre em contato para um orçamento sem compromisso!
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

export default CamisetasPersonalizadas;
