export default function PageHeader({ title, subtitle, children }) {
  return (
    <section className="welcome-section">
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
