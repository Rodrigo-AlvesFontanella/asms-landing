const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Inovação", href: "#inovacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-xl font-bold tracking-tight text-slate-900">
          <span className="text-emerald-500">AS</span>
          <span className="text-sky-700">MS</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}