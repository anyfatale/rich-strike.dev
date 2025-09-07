import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
            <Crown className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Rich-strike</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Funkcje
          </a>
          <a href="#materials" className="text-muted-foreground hover:text-foreground transition-smooth">
            Materiały
          </a>
          <a href="#tiers" className="text-muted-foreground hover:text-foreground transition-smooth">
            Poziomy
          </a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth">
            Społeczność
          </a>
          <a href="#founder" className="text-muted-foreground hover:text-foreground transition-smooth">
            O Kamilu
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-smooth">
            Opinie
          </a>
          <a href="#success" className="text-muted-foreground hover:text-foreground transition-smooth">
            Sukces
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Zaloguj się</Button>
          <Button variant="premium">Rozpocznij za 99 zł</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Funkcje
            </a>
            <a href="#materials" className="text-muted-foreground hover:text-foreground transition-smooth">
              Materiały
            </a>
            <a href="#tiers" className="text-muted-foreground hover:text-foreground transition-smooth">
              Poziomy
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth">
              Społeczność
            </a>
            <a href="#founder" className="text-muted-foreground hover:text-foreground transition-smooth">
              O Kamilu
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-smooth">
              Opinie
            </a>
            <a href="#success" className="text-muted-foreground hover:text-foreground transition-smooth">
              Sukces
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline">Zaloguj się</Button>
              <Button variant="premium">Rozpocznij za 99 zł</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}