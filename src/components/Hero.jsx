import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onScrollToContent }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-1 rounded-full border border-white/60 shadow-sm">
            <Rocket className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-medium text-gray-700">Interactive 3D • Modern • Playful</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Parallax Portfolio with Live CMS
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Showcase your work with an immersive hero and manage your CV and projects with a built-in backend.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); onScrollToContent && onScrollToContent('projects'); }}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Explore Projects
            </a>
            <a
              href="#admin"
              onClick={(e) => { e.preventDefault(); onScrollToContent && onScrollToContent('admin'); }}
              className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition"
            >
              Edit Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
