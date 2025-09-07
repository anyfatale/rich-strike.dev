import { Crown, Instagram, Youtube, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Rich-strike</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Platforma rozwojowa dla ambitnych przedsiębiorców. Praktyczne kursy, 
              wspierająca społeczność i narzędzia motywacyjne w jednym miejscu.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Platforma */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platforma</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-smooth">Funkcje</a></li>
              <li><a href="#tiers" className="hover:text-foreground transition-smooth">Poziomy</a></li>
              <li><a href="#community" className="hover:text-foreground transition-smooth">Społeczność</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-smooth">Opinie</a></li>
            </ul>
          </div>

          {/* Wsparcie */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Wsparcie</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Centrum pomocy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Kontakt</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Regulamin</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Polityka prywatności</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Rich-strike. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>99 zł/miesiąc</span>
              <span>•</span>
              <span>Anuluj w każdej chwili</span>
              <span>•</span>
              <span>10,000+ członków</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}