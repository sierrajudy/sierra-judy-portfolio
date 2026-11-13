import { resume, profile } from "../data/content";
import "./Resume.css";

function Entry({ org, location, role, when, subheading, bullets, url }) {
  const heading = [org, location, role].filter(Boolean).join(" | ");
  const items = [subheading, ...(bullets || [])].filter(Boolean);
  return (
    <div className="rs-entry">
      <div className="rs-entry-head">
        <p className="rs-entry-heading">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {heading}
            </a>
          ) : (
            heading
          )}
        </p>
        {when && <p className="rs-entry-when">{when}</p>}
      </div>
      {items.length > 0 && (
        <ul className="rs-bullets">
          {items.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Section({ title, entries }) {
  return (
    <div className="rs-section">
      <h2 className="rs-section-title">{title}</h2>
      {entries.map((e) => (
        <Entry key={e.org + (e.role || "")} {...e} />
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section className="resume-page">
      <div className="container">
        <div className="resume-toolbar">
          {resume.pdf && (
            <a href={resume.pdf} download className="btn">
              Download Resume (PDF)
            </a>
          )}
        </div>

        <article className="resume-paper">
          <header className="rs-header">
            <h1>{profile.name}</h1>
            <p>{resume.contact}</p>
          </header>

          <Section title="Education" entries={resume.education} />
          <Section title="Communications Experience" entries={resume.experience} />
          <Section title="Activities" entries={resume.activities} />

          <div className="rs-section">
            <h2 className="rs-section-title">Skills &amp; Interests</h2>
            <ul className="rs-bullets">
              <li>{resume.skills.join(", ")}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
