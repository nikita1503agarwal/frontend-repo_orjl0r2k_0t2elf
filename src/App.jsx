import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import PromoPanel from './components/PromoPanel';
import Packages from './components/Packages';

function App() {
  useEffect(() => {
    // Example: listen for package selection to trigger effects in the hero
    const handler = (e) => {
      // You could route this to Spline via state or query params
      // For now we just log; implementation can map to camera/bookmarks
      console.log('Package selected:', e.detail);
    };
    window.addEventListener('package-select', handler);
    return () => window.removeEventListener('package-select', handler);
  }, []);

  const onSpin = () => {
    // Placeholder action for 360 spin trigger; Spline anims can be bound via refs & state
    const el = document.getElementById('root');
    if (el) el.scrollBy({ top: 1, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_40%)]" />

      <Navbar />
      <Hero3D onSpin={onSpin} />
      <PromoPanel />
      <Packages />

      <footer id="contact" className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
          © {new Date().getFullYear()} NovaCompute. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
