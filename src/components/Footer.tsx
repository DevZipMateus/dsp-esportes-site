import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">DSP ESPORTES</h3>
            <p className="text-sm opacity-90">
              Mais que produtos, parceiros de treino
            </p>
            <p className="text-sm opacity-80">
              Uniformes esportivos personalizados e artigos esportivos de qualidade há mais de 20 anos.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="https://wa.me/5531989311832" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (31) 98931-1832
              </a>
              <a 
                href="mailto:dsp.vendas@hotmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                dsp.vendas@hotmail.com
              </a>
              <div className="flex items-center gap-2 opacity-80">
                <MapPin className="h-4 w-4" />
                Rua dos Tupis, 38
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Clock className="h-4 w-4" />
                Seg-Sex: 8:00 às 18:00
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Redes sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/dspesportes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/dspsports"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} DSP ESPORTES. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 57.394.111/0001-47</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
