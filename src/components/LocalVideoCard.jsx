import { useRef, useState } from "react";
import "./LocalVideoCard.css";

// Pressing play opens the video full screen (desktop + iPhone).
function enterFullscreen(video) {
  if (document.fullscreenElement || document.webkitFullscreenElement) return;
  if (video.requestFullscreen) {
    video.requestFullscreen().catch(() => {});
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
  }
}

export default function LocalVideoCard({ title, tag, image, video, draft, wide, description }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const playFullscreen = () => {
    const el = ref.current;
    if (!el) return;
    enterFullscreen(el);
    el.play().catch(() => {});
  };

  return (
    <div className={`local-video-card${wide ? " local-video-card-wide" : ""}`}>
      <div className="local-video-thumb">
        {tag && <span className="local-video-tag">{tag}</span>}
        <video
          ref={ref}
          controls={started}
          preload="metadata"
          poster={image}
          playsInline
          onPlay={(e) => {
            setStarted(true);
            enterFullscreen(e.currentTarget);
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
        {!started && (
          <button type="button" className="local-video-play" onClick={playFullscreen} aria-label={`Play ${title} full screen`}>
            <span aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      <div className="local-video-body">
        <p className="local-video-title">{title}</p>
        {description && <p className="local-video-desc">{description}</p>}
        {draft && <p className="local-video-draft">Draft concept — not yet published</p>}
      </div>
    </div>
  );
}
