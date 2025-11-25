import { Button } from "@/components/ui/button";
import { Clock, Shield, Sparkles } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80";

const Hero = () => {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden lg:min-h-[700px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm font-medium text-primary-foreground">
              Pressing professionnel à Marseille
            </p>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Le pressing qui vient à vous
          </h1>

          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Service professionnel de pressing et nettoyage à sec pour
            particuliers et entreprises. Service de livraison gratuite sur tout Marseille.
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground shadow-elegant hover:bg-primary/90"
            >
              Commander en ligne
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white backdrop-blur-sm hover:bg-white/10"
            >
              Nos tarifs
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Qualité Premium
                </p>
                <p className="text-xs text-gray-300">Expertise certifiée</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Clock className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Service Rapide</p>
                <p className="text-xs text-gray-300">Délais garantis</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Assurance</p>
                <p className="text-xs text-gray-300">Satisfaction 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


