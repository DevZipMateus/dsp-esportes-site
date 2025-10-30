import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import camiseta1 from "@/assets/camiseta-1.jpg";
import camiseta2 from "@/assets/camiseta-2.jpg";
import camiseta3 from "@/assets/camiseta-3.jpg";
import camiseta4 from "@/assets/camiseta-4.jpg";
import camiseta5 from "@/assets/camiseta-5.jpg";
import camiseta6 from "@/assets/camiseta-6.jpg";
import camiseta7 from "@/assets/camiseta-7.jpg";
import camiseta8 from "@/assets/camiseta-8.jpg";
import camiseta9 from "@/assets/camiseta-9.jpg";
import camiseta10 from "@/assets/camiseta-10.jpg";
import camiseta11 from "@/assets/camiseta-11.jpg";
import camiseta12 from "@/assets/camiseta-12.jpg";
import camiseta13 from "@/assets/camiseta-13.jpg";
import camiseta14 from "@/assets/camiseta-14.jpg";
import camiseta15 from "@/assets/camiseta-15.jpg";
import camiseta16 from "@/assets/camiseta-16.jpg";
import camiseta17 from "@/assets/camiseta-17.jpg";
import camiseta18 from "@/assets/camiseta-18.jpg";
import camiseta19 from "@/assets/camiseta-19.jpg";
import camiseta20 from "@/assets/camiseta-20.jpg";
import camiseta21 from "@/assets/camiseta-21.jpg";
import camiseta22 from "@/assets/camiseta-22.jpg";
import camiseta23 from "@/assets/camiseta-23.jpg";
import camiseta24 from "@/assets/camiseta-24.jpg";
import camiseta25 from "@/assets/camiseta-25.jpg";
import camiseta26 from "@/assets/camiseta-26.jpg";
import camiseta27 from "@/assets/camiseta-27.jpg";
import camiseta28 from "@/assets/camiseta-28.jpg";
import camiseta29 from "@/assets/camiseta-29.jpg";
import camiseta30 from "@/assets/camiseta-30.jpg";
import camiseta31 from "@/assets/camiseta-31.jpg";
import camiseta32 from "@/assets/camiseta-32.jpg";
import camiseta33 from "@/assets/camiseta-33.jpg";

const CamisetasPersonalizadas = () => {
  const camisetas = [
    { id: 1, src: camiseta1, alt: "Uniforme Esportivo Personalizado - Modelo 1" },
    { id: 2, src: camiseta2, alt: "Uniforme Esportivo Personalizado - Modelo 2" },
    { id: 3, src: camiseta3, alt: "Uniforme Esportivo Personalizado - Modelo 3" },
    { id: 4, src: camiseta4, alt: "Uniforme Esportivo Personalizado - Modelo 4" },
    { id: 5, src: camiseta5, alt: "Uniforme Esportivo Personalizado - Modelo 5" },
    { id: 6, src: camiseta6, alt: "Uniforme Esportivo Personalizado - Modelo 6" },
    { id: 7, src: camiseta7, alt: "Uniforme Esportivo Personalizado - Modelo 7" },
    { id: 8, src: camiseta8, alt: "Uniforme Esportivo Personalizado - Modelo 8" },
    { id: 9, src: camiseta9, alt: "Uniforme Esportivo Personalizado - Modelo 9" },
    { id: 10, src: camiseta10, alt: "Uniforme Esportivo Personalizado - Modelo 10" },
    { id: 11, src: camiseta11, alt: "Uniforme Esportivo Personalizado - Modelo 11" },
    { id: 12, src: camiseta12, alt: "Uniforme Esportivo Personalizado - Modelo 12" },
    { id: 13, src: camiseta13, alt: "Uniforme Esportivo Personalizado - Modelo 13" },
    { id: 14, src: camiseta14, alt: "Uniforme Esportivo Personalizado - Modelo 14" },
    { id: 15, src: camiseta15, alt: "Uniforme Esportivo Personalizado - Modelo 15" },
    { id: 16, src: camiseta16, alt: "Uniforme Esportivo Personalizado - Modelo 16" },
    { id: 17, src: camiseta17, alt: "Uniforme Esportivo Personalizado - Modelo 17" },
    { id: 18, src: camiseta18, alt: "Uniforme Esportivo Personalizado - Modelo 18" },
    { id: 19, src: camiseta19, alt: "Uniforme Esportivo Personalizado - Modelo 19" },
    { id: 20, src: camiseta20, alt: "Uniforme Esportivo Personalizado - Modelo 20" },
    { id: 21, src: camiseta21, alt: "Uniforme Esportivo Personalizado - Modelo 21" },
    { id: 22, src: camiseta22, alt: "Uniforme Esportivo Personalizado - Modelo 22" },
    { id: 23, src: camiseta23, alt: "Uniforme Esportivo Personalizado - Modelo 23" },
    { id: 24, src: camiseta24, alt: "Uniforme Esportivo Personalizado - Modelo 24" },
    { id: 25, src: camiseta25, alt: "Uniforme Esportivo Personalizado - Modelo 25" },
    { id: 26, src: camiseta26, alt: "Uniforme Esportivo Personalizado - Modelo 26" },
    { id: 27, src: camiseta27, alt: "Uniforme Esportivo Personalizado - Modelo 27" },
    { id: 28, src: camiseta28, alt: "Uniforme Esportivo Personalizado - Modelo 28" },
    { id: 29, src: camiseta29, alt: "Uniforme Esportivo Personalizado - Modelo 29" },
    { id: 30, src: camiseta30, alt: "Uniforme Esportivo Personalizado - Modelo 30" },
    { id: 31, src: camiseta31, alt: "Uniforme Esportivo Personalizado - Modelo 31" },
    { id: 32, src: camiseta32, alt: "Uniforme Esportivo Personalizado - Modelo 32" },
    { id: 33, src: camiseta33, alt: "Uniforme Esportivo Personalizado - Modelo 33" },
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
