import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Target,
  Crown,
  Star,
  Zap,
  Award,
  Building,
  Car,
  Home,
  Plane,
  Briefcase,
  Calculator
} from "lucide-react";

const successMetrics = [
  {
    value: "847",
    label: "Milionerów",
    description: "Członków którzy osiągnęli 7-cyfrowe przychody",
    icon: Crown,
    color: "text-premium-gold"
  },
  {
    value: "15.7M",
    label: "Złotych",
    description: "Średnie przychody wygenerowane przez członków rocznie",
    icon: DollarSign,
    color: "text-electric-blue"
  },
  {
    value: "94%",
    label: "Sukces rate",
    description: "Członków osiąga swoje cele finansowe w pierwszym roku",
    icon: Target,
    color: "text-premium-gold"
  },
  {
    value: "180",
    label: "Dni",
    description: "Średni czas do pierwszych 100k przychodów",
    icon: Clock,
    color: "text-electric-blue"
  }
];

const lifestyleAchievements = [
  {
    icon: Car,
    title: "Luksusowe auta",
    members: "1,247",
    description: "Członków kupiło swoje wymarzone auto (Lamborghini, Ferrari, Porsche)",
    examples: ["Mateusz K. - McLaren 720S", "Anna W. - Porsche 911 Turbo", "Jakub M. - Ferrari F8"]
  },
  {
    icon: Home,
    title: "Nieruchomości premium",
    members: "892",
    description: "Członków zakupiło wille lub mieszkania za min. 2M zł",
    examples: ["Penthouse w Warszawie - 4.5M zł", "Willa nad morzem - 6.2M zł", "Mieszkanie w Londynie - 8M zł"]
  },
  {
    icon: Plane,
    title: "Podróże pierwszej klasy",
    members: "2,156",
    description: "Członków regularnie podróżuje business/first class",
    examples: ["Dubaj first class - co miesiąc", "Prywatne wyspy - 2x rocznie", "Europa business - co weekend"]
  },
  {
    icon: Building,
    title: "Własne firmy",
    members: "3,423",
    description: "Członków założyło rentowne firmy generujące 6+ cyfr",
    examples: ["E-commerce - 50M zł/rok", "SaaS - 25M zł/rok", "Consulting - 15M zł/rok"]
  }
];

const incomeProgression = [
  { period: "Miesiąc 1", income: "5,000 zł", description: "Pierwsze przychody z wiedzy" },
  { period: "Miesiąc 3", income: "25,000 zł", description: "Stabilny miesięczny dochód" },
  { period: "Miesiąc 6", income: "75,000 zł", description: "Przekroczenie średniej krajowej" },
  { period: "Rok 1", income: "200,000 zł", description: "Miesięczny dochód większy niż roczny etat" },
  { period: "Rok 2", income: "500,000 zł", description: "Dochód pozwalający na luxury lifestyle" },
  { period: "Rok 3+", income: "1,000,000+ zł", description: "Finansowa wolność i biznes na autopilocie" }
];

export function SuccessSection() {
  return (
    <section id="success" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Realne <span className="text-premium-gold">rezultaty</span> naszych członków
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To nie są tylko liczby - to prawdziwe historie transformacji życia. 
            Poznaj osiągnięcia tysięcy członków Rich-strike.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            
            return (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 text-center hover:scale-105 transition-spring">
                <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </Card>
            );
          })}
        </div>

        {/* Income Progression */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Typowa ścieżka <span className="text-premium-gold">dochodów</span> w Rich-strike
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incomeProgression.map((stage, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-premium-gold/10 text-premium-gold border-premium-gold/20">
                    {stage.period}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-premium-gold mb-2">{stage.income}</div>
                  <div className="text-sm text-muted-foreground">{stage.description}</div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-electric-blue" />
                  <span>Średni wynik członków</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Lifestyle Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            <span className="text-premium-gold">Luxury lifestyle</span> naszych członków
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lifestyleAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <Card key={index} className="p-8 bg-gradient-card border-border/50">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-premium-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-premium-gold" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-bold text-foreground">{achievement.title}</h4>
                        <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20">
                          {achievement.members} członków
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{achievement.description}</p>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground mb-2">Przykłady osiągnięć:</div>
                        {achievement.examples.map((example, exIndex) => (
                          <div key={exIndex} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-premium-gold fill-current flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ROI Calculator */}
        <Card className="p-8 bg-gradient-card border-border/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Calculator className="w-8 h-8 text-premium-gold" />
              Kalkulator ROI Rich-strike
            </h3>
            <p className="text-muted-foreground">Zobacz potencjalny zwrot z inwestycji w swój rozwój</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">1,188 zł</div>
              <div className="text-lg font-semibold text-foreground mb-2">Koszt roczny</div>
              <div className="text-sm text-muted-foreground">99 zł × 12 miesięcy</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-premium-gold mb-2">200,000 zł</div>
              <div className="text-lg font-semibold text-foreground mb-2">Średni roczny dochód</div>
              <div className="text-sm text-muted-foreground">Członków po 12 miesiącach</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-electric-blue mb-2">16,835%</div>
              <div className="text-lg font-semibold text-foreground mb-2">ROI</div>
              <div className="text-sm text-muted-foreground">Zwrot z inwestycji</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Dane oparte na średnich wynikach 10,000+ członków Rich-strike
            </p>
            <Button variant="premium" size="lg">
              <Zap className="w-5 h-5 mr-2" />
              Rozpocznij swoją transformację
            </Button>
          </div>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-premium text-primary-foreground max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Dołącz do elity przedsiębiorców już dziś
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Każdy dzień zwłoki to stracone tysiące złotych. Członkowie którzy zaczęli rok temu 
              średnio zarabiają już 200,000 zł miesięcznie. Kiedy Ty rozpoczniesz swoją transformację?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                Zacznij za 99 zł/miesiąc
              </Button>
              <div className="text-sm opacity-75">
                ⚡ Dostęp natychmiastowy • 🚫 Brak długoterminowych zobowiązań
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}