import { Box, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Collecte",
    description:
      "Déposez vos vêtements en boutique ou optez pour notre service de collecte à domicile gratuit sur Marseille.",
    icon: Box,
  },
  {
    title: "Traitement Expert",
    description:
      "Nos professionnels traitent chaque pièce avec soin selon sa matière et ses besoins spécifiques.",
    icon: Sparkles,
  },
  {
    title: "Livraison",
    description:
      "Récupérez vos vêtements impeccables en boutique ou profitez de notre livraison à domicile.",
    icon: Truck,
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Trois étapes
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Un Processus Simple et Efficace
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Trois étapes pour des vêtements impeccables
          </p>
        </div>

        <div className="relative flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="pointer-events-none absolute left-12 right-12 top-12 hidden h-px bg-gradient-to-r from-primary/10 via-primary/60 to-primary/10 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-1 flex-col items-center text-center md:max-w-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;


