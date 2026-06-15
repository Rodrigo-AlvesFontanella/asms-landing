import Link from "next/link";

const pillars = ["Experiência percebida", "Confiança institucional", "Crescimento com método"];
const services = ["Diagnóstico premium", "Jornada de posicionamento", "Arquitetura de serviços", "Apresentação para parceiros"];

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#172033]">
      <header className="border-b border-[#172033]/10 bg-[#f8f3eb]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/conceitos" className="text-lg font-semibold tracking-tight">Beth<span className="text-teal-700">.</span>Premium</Link>
          <a href="#contato" className="rounded-xl bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10">Solicitar apresentação</a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <Link href="/conceitos" className="text-sm font-semibold text-teal-700">← Ver conceitos</Link>
            <span className="inline-flex rounded-full border border-[#172033]/10 bg-white/70 px-4 py-2 text-sm font-medium">Layout 01 · Split Dashboard</span>
            <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.06em] sm:text-7xl">Mais estrutura, autoridade e direção para clínicas que precisam crescer melhor.</h1>
            <p className="max-w-2xl text-xl font-light leading-9 text-slate-700">A mesma proposta da landing principal em composição split: narrativa consultiva de um lado e síntese estratégica visual do outro.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="rounded-xl bg-teal-700 px-6 py-3 text-center font-semibold text-white shadow-xl shadow-teal-900/15">Conversar sobre posicionamento</a>
              <a href="#metodo" className="rounded-xl border border-[#172033]/15 bg-white/50 px-6 py-3 text-center font-semibold">Conhecer método</a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#172033] p-5 text-white shadow-2xl shadow-slate-400/40">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Síntese premium</p>
              <div className="mt-8 space-y-4">
                {pillars.map((pillar, index) => (
                  <div key={pillar} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                    <p className="text-sm text-teal-200">0{index + 1}</p>
                    <h2 className="mt-2 text-2xl font-light tracking-[-0.03em]">{pillar}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Método premium</p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl">Clareza, estrutura e autoridade em uma jornada consultiva.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service} className="rounded-3xl border border-slate-200 bg-[#f8f3eb] p-6 shadow-sm">
                  <h3 className="text-xl font-medium">{service}</h3>
                  <p className="mt-3 leading-7 text-slate-600">Entrega pensada para transformar percepção, rotina e tomada de decisão em um padrão mais profissional.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#172033] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl">Uma landing para posicionar a consultoria como referência.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Conceito ideal para apresentar sofisticação, confiança e valor institucional.</p>
          <a href="mailto:contato@asms.com.br" className="mt-8 inline-flex rounded-xl bg-teal-300 px-7 py-3 font-semibold text-[#172033]">Solicitar apresentação estratégica</a>
        </div>
      </section>
    </main>
  );
}