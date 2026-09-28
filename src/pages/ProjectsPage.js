import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProjectGrid from '../components/ProjectGrid';
import { PROJECTS } from '../data/projects';
import { matchesQuery } from '../utils/search';

export default function ProjectsPage() {
  const { searchQuery } = useOutletContext();
  const projects = PROJECTS.filter((project) =>
    matchesQuery(searchQuery, project.title, project.description)
  );

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Every environment for the Utec product suite in one place."
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
