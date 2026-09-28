import { NavLink } from "react-router-dom";
import { BRAND } from "../data/appConfig";
import { NAV_ITEMS } from "../data/navigation";
import Icon from "./Icon";
import utecLogo from "../assets/logo.jpeg";

export default function Sidebar({ isOpen = false, onNavigate }) {
  return (
    <aside
      id="app-sidebar"
      className={`sidebar${isOpen ? " is-open" : ""}`}
      aria-label="Primary"
    >
      <div className="sidebar-logo">
        <div className="logo-icon" aria-hidden="true">
          <img src={utecLogo} alt="UTEC Logo" height={42} width={42} className="logo-icon-img"/>
        </div>
        <div>
          <h2>
            {BRAND.name} <span>{BRAND.product}</span>
          </h2>
          <p>{BRAND.tagline}</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={onNavigate}
          >
            {({ isActive }) => (
              <>
                <Icon name={item.icon} />
                <span>{item.label}</span>
                {isActive ? (
                  <span className="sr-only">(current page)</span>
                ) : null}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="utec-symbol" aria-hidden="true">
        <img src={utecLogo} alt="UTEC Logo" height={42} width={42} className="logo-icon-img"/>
        
        </div>
        <div>
          <strong>{BRAND.name}</strong>
          <span>{BRAND.footerLine}</span>
        </div>
      </div>
    </aside>
  );
}
