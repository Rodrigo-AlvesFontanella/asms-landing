const steps = [
  {
    title: "Diagnóstico da operação",
    description:
      "Mapeamos posicionamento, atendimento, processos e pontos de perda para entender a realidade da clínica ou consultório.",
  },
  {
    title: "Plano de ação prioritário",
    description:
      "Transformamos o diagnóstico em decisões práticas para fortalecer gestão, comunicação, fluxo operacional e crescimento.",
  },
  {
    title: "Acompanhamento consultivo",
    description:
      "Apoiamos a implementação com visão estratégica, indicadores e foco em evolução sustentável para o negócio de saúde.",
  },
];

export function Process() {
  return (
    <section id="metodologia" className="asms-grid-bg relative py-20 sm:py-28">
      <div className="asms-container">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
            Como a consultoria funciona
          </span>
          <h2 className="text-3xl font-light tracking-[-0.035em] text-[#061b31] sm:text-5xl">
            Método consultivo para estruturar crescimento com mais clareza e segurança.
          </h2>
          <p className="text-lg font-light leading-8 text-[#64748d]">
            A atuação da Beth combina leitura estratégica do negócio, organização prática
            da operação e acompanhamento para transformar decisão em resultado.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 lg:block" />
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dffcf5] text-lg font-semibold text-[#0f766e] transition group-hover:bg-[#14b8a6] group-hover:text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-medium text-[#061b31]">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#64748d]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}