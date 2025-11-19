import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D({ onSpin }) {
  return (
    <section className="relative min-h-[92vh] pt-16 overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients & Glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[140px]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            Build. Glow. Game.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-lg text-slate-300"
          >
            Explore cyberpunk-lite rigs with fluid 3D motion. Rotate, compare, and customize.
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={onSpin}
              className="relative overflow-hidden group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-white font-semibold shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              <span className="relative z-10">Spin 360°</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10">
              Customize Setup
            </button>
          </div>

          {/* Promo Glyphs */}
          <div className="mt-8 flex items-center gap-3">
            <div className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-200 text-sm">Real‑time 3D</div>
            <div className="rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-200 text-sm">PBR‑ready</div>
            <div className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-sm">Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
}
