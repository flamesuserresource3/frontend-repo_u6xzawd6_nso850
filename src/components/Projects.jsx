import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Work</h2>
            <p className="text-gray-600 mt-1">Interactive cards with subtle parallax on hover</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects || []).map((p) => (
            <motion.a
              key={p.id}
              href={p.url || p.repo_url || '#'}
              target={p.url || p.repo_url ? '_blank' : undefined}
              rel="noreferrer"
              className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100" />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  {p.featured ? (
                    <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Featured</span>
                  ) : null}
                </div>
                <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
                {p.tech_stack?.length ? (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.tech_stack.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
