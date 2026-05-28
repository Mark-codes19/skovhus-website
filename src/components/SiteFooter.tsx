import { Link } from "@tanstack/react-router";
import logo from "@/assets/skovhus-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 pt-14">
        <div className="flex flex-col items-center gap-3 border-b border-border/60 pb-10 text-center">
          <img src={logo} alt="Skovhus Økonomisk Rådgivning" className="h-20 w-auto" />
          <div className="font-serif text-2xl text-foreground">Skovhus Økonomisk Rådgivning ApS</div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Jeg leverer strategisk økonomisk rådgivning og bestyrelsesarbejde med fokus på langsigtet værdiskabelse.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kontakt</div>
          <div className="mt-3 space-y-1.5 text-sm text-foreground">
            <div>Svend Erik Skovhus</div>
            <div>Vindinggård Ringvej 1, 7100 Vejle</div>
            <a href="tel:+4520971603" className="block hover:text-accent">+45 20 97 16 03</a>
            <a href="mailto:ses@skovhus.biz" className="block hover:text-accent">ses@skovhus.biz</a>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Naviger</div>
          <div className="mt-3 flex flex-col items-end gap-1.5 text-sm">
            <Link to="/om" className="text-foreground hover:text-accent">Om Svend Erik</Link>
            <Link to="/ydelser" className="text-foreground hover:text-accent">Ydelser</Link>
            <Link to="/erfaring" className="text-foreground hover:text-accent">Erfaring</Link>
            <Link to="/kontakt" className="text-foreground hover:text-accent">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Skovhus Økonomisk Rådgivning ApS · CVR-registreret i Vejle
        </div>
      </div>
    </footer>
  );
}
