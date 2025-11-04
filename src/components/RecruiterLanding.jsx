import { Briefcase, Mail, Download, Star } from 'lucide-react';

export default function RecruiterLanding({ cv, projects }) {
  const topProjects = (projects || []).filter(p => p.featured).slice(0, 3);
  return (
    <section id="recruiters" className="relative py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">For Recruiters</h2>
            <p className="text-gray-600">A 30-second overview with quick actions</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{cv?.name || 'Your Name'}</h3>
                <p className="text-gray-700">{cv?.title || 'Product Designer / Engineer'}</p>
                {cv?.location ? (
                  <p className="text-sm text-gray-500 mt-1">{cv.location}</p>
                ) : null}
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {cv?.summary || 'Designer-engineer crafting delightful, performant products. Experience across startups and growth teams, shipping end-to-end from concept to production.'}
            </p>

            {cv?.skills?.length ? (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Core skills</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cv.skills.slice(0, 10).map((s, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-100">{s}</span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              {cv?.email ? (
                <a href={`mailto:${cv.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
                  <Mail className="h-4 w-4" /> Contact
                </a>
              ) : null}
              {cv?.resume_url ? (
                <a href={cv.resume_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50">
                  <Download className="h-4 w-4" /> View CV
                </a>
              ) : null}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <h4 className="font-semibold text-gray-900">Highlights</h4>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
              {topProjects.length ? (
                topProjects.map((p) => (
                  <li key={p.id}>
                    <a href={p.url || p.repo_url || '#'} target={p.url || p.repo_url ? '_blank' : undefined} rel="noreferrer" className="text-blue-700 hover:underline">
                      {p.title}
                    </a>
                    {p.tech_stack?.length ? (
                      <span className="text-gray-500"> — {p.tech_stack.slice(0, 3).join(', ')}</span>
                    ) : null}
                  </li>
                ))
              ) : (
                <li>Ship-ready portfolio, live CMS, and 3D interactive hero.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
