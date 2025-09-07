import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  PlayCircle, 
  FileText, 
  Headphones, 
  Download, 
  Clock, 
  Users,
  Star,
  Trophy,
  Target,
  Briefcase,
  Heart,
  TrendingUp,
  BookOpen,
  Video,
  MessageSquare
} from "lucide-react";

const materialCategories = [
  {
    title: "Kursy Video HD",
    description: "Ponad 200 godzin materiałów video w jakości 4K",
    icon: PlayCircle,
    items: [
      "Podstawy biznesu online - 25 lekcji",
      "Marketing w mediach społecznościowych - 40 lekcji", 
      "Sprzedaż i negocjacje - 30 lekcji",
      "Psychologia sukcesu - 35 lekcji",
      "Automatyzacja procesów - 20 lekcji",
      "Strategie skalowania - 50 lekcji"
    ],
    totalHours: "200h",
    color: "text-electric-blue"
  },
  {
    title: "Materiały PDF Premium",
    description: "Ekskluzywne e-booki i przewodniki krok po kroku",
    icon: FileText,
    items: [
      "101 strategii marketingowych - 150 stron",
      "Przewodnik po mindset milionera - 200 stron",
      "Checklist uruchomienia biznesu - 50 stron", 
      "Templates email marketingu - 80 stron",
      "Analiza konkurencji - metodologia - 60 stron",
      "Lifestyle design blueprint - 120 stron"
    ],
    totalHours: "660 stron",
    color: "text-premium-gold"
  },
  {
    title: "Podcasty i Audiobooki",
    description: "Content audio do słuchania w podróży",
    icon: Headphones,
    items: [
      "Daily Mindset Boosts - codzienne 10-min sesje",
      "Wywiady z milionerami - 50 rozmów",
      "Medytacje sukcesu - 30 sesji",
      "Affirmacje bogactwa - 20 nagrań",
      "Case studies biznesowe - 40 analiz",
      "Networking masterclass - 15 lekcji audio"
    ],
    totalHours: "120h",
    color: "text-electric-blue"
  },
  {
    title: "Tools & Templates",
    description: "Gotowe narzędzia do szybkiego wdrożenia",
    icon: Download,
    items: [
      "Business Plan Template - Excel/Sheets",
      "Sales Funnel Builder - Gotowe lejki",
      "Social Media Planner - 365 dni content",
      "Email Sequences - 50 gotowych kampanii",
      "Landing Page Templates - 20 wzorów",
      "Analytics Dashboard - tracking wszystkiego"
    ],
    totalHours: "100+ tools",
    color: "text-premium-gold"
  }
];

const exclusiveFeatures = [
  {
    icon: Video,
    title: "Sesje LIVE z Kamilem",
    description: "Comiesięczne spotkania na żywo, Q&A, analiza Twoich projektów",
    badge: "Poziom Praktyk+"
  },
  {
    icon: MessageSquare,
    title: "Prywatne konsultacje 1-na-1",
    description: "Osobiste rozmowy z Kamilem dla członków VIP",
    badge: "Poziom Wizjoner+"
  },
  {
    icon: Users,
    title: "Mastermind Groups",
    description: "Ekskluzywne grupy 8-10 osób z podobnym poziomem biznesu",
    badge: "Poziom Ekspert+"
  },
  {
    icon: Trophy,
    title: "Certyfikaty ukończenia",
    description: "Oficjalne certyfikaty Rich-strike do Twojego LinkedIn",
    badge: "Wszystkie poziomy"
  }
];

export function MaterialsSection() {
  return (
    <section id="materials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Co dokładnie <span className="text-premium-gold">otrzymujesz?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompleksowa biblioteka materiałów edukacyjnych wartych ponad 50,000 zł. 
            Wszystko co potrzebujesz do zbudowania swojego biznesu online.
          </p>
        </div>

        {/* Material Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {materialCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card key={index} className="p-8 bg-gradient-card border-border/50 hover:shadow-elevated transition-smooth">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <Badge className="bg-premium-gold/10 text-premium-gold border-premium-gold/20">
                    {category.totalHours}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-premium-gold rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Dostępne od pierwszego dnia</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-premium-gold fill-current" />
                      <Star className="w-4 h-4 text-premium-gold fill-current" />
                      <Star className="w-4 h-4 text-premium-gold fill-current" />
                      <Star className="w-4 h-4 text-premium-gold fill-current" />
                      <Star className="w-4 h-4 text-premium-gold fill-current" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Exclusive Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Ekskluzywne <span className="text-premium-gold">dodatki</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exclusiveFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div key={index} className="flex items-start gap-4 p-6 bg-surface-elevated/50 rounded-xl border border-border/30">
                  <div className="w-10 h-10 bg-premium-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-premium-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-premium text-primary-foreground max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-3xl font-bold mb-2">50,000 zł</div>
                <div className="text-sm opacity-90">Wartość wszystkich materiałów</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99 zł</div>
                <div className="text-sm opacity-90">Miesięczny dostęp</div>
              </div>
              <div>
                <Button variant="hero" size="lg" className="w-full">
                  Rozpocznij już dziś
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}