import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import dsp1 from "@/assets/dsp-1.jpg";
import dsp2 from "@/assets/dsp-2.jpg";
import dsp3 from "@/assets/dsp-3.jpg";
import dsp4 from "@/assets/dsp-4.jpg";
import dsp5 from "@/assets/dsp-5.jpg";
import dsp6 from "@/assets/dsp-6.jpg";
import dsp7 from "@/assets/dsp-7.jpg";
import dsp8 from "@/assets/dsp-8.jpg";
import dsp9 from "@/assets/dsp-9.jpg";
import dsp10 from "@/assets/dsp-10.jpg";
import dsp11 from "@/assets/dsp-11.jpg";
import dsp12 from "@/assets/dsp-12.jpg";
import dsp13 from "@/assets/dsp-13.jpg";
import dsp14 from "@/assets/dsp-14.jpg";
import dsp15 from "@/assets/dsp-15.jpg";
import dsp16 from "@/assets/dsp-16.jpg";
import dsp17 from "@/assets/dsp-17.jpg";
import dsp18 from "@/assets/dsp-18.jpg";
import dsp19 from "@/assets/dsp-19.jpg";
import dsp20 from "@/assets/dsp-20.jpg";
import dsp21 from "@/assets/dsp-21.jpg";
import dsp22 from "@/assets/dsp-22.jpg";
import dsp23 from "@/assets/dsp-23.jpg";
import dsp24 from "@/assets/dsp-24.jpg";

const CamisasDspPro = () => {
  const camisas = [
    { id: 1, src: dsp1, alt: "Uniforme DSP Pró - Modelo Marinho Royal Branco Laranja" },
    { id: 2, src: dsp2, alt: "Uniforme DSP Pró - Modelo Branco Marinho Celeste" },
    { id: 3, src: dsp3, alt: "Uniforme DSP Pró - Modelo Camuflado Preto" },
    { id: 4, src: dsp4, alt: "Uniforme DSP Pró - Modelo Amarelo Preto" },
    { id: 5, src: dsp5, alt: "Uniforme DSP Pró - Modelo Azul Celeste Preto Branco" },
    { id: 6, src: dsp6, alt: "Uniforme DSP Pró - Modelo Preto Branco Dourado" },
    { id: 7, src: dsp7, alt: "Uniforme DSP Pró - Modelo Grena Preto" },
    { id: 8, src: dsp8, alt: "Uniforme DSP Pró - Modelo Camuflado Vermelho" },
    { id: 9, src: dsp9, alt: "Uniforme DSP Pró - Modelo Dourado Branco Preto" },
    { id: 10, src: dsp10, alt: "Uniforme DSP Pró - Modelo Preto Dourado" },
    { id: 11, src: dsp11, alt: "Uniforme DSP Pró - Modelo Verde Escuro Dourado Preto" },
    { id: 12, src: dsp12, alt: "Uniforme DSP Pró - Modelo Amarelo Vermelho Preto" },
    { id: 13, src: dsp13, alt: "Uniforme DSP Pró - Modelo Grena Branco" },
    { id: 14, src: dsp14, alt: "Uniforme DSP Pró - Modelo Amarelo Preto" },
    { id: 15, src: dsp15, alt: "Uniforme DSP Pró - Modelo Azul Royal Amarelo Branco" },
    { id: 16, src: dsp16, alt: "Uniforme DSP Pró - Modelo Vermelho Verde Amarelo" },
    { id: 17, src: dsp17, alt: "Uniforme DSP Pró - Modelo Vermelho Branco" },
    { id: 18, src: dsp18, alt: "Uniforme DSP Pró - Modelo Vermelho Preto" },
    { id: 19, src: dsp19, alt: "Uniforme DSP Pró - Modelo Vermelho Branco Preto" },
    { id: 20, src: dsp20, alt: "Uniforme DSP Pró - Modelo Preto Vermelho Verde" },
    { id: 21, src: dsp21, alt: "Uniforme DSP Pró - Modelo Verde com Textura" },
    { id: 22, src: dsp22, alt: "Uniforme DSP Pró - Modelo Azul Marinho Degradê" },
    { id: 23, src: dsp23, alt: "Uniforme DSP Pró - Modelo Azul Branco Degradê" },
    { id: 24, src: dsp24, alt: "Uniforme DSP Pró - Modelo Azul Royal Marmorizado" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-bebas tracking-wider">
              CAMISAS DSP PRÓ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Linha premium de uniformes esportivos com design profissional para seu time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-slide-up">
            {camisas.map((camisa) => (
              <div 
                key={camisa.id}
                className="bg-card rounded-lg shadow-elegant overflow-hidden hover:shadow-red transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-background flex items-center justify-center p-6" style={{ height: "280px" }}>
                  <img 
                    src={camisa.src} 
                    alt={camisa.alt}
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
              QUALIDADE PROFISSIONAL
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa linha DSP Pró oferece uniformes de alta performance com materiais de primeira qualidade. 
              Entre em contato para um orçamento personalizado!
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

export default CamisasDspPro;
