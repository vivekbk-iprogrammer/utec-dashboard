import EmptyState from './EmptyState';
import RepositoryCard from './RepositoryCard';
import SectionHeader from './SectionHeader';

export default function RepositoryGrid({
  repositories,
  title = 'Repositories',
  showHeader = true,
  actionLabel = 'View All',
  actionTo = '/repositories',
}) {
  return (
    <section className="dashboard-section" aria-label={title}>
      {showHeader ? (
        <SectionHeader
          icon="fa-solid fa-code-branch"
          title={title}
          actionLabel={actionLabel}
          actionTo={actionTo}
        />
      ) : null}

      {repositories.length ? (
        <div className="repository-grid">
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} {...repository} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon="fa-solid fa-code-branch"
          title="No repositories found"
          message="Nothing matches that search. Try another repository name."
        />
      )}
    </section>
  );
}
