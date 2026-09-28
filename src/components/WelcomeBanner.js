export default function WelcomeBanner({
  title = 'Welcome to',
  highlight = 'Utec Project Portal',
  description = 'Access your projects, repositories and tools — all in one place.',
}) {
  return (
    <section className="welcome-section">
      <div>
        <h1>
          <span aria-hidden="true">👋 </span>
          {title} <span>{highlight}</span>
        </h1>
        <p>{description}</p>
      </div>

     
    </section>
  );
}
