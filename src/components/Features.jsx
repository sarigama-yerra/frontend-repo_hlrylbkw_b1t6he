import { ShieldCheck, Zap, Radar, Lock, Activity, Cpu } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Real-time NDR',
    desc: 'Deep packet analytics and behavior models surface threats instantly.'
  },
  {
    icon: Radar,
    title: 'Anomaly hunting',
    desc: 'Continuous graph-based detection across users, devices, and services.'
  },
  {
    icon: Zap,
    title: 'Agentic response',
    desc: 'Autonomous workflows that triage, enrich, and isolate in seconds.'
  },
  {
    icon: Activity,
    title: 'Attack storylines',
    desc: 'Chain events into narratives with root cause and blast radius.'
  },
  {
    icon: Lock,
    title: 'Zero-trust ready',
    desc: 'Policy-aware enforcement and segmentation integrations.'
  },
  {
    icon: Cpu,
    title: 'LLM co-pilot',
    desc: 'Ask in natural language and generate investigations on demand.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_600px_at_90%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for modern SecOps</h2>
          <p className="text-sm text-white/60 max-w-md">From detection to automated response, streamline your workflows without compromising control.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-all">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-orange-500/10 to-purple-600/10 transition-opacity" />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-orange-500 to-purple-600 grid place-items-center mb-4">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium mb-1">{f.title}</h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
