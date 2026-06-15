import Link from "next/link";

const symptoms = ["Improviso operacional", "Valor pouco percebido", "Crescimento sem direção", "Parcerias sem apresentação"];
const journey = [
  { step: "01", title: "Leitura", text: "Mapeamento da operação, comunicação e pontos de perda." },
  { step: "02", title: "Score", text: "Priorização visual do que mais impacta percepção e resultado." },
  { step: "03", title: "Plano", text: "Roteiro acompanhado para transformar diagnóstico em ação." },
];

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#edf7f5] text-[#061b31]">
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute left-[-8rem] top-16 h-96 w-96 rounded-full bg-teal-300/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative space-y-7">
            <Link href="/conceitos" className="text-sm font-semibold text-teal-700">← Ver conceitos</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Direção 03 · Diagnóstico Estratégico</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.06em] sm:text-7xl">Antes de crescer, a clínica precisa enxergar onde perde valor.</h1>
            <p className="max-w-2xl text-lg font-light leading-8 text-slate-700">Uma landing em formato de assessment para vender a consultoria como processo de leitura, clareza e tomada de decisão.</p>
            <a href="#diagnostico" className="inline-flex rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white shadow-xl shadow-teal-900/15">Entender diagnóstico</a>
          </div>

          <div className="rounded-[2rem] bg-[#061b31] p-5 text-white shadow-2xl shadow-teal-900/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-teal-200">Assessment visual</p>
                  <h2 className="mt-2 text-4xl font-light tracking-[-0.05em]">Score 82%</h2>
                </div>
                <span className="rounded-xl bg-teal-300 px-3 py-1 text-xs font-semibold text-[#061b31]">prioridade alta</span>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-gradient-to-r from-teal-300 to-sky-400" /></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {symptoms.map((symptom) => <div key={symptom} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-blue-50">✓ {symptom}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Como a transformação começa</p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl">Do sintoma à direção: um processo para organizar decisões.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {journey.map((item) => <article key={item.step} className="rounded-3xl border border-teal-100 bg-[#edf7f5] p-7 shadow-sm"><p className="text-sm font-bold text-teal-700">{item.step}</p><h3 className="mt-4 text-2xl font-medium">{item.title}</h3><p className="mt-4 leading-7 text-slate-600">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#061b31] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <h2 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl">A consultoria deixa de parecer serviço genérico e passa a ser percebida como método.</h2>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur">
            <p className="text-lg leading-8 text-blue-50/75">Este conceito mostra problema, leitura profissional e caminho de ação. Ajuda a vender confiança antes mesmo da primeira reunião.</p>
            <a href="mailto:contato@asms.com.br" className="mt-6 inline-flex rounded-xl bg-teal-300 px-6 py-3 font-semibold text-[#061b31]">Solicitar diagnóstico inicial</a>
          </div>
        </div>
      </section>
    </main>
  );
}