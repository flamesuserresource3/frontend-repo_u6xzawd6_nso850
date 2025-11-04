export default function About({ cv }) {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{cv?.name || 'Your Name'}</h2>
            <p className="text-gray-600">{cv?.title || 'Product Designer / Engineer'}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              {cv?.summary || 'Write a short, compelling summary about your experience, passions, and what you love building.'}
            </p>
            {cv?.skills?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cv.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-100">{s}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
