import { Shirt, ShoppingBag, Dribbble, Backpack } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Shirt,
      title: "Uniformes personalizados",
      description: "Crie uniformes exclusivos com sua identidade. Tecnologia de sublimação de alta qualidade, tecidos respiráveis e design personalizado para seu time ou evento.",
      features: ["Sublimação profissional", "Tecidos premium", "Design exclusivo"],
    },
    {
      icon: Dribbble,
      title: "Bolas esportivas",
      description: "Ampla variedade de bolas para todas as modalidades. Produtos oficiais e certificados para treinos e competições profissionais.",
      features: ["Diversas modalidades", "Qualidade certificada", "Uso profissional"],
    },
    {
      icon: Backpack,
      title: "Bolsas e mochilas",
      description: "Bolsas e mochilas esportivas resistentes e funcionais. Compartimentos especiais, materiais duráveis e design ergonômico.",
      features: ["Alta durabilidade", "Design funcional", "Múltiplos compartimentos"],
    },
    {
      icon: ShoppingBag,
      title: "Acessórios esportivos",
      description: "Linha completa de acessórios para complementar seu equipamento. Produtos de alta qualidade para todas as necessidades esportivas.",
      features: ["Grande variedade", "Qualidade garantida", "Melhor custo-benefício"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Nossos produtos
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Equipamentos e acessórios de alta qualidade para atletas de todos os níveis
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-slide-up px-4">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-red transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-light rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <product.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{product.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Atendimento especializado de uma equipe que entende de esporte
            </p>
            <a
              href="https://wa.me/5531989311832"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary-hover rounded-lg font-semibold shadow-red transition-smooth"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
