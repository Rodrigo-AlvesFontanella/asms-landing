export function Contact() {
  return (
    <section id="contato" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Contato
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos conversar sobre a sua operação no mercado de saúde?
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            Entre em contato para conhecer soluções em consultoria, assessoria, gestão, inteligência e tecnologia para sua realidade.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Sede</p>
            <p className="mt-2 text-lg font-semibold">Porto Alegre, RS</p>
            <p className="mt-1 text-slate-300">Atendimento em todo o território nacional</p>
          </div>
        </div>

        <form className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Nome</span>
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-600"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Telefone</span>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-600"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-medium">E-mail</span>
            <input
              type="email"
              placeholder="voce@empresa.com"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-600"
            />
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-medium">Mensagem</span>
            <textarea
              rows={5}
              placeholder="Conte um pouco sobre a sua necessidade"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-600"
            />
          </label>

          <a
            href="mailto:contato@asms.com.br"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            Enviar contato
          </a>
        </form>
      </div>
    </section>
  );
}