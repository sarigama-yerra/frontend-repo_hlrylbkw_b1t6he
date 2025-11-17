import { ShieldCheck, Zap, Radar } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    desc: 'Evaluate in a lab or small network.',
    highlights: ['1 site', 'Up to 50 devices', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$899',
    period: '/mo',
    desc: 'For growing teams needing automation.',
    highlights: ['Up to 5 sites', '2k devices', 'Agentic playbooks', 'Email support'],
    featured: true,
    icon: Zap,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Scale across complex, regulated environments.',
    highlights: ['Unlimited sites', 'SAML/SSO', 'Custom SLAs', 'Dedicated support'],
    icon: ShieldCheck,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-24 h-48 blur-3xl bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-fuchsia-500/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-white/50">Pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Choose your plan</h2>
          <p className="mt-3 text-white/70">Simple pricing that scales with your environment.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 bg-white/[0.03] ${t.featured ? 'border-white/20 ring-1 ring-purple-500/20' : 'border-white/10'}`}>
              {t.featured && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-orange-500/10 to-purple-600/10" />
              )}
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  {t.icon ? <t.icon className="h-5 w-5 text-white/70" /> : <Radar className="h-5 w-5 text-white/70" />}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-white">{t.price}</span>
                  <span className="text-white/60">{t.period}</span>
                </div>
                <p className="mt-2 text-white/70 text-sm">{t.desc}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" /> {h}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-md bg-gradient-to-r from-orange-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:shadow-purple-600/30 transition-all">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
