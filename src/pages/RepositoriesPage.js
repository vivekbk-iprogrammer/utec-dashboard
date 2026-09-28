import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RepositoryGrid from '../components/RepositoryGrid';
import { REPOSITORIES } from '../data/repositories';
import { matchesQuery } from '../utils/search';

export default function RepositoriesPage() {
  const { searchQuery } = useOutletContext();
  const repositories = REPOSITORIES.filter((repository) =>
    matchesQuery(searchQuery, repository.title)
  );

  return (
    <>
      <PageHeader
        title="Repositories"
        subtitle="Jump into source, reviews, and project codebases."
      />
      <RepositoryGrid repositories={repositories} showHeader={false} />
    </>
  );
}
