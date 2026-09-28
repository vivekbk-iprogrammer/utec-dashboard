import { useState } from 'react';
import { QUICK_LINKS } from '../data/quickLinks';
import QuickNavItem from './QuickNavItem';
import SectionHeader from './SectionHeader';

export default function QuickNavigation({
  items = QUICK_LINKS,
  showHeader = true,
  title = 'Jira Access',
  subtitle = 'Open any Jira record or tool directly',
}) {
  const [status, setStatus] = useState('');

  const handleOpen = (id, value) => {
    window.open(`https://utec.atlassian.net/browse/${id?.toUpperCase()}-${value}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="dashboard-section quick-section" aria-label={title}>
      {showHeader ? (
        <SectionHeader
          icon="fa-solid fa-bolt"
          title={title}
          subtitle={subtitle}
        />
      ) : null}

      <div className="quick-grid">
        {items.map((item) => (
          <QuickNavItem key={item.id} {...item} onOpen={handleOpen} />
        ))}
      </div>

     
    </section>
  );
}
