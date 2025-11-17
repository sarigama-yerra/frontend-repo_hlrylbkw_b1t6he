export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-24 h-48 blur-3xl bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-fuchsia-500/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Get a personalized security blueprint</h3>
              <p className="mt-3 text-white/70">Connect your environment and we’ll map exposures, baselines, and automated playbooks tailored to your stack.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Work email" className="flex-1 rounded-md bg-black/60 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600/50" />
              <button className="rounded-md bg-gradient-to-r from-orange-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/20 hover:shadow-purple-600/30 transition-all">Request demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
