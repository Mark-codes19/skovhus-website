import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ClipboardList, Handshake, LineChart, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/ydelser")({
  head: () => ({
    meta: [
      { title: "Ydelser — Skovhus Økonomisk Rådgivning" },
      { name: "description", content: "Bestyrelsesarbejde, økonomisk rådgivning, generationsskifte og forretningsudvikling for danske virksomheder." },
    ],
  }),
  component: Ydelser,
});

const services = [
  { icon: ShieldCheck, title: "Forandringsledelse & Turnaround", text: "Ledelse gennem krævende perioder — med fokus på handling, klarhed og målbare resultater." },
  { icon: ClipboardList, title: "Forretningsprocesser & styringsværktøjer", text: "Enkle og robuste rammer for drift, rapportering og opfølgning." },
  { icon: LineChart, title: "Økonomistyring & finansieringsanalyser", text: "Budget, forecast, likviditet, kapitalstruktur og finansieringsdialog med banker." },
  { icon: Users, title: "Interim management & projektassistance", text: "Midlertidig ledelse eller dedikeret projektkraft, når der er brug for ekstra hænder." },
  { icon: Briefcase, title: "Bestyrelsesarbejde", text: "Formandskab og bestyrelsesposter med fokus på governance, strategi og ejerinteresser." },
  { icon: Handshake, title: "Generationsskifte", text: "Strukturering, værdiansættelse og overdragelse af ejerledede selskaber." },
];

function Ydelser() {
  return (
    <div>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">Ydelser</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Rådgivning der gør en forskel.</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Et fokuseret udvalg af ydelser, baseret på mine årtiers erfaring fra danske
            ejerledede virksomheder, fonde og bestyrelser.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-sm border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-elegant">
              <div className="inline-flex rounded-sm bg-secondary p-3 text-primary group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-serif text-2xl text-foreground">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-sm border border-border bg-secondary/40 p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Sådan samarbejder vi</div>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Uformelt, ærligt og uden bindinger.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Som freelance-konsulent lægger jeg vægt på en uformel tone, ærlige
              udmeldinger og ikke for mange fine managementbegreber. Samarbejdet er
              lige så uformelt — der afregnes efter timepris med månedsvis fakturering
              og <strong className="text-foreground">ingen opsigelsesvarsel</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
