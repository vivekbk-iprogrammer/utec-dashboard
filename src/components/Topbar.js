import { BRAND, CURRENT_USER } from '../data/appConfig';
import Icon from './Icon';
import ProfileMenu from './ProfileMenu';
import SearchBox from './SearchBox';

export default function Topbar({
  searchQuery,
  onSearchChange,
  searchInputRef,
  isSidebarOpen,
  onToggleSidebar,
}) {
  return (
    <header className="topbar">
      <button
        type="button"
        className="menu-toggle"
        aria-label={isSidebarOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isSidebarOpen}
        aria-controls="app-sidebar"
        onClick={onToggleSidebar}
      >
        <Icon name={isSidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>

      <div className="mobile-logo">
        <Icon name="fa-solid fa-code" />
        <strong>
          {BRAND.name} <span>{BRAND.product}</span>
        </strong>
      </div>

      <SearchBox value={searchQuery} onChange={onSearchChange} inputRef={searchInputRef} />

      <div className="header-actions">
      

        <ProfileMenu user={CURRENT_USER} />
      </div>
    </header>
  );
}
