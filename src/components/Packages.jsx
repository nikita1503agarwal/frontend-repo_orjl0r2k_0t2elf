import { motion, AnimatePresence } from 'framer-motion';

const packages = [
  {
    key: 'gamer',
    title: 'Gamer',
    color: 'from-cyan-500 to-blue-500',
    specs: ['RTX 4080', 'Ryzen 7', '32GB RAM', '1TB NVMe'],
  },
  {
    key: 'streamer',
    title: 'Streamer',
    color: 'from-fuchsia-500 to-pink-500',
    specs: ['RTX 4070', 'Core i7', '32GB RAM', '2TB NVMe'],
  },
  {
    key: 'budget',
    title: 'Budget',
    color: 'from-emerald-500 to-teal-500',
    specs: ['RTX 3060', 'Core i5', '16GB RAM', '512GB NVMe'],
  },
];

export default function Packages() {
  return (
    <section id="setups" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore Packages</h2>
          <p className="text-slate-400">Mini 3D previews transition the main scene.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <motion.button
              key={p.key}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left`}
              onClick={() => {
                const ev = new CustomEvent('package-select', { detail: { key: p.key } });
                window.dispatchEvent(ev);
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <span className="text-xs text-slate-300">Tap to preview</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-slate-300">
                  {p.specs.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
