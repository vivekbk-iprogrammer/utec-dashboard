import ComingSoonCard from '../components/ComingSoonCard';
import PageHeader from '../components/PageHeader';

export default function DocumentationPage() {
  return (
    <>
      <PageHeader
        title="Documentation"
        subtitle="Guides for using the Utec Project Portal will be published here."
      />
      <ComingSoonCard
        icon="fa-solid fa-book"
        title="Coming soon"
        message="Documentation is not ready yet. Help articles and onboarding guides will land here soon."
      />
    </>
  );
}
