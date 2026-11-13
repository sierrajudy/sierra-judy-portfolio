import { Link } from "react-router-dom";
import { profile, internship, sharpsPR, gallery, classProjects, buckets } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import LocalVideoCard from "../components/LocalVideoCard";
import DriveEmbed from "../components/DriveEmbed";
import InstagramEmbed from "../components/InstagramEmbed";
import PhotoCollage from "../components/PhotoCollage";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Digital Media Portfolio</span>
            <h1>{profile.name}</h1>
            <p className="hero-bio">{profile.bio}</p>
            <div className="hero-emails">
              {profile.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="hero-email">
                  {email}
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#tahoe-artesian" className="btn">
                See my work
              </a>
              <Link to="/resume" className="btn btn-outline">
                View resume
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src={profile.image} alt={profile.name} className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section-alt gallery-section" id="photos">
          <div className="container">
            <SectionHeader eyebrow="On Stage & Around Campus" title="Photos" />
            <PhotoCollage photos={gallery} />
          </div>
        </section>
      )}

      <section id="tahoe-artesian">
        <div className="container">
          <SectionHeader
            eyebrow="Marketing Internship"
            title={internship.title}
            description={internship.description}
          />

          <p className="video-group-label">Drafts, concepts &amp; posted content — scroll for more →</p>
          <div className="video-row">
            {internship.drafts.map((video) => (
              <LocalVideoCard key={video.title} {...video} draft />
            ))}
            {internship.posted.map((video) => (
              <InstagramEmbed key={video.title} url={video.url} title={video.title} views={video.views} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" id="class-projects">
        <div className="container">
          <SectionHeader
            eyebrow={classProjects.eyebrow}
            title={classProjects.title}
            description={classProjects.description}
          />
          <div className="class-video-grid">
            {classProjects.videos.map((video) => (
              <LocalVideoCard key={video.title} {...video} wide />
            ))}
          </div>

          <p className="video-group-label video-group-label-spaced">Personal Project</p>
          <article className="project-card">
            <img src={buckets.logo} alt="" className="project-logo" />
            <div className="project-body">
              <h3 className="project-title">{buckets.title}</h3>
              <p className="project-role">{buckets.role}</p>
              <ul className="project-bullets">
                {buckets.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a href={buckets.url} target="_blank" rel="noreferrer" className="btn project-cta">
                Play Buckets ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="sharps-pr">
        <div className="container">
          <SectionHeader eyebrow={sharpsPR.eyebrow} title={sharpsPR.title} description={sharpsPR.description} />

          {sharpsPR.instagramProfile ? (
            <a href={sharpsPR.instagramProfile} target="_blank" rel="noreferrer" className="btn sharps-ig-btn">
              View Full Sharps Instagram →
            </a>
          ) : (
            <div className="sharps-ig-placeholder">Full Instagram profile link coming soon</div>
          )}

          <p className="video-group-label">{sharpsPR.reels.length} reels — scroll for more →</p>
          <div className="video-row reel-row">
            {sharpsPR.reels.map((reel) => (
              <InstagramEmbed key={reel.title} url={reel.url} title={reel.title} note={reel.note} views={reel.views} />
            ))}
          </div>

          <div className="drive-single">
            <DriveEmbed
              title={sharpsPR.cafePerformance.title}
              caption={sharpsPR.cafePerformance.caption}
              driveId={sharpsPR.cafePerformance.driveId}
            />
          </div>
        </div>
      </section>
    </>
  );
}
