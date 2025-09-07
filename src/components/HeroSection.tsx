import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        <source src="https://sample-videos.com/zip/10/mp4/720/mp4-720.mp4" type="video/mp4" />
      </video>
      
      {/* Background Image Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-premium-gold/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-electric-blue/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-premium-gold/10 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm border border-premium-gold/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-premium-gold animate-glow" />
            <span className="text-sm text-muted-foreground">
              Dołącz do 10,000+ przedsiębiorców
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Zbuduj swój{" "}
            <span className="bg-gradient-premium bg-clip-text text-transparent animate-glow">
              biznes online
            </span>{" "}
            w 30 dni
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Praktyczne kursy, wspierająca społeczność i narzędzia motywacyjne. 
            Wszystko czego potrzebujesz, aby osiągnąć sukces w biznesie internetowym.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-premium-gold rounded-full" />
              <span>6 poziomów rozwoju</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full" />
              <span>Społeczność Discord</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-premium-gold rounded-full" />
              <span>Sesje LIVE z mentorami</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Rozpocznij za 99 zł/miesiąc
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Zobacz jak to działa
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-8">
            ✨ Zamiast 20,000 zł za studia, płać tylko 99 zł miesięcznie
          </p>
        </div>
      </div>
    </section>
  );
}