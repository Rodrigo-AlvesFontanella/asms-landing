const services = [
  {
    icon: "CL",
    title: "Consultórios e clínicas em estruturação",
    description:
      "Organização de posicionamento, processos e prioridades para negócios de saúde que precisam sair do improviso.",
  },
  {
    icon: "ES",
    title: "Consultoria estratégica em saúde",
    description:
      "Leitura do cenário atual, definição de plano de ação e apoio para decisões mais claras e sustentáveis.",
  },
  {
    icon: "AU",
    title: "Autoridade e apresentação institucional",
    description:
      "Construção de presença mais profissional para fortalecer percepção de valor junto a pacientes, parceiros e convênios.",
  },
  {
    icon: "B2B",
    title: "Parcerias, convênios e relacionamento B2B",
    description:
      "Apoio consultivo para clínicas e consultórios que precisam amadurecer sua operação e conversar melhor com o mercado institucional.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="asms-container">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
            Frentes de atuação
          </span>
          <h2 className="text-3xl font-light tracking-[-0.035em] text-[#061b31] sm:text-5xl">
            Serviços pensados para valorizar, organizar e desenvolver negócios de saúde.
          </h2>
          <p className="text-lg font-light leading-8 text-[#64748d]">
            A proposta combina visão estratégica, clareza de prioridades e organização prática
            para clínicas e consultórios que precisam crescer com mais consistência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10 first:md:col-span-2 first:xl:col-span-2 first:bg-[#061b31] first:text-white"
              >
                <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-[#eef6ff] px-3 text-sm font-bold tracking-wide text-[#2563eb] group-first:bg-white/10 group-first:text-teal-200">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-medium text-[#061b31] group-first:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-[#64748d] group-first:text-blue-50/75">
                  {service.description}
                </p>
                <div className="mt-6 hidden h-2 overflow-hidden rounded-full bg-white/10 group-first:block">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#60a5fa]" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}