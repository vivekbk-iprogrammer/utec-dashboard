import Icon from './Icon';

export default function EmptyState({
  icon = 'fa-solid fa-magnifying-glass',
  title = 'No results found',
  message = 'Try a different search term.',
}) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state-icon">
        <Icon name={icon} />
      </div>
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}
