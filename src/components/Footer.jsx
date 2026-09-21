import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Sierra Judy</p>
          <p className="footer-tag">Storytelling on stage &amp; in the feed.</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.emails[0]}`}>{profile.emails[0]}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Sierra Judy. All rights reserved.</p>
    </footer>
  );
}
