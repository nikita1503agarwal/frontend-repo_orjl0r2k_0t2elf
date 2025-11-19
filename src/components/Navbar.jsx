import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_24px_rgba(34,211,238,0.6)]" />
          <span className="text-white/90 font-semibold tracking-tight">NovaCompute</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#" },
            { label: "Setups", href: "#setups" },
            { label: "Components", href: "#components" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10">
            <Search className="h-4 w-4" />
            Search
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
