import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function RepositoryCard({ title, icon, href }) {
  return (
    <Link to={href} target="_blank" className="repository">
      <div className="repo-icon">
        <Icon name={icon} />
      </div>
      <span>{title}</span>
      <Icon name="fa-solid fa-chevron-right" />
    </Link>
  );
}
