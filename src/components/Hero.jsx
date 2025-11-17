import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(249,115,22,0.25),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Now with Agentic NDR
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Autonomous Network Detection & Response
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              SentinelAI watches your network, investigates anomalies, and responds in seconds. A modern AI layer automates triage and containment across your stack.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:shadow-purple-600/30 transition-all">
                Start free trial
              </a>
              <a href="#how" className="inline-flex items-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/30 transition-all">
                See how it works
              </a>
              <div className="inline-flex items-center gap-2 text-xs text-white/60">
                <div className="flex -space-x-2">
                  <img className="h-6 w-6 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/48?img=12" alt="user" />
                  <img className="h-6 w-6 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/48?img=21" alt="user" />
                  <img className="h-6 w-6 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/48?img=32" alt="user" />
                </div>
                <span>Trusted by security teams</span>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
            <div className="absolute -inset-10 opacity-50 blur-3xl bg-gradient-to-tr from-orange-500/30 via-purple-600/20 to-amber-400/20 rounded-full pointer-events-none" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-black/60">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
