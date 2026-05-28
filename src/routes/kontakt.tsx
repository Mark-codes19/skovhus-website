import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Skovhus Økonomisk Rådgivning" },
      { name: "description", content: "Kontakt Svend Erik Skovhus, Skovhus Økonomisk Rådgivning ApS, Vindinggård Ringvej 1, 7100 Vejle." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
          <h1 className="font-serif text-5xl md:text-7xl text-foreground">Kontakt</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-10 pb-20 md:grid-cols-3">
          {[
            { icon: Phone, title: "Telefon", value: "+45 20 97 16 03", href: "tel:+4520971603" },
            { icon: Mail, title: "E-mail", value: "ses@skovhus.biz", href: "mailto:ses@skovhus.biz" },
            { icon: MapPin, title: "Adresse", value: "Vindinggård Ringvej 1, 7100 Vejle" },
          ].map((c) => (
            <div key={c.title} className="rounded-sm border border-border bg-card p-7 shadow-card">
              <div className="inline-flex rounded-sm bg-secondary p-3 text-primary"><c.icon className="h-5 w-5" /></div>
              <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.title}</div>
              {c.href ? (
                <a href={c.href} className="mt-2 block font-serif text-2xl text-foreground hover:text-accent">{c.value}</a>
              ) : (
                <div className="mt-2 font-serif text-2xl text-foreground">{c.value}</div>
              )}
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
