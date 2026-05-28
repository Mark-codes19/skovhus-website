import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/svend-erik-skovhus.png";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";
import { bestyrelse } from "@/data/roles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skovhus Økonomisk Rådgivning ApS" },
      {
        name: "description",
        content: "Strategisk økonomisk rådgivning og bestyrelsesarbejde ved Svend Erik Skovhus, Vejle.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const totalEmployees = bestyrelse.reduce((s, r) => s + (parseInt(r.employees ?? "0") || 0), 0);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
              Skovhus Økonomisk Rådgivning ApS
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Erfaring, der
              <br />
              skaber værdi.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Jeg rådgiver ejerledere og direktioner i danske virksomheder — med fokus på strategi, økonomi og
              langsigtet vækst.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Kontakt mig <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/erfaring"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10"
              >
                Se erhvervsroller
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-4 rounded-sm bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-sm border border-primary-foreground/15 shadow-elegant">
              <img src={portrait} alt="Svend Erik Skovhus" className="h-[440px] w-[360px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {[
            { icon: Briefcase, label: "Aktive bestyrelsesposter", value: "11" },
            { icon: Users, label: "Medarbejdere på tværs af selskaber", value: `${totalEmployees}+` },
            { icon: TrendingUp, label: "Samlet bruttofortjeneste*", value: "365 mio. DKK" },
          ].map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <div className="rounded-sm bg-secondary p-3 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-serif text-4xl text-foreground">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-6 text-xs text-muted-foreground">
          *Samlet, seneste regnskabsår på tværs af bestyrelsesposter.
        </div>
      </section>

      {/* Intro */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent-soft">Om virksomheden</span>
            <h2 className="mt-4 font-serif text-4xl">En betroet rådgiver med rødder i Vejle.</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-primary-foreground/80">
            <p>
              Skovhus Økonomisk Rådgivning ApS er min privatdrevne rådgivningsvirksomhed. Igennem en lang karriere har
              jeg opbygget dyb indsigt i dansk erhvervsliv — både som direktør, stifter, bestyrelsesformand og
              næstformand.
            </p>
            <p>
              Jeg hjælper ejerledere og direktioner med strategi, økonomistyring, generationsskifte og governance. Min
              tilgang er pragmatisk, langsigtet og forankret i konkrete resultater.
            </p>
            <Link
              to="/om"
              className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent-soft hover:text-accent-soft/80"
            >
              Læs mere om mig <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
