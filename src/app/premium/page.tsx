import Link from "next/link";

const pillars = [
  "Posicionamento com autoridade",
  "Estruturação da operação",
  "Apresentação institucional para parceiros",
];

const services = [
  "Diagnóstico estratégico da clínica",
  "Organização de processos e prioridades",
  "Fortalecimento da comunicação institucional",
  "Preparação para crescimento e relacionamento B2B",
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-950">
      <header className="border-b border-slate-900/10 bg-[#f7f3ec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/conceitos" className="font-bold tracking-tight">
            Beth<span className="text-emerald-700">.</span>Premium
          </Link>
          <a
            href="#contato"
            className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white"
          >
            Solicitar apresentação
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-slate-900/10 bg-white/70 px-4 py-1 text-sm font-medium text-slate-700">
            Consultoria estratégica para negócios de saúde
          </span>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Uma presença institucional à altura da experiência da sua consultoria.
          </h1>
          <p className="max-w-2xl text-xl leading-9 text-slate-700">
            Para clínicas e consultórios que precisam crescer com estrutura,
            comunicação consistente e uma percepção de valor mais madura diante do mercado.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-emerald-700 px-6 py-3 text-center font-semibold text-white"
            >
              Conversar sobre posicionamento
            </a>
            <a
              href="#metodo"
              className="rounded-full border border-slate-900/15 px-6 py-3 text-center font-semibold"
            >
              Conhecer método
            </a>
          </div>
        </div>

        <div className="self-end rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-400/30">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Síntese de valor</p>
          <div className="mt-8 space-y-5">
            {pillars.map((pillar, index) => (
              <div key={pillar} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm text-slate-400">0{index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold">{pillar}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Método premium
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Clareza, estrutura e autoridade em uma jornada consultiva.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service} className="rounded-3xl border border-slate-200 bg-[#f7f3ec] p-6">
                  <h3 className="text-lg font-semibold">{service}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Entrega pensada para transformar percepção, rotina e tomada de decisão em um padrão mais profissional.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Uma landing para posicionar a consultoria como referência.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Conceito ideal para apresentar uma marca com mais sofisticação, confiança e valor institucional.
          </p>
          <a
            href="mailto:contato@asms.com.br"
            className="mt-8 inline-flex rounded-full bg-emerald-400 px-7 py-3 font-semibold text-slate-950"
          >
            Solicitar apresentação estratégica
          </a>
        </div>
      </section>
    </main>
  );
}