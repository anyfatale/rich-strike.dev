import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  MessageCircle,
  Calendar,
  Lightbulb,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Praktyczne kursy",
    description: "Materiały edukacyjne tworzone przez doświadczonych specjalistów z focus na praktyczne zastosowanie",
    color: "text-premium-gold"
  },
  {
    icon: Users,
    title: "Wspierająca społeczność",
    description: "Aktywna społeczność Discord, gdzie można wymieniać doświadczenia i nawiązywać wartościowe kontakty",
    color: "text-electric-blue"
  },
  {
    icon: Target,
    title: "Śledzenie postępów",
    description: "Zaawansowane narzędzia do budowania nawyków, monitorowania statystyk i analizowania rozwoju",
    color: "text-premium-gold"
  },
  {
    icon: Award,
    title: "System motywacyjny",
    description: "Poziomy, odznaki i bonusy motywujące do ciągłego rozwoju i osiągania kolejnych celów",
    color: "text-electric-blue"
  },
  {
    icon: TrendingUp,
    title: "Strategie biznesowe",
    description: "Sprawdzone metody budowania biznesu online, od podstaw po zaawansowane techniki skalowania",
    color: "text-premium-gold"
  },
  {
    icon: MessageCircle,
    title: "Sesje LIVE",
    description: "Comiesięczne sesje na żywo z doświadczonymi przedsiębiorcami i osobiste rozmowy z mentorami",
    color: "text-electric-blue"
  },
  {
    icon: Calendar,
    title: "Ekskluzywne wydarzenia",
    description: "Dostęp do warsztatów, webinarów i wydarzeń networkingowych dla wyższych poziomów",
    color: "text-premium-gold"
  },
  {
    icon: Lightbulb,
    title: "Lifestyle coaching",
    description: "Treści dotyczące zdrowia, relacji i stylu życia dla kompleksowego rozwoju osobistego",
    color: "text-electric-blue"
  },
  {
    icon: Shield,
    title: "Priorytetowe wsparcie",
    description: "Dedykowana pomoc i szybkie odpowiedzi na pytania dla członków premium",
    color: "text-premium-gold"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-surface-elevated/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wszystko czego potrzebujesz w <span className="text-premium-gold">jednym miejscu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rich-strike to kompleksowa platforma rozwojowa, która łączy edukację, 
            społeczność i narzędzia motywacyjne w jednym ekosystemie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:scale-105 hover:shadow-elevated transition-spring group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-premium-gold mr-2" />
                  <span>Dostępne od 1. poziomu</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-surface-elevated rounded-2xl border border-premium-gold/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-premium-gold rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">10,000+ aktywnych członków</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">500+ godzin materiałów</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-premium-gold rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">95% zadowolonych użytkowników</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}