import {
  BriefcaseMedical,
  Building2,
  HeartPulse,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseMedical,
    title: "Profissionais da Saúde",
    description:
      "Regularização de licenças, credenciamento em operadoras, plano de negócios e gestão de consultórios e clínicas.",
  },
  {
    icon: Building2,
    title: "Hospitais",
    description:
      "Credenciamento em operadoras e convênios, pesquisa de mercado e atualização do corpo clínico.",
  },
  {
    icon: HeartPulse,
    title: "Operadoras e Seguradoras",
    description:
      "Revitalização de rede credenciada e busca ativa de especialistas para avaliação médica in loco em todo o território nacional.",
  },
  {
    icon: ShieldPlus,
    title: "Grandes Empresas e Prefeituras",
    description:
      "Solução de Gestão Integral de Risco em Benefícios para reduzir custos e otimizar processos com foco em eficácia.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Nossos serviços
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Consultoria especializada para diferentes frentes do setor de saúde.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            A ASMS reúne conhecimento técnico, análise de dados e ferramentas de mercado para apoiar crescimento, eficiência e posicionamento estratégico.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}