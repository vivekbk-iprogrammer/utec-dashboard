import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="Page not found"
        subtitle="That route does not exist in the Utec Project Portal."
      />
      <Link to="/" className="view-all">
        Back to home
      </Link>
    </>
  );
}
