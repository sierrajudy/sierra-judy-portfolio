import "./DriveEmbed.css";

export default function DriveEmbed({ title, caption, driveId }) {
  if (!driveId) {
    return (
      <div className="drive-embed drive-embed-empty">
        <p className="drive-embed-title">{title}</p>
        <p className="drive-embed-placeholder">Video link coming soon</p>
      </div>
    );
  }

  return (
    <div className="drive-embed">
      <div className="drive-embed-frame">
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          title={title}
          allow="autoplay"
          allowFullScreen
        />
      </div>
      <div className="drive-embed-body">
        <p className="drive-embed-title">{title}</p>
        {caption && <p className="drive-embed-caption">{caption}</p>}
        <a
          className="drive-embed-open"
          href={`https://drive.google.com/file/d/${driveId}/view`}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Drive ↗
        </a>
      </div>
    </div>
  );
}
