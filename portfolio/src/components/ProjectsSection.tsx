import { useState } from "react";
import { GitBranch } from "lucide-react";
import { ProejctContent } from "../content/ProjectSection"; // Ensure the path is correct

export const ProjectsSection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center mb-8">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ProejctContent.projects.map((project) => (
            <div
              key={project.id}
              className="bg-card text-left p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div
                className="w-full h-48 overflow-hidden rounded-md mb-4 cursor-zoom-in"
                onClick={() => setActiveImage(project.image)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold mb-2">
                {project.name}
              </h2>

              <p className="text-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <a
                href={project.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-auto"
              >
                <GitBranch size = {20} className="inline mr-2" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-primary"
              aria-label="Close image"
            >
              ✕
            </button>

            <img
              src={activeImage}
              alt="Expanded project"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
