import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

// Profile photo URL - replace with your actual photo
const PROFILE_PHOTO = 'https://placehold.co/200x200?text=Your+Photo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Your Name
          </h1>
          <p className="text-lg text-slate-500">
            Portfolio for MIT Media Lab
          </p>
        </header>

        {/* Main Content - Project Cards */}
        <main className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>

        {/* Footer / About Section */}
        <footer className="mt-24 pt-12 border-t border-slate-200">
          <div className="max-w-2xl mx-auto text-center">
            {/* Profile Photo */}
            <div className="mb-6">
              <img
                src={PROFILE_PHOTO}
                alt="Profile photo"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-slate-100 shadow-sm"
              />
            </div>

            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              About & Contact
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              I am a researcher and designer passionate about exploring the
              frontiers of human-computer interaction. My work investigates how
              emerging technologies can be designed to enhance human capabilities
              while respecting cognitive and social needs.
            </p>
            <p className="text-slate-500 text-sm">
              Get in touch:{' '}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-900 hover:underline font-medium"
              >
                your.email@example.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
