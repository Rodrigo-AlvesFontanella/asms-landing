export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="asms-container flex flex-col gap-4 py-8 text-sm text-[#64748d] lg:flex-row lg:items-center lg:justify-between">
        <p className="font-medium text-[#061b31]">© {new Date().getFullYear()} Beth Consultoria em Saúde.</p>
        <p className="max-w-2xl">Assessoria e consultoria para clínicas médicas e consultórios com foco em estrutura, autoridade e crescimento.</p>
      </div>
    </footer>
  );
}