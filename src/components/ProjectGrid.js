import EmptyState from './EmptyState';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  if (!projects.length) {
    return (
      <EmptyState
        icon="fa-solid fa-folder-open"
        title="No projects found"
        message="Nothing matches that search. Try another project name."
      />
    );
  }

  return (
    <section className="projects-grid" aria-label="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}
