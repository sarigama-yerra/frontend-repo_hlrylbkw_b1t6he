import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Scrolly from './components/Scrolly'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_0%_0%,rgba(249,115,22,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_100%_0%,rgba(147,51,234,0.12),transparent_60%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Scrolly />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} SentinelAI • Network Detection & Response</p>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
