import Link from "next/link";

const segments = ["Clínicas", "Consultórios", "Convênios", "Empresas", "Operadoras", "Parceiros"];
const solutions = [
  { title: "Operação", text: "Processos, prioridades e rotina com menos improviso." },
  { title: "Posicionamento", text: "Mensagem clara para aumentar percepção de valor." },
  { title: "B2B", text: "Apresentação institucional para conversas comerciais." },
];

export default function ExecutivaPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <header className="border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/conceitos" className="text-lg font-semibold">ASMS Executive</Link>
          <a href="#contato" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#07111f]">Agendar apresentação</a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px),radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_28rem)] bg-[size:44px_44px,44px_44px,auto]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/conceitos" className="text-sm font-semibold text-sky-300">← Ver conceitos</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Layout 02 · Editorial Premium</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.06em] sm:text-7xl">Mais estrutura, autoridade e direção para clínicas que precisam crescer melhor.</h1>
            <p className="max-w-2xl text-lg font-light leading-8 text-slate-300">A mesma landing em composição editorial: blocos amplos, contraste executivo e leitura mais institucional para valorizar a autoridade da consultoria.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-3xl bg-white p-6 text-[#07111f]">
              <p className="text-sm font-semibold text-sky-700">Board overview</p>
              <p className="mt-3 text-4xl font-light tracking-[-0.05em]">Direção estratégica para crescimento consistente.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 p-5"><p className="text-4xl font-light">3</p><p className="text-sm text-slate-300">frentes</p></div>
              <div className="rounded-2xl border border-white/10 p-5"><p className="text-4xl font-light">B2B</p><p className="text-sm text-slate-300">linguagem</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#07111f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-light tracking-[-0.04em] sm:text-5xl">Segmentos que precisam de uma atuação mais estruturada.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment) => <div key={segment} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold">{segment}</div>)}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution) => <article key={solution.title} className="rounded-3xl border border-slate-200 p-7 shadow-sm"><h3 className="text-2xl font-medium">{solution.title}</h3><p className="mt-4 leading-7 text-slate-600">{solution.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-sky-700 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em]">Uma versão para abrir portas em reuniões comerciais.</h2>
          <a href="mailto:contato@asms.com.br" className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-sky-800">Solicitar conversa</a>
        </div>
      </section>
    </main>
  );
}