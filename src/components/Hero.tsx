export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_28%),radial-gradient(circle_at_left,_rgba(14,165,233,0.2),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-sky-100">
            Inteligência, assessoria e tecnologia para o mercado de saúde
          </span>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Soluções estratégicas para transformar gestão em resultado no mercado de saúde.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A ASMS atua no Mercado de Saúde desde 1985, sediada em Porto Alegre/RS e com operação em todo o território nacional.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="rounded-full bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Conheça nossas soluções
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Saiba mais sobre a ASMS
            </a>
          </div>
        </div>

        <div className="grid gap-4 self-end rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <div className="rounded-2xl bg-white p-5 text-slate-900">
            <p className="text-sm font-semibold text-sky-700">Diferenciais ASMS</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Plataforma de inteligência construída ao longo de décadas</li>
              <li>• Conhecimento técnico aliado a tecnologia e análise de dados</li>
              <li>• Apoio estratégico para transformar custos em investimentos</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">1985</p>
              <p className="mt-1 text-sm text-slate-300">Início da atuação no mercado</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">Nacional</p>
              <p className="mt-1 text-sm text-slate-300">Atendimento em todo o Brasil</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">Multidisciplinar</p>
              <p className="mt-1 text-sm text-slate-300">Equipe com visão técnica e de gestão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}