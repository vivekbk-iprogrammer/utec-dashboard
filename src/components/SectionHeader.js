import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function SectionHeader({ icon, title, subtitle, actionLabel, actionTo }) {
  return (
    <div className="section-header">
      <div className="section-title">
        {icon ? (
          <div className="section-icon">
            <Icon name={icon} />
          </div>
        ) : null}

        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>

      {actionLabel && actionTo ? (
        <Link to={actionTo} className="view-all">
          {actionLabel}
          <Icon name="fa-solid fa-arrow-right" />
        </Link>
      ) : null}
    </div>
  );
}
