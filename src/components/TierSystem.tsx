import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Target, 
  Brain, 
  Eye, 
  Crown, 
  Trophy,
  Check,
  Star,
  Zap
} from "lucide-react";

const tiers = [
  {
    id: "uczen",
    name: "Uczeń",
    duration: "1 miesiąc",
    icon: GraduationCap,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    features: [
      "Dostęp do materiałów startowych",
      "Wsparcie społeczności Discord",
      "Podstawowe narzędzia motywacyjne"
    ],
    badge: "Start"
  },
  {
    id: "praktyk",
    name: "Praktyk",
    duration: "2 miesiące",
    icon: Target,
    color: "text-electric-blue",
    bgColor: "bg-electric-blue/10",
    features: [
      "Wszystko z poziomu Uczeń",
      "Comiesięczne sesje LIVE",
      "Rozmowy z doświadczonymi przedsiębiorcami",
      "Zaawansowane narzędzia śledzenia"
    ],
    badge: "Popularny"
  },
  {
    id: "ekspert",
    name: "Ekspert",
    duration: "3 miesiące",
    icon: Brain,
    color: "text-premium-gold",
    bgColor: "bg-premium-gold/10",
    features: [
      "Wszystko z poziomu Praktyk",
      "Treści lifestyle: zdrowie, relacje",
      "Personalizowane porady",
      "Ekskluzywne webinary"
    ],
    badge: "Rekomendowany"
  },
  {
    id: "wizjoner",
    name: "Wizjoner",
    duration: "6 miesięcy",
    icon: Eye,
    color: "text-premium-gold-light",
    bgColor: "bg-premium-gold-light/10",
    features: [
      "Wszystko z poziomu Ekspert",
      "Comiesięczne rozmowy z Kamilem",
      "Strategiczne planowanie biznesu",
      "Priorytetowe wsparcie"
    ],
    badge: "Premium"
  },
  {
    id: "krol",
    name: "Król",
    duration: "12 miesięcy",
    icon: Crown,
    color: "text-premium-gold",
    bgColor: "bg-gradient-premium",
    features: [
      "Wszystko z poziomu Wizjoner",
      "Wcześniejszy dostęp do programów",
      "Ekskluzywne wydarzenia",
      "Osobiste spotkanie z Kamilem",
      "VIP społeczność"
    ],
    badge: "VIP",
    popular: true
  },
  {
    id: "cesarz",
    name: "Cesarz",
    duration: "24 miesiące",
    icon: Trophy,
    color: "text-premium-gold",
    bgColor: "bg-gradient-premium",
    features: [
      "Wszystko z poziomu Król",
      "Premium materiały zaawansowane",
      "Ekskluzywne ścieżki edukacyjne",
      "Indywidualne mentoring",
      "Partnerstwa biznesowe"
    ],
    badge: "Elite"
  }
];

export function TierSystem() {
  return (
    <section id="tiers" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            System poziomów <span className="text-premium-gold">Rich-strike</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Progresywny system rozwoju, który dostosowuje się do Twojego tempa nauki. 
            Im dłużej jesteś z nami, tym więcej ekskluzywnych korzyści otrzymujesz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            
            return (
              <Card 
                key={tier.id} 
                className={`relative p-6 ${tier.popular ? 'ring-2 ring-premium-gold shadow-premium' : ''} 
                          hover:scale-105 transition-spring bg-gradient-card border-border/50 backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-premium-gold text-primary-foreground px-4 py-1">
                      Najczęściej wybierany
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tier.badge}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">{tier.duration}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-premium-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">99 zł</span>
                    <span className="text-muted-foreground">/miesiąc</span>
                  </div>
                  
                  <Button 
                    variant={tier.popular ? "premium" : "outline"} 
                    className="w-full"
                  >
                    {index < 3 ? "Zacznij teraz" : "Dołącz do elity"}
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Poziom {index + 1}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-1 rounded-full ${
                            i <= index ? 'bg-premium-gold' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated/50 backdrop-blur-sm border border-premium-gold/20 rounded-full">
            <Star className="w-5 h-5 text-premium-gold animate-glow" />
            <span className="text-sm text-muted-foreground">
              Każdy poziom odblokowany po ukończeniu poprzedniego miesiąca
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}