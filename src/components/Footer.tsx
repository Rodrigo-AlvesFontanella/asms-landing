export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} ASMS. Todos os direitos reservados.</p>
        <p>Consultoria, assessoria, inteligência e tecnologia para o mercado de saúde.</p>
      </div>
    </footer>
  );
}