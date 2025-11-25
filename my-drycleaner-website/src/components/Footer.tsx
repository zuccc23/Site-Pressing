const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 border-b border-border pb-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Pressing Marseille
            </h3>
            <p className="text-sm text-muted-foreground">
              Votre pressing de confiance à Marseille. Qualité, rapidité et
              expertise depuis 2024.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-primary"
                >
                  Pressing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-primary"
                >
                  Nettoyage à sec
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-primary"
                >
                  Cuir & Daim
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-primary"
                >
                  Retouches
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Informations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Nos engagements
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 text-center text-sm text-muted-foreground">
          © 2024 Pressing Marseille. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


