import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(31) 98931-1832",
      link: "https://wa.me/5531989311832",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "dsp.vendas@hotmail.com",
      link: "mailto:dsp.vendas@hotmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua dos Tupis, 38",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "8:00 às 18:00",
      link: null,
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "@dspesportes",
      link: "https://instagram.com/dspesportes",
    },
    {
      icon: Facebook,
      name: "dspsports",
      link: "https://facebook.com/dspsports",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e realizar seu projeto esportivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-red transition-all duration-300"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12 animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Siga-nos nas redes sociais</h3>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-muted hover:bg-primary-light rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Card className="border-2 border-primary/20 shadow-red max-w-md mx-auto">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato pelo WhatsApp e receba atendimento personalizado
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/5531989311832">
                    <Phone className="mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
