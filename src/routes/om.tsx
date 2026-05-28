import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/svend-erik-skovhus.png";

export const Route = createFileRoute("/om")({
  head: () => ({
    meta: [
      { title: "Om Svend Erik Skovhus — Skovhus Økonomisk Rådgivning" },
      { name: "description", content: "Mød Svend Erik Skovhus — direktør, stifter og bestyrelsesformand med årtiers erfaring fra dansk erhvervsliv." },
    ],
  }),
  component: Om,
});

function Om() {
  return (
    <div>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">Om mig</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">En karriere bygget på tillid.</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="overflow-hidden rounded-sm shadow-card">
              <img src={portrait} alt="Svend Erik Skovhus" className="w-full object-cover" />
            </div>
            <div className="mt-6 space-y-1 text-sm">
              <div className="font-serif text-2xl text-foreground">Svend Erik Skovhus</div>
              <div className="text-muted-foreground">Direktør & Stifter</div>
              <div className="text-muted-foreground">Skovhus Økonomisk Rådgivning ApS</div>
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Jeg har gennem en lang karriere bevæget mig i krydsfeltet mellem
              økonomi, ledelse og strategi. Jeg stiftede Skovhus Økonomisk Rådgivning ApS for
              at stille min erfaring til rådighed for danske ejerledede virksomheder, fonde
              og bestyrelser.
            </p>
            <p>
              Med base i Vejle arbejder jeg bredt på tværs af brancher — fra industri og
              produktion (K.V. Markussen, Tønnes &amp; Ulstrup, Jima Hegn) over service og
              hospitality (Vingsted Hotel &amp; Konferencecenter, Forstas) til digitale
              forretningsmodeller (Digital Juice, Dinbilauktion.dk, Noisecare).
            </p>
            <p>
              Min tilgang er karakteriseret ved nærvær, økonomisk indsigt og en evne til at
              omsætte komplekse problemstillinger til klare beslutninger. Som
              bestyrelsesformand i en lang række selskaber er jeg vant til at sparre med
              ejerkredse og direktioner i både medvind og modvind.
            </p>

            <div className="rounded-sm border-l-2 border-accent bg-secondary/40 p-6">
              <p className="font-serif text-xl italic text-foreground">
                "Som freelance-konsulent lægger jeg vægt på en uformel tone, ærlige
                udmeldinger og ikke for mange fine managementbegreber."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Samarbejdet er lige så uformelt — der afregnes efter timepris med
                månedsvis fakturering og <strong className="text-foreground">ingen opsigelsesvarsel</strong>.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["Forandringsledelse & Turnaround", "Ledelse i krævende perioder med fokus på resultater og handling."],
                ["Forretningsprocesser & styringsværktøjer", "Etablering af enkle, robuste rammer for drift og rapportering."],
                ["Økonomistyring & finansieringsanalyser", "Budget, likviditet, kapitalstruktur og dialog med banker."],
                ["Interim management & projektassistance", "Midlertidig ledelse og dedikeret projektkraft, når det brænder på."],
                ["Bestyrelsesarbejde", "Formandskab, governance og sparring til ejerkredse."],
                ["Generationsskifte", "Strukturering og overdragelse af ejerledede selskaber."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-sm border border-border bg-card p-5 shadow-card">
                  <div className="font-serif text-xl text-foreground">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-sm border border-border bg-card p-6 shadow-card">
              <div className="text-xs uppercase tracking-[0.25em] text-accent">Uddannelse</div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <div>
                  <div className="font-serif text-xl text-foreground">Cand.Merc, Economics</div>
                  <div className="text-sm text-muted-foreground">Aarhus Universitet</div>
                </div>
                <div className="text-sm text-muted-foreground">1986 – 1991</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
