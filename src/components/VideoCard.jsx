import { profile } from "../data/content";
import "./VideoCard.css";

export default function VideoCard({ title, tag, image, url }) {
  const href = url || profile.instagram;

  return (
    <a className="video-card" href={href} target="_blank" rel="noreferrer">
      <div
        className="video-card-thumb"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        <span className="play-icon" aria-hidden="true">
          ▶
        </span>
        {tag && <span className="video-card-tag">{tag}</span>}
      </div>
      <div className="video-card-body">
        <p className="video-card-title">{title}</p>
        <span className="video-card-cta">Watch on Instagram →</span>
      </div>
    </a>
  );
}
