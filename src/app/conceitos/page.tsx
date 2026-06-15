import Link from "next/link";

const layouts = [
  {
    title: "Layout 01 · Split Dashboard",
    href: "/premium",
    description: "Hero dividido: copy forte à esquerda e painel consultivo à direita.",
    best: "Impacto imediato e percepção de método.",
  },
  {
    title: "Layout 02 · Editorial Premium",
    href: "/executiva",
    description: "Composição mais elegante, editorial e institucional.",
    best: "Sofisticação, confiança e autoridade pessoal.",
  },
  {
    title: "Layout 03 · Funnel Diagnóstico",
    href: "/diagnostico",
    description: "Jornada com sintomas, diagnóstico, método e CTA.",
    best: "Vender o diagnóstico como serviço de entrada.",
  },
];

export default function ConceitosPage() {
  return (
    <main className="min-h-screen bg-[#061b31] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-teal-200">← Voltar para a landing principal</Link>
        <section className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Variações de layout</p>
            <h1 className="mt-5 text-5xl font-light leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              A mesma landing da Beth em três composições visuais.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-blue-50/75">
            O conteúdo e a estratégia são os mesmos: consultoria para clínicas e consultórios. O que muda é o layout, a hierarquia visual e a forma de apresentar valor.
          </p>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {layouts.map((layout, index) => (
            <article key={layout.href} className="flex min-h-[360px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex h-36 items-end rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(20,184,166,0.9),rgba(37,99,235,0.7),rgba(255,255,255,0.9))] p-4 text-[#061b31]">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold">Opção 0{index + 1}</span>
              </div>
              <h2 className="mt-6 text-3xl font-light tracking-[-0.04em]">{layout.title}</h2>
              <p className="mt-4 leading-7 text-blue-50/70">{layout.description}</p>
              <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-teal-100">{layout.best}</p>
              <Link href={layout.href} className="mt-auto inline-flex justify-center rounded-xl bg-teal-300 px-5 py-3 font-semibold text-[#061b31] hover:bg-white">
                Abrir layout
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}