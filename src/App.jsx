import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AdminPanel from './components/AdminPanel';
import RecruiterLanding from './components/RecruiterLanding';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function App() {
  const [cv, setCv] = useState(null);
  const [projects, setProjects] = useState([]);

  const refs = {
    projects: useRef(null),
    admin: useRef(null),
    recruiters: useRef(null),
  };

  const scrollTo = (key) => {
    const el = refs[key]?.current;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const loadData = async () => {
    try {
      const [cvRes, projRes] = await Promise.all([
        fetch(`${API_BASE}/api/cv`),
        fetch(`${API_BASE}/api/projects`),
      ]);
      if (cvRes.ok) setCv(await cvRes.json());
      if (projRes.ok) setProjects(await projRes.json());
    } catch (e) {
      // noop
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero onScrollToContent={scrollTo} />

      <div ref={refs.recruiters}>
        <RecruiterLanding cv={cv} projects={projects} />
      </div>

      <div ref={refs.projects}>
        <Projects projects={projects} />
      </div>

      <About cv={cv} />

      <div ref={refs.admin}>
        <AdminPanel onUpdated={loadData} />
      </div>

      <footer className="py-10 text-center text-sm text-gray-500">
        <p>Built with a modern 3D hero, a recruiter-focused overview, and a live backend CMS.</p>
      </footer>
    </div>
  );
}

export default App;
