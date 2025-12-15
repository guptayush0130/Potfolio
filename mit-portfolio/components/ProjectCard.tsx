import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Media Section - 45% on desktop */}
      <div className="w-full md:w-[45%] flex-shrink-0 p-4 md:p-6">
        {/* Primary Media */}
        {project.mediaType === 'image' ? (
          <img
            src={project.mediaSrc}
            alt={project.title}
            className="object-cover w-full h-auto min-h-[280px] rounded-md"
          />
        ) : (
          <iframe
            src={project.mediaSrc}
            title={project.title}
            className="w-full aspect-video rounded-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Additional Images Gallery */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {project.additionalImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${project.title} - detail ${index + 1}`}
                className="object-cover w-full h-32 rounded-md"
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section - 55% on desktop */}
      <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          {project.title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Learning Process Section */}
        <div className="mt-auto bg-blue-50 p-4 rounded-lg border border-blue-100">
          <span className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2 block">
            Learning Process
          </span>
          <p className="text-slate-700 text-sm leading-relaxed">
            {project.processNotes}
          </p>

          {/* Process Images */}
          {project.processImages && project.processImages.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {project.processImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${project.title} - process ${index + 1}`}
                  className="object-cover w-full h-24 rounded border border-blue-100"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
