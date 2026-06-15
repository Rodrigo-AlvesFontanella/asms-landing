export function Contact() {
  return (
    <section id="contato" className="asms-grid-bg relative overflow-hidden py-20 sm:py-28">
      <div className="asms-orb left-[-8rem] top-0 h-80 w-80 bg-teal-300/35" />
      <div className="asms-container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
            Próximo passo
          </span>
          <h2 className="text-3xl font-light tracking-[-0.035em] text-[#061b31] sm:text-5xl">
            Vamos conversar sobre a realidade da sua clínica ou consultório?
          </h2>
          <p className="text-lg font-light leading-8 text-[#64748d]">
            Se você busca mais organização, melhor posicionamento e uma estrutura mais clara para crescer, podemos iniciar uma conversa estratégica.
          </p>
          <div className="asms-glass rounded-2xl p-6">
            <p className="text-sm text-[#64748d]">Atendimento consultivo</p>
            <p className="mt-2 text-lg font-semibold text-[#061b31]">Clínicas médicas e consultórios</p>
            <p className="mt-1 text-[#64748d]">Relacionamento institucional, diagnóstico e orientação estratégica</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#1c3f94]">
              <span className="rounded-lg bg-white/70 py-2">mapa</span>
              <span className="rounded-lg bg-white/70 py-2">plano</span>
              <span className="rounded-lg bg-white/70 py-2">ação</span>
            </div>
          </div>
        </div>

        <form className="asms-card-shadow rounded-[2rem] border border-blue-100 bg-white p-6 text-[#061b31] sm:p-8">
          <div className="mb-6 rounded-2xl bg-[#061b31] p-5 text-white">
            <p className="text-sm text-blue-50/70">Briefing inicial</p>
            <p className="mt-1 text-2xl font-light tracking-[-0.04em]">Comece com um diagnóstico estratégico</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Nome</span>
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-lg border border-blue-100 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Telefone</span>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="rounded-lg border border-blue-100 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-medium">E-mail</span>
            <input
              type="email"
              placeholder="voce@empresa.com"
              className="rounded-lg border border-blue-100 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-medium">Mensagem</span>
            <textarea
              rows={5}
              placeholder="Conte um pouco sobre a clínica, consultório ou necessidade atual"
              className="rounded-lg border border-blue-100 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <a
            href="mailto:contato@asms.com.br"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#2563eb] px-6 py-3 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#1c3f94]"
          >
            Solicitar contato estratégico
          </a>
        </form>
      </div>
    </section>
  );
}