import { Card } from "@/components/ui/card";
import { Leaf, Droplets, Recycle } from "lucide-react";
import ecoIcon from "@/assets/eco-icon.jpg";

const ecoFeatures = [
  {
    icon: Leaf,
    title: "Produits biodégradables",
    description: "Nous utilisons uniquement des détergents écologiques certifiés biodégradables.",
  },
  {
    icon: Droplets,
    title: "Économie d'eau",
    description: "Technologies de lavage modernes pour réduire la consommation d'eau.",
  },
  {
    icon: Recycle,
    title: "Emballages durables",
    description: "Cintres et emballages recyclables pour minimiser notre impact environnemental.",
  },
];

export const Eco = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={ecoIcon} 
                alt="Engagement écologique" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-3xl" />
          </div>

          {/* Content Section */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="inline-block px-5 py-2 bg-accent/15 text-accent rounded-sm text-sm font-light tracking-wide mb-6">
              Engagement écologique
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-6 tracking-wide leading-tight">
              Un pressing respectueux de l'environnement
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
              Chez AzurPress, nous croyons qu'un service de qualité ne doit pas compromettre notre planète. 
              C'est pourquoi nous avons fait le choix de produits durables et de pratiques écoresponsables.
            </p>

            <div className="space-y-5">
              {ecoFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-7 border border-border hover:shadow-soft transition-all duration-300 bg-card"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif font-light text-xl text-card-foreground mb-2 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
