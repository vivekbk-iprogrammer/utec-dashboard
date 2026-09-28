import { useOutletContext } from 'react-router-dom';
import ProjectGrid from '../components/ProjectGrid';
import QuickNavigation from '../components/QuickNavigation';
import RepositoryGrid from '../components/RepositoryGrid';
import WelcomeBanner from '../components/WelcomeBanner';
import { PROJECTS } from '../data/projects';
import { REPOSITORIES } from '../data/repositories';
import { matchesQuery } from '../utils/search';

export default function HomePage() {
  const { searchQuery } = useOutletContext();

  const projects = PROJECTS.filter(
    (project) =>
      project.isHomePage && matchesQuery(searchQuery, project.title, project.description)
  );
  const repositories = REPOSITORIES.filter(
    (repository) =>
      repository.isHomePage && matchesQuery(searchQuery, repository.title)
  );

  return (
    <>
      <WelcomeBanner />
      <ProjectGrid projects={projects} />
      <RepositoryGrid repositories={repositories} />
      <QuickNavigation />
    </>
  );
}
