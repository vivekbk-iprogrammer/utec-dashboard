import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import { CURRENT_USER } from '../data/appConfig';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About me" subtitle="Get to know the developer behind this portal." />

      <section className="dashboard-section about-card" aria-label="Profile">
        <div className="about-identity">
          <div className="avatar about-avatar" aria-hidden="true">
            {CURRENT_USER.initials}
          </div>
          <div>
            <h2>{CURRENT_USER.name}</h2>
            <p className="about-role">{CURRENT_USER.headline}</p>
            <p className="about-meta">
              <Icon name="fa-solid fa-location-dot" />
              {CURRENT_USER.location}
            </p>
          </div>
        </div>

        <p className="about-bio">{CURRENT_USER.bio}</p>
      </section>

      <section className="dashboard-section" aria-label="Social media">
        <div className="section-header">
          <div className="section-title">
            <div className="section-icon">
              <Icon name="fa-solid fa-share-nodes" />
            </div>
            <h2>Social media</h2>
          </div>
        </div>

        <div className="social-grid">
          {CURRENT_USER.socials.map((social) => (
            <a
              key={social.id}
              className={`social-card social-${social.id}`}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="social-icon">
                <Icon name={social.icon} />
              </div>
              <div>
                <strong>{social.label}</strong>
                <span>{social.handle}</span>
              </div>
              <Icon name="fa-solid fa-arrow-up-right-from-square" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
