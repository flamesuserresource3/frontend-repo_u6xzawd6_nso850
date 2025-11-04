import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function AdminPanel({ onUpdated }) {
  // Minimal CV fields
  const [cv, setCv] = useState({ name: '', title: '', summary: '', skills: '' });

  // Minimal Project fields
  const [project, setProject] = useState({ title: '', description: '', tech_stack: '', url: '', repo_url: '', featured: false });

  const handleCvSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: cv.name,
      title: cv.title,
      summary: cv.summary,
      skills: cv.skills
        ? cv.skills.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
      experience: [],
      education: [],
      location: undefined,
      email: undefined,
      phone: undefined,
      website: undefined,
      avatar_url: undefined,
    };
    const res = await fetch(`${API_BASE}/api/cv`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      onUpdated && onUpdated();
      setCv({ name: '', title: '', summary: '', skills: '' });
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: project.title,
      description: project.description,
      tech_stack: project.tech_stack
        ? project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      url: project.url || undefined,
      repo_url: project.repo_url || undefined,
      image_url: undefined,
      featured: !!project.featured,
    };
    const res = await fetch(`${API_BASE}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      onUpdated && onUpdated();
      setProject({ title: '', description: '', tech_stack: '', url: '', repo_url: '', featured: false });
    }
  };

  return (
    <section id="admin" className="relative py-16 sm:py-24 bg-white">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Content Manager</h2>
        <p className="text-gray-600 mt-1">Add a CV entry and create portfolio projects</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleCvSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Create CV</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Name" value={cv.name} onChange={(e) => setCv({ ...cv, name: e.target.value })} required />
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Title" value={cv.title} onChange={(e) => setCv({ ...cv, title: e.target.value })} required />
              <textarea className="px-3 py-2 rounded border border-gray-300" rows={4} placeholder="Summary" value={cv.summary} onChange={(e) => setCv({ ...cv, summary: e.target.value })} />
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Skills (comma separated)" value={cv.skills} onChange={(e) => setCv({ ...cv, skills: e.target.value })} />
            </div>
            <button type="submit" className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Save CV</button>
          </form>

          <form onSubmit={handleProjectSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Add Project</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Title" value={project.title} onChange={(e) => setProject({ ...project, title: e.target.value })} required />
              <textarea className="px-3 py-2 rounded border border-gray-300" rows={4} placeholder="Description" value={project.description} onChange={(e) => setProject({ ...project, description: e.target.value })} />
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Tech stack (comma separated)" value={project.tech_stack} onChange={(e) => setProject({ ...project, tech_stack: e.target.value })} />
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Live URL" value={project.url} onChange={(e) => setProject({ ...project, url: e.target.value })} />
              <input className="px-3 py-2 rounded border border-gray-300" placeholder="Repo URL" value={project.repo_url} onChange={(e) => setProject({ ...project, repo_url: e.target.value })} />
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={project.featured} onChange={(e) => setProject({ ...project, featured: e.target.checked })} />
                Featured project
              </label>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Add Project</button>
          </form>
        </div>
      </div>
    </section>
  );
}
