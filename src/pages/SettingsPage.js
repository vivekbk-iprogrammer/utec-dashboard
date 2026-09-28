import ComingSoonCard from '../components/ComingSoonCard';
import PageHeader from '../components/PageHeader';

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        subtitle="Account and portal preferences will be managed here."
      />
      <ComingSoonCard
        icon="fa-solid fa-gear"
        title="Coming soon"
        message="Settings are being prepared. Preference controls will appear on this screen soon."
      />
    </>
  );
}
