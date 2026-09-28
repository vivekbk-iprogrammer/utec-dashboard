import { Link } from 'react-router-dom';
import { DEFAULT_ENVIRONMENTS } from '../data/projects';
import Icon from './Icon';

export default function ProjectCard({
  title,
  description,
  icon,
  theme,
  href,
  environments = DEFAULT_ENVIRONMENTS,
}) {
  return (
    <article className={`project-card ${theme}`}>
      <div className="project-content">
        <div className="project-icon">
          <Icon name={icon} />
        </div>

        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <Link to={href} className="project-arrow" aria-label={`Open ${title}`}>
          <Icon name="fa-solid fa-arrow-right" />
        </Link>
      </div>

      <div className="environment-list">
        {environments.map((environment) => (
          <span key={environment.id} className={`environment ${environment.id}`} onClick={() => window.open(environment.url, '_blank')}>
            <i />
            {environment.label}
          </span>
        ))}
      </div>
    </article>
  );
}
