import { NavLink } from "react-router-dom";
import { profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo" end>
          Sierra Judy
        </NavLink>
        <div className="nav-right">
          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
              Resume
            </NavLink>
          </nav>
          <div className="nav-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
