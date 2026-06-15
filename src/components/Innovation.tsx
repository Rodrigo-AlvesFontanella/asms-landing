export function Innovation() {
  return (
    <section id="inovacao" className="relative overflow-hidden bg-[#061b31] py-20 text-white sm:py-28">
      <div className="asms-orb left-[-10rem] top-20 h-96 w-96 bg-teal-400/30" />
      <div className="asms-orb bottom-[-10rem] right-[-8rem] h-96 w-96 bg-blue-500/30" />
      <div className="asms-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            Diferenciais
          </span>
          <h2 className="text-3xl font-light tracking-[-0.035em] sm:text-5xl">
            Consultoria com visão de negócio, realidade operacional e linguagem do setor de saúde.
          </h2>
          <p className="text-lg font-light leading-8 text-blue-50/75">
            O trabalho vai além de recomendações genéricas: a atuação considera rotina,
            percepção de valor, estrutura interna e crescimento sustentável para clínicas e consultórios.
          </p>
        </div>

        <div className="relative grid gap-6">
          <div className="asms-dark-glass rounded-2xl p-6">
            <h3 className="text-lg font-medium text-white">
              Diagnóstico com leitura real do cenário
            </h3>
            <p className="mt-3 leading-7 text-blue-50/70">
              Antes de propor mudanças, a consultoria observa gargalos, prioridades e pontos de perda que afetam percepção e resultado.
            </p>
          </div>

          <div className="asms-dark-glass rounded-2xl p-6">
            <h3 className="text-lg font-medium text-white">
              Estratégia aplicada à rotina da clínica
            </h3>
            <p className="mt-3 leading-7 text-blue-50/70">
              As recomendações são pensadas para funcionar no dia a dia, com foco em clareza operacional, posicionamento e evolução do negócio.
            </p>
          </div>

          <div className="rounded-2xl bg-[#14b8a6] p-6 text-[#061b31] shadow-lg shadow-teal-950/20">
            <h3 className="text-lg font-semibold">Autoridade que sustenta crescimento</h3>
            <p className="mt-3 leading-7 text-[#061b31]/80">
              A combinação entre apresentação institucional, organização e decisão estratégica fortalece a imagem da clínica e sua capacidade de crescer melhor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}