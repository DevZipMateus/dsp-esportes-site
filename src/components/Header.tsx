import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (id: string, isLink: boolean = false) => {
    setIsMobileMenuOpen(false);
    
    if (isLink) {
      // Para links de páginas, navega diretamente
      navigate(`/${id}`);
    } else {
      // Para seções, verifica se está na home
      if (location.pathname !== "/") {
        // Se não está na home, navega e depois faz scroll
        navigate("/");
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      } else {
        // Se já está na home, faz scroll direto
        scrollToSection(id);
      }
    }
  };
  const menuItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "about"
  }, {
    label: "Produtos",
    id: "products"
  }, {
    label: "Catálogo",
    id: "catalogo",
    isLink: true
  }, {
    label: "Camisetas",
    id: "camisetas-personalizadas",
    isLink: true
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-elegant" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigation("hero")} 
            className="flex items-center gap-3"
          >
            <img src={logo} alt="DSP ESPORTES Logo" className="h-24 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => handleNavigation(item.id, item.isLink)} 
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" onClick={() => handleNavigation("contact")} className="ml-4">
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden fixed inset-0 top-[96px] z-40">
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <div className="relative bg-card border-t border-border shadow-elegant animate-slide-down">
              <div className="container mx-auto px-4 py-6 space-y-2">
                {menuItems.map(item => (
                  <button 
                    key={item.id} 
                    onClick={() => handleNavigation(item.id, item.isLink)} 
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-accent rounded-lg font-medium transition-all"
                  >
                    {item.label}
                  </button>
                ))}
                <Button variant="hero" onClick={() => handleNavigation("contact")} className="w-full mt-4">
                  Fale conosco
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;