import { createFileRoute } from "@tanstack/react-router";
import { bestyrelse, direktion, type RoleEntry } from "@/data/roles";

export const Route = createFileRoute("/erfaring")({
  head: () => ({
    meta: [
      { title: "Erhvervsroller & erfaring — Skovhus Økonomisk Rådgivning" },
      { name: "description", content: "Oversigt over Svend Erik Skovhus' roller i dansk erhvervsliv: direktion, bestyrelsesposter og stiftelser." },
    ],
  }),
  component: Erfaring,
});

function Table({ rows }: { rows: RoleEntry[] }) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-card shadow-card">
      <div className="hidden grid-cols-[1.4fr_2fr_0.6fr_1fr_1fr] gap-4 border-b border-border bg-secondary/60 px-6 py-3 text-xs uppercase tracking-[0.15em] text-muted-foreground md:grid">
        <div>Rolle</div>
        <div>Selskab</div>
        <div>Ansatte</div>
        <div>Bruttofortj. (1.000 DKK)</div>
        <div>Afkastningsgrad</div>
      </div>
      <ul className="divide-y divide-border">
        {rows.map((r, i) => (
          <li key={i} className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[1.4fr_2fr_0.6fr_1fr_1fr] md:items-center md:gap-4">
            <div className="text-sm font-medium text-foreground">{r.role}</div>
            <div className="font-serif text-lg text-foreground">{r.company}</div>
            <div className="text-sm text-muted-foreground"><span className="md:hidden text-xs uppercase tracking-wider mr-2">Ansatte:</span>{r.employees ?? "—"}</div>
            <div className="text-sm text-muted-foreground"><span className="md:hidden text-xs uppercase tracking-wider mr-2">Brutto:</span>{r.gross ?? "—"} {r.year && <span className="text-xs">({r.year})</span>}</div>
            <div className="text-sm text-muted-foreground"><span className="md:hidden text-xs uppercase tracking-wider mr-2">Afk.grad:</span>{r.ror ?? "—"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Erfaring() {
  return (
    <div>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">Erhvervsroller</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Et bredt aftryk i dansk erhvervsliv.</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Et udvalg af de selskaber, hvor jeg i dag bidrager som
            direktør, bestyrelsesformand, næstformand eller bestyrelsesmedlem.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
          <div>
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-serif text-3xl text-foreground">Direktion & administration</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{direktion.length} roller</span>
            </div>
            <Table rows={direktion} />
          </div>

          <div>
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-serif text-3xl text-foreground">Bestyrelse</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{bestyrelse.length} roller</span>
            </div>
            <Table rows={bestyrelse} />
          </div>

          <p className="text-xs text-muted-foreground">
            Tal i 1.000 DKK. Bruttofortjeneste og afkastningsgrad er baseret på senest tilgængelige
            offentlige regnskaber for de pågældende selskaber.
          </p>
        </div>
      </section>
    </div>
  );
}
