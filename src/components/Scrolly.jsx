import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Stethoscope, Cpu, Factory, Laptop, Shield } from 'lucide-react'

// Scrollytelling section that pins a 3D stage and swaps scenes/content as you scroll
export default function Scrolly() {
  const [active, setActive] = useState(0)
  const stepsRef = useRef([])

  useEffect(() => {
    const opts = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.4 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-index'))
          setActive(idx)
        }
      })
    }, opts)

    stepsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // You can swap these scene URLs with domain-specific Spline models later
  const scenes = [
    {
      title: 'Healthcare Networks',
      subtitle: 'Medical IoT • EHR • PACS',
      icon: Stethoscope,
      desc: 'Detect lateral movement across medical devices and clinical systems while respecting PHI boundaries and on-call workflows.',
      scene: 'https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode',
    },
    {
      title: 'IoT & Smart Devices',
      subtitle: 'Sensors • Cameras • Gateways',
      icon: Cpu,
      desc: 'Fingerprint unmanaged assets, baseline behavior, and auto-isolate rogue endpoints across mixed vendors and protocols.',
      scene: 'https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode',
    },
    {
      title: 'Industrial & OT',
      subtitle: 'PLC • SCADA • ICS',
      icon: Factory,
      desc: 'Monitor deterministic traffic, flag unsafe command patterns, and choreograph safe-response playbooks for OT environments.',
      scene: 'https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode',
    },
    {
      title: 'Workstations & Laptops',
      subtitle: 'Windows • macOS • Linux',
      icon: Laptop,
      desc: 'Correlate endpoint telemetry with network signals to contain device-level threats without interrupting critical work.',
      scene: 'https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode',
    },
  ]

  return (
    <section id="how" className="relative py-24">
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_10%,rgba(249,115,22,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_90%_20%,rgba(168,85,247,0.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">How it works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Agentic NDR for every environment</h2>
            <p className="mt-3 max-w-2xl text-white/70">Scroll through real-world environments. The 3D stage adapts as we show what SentinelAI observes and how it responds.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/60 text-sm">
            <Shield className="h-4 w-4 text-purple-400" />
            <span>Scroll to explore</span>
          </div>
        </div>

        {/* Layout: left steps, right sticky 3D stage */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Steps column */}
          <div>
            <div className="space-y-24">
              {scenes.map((s, i) => (
                <div
                  key={s.title}
                  data-index={i}
                  ref={(el) => (stepsRef.current[i] = el)}
                  className="relative"
                >
                  <div className="sticky top-24 lg:static">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4 transition-colors ${active === i ? 'border-white/30 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-white/60'}`}>
                      <s.icon className={`h-4 w-4 ${active === i ? 'text-white' : 'text-white/70'}`} />
                      <span>{s.subtitle}</span>
                    </div>
                    <h3 className={`text-2xl font-semibold ${active === i ? 'text-white' : 'text-white/80'}`}>{s.title}</h3>
                    <p className="mt-3 text-white/70 max-w-xl">{s.desc}</p>
                    <ul className="mt-6 space-y-2 text-sm text-white/70">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" /> Adaptive baselining with streaming graph features</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" /> Autonomous response with human-in-the-loop controls</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" /> Compliance-aware evidence and audit trails</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky 3D stage */}
          <div className="relative min-h-[420px] lg:min-h-[720px]">
            <div className="lg:sticky lg:top-24 h-[420px] sm:h-[520px] lg:h-[720px]">
              <div className="absolute -inset-10 opacity-60 blur-3xl bg-gradient-to-tr from-orange-500/30 via-purple-600/25 to-fuchsia-500/20 rounded-full pointer-events-none" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                {/* Layer 3D scenes and crossfade */}
                {scenes.map((s, i) => (
                  <div key={s.title} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? 'auto' : 'none' }}>
                    <Spline scene={s.scene} style={{ width: '100%', height: '100%' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
