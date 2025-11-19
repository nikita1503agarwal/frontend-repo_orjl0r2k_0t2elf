import { motion } from 'framer-motion';
import { Sparkles, BadgePercent, Clock } from 'lucide-react';

export default function PromoPanel() {
  return (
    <section className="relative py-16" id="promos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Holographic 10+1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="flex items-center gap-3 mb-4">
              <BadgePercent className="h-5 w-5 text-cyan-300" />
              <h3 className="text-xl font-semibold text-white">MEGA BUNDLE: Get 10, Get 1 FREE!</h3>
            </div>

            {/* Orbiting cards representing 11 packages */}
            <div className="relative h-64">
              {[...Array(11)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-16 w-24 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                  style={{ rotate: i * (360 / 11) + 'deg', transformOrigin: '0 140px' }}
                  animate={{ rotate: [i * (360 / 11), i * (360 / 11) + 360] }}
                  transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
                >
                  <div className="h-full w-full grid place-items-center text-cyan-100 text-xs">
                    Setup {i + 1}
                  </div>
                </motion.div>
              ))}

              {/* Central primary card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-40 rounded-xl border border-fuchsia-400/50 bg-fuchsia-400/10 backdrop-blur-md grid place-items-center text-fuchsia-100 font-semibold">
                Featured Setup
              </div>
            </div>

            {/* Value counter */}
            <div className="mt-4 flex items-center gap-4">
              <div className="text-3xl font-black tracking-tight">
                <span className="text-cyan-300">10</span>
                <span className="mx-2 text-slate-400">→</span>
                <span className="text-fuchsia-300">11</span>
                <span className="ml-2 text-slate-300 text-base align-super">FREE!</span>
              </div>
              <span className="text-sm text-slate-400">Visual orbit shows bundled units</span>
            </div>
          </motion.div>

          {/* Micro promos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-fuchsia-300" />
              <h3 className="text-xl font-semibold text-white">Live Hotspots</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>• Hover a component to highlight with a neon rim</li>
              <li>• Tooltips reveal key specs like “NVIDIA RTX 4080”</li>
              <li>• Click to open a sleek side panel with pricing & add-to-cart</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-amber-200">
              <Clock className="h-4 w-4" />
              Limited stock indicators pulse near scarce items
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
