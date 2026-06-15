import Link from "next/link";

const concepts = [
  {
    title: "Premium Saúde",
    href: "/premium",
    label: "Elegância institucional",
    description:
      "Uma versão limpa, sofisticada e sensorial para posicionar a Beth como referência premium para clínicas que valorizam confiança, cuidado e maturidade.",
    tone: "Luxo discreto, saúde premium, autoridade calma",
    gradient: "from-amber-200 via-white to-teal-100",
  },
  {
    title: "Executiva B2B",
    href: "/executiva",
    label: "Decisão e parceria",
    description:
      "Uma variação corporativa, objetiva e preparada para reuniões com clínicas maiores, empresas, convênios e parceiros institucionais.",
    tone: "Boardroom, estratégia, clareza comercial",
    gradient: "from-blue-500 via-cyan-300 to-white",
  },
  {
    title: "Diagnóstico Estratégico",
    href: "/diagnostico",
    label: "Método de entrada",
    description:
      "Uma abordagem em formato de assessment, com score, sinais de alerta e matriz de evolução para vender consultoria como processo de alto valor.",
    tone: "Analítico, consultivo, visual de dashboard",
    gradient: "from-teal-300 via-emerald-100 to-blue-200",
  },
];

export default function ConceitosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061b31] text-white">
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_28rem),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.25),transparent_30rem)] bg-[size:48px_48px,48px_48px,auto,auto]" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-200 backdrop-blur hover:bg-white/15">
            ← Voltar para a landing principal
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-1.5 text-sm text-teal-100">
                Open Design directions
              </span>
              <h1 className="text-5xl font-light leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                Três caminhos visuais para impressionar a Beth.
              </h1>
            </div>
            <p className="max-w-2xl text-lg font-light leading-8 text-blue-50/75">
              A proposta não é mostrar apenas uma página, mas um processo profissional de direção visual: cada rota comunica uma estratégia comercial diferente para a consultoria.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {concepts.map((concept, index) => (
              <article key={concept.href} className="group flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]">
                <div className={`h-40 rounded-[1.5rem] bg-gradient-to-br ${concept.gradient} p-4 text-[#061b31]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">Conceito 0{index + 1}</p>
                  <div className="mt-10 h-2 w-24 rounded-full bg-[#061b31]/20" />
                  <div className="mt-3 h-2 w-36 rounded-full bg-[#061b31]/10" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">{concept.label}</p>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em]">{concept.title}</h2>
                <p className="mt-4 leading-7 text-blue-50/70">{concept.description}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-blue-50/80">
                  <strong className="text-white">Tom:</strong> {concept.tone}
                </div>
                <Link href={concept.href} className="mt-auto inline-flex items-center justify-center rounded-xl bg-teal-300 px-5 py-3 font-semibold text-[#061b31] transition hover:bg-white">
                  Abrir variação
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}