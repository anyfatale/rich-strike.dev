import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Award, 
  TrendingUp, 
  Target, 
  Briefcase,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Car,
  Home,
  Plane,
  Crown,
  Star
} from "lucide-react";

const founderStats = [
  {
    icon: TrendingUp,
    value: "15M+",
    label: "Wygenerowane przychody",
    description: "Dla członków społeczności"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Uczniów",
    description: "Którzy osiągnęli sukces"
  },
  {
    icon: Award,
    value: "8",
    label: "Lat doświadczenia",
    description: "W biznesie online"
  },
  {
    icon: Briefcase,
    value: "50+",
    label: "Projektów",
    description: "Własnych biznesów"
  }
];

const achievements = [
  "Zbudował pierwsze 15k w wieku 17 lat",
  "Założył 5 startup'ów firm internetowych", 
  "Mentor ponad 8,000 przedsiębiorców",
  "Autor bestsellerowych kursów online",
  "Uczestnik największych konferencjach biznesowych",
  "Inwestor luksusowych nieruchomości w 3 krajach"
];

const luxuryItems = [
  {
    icon: Car,
    title: "Kolekcja supercarów",
    description: "Lamborghini, Ferrari, Porsche - nie, najlepszy i tak Leon Wiktora ;P "
  },
  {
    icon: Home,
    title: "Zainwestowane wille w 3 krajach", 
    description: "Polska, Dubaj, Singapur - każda warta miliony"
  },
  {
    icon: Plane,
    title: "Podróże first class",
    description: "Podróże first class do dowolnego miejsca na świecie"
  }
];

export function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-surface-elevated/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Poznaj <span className="text-premium-gold">Kamila Porębę</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Młody, ambitny wizjoner. W wieku 18 lat osiągnął finansową wolność 
            i teraz dzieli się swoją wiedzą z tysięcami uczniów na całym świecie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Founder Image & Bio */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-card border-border/50 text-center">
              <div className="w-32 h-32 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-16 h-16 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Kamil Poręba</h3>
              <p className="text-muted-foreground mb-4">Założyciel Rich-strike</p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-premium-gold" />
                <span className="text-sm text-muted-foreground">Warszawa, Polska</span>
              </div>

              <Badge className="bg-premium-gold/10 text-premium-gold border-premium-gold/20 mb-6">
                Mentor #1 w Polsce
              </Badge>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Założył Rich-strike w 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Forbes 30 under 30</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats & Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {founderStats.map((stat, index) => {
                const IconComponent = stat.icon;
                
                return (
                  <Card key={index} className="p-4 bg-gradient-card border-border/50 text-center">
                    <div className="w-8 h-8 bg-surface-elevated rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-4 h-4 text-premium-gold" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </Card>
                );
              })}
            </div>

            {/* Story */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Crown className="w-6 h-6 text-premium-gold" />
                Historia sukcesu
              </h4>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kamil zaczął swoją przygodę z biznesem online mając zaledwie 15 lat. 
                  Pierwsze 10,000 PLN zarobił już w wieku 17 lat, budując od zera firmę e-commerce. 
                  Dziś jest właścicielem kilk firm generujących łącznie ponad 50 milionów złotych rocznie.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  "Najważniejsze to dzielić się wiedzą. Każdy sukces moich uczniów to mój sukces" - Kamil Poręba
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-premium-gold fill-current flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Luxury Lifestyle */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-premium-gold" />
                Lifestyle milionera
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {luxuryItems.map((item, index) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-premium-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-premium-gold" />
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  "Sukces to nie tylko pieniądze. To wolność robienia tego, co kochasz, kiedy chcesz."
                </p>
                <Button variant="premium">
                  Zobacz więcej o Kamilu
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-premium text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Chcesz osiągnąć podobny sukces?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Dołącz do Rich-strike i rozpocznij swoją drogę do finansowej wolności pod okiem Kamila
            </p>
            <Button variant="hero" size="lg">
              Zacznij swoją transformację za 99 zł
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
