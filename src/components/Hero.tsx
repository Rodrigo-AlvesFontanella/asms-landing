const metrics = [
  { label: "Diagnóstico", value: "360°" },
  { label: "Foco", value: "B2B" },
  { label: "Setor", value: "Saúde" },
];

const signals = ["Operação", "Posicionamento", "Receita", "Relacionamento"];

export function Hero() {
  return (
    <section id="inicio" className="asms-grid-bg relative overflow-hidden pb-20 pt-16 sm:pb-24 lg:pt-24">
      <div className="asms-orb left-[-8rem] top-24 h-80 w-80 bg-teal-300/45" />
      <div className="asms-orb right-[-7rem] top-10 h-96 w-96 bg-blue-400/35" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />

      <div className="asms-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl space-y-8">
          <span className="asms-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#1c3f94]">
            <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
            Open-design aplicado à consultoria em saúde
          </span>

          <div className="space-y-6">
            <h1 className="text-5xl font-light leading-[0.96] tracking-[-0.06em] text-[#061b31] sm:text-7xl lg:text-8xl">
              Estrutura, autoridade e <span className="asms-gradient-text">crescimento</span> para clínicas premium.
            </h1>
            <p className="max-w-2xl text-lg font-light leading-8 text-[#64748d] sm:text-xl">
              A Beth apoia clínicas e consultórios na organização de processos,
              posicionamento comercial e tomada de decisão com visão consultiva,
              prática e alinhada ao mercado de saúde.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {signals.map((signal) => (
              <div key={signal} className="asms-glass rounded-2xl px-4 py-3 text-sm font-medium text-[#061b31]">
                <span className="mb-2 block h-1.5 w-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#14b8a6]" />
                {signal}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-6 py-3 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#1c3f94]"
            >
              Solicitar apresentação
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white/70 px-6 py-3 font-semibold text-[#2563eb] shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white"
            >
              Ver metodologia
            </a>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="asms-card-shadow rounded-[2rem] border border-blue-100 bg-white/90 p-4 backdrop-blur lg:rotate-[0.5deg]">
            <div className="rounded-[1.5rem] bg-[#061b31] bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.22),_transparent_18rem)] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-blue-100/80">Studio consultivo</p>
                  <h2 className="mt-1 text-3xl font-light tracking-[-0.05em]">Matriz de crescimento</h2>
                </div>
                <span className="rounded-lg bg-teal-400/15 px-3 py-1 text-xs font-semibold text-teal-200 ring-1 ring-teal-300/25">
                  Ativo
                </span>
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 sm:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Score</p>
                  <p className="mt-2 text-4xl font-light">94%</p>
                  <p className="text-xs text-blue-100/65">clareza estratégica</p>
                </div>
                <div className="grid content-center gap-2">
                  <div className="flex items-center justify-between text-xs text-blue-100/70">
                    <span>maturidade da operação</span>
                    <span>alto potencial</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#14b8a6] via-[#60a5fa] to-[#2563eb]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="asms-dark-glass rounded-2xl p-4">
                    <p className="text-2xl font-light">{metric.value}</p>
                    <p className="mt-1 text-xs text-blue-100/70">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-blue-100/70">
                  <span>prioridade comercial</span>
                  <span>78%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#14b8a6] to-[#60a5fa]" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {["D", "P", "A", "R"].map((item) => (
                    <div key={item} className="rounded-lg bg-white/10 py-2 text-center text-xs font-semibold text-blue-50">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-2xl bg-white p-5 text-[#061b31]">
                {[
                  "Leitura da operação e gargalos",
                  "Plano de prioridades comerciais",
                  "Acompanhamento para implementação",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dffcf5] text-sm font-semibold text-[#0f766e]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}