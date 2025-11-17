import { Menu, Shield, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-purple-600 grid place-items-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">SentinelAI</span>
            <span className="ml-2 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/80 hidden sm:inline">Early Access</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Github className="h-4 w-4" />
              <span className="text-sm">Star us</span>
            </a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:shadow-purple-600/30 transition-all">
              Request demo
            </a>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/80 hover:text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
