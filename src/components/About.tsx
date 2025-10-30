import { Target, Award, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada produto",
    },
    {
      icon: Heart,
      title: "Paixão pelo esporte",
      description: "Vivemos e respiramos esporte todos os dias",
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Tecnologia de ponta em todos os produtos",
    },
    {
      icon: Target,
      title: "Integridade",
      description: "Respeito e transparência com nossos clientes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Sobre nós
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Desde 2005, nos dedicamos a fornecer o melhor em artigos esportivos para atletas de todos os níveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 animate-slide-up px-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Nossa história</h3>
              <p className="text-muted-foreground mb-4">
                Nascida da paixão pelo esporte, a DSP ESPORTES surgiu para preencher a lacuna no mercado 
                com produtos de qualidade e um atendimento que realmente entende as necessidades de cada cliente.
              </p>
              <p className="text-muted-foreground">
                Com mais de 20 anos de experiência, somos especialistas em uniformes esportivos personalizados 
                e acessórios produzidos com materiais de alta qualidade e tecnologia de ponta, garantindo 
                durabilidade e eficiência em cada item.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Nosso compromisso</h3>
              <p className="text-muted-foreground mb-4">
                Ser a líder e mais confiável marca no mercado, inspirando um estilo de vida saudável e ativo.
              </p>
              <p className="text-muted-foreground">
                Fornecemos equipamentos e acessórios esportivos de qualidade para ajudar atletas de todas 
                as categorias amadoras e profissionais a alcançarem seus objetivos. Valorizamos a 
                personalização, permitindo que você crie uniformes e acessórios de acordo com suas 
                preferências e necessidades.
              </p>
            </div>
          </div>

          <div className="mb-8 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-10">Nossos valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-scale-in">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-red transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
