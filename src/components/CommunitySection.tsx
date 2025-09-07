import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Trophy,
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";

const communityStats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Aktywnych członków",
    description: "Społeczność ekspertów i początkujących"
  },
  {
    icon: MessageSquare,
    value: "1,500+",
    label: "Wiadomości dziennie",
    description: "Wymiana doświadczeń i wsparcie 24/7"
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Wydarzeń miesięcznie",
    description: "Webinary, Q&A, networking"
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Sukces rate",
    description: "Członkowie osiągający swoje cele"
  }
];

const discordChannels = [
  {
    name: "💰・biznesy-online",
    description: "Dyskusje o strategiach biznesowych",
    members: "2,341 członków",
    activity: "Bardzo aktywny"
  },
  {
    name: "🎯・cele-i-motywacja",
    description: "Wsparcie w osiąganiu celów",
    members: "1,892 członków",
    activity: "Aktywny"
  },
  {
    name: "📚・materiały-premium",
    description: "Dostęp do ekskluzywnych treści",
    members: "456 członków",
    activity: "VIP"
  },
  {
    name: "🤝・networking",
    description: "Nawiązywanie kontaktów biznesowych",
    members: "1,234 członków",
    activity: "Aktywny"
  }
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dołącz do największej społeczności <span className="text-premium-gold">przedsiębiorców</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nasza społeczność Discord to miejsce, gdzie spotykają się ambitni ludzie, 
            wymieniają doświadczenia i wspierają się nawzajem w drodze do sukcesu.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:scale-105 transition-spring">
                <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-premium-gold" />
                </div>
                
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Discord Preview */}
          <div>
            <div className="mb-6">
              <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-4">
                Discord Community
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Aktywna społeczność 24/7
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dołącz do tysięcy przedsiębiorców, którzy codziennie dzielą się swoimi 
                doświadczeniami, zadają pytania i pomagają sobie nawzajem osiągać cele biznesowe.
              </p>
            </div>

            <div className="space-y-3">
              {discordChannels.map((channel, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-surface-elevated rounded-lg border border-border/50"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-foreground mb-1">{channel.name}</div>
                    <div className="text-sm text-muted-foreground">{channel.description}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{channel.members}</div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        channel.activity === 'VIP' ? 'border-premium-gold text-premium-gold' :
                        channel.activity === 'Bardzo aktywny' ? 'border-electric-blue text-electric-blue' :
                        'border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      {channel.activity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="electric" size="lg" className="w-full">
                <ExternalLink className="w-5 h-5 mr-2" />
                Dołącz do Discord
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-premium-gold animate-glow" />
                <h3 className="text-2xl font-bold text-foreground">
                  Korzyści ze społeczności
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-premium-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Networking na najwyższym poziomie</div>
                    <div className="text-sm text-muted-foreground">
                      Nawiąż kontakty z doświadczonymi przedsiębiorcami i znajdź partnerów biznesowych
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Wsparcie w trudnych momentach</div>
                    <div className="text-sm text-muted-foreground">
                      Otrzymaj pomoc i motywację, gdy napotykasz wyzwania w biznesie
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-premium-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Ekskluzywne materiały</div>
                    <div className="text-sm text-muted-foreground">
                      Dostęp do treści dzielonych tylko w społeczności przez ekspertów
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Wydarzenia na żywo</div>
                    <div className="text-sm text-muted-foreground">
                      Udział w webinarach, Q&A i spotkaniach networkingowych
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Dostęp od pierwszego dnia członkostwa
                  </div>
                  <Button variant="premium" className="w-full">
                    Rozpocznij za 99 zł
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}