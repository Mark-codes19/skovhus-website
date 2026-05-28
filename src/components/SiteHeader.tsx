import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/skovhus-logo.png";

const navItems = [
  { to: "/", label: "Forside" },
  { to: "/om", label: "Om Svend Erik" },
  { to: "/ydelser", label: "Ydelser" },
  { to: "/erfaring", label: "Erfaring" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="Skovhus Økonomisk Rådgivning" className="h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl tracking-tight text-foreground">Skovhus</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Økonomisk Rådgivning</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground"
                activeProps={{ className: "py-3 text-sm text-foreground font-medium" }}
                activeOptions={{ exact: i.to === "/" }}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
