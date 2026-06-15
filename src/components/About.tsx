export function About() {
  return (
    <section id="sobre" className="relative bg-white py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="asms-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-7">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
            Sobre a consultoria
          </span>
          <h2 className="text-3xl font-light tracking-[-0.035em] text-[#061b31] sm:text-5xl">
            Consultoria estratégica para clínicas e consultórios que precisam crescer com estrutura.
          </h2>
          <p className="text-lg font-light leading-8 text-[#64748d]">
            A atuação da Beth foi desenhada para apoiar negócios de saúde que precisam
            alinhar posicionamento, organização e desenvolvimento com mais segurança.
          </p>
          <p className="leading-8 text-[#64748d]">
            O foco está em transformar rotina desorganizada, comunicação difusa e decisões
            sem direção em uma operação mais clara, valorizada e preparada para evoluir.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl bg-[#061b31] p-5 text-white">
              <p className="text-3xl font-light">+clareza</p>
              <p className="mt-2 text-sm text-blue-50/70">menos improviso na decisão</p>
            </div>
            <div className="rounded-2xl bg-[#dffcf5] p-5 text-[#061b31]">
              <p className="text-3xl font-light">+valor</p>
              <p className="mt-2 text-sm text-[#0f766e]">percepção institucional</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] bg-[#f7fbff] p-4 ring-1 ring-blue-100">
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 sm:block">
            Estratégia aplicada
          </div>
          <div className="grid gap-5">
          <div className="asms-card-shadow rounded-2xl border border-blue-100 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">01</p>
            <h3 className="mt-3 text-xl font-medium text-[#061b31]">Posicionamento</h3>
            <p className="mt-3 leading-7 text-[#64748d]">
              Fazer com que clínicas e consultórios sejam percebidos com mais autoridade,
              organização e consistência diante de pacientes, equipes e parceiros.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-[#f7fbff] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">02</p>
            <h3 className="mt-3 text-xl font-medium text-[#061b31]">Atuação</h3>
            <p className="mt-3 leading-7 text-[#64748d]">
              Atender negócios de saúde com leitura estratégica, priorização prática e
              acompanhamento próximo para fortalecer gestão, comunicação e crescimento.
            </p>
          </div>

          <div className="rounded-2xl bg-[#061b31] p-6 text-white shadow-xl shadow-blue-950/15">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">03</p>
            <h3 className="mt-3 text-xl font-medium">Foco</h3>
            <p className="mt-3 leading-7 text-blue-50/80">
              Assessoria e consultoria para clínicas médicas e consultórios que desejam
              operar melhor, comunicar mais valor e crescer com mais estrutura.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}