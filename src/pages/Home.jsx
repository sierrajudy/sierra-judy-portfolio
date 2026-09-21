import { Link } from "react-router-dom";
import { profile, internship, sharpsPR } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import LocalVideoCard from "../components/LocalVideoCard";
import DriveEmbed from "../components/DriveEmbed";
import InstagramEmbed from "../components/InstagramEmbed";
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

      <section id="tahoe-artesian">
        <div className="container">
          <SectionHeader
            eyebrow="Marketing Internship"
            title={internship.title}
            description={internship.description}
          />

          <p className="video-group-label">Drafts &amp; Concepts</p>
          <div className="video-grid">
            {internship.drafts.map((video) => (
              <LocalVideoCard key={video.title} {...video} draft />
            ))}
          </div>

          <p className="video-group-label video-group-label-spaced">Posted</p>
          <div className="video-grid">
            {internship.posted.map((video) => (
              <InstagramEmbed key={video.title} url={video.url} title={video.title} views={video.views} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" id="sharps-pr">
        <div className="container">
          <SectionHeader eyebrow={sharpsPR.eyebrow} title={sharpsPR.title} description={sharpsPR.description} />

          {sharpsPR.instagramProfile ? (
            <a href={sharpsPR.instagramProfile} target="_blank" rel="noreferrer" className="btn sharps-ig-btn">
              View Full Sharps Instagram →
            </a>
          ) : (
            <div className="sharps-ig-placeholder">Full Instagram profile link coming soon</div>
          )}

          <div className="reel-grid">
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
