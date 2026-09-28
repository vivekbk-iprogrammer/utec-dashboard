import { Link } from 'react-router-dom';

export default function ProfileMenu({ user }) {
  return (
    <Link to="/about" className="profile" aria-label={`View ${user.name} profile`}>
      <div className="avatar" aria-hidden="true">
        {user.initials}
      </div>

      <div className="profile-info">
        <strong>{user.name}</strong>
        <span>{user.role}</span>
      </div>
    </Link>
  );
}
