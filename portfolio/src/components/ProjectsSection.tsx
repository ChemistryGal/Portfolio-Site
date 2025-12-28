import { ProejctContent } from "../content/ProjectSection";

export const ProjectsSection = () => {
  return <section id="projects" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured <span className="text-primary">Projects</span>   
        </h2>
        <p className="text-center mb-8">Here are some of my recent projects.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            {ProejctContent.projects.map((project) => (
                <div key={project.id} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                    <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                    <p className="text-foreground">{project.description}</p>
                </div>
            )) }
        </div>
    </div> 
  </section>;
};