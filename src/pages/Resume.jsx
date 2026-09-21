import { resume, profile } from "../data/content";
import "./Resume.css";

function EntryBlock({ heading, subheading, location, when, bullets, image, imageFit, url, urlLabel }) {
  return (
    <div className="entry">
      <div className="entry-row">
        <div className={`entry-thumb${!image ? " entry-thumb-empty" : imageFit === "contain" ? " entry-thumb-contain" : ""}`}>
          {image && <img src={image} alt="" />}
        </div>
        <div className="entry-main">
          <div className="entry-head">
            <div>
              <p className="entry-heading">{heading}</p>
              {subheading && <p className="entry-sub">{subheading}</p>}
            </div>
            <div className="entry-meta">
              {location && <span>{location}</span>}
              {when && <span className="entry-when">{when}</span>}
            </div>
          </div>
          {bullets && (
            <ul className="entry-bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer" className="btn entry-cta">
              {urlLabel || "View Project"} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <section className="resume-hero">
        <div className="container resume-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Business Resume</span>
            <h1>{profile.name}</h1>
            <p className="resume-hero-sub">Communications (Honors) · Business · Theatre — Boston College</p>
            {resume.contact && <p className="resume-hero-contact">{resume.contact}</p>}
            {resume.pdf && (
              <a href={resume.pdf} download className="btn btn-on-dark resume-download-btn">
                Download Resume (PDF)
              </a>
            )}
          </div>
          {resume.image && (
            <div className="resume-hero-photo">
              <img src={resume.image} alt={profile.name} />
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container resume-body">
          <div className="resume-block">
            <h2 className="resume-block-title">Education</h2>
            {resume.education.map((edu) => (
              <EntryBlock
                key={edu.org}
                heading={edu.org}
                subheading={edu.subheading}
                location={edu.location}
                when={edu.when}
                bullets={edu.bullets}
              />
            ))}
          </div>

          <div className="resume-block">
            <h2 className="resume-block-title">Experience</h2>
            {resume.experience.map((exp) => (
              <EntryBlock
                key={exp.org + (exp.role || "")}
                heading={exp.org}
                subheading={exp.role}
                location={exp.location}
                when={exp.when}
                bullets={exp.bullets}
                image={exp.image}
                imageFit={exp.imageFit}
              />
            ))}
          </div>

          {resume.projects && resume.projects.length > 0 && (
            <div className="resume-block">
              <h2 className="resume-block-title">Projects</h2>
              {resume.projects.map((proj) => (
                <EntryBlock
                  key={proj.org + (proj.role || "")}
                  heading={proj.org}
                  subheading={proj.role}
                  location={proj.location}
                  when={proj.when}
                  bullets={proj.bullets}
                  image={proj.image}
                  imageFit={proj.imageFit}
                  url={proj.url}
                />
              ))}
            </div>
          )}

          <div className="resume-block">
            <h2 className="resume-block-title">Activities</h2>
            {resume.activities.map((act) => (
              <EntryBlock
                key={act.org + (act.role || "")}
                heading={act.org}
                subheading={act.role}
                location={act.location}
                when={act.when}
                bullets={act.bullets}
                image={act.image}
                imageFit={act.imageFit}
              />
            ))}
          </div>

          {resume.skills && resume.skills.length > 0 && (
            <div className="resume-block">
              <h2 className="resume-block-title">Skills & Interests</h2>
              <ul className="skills-list">
                {resume.skills.map((skill) => (
                  <li key={skill} className="skills-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
