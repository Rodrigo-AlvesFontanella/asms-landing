import Link from "next/link";

const concepts = [
  {
    title: "Premium institucional",
    href: "/premium",
    label: "Para transmitir autoridade e sofisticação",
    description:
      "Uma direção visual elegante, com narrativa de posicionamento, experiência e confiança para clínicas e parceiros que valorizam maturidade institucional.",
    tone: "Sério, sofisticado e consultivo",
  },
  {
    title: "Executiva B2B",
    href: "/executiva",
    label: "Para reuniões comerciais e parcerias",
    description:
      "Uma apresentação objetiva, orientada a decisores, com foco em problemas de gestão, frentes de atuação e capacidade de estruturar relacionamento institucional.",
    tone: "Corporativo, direto e estratégico",
  },
  {
    title: "Diagnóstico estratégico",
    href: "/diagnostico",
    label: "Para vender consultoria como processo de alto valor",
    description:
      "Uma narrativa centrada em sintomas, leitura do cenário, plano de ação e acompanhamento, reforçando que a consultoria começa pela clareza.",
    tone: "Analítico, prático e especialista",
  },
];

export default function ConceitosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.24),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">
            ← Voltar para a versão base
          </Link>

          <div className="mt-12 max-w-4xl space-y-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-sky-100">
              Direções de layout para apresentação
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Três caminhos visuais para posicionar a consultoria com mais valor percebido.
            </h1>
            <p className="text-lg leading-8 text-slate-300 sm:text-xl">
              Cada conceito comunica uma intenção comercial diferente: autoridade premium,
              objetividade executiva ou diagnóstico estratégico. A comparação ajuda a cliente
              escolher a narrativa que mais combina com o momento da marca.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {concepts.map((concept) => (
              <article
                key={concept.href}
                className="flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {concept.label}
                </p>
                <h2 className="mt-5 text-2xl font-bold">{concept.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{concept.description}</p>
                <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
                  <strong className="text-white">Tom:</strong> {concept.tone}
                </div>
                <Link
                  href={concept.href}
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Ver conceito
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}