import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alan Kowalski",
    role: "Ekspert",
    duration: "3 miesiące w Rich-strike",
    avatar: "/placeholder.svg",
    content: "Dzięki tej platformie zmieniłem całą swoją osobowość. Jestem bardzo zdyscyplinowany, jak nigdy dotąd. System poziomów motywuje mnie do ciągłego rozwoju.",
    rating: 5,
    highlight: "Zmiana osobowości i dyscyplina"
  },
  {
    name: "Marta Nowak",
    role: "Wizjoner",
    duration: "6 miesięcy w Rich-strike",
    avatar: "/placeholder.svg",
    content: "Sesje LIVE z Kamilem całkowicie zmieniły moje podejście do biznesu. W ciągu 4 miesięcy zwiększyłam przychody o 200%. Społeczność Discord to prawdziwa goldmine wiedzy.",
    rating: 5,
    highlight: "200% wzrost przychodów"
  },
  {
    name: "Tomasz Wiśniewski",
    role: "Król",
    duration: "8 miesięcy w Rich-strike",
    avatar: "/placeholder.svg",
    content: "Osobiste spotkanie z Kamilem było przełomowe. Otrzymałem spersonalizowane strategie, które pozwoliły mi uruchomić trzeci biznes online. VIP społeczność to network na najwyższym poziomie.",
    rating: 5,
    highlight: "3 działające biznesy online"
  },
  {
    name: "Karolina Jankowska",
    role: "Praktyk",
    duration: "2 miesiące w Rich-strike",
    avatar: "/placeholder.svg",
    content: "Jako początkująca przedsiębiorczyni, znalazłam tu wszystko czego potrzebowałam. Wsparcie społeczności jest niesamowite, a materiały bardzo praktyczne.",
    rating: 5,
    highlight: "Idealny start dla początkujących"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Realne historie <span className="text-premium-gold">sukcesu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Poznaj historie członków Rich-strike, którzy osiągnęli swoje cele biznesowe 
            dzięki naszej platformie rozwojowej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-elevated transition-smooth"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-surface-elevated text-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.duration}</p>
                </div>

                <Quote className="w-6 h-6 text-premium-gold/50" />
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-premium-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {testimonial.content}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-premium-gold/10 rounded-full">
                  <div className="w-2 h-2 bg-premium-gold rounded-full" />
                  <span className="text-sm text-premium-gold font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated/50 backdrop-blur-sm border border-premium-gold/20 rounded-full">
            <Star className="w-5 h-5 text-premium-gold animate-glow" />
            <span className="text-sm text-muted-foreground">
              95% członków rekomenduje Rich-strike znajomym
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}