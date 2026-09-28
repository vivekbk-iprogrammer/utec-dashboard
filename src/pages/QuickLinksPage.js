import ComingSoonCard from '../components/ComingSoonCard';
import PageHeader from '../components/PageHeader';

export default function QuickLinksPage() {
  return (
    <>
      <PageHeader
        title="Quick Links"
        subtitle="Shortcuts to IFA, PET, EA, UTS, and QT will live here."
      />
      <ComingSoonCard
        icon="fa-solid fa-link"
        title="Coming soon"
        message="Quick links are not available yet. You will be able to open records from this screen soon."
      />
    </>
  );
}
