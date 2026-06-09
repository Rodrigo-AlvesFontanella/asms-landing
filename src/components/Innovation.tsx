export function Innovation() {
  return (
    <section id="inovacao" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Tecnologia e inovação
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Smart Office Saúde: tecnologia aplicada à rotina do consultório.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            A ASMS integra soluções de tecnologia, informática e telecomunicações utilizadas por grandes empresas e as leva para o consultório do profissional da saúde.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Estrutura moderna e conectada
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Modernização com uso de PABX na nuvem, apoio tecnológico e organização de processos para dar mais produtividade ao atendimento.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Caminho para o consultório paperless
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Adoção de práticas e ferramentas que reduzem papel, melhoram o fluxo de informação e elevam o controle operacional.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-500 p-6 text-slate-950 shadow-lg shadow-emerald-100">
            <h3 className="text-lg font-semibold">Inteligência que gera eficiência</h3>
            <p className="mt-3 leading-7 text-slate-900/85">
              Utilizamos tecnologia em todos os nossos serviços para ampliar segurança, controle e eficiência na gestão de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}