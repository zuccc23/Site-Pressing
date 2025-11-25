import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-muted to-background py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Contactez-nous
          </h2>
          <p className="mx-auto text-lg text-muted-foreground md:max-w-2xl">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Adresse
                    </h3>
                    <p className="text-muted-foreground">
                      123 Avenue du Prado
                      <br />
                      13008 Marseille
                      <br />
                      France
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Téléphone
                    </h3>
                    <p className="text-muted-foreground">
                      04 XX XX XX XX
                      <br />
                      <span className="text-sm">Lun - Sam : 8h - 19h</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      contact@pressing-marseille.fr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Horaires
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Lundi - Vendredi : 8h - 19h</p>
                      <p>Samedi : 9h - 18h</p>
                      <p className="text-sm text-destructive">Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden border-border shadow-elegant">
            <CardContent className="h-full min-h-[500px] p-0">
              <div className="flex h-full w-full items-center justify-center bg-muted text-center">
                <div className="p-8">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Nous trouver à Marseille
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Au cœur du 8ème arrondissement
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Ouvrir dans Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;


