export function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Sobre nós
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tradição, inteligência e compromisso com o mercado de saúde.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Em 1985, Elizabeth Guedes Neves iniciou suas atividades como empresária, assessorando e buscando soluções para profissionais, seguradoras e operadoras de saúde.
          </p>
          <p className="leading-8 text-slate-600">
            Hoje, a ASMS conta com diversos profissionais e parceiros especializados: médicos, enfermeiros, dentistas, advogados, contadores e área de TI focados no mercado de saúde.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Visão</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Ser percebida pelo mercado de saúde como solução em consultoria e assessoria, por meio do conhecimento e de ferramentas eficazes e inteligentes.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Missão</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Atender de maneira eficaz as necessidades das empresas do mercado de saúde, oferecendo serviços e ferramentas de qualidade superior.
            </p>
          </div>

          <div className="rounded-3xl bg-sky-700 p-6 text-white shadow-lg shadow-sky-100">
            <h3 className="text-lg font-semibold">Negócio</h3>
            <p className="mt-3 leading-7 text-sky-50">
              Assessoria na área da saúde, aliando clientes a ferramentas em gestão, tecnologia e negócios em saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}