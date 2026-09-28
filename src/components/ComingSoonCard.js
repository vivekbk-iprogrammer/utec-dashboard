import Icon from './Icon';

export default function ComingSoonCard({
  icon = 'fa-solid fa-hourglass-half',
  title = 'Coming soon',
  message = 'This section is being prepared and will be available shortly.',
}) {
  return (
    <section className="dashboard-section coming-soon-card" aria-label={title}>
      <div className="coming-soon-icon">
        <Icon name={icon} />
      </div>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
