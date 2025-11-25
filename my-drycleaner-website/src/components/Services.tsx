import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Pressing & Repassage",
    description:
      "Service professionnel de repassage pour tous types de vêtements. Finition impeccable garantie.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    features: ["Chemises", "Pantalons", "Robes", "Costumes"],
  },
  {
    title: "Nettoyage à Sec",
    description:
      "Nettoyage délicat de vos pièces les plus précieuses avec des produits écologiques premium.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    features: ["Soie", "Laine", "Cachemire", "Tissus délicats"],
  },
  {
    title: "Cuir & Daim",
    description:
      "Traitement spécialisé pour vos articles en cuir et daim. Nourrit et protège le textile.",
    image:
      "https://images.unsplash.com/photo-1507679622673-989605832e3d?auto=format&fit=crop&w=800&q=80",
    features: ["Vestes", "Sacs", "Chaussures", "Gants"],
  },
  {
    title: "Retouches",
    description:
      "Service de retouche couture professionnelle. Modifications et réparations expertes.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    features: ["Ourlets", "Ajustements", "Réparations", "Sur-mesure"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-background to-muted py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nos Services Premium
          </h2>
          <p className="mx-auto text-lg text-muted-foreground md:max-w-2xl">
            Un savoir-faire artisanal au service de vos textiles les plus
            précieux
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              <CardContent className="p-6">
                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


