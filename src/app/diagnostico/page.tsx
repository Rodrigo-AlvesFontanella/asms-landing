import Link from "next/link";

const symptoms = [
  "Processos dependem de improviso",
  "A comunicação não transmite o valor real",
  "A clínica cresce sem direção comercial clara",
  "Parcerias e convênios não encontram uma apresentação consistente",
];

const journey = [
  { step: "01", title: "Leitura do cenário", text: "Mapeamento da operação, posicionamento, rotina e gargalos de crescimento." },
  { step: "02", title: "Priorização", text: "Definição do que precisa ser organizado primeiro para gerar clareza e confiança." },
  { step: "03", title: "Plano acompanhado", text: "Apoio consultivo para transformar diagnóstico em ação prática e evolução percebida." },
];

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-emerald-100 lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-7">
            <Link href="/conceitos" className="text-sm font-semibold text-emerald-700">← Ver todos os conceitos</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Diagnóstico estratégico</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Antes de crescer, sua clínica precisa enxergar onde está perdendo valor.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Uma landing que posiciona a consultoria como processo de leitura, organização e decisão — ideal para vender uma atuação mais estratégica e menos genérica.
            </p>
            <a href="#diagnostico" className="inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500">
              Entender diagnóstico
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Sinais de alerta</p>
            <div className="mt-6 space-y-3">
              {symptoms.map((symptom) => (
                <div key={symptom} className="rounded-2xl bg-white/10 p-4 text-slate-100">
                  ✓ {symptom}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Como a transformação começa</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Do sintoma à direção: um processo para organizar decisões.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {journey.map((item) => (
              <article key={item.step} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-bold text-emerald-700">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <h2 className="text-4xl font-bold tracking-tight">
            A consultoria deixa de parecer “serviço genérico” e passa a ser percebida como método.
          </h2>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-lg leading-8 text-slate-300">
              Este conceito é forte para convencer porque mostra problema, leitura profissional e caminho de ação. Ele ajuda a cliente a vender confiança antes mesmo da primeira reunião.
            </p>
            <a href="mailto:contato@asms.com.br" className="mt-6 inline-flex rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950">
              Solicitar diagnóstico inicial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}