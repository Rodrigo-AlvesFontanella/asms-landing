const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#inovacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/85 backdrop-blur-xl">
      <div className="asms-container flex items-center justify-between py-4">
        <a href="#inicio" className="group inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-[#061b31]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#061b31] text-sm font-bold text-white shadow-lg shadow-blue-950/15">
            A
          </span>
          <span>
            <span className="text-[#14b8a6]">AS</span>
            <span className="text-[#2563eb]">MS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#2563eb]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#1c3f94]"
        >
          Solicitar apresentação
        </a>
      </div>
    </header>
  );
}