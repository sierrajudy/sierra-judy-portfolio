import "./LocalVideoCard.css";

export default function LocalVideoCard({ title, tag, image, video, draft }) {
  return (
    <div className="local-video-card">
      <div className="local-video-thumb">
        {tag && <span className="local-video-tag">{tag}</span>}
        <video controls preload="metadata" poster={image} playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="local-video-body">
        <p className="local-video-title">{title}</p>
        {draft && <p className="local-video-draft">Draft concept — not yet published</p>}
      </div>
    </div>
  );
}
