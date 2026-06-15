import Link from "next/link";

const segments = ["Clínicas médicas", "Consultórios", "Parceiros", "Convênios", "Empresas", "Operadoras"];

const solutions = [
  { title: "Gestão e processos", text: "Organização de fluxos, prioridades e rotinas para reduzir improviso." },
  { title: "Posicionamento", text: "Clareza de comunicação para aumentar percepção de valor no mercado." },
  { title: "Relacionamento B2B", text: "Preparação institucional para conversas com parceiros, empresas e convênios." },
];

export default function ExecutivaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/conceitos" className="text-lg font-bold text-sky-800">ASMS Executive</Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#segmentos">Segmentos</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Consultoria para decisão</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Estrutura comercial e operacional para negócios de saúde que precisam avançar.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Uma abordagem executiva para transformar diagnóstico, posicionamento e processos em uma proposta clara para clínicas, consultórios e parceiros institucionais.
            </p>
            <a href="#contato" className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400">
              Agendar apresentação
            </a>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="rounded-2xl bg-white p-5 text-slate-900">
              <p className="text-sm font-semibold text-sky-700">Foco da entrega</p>
              <p className="mt-3 text-3xl font-bold">Direção estratégica para crescimento com consistência.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-slate-300">frentes principais</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-3xl font-bold">B2B</p>
                <p className="text-sm text-slate-300">linguagem institucional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="segmentos" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Segmentos que precisam de uma atuação mais estruturada.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment) => (
              <div key={segment} className="rounded-2xl bg-white p-5 font-semibold shadow-sm ring-1 ring-slate-200">
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Soluções</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
                <h3 className="text-2xl font-semibold">{solution.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-sky-800 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Uma versão para abrir portas em reuniões comerciais.</h2>
            <p className="mt-3 text-sky-100">Ideal para apresentar serviço, maturidade e capacidade de atuação institucional.</p>
          </div>
          <a href="mailto:contato@asms.com.br" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-sky-800">
            Solicitar conversa
          </a>
        </div>
      </section>
    </main>
  );
}