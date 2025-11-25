import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-primary">Pressing Marseille</h1>
          <p className="text-xs text-muted-foreground">
            S'occupe de vos vêtements depuis 2024
          </p>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Notre Processus
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden items-center gap-2 sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">04 XX XX XX XX</span>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Commander
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;


