import { useCallback, useEffect, useState } from "react";
import "./PhotoCollage.css";

// Justified collage: every photo in a row shares the same height and keeps its
// own aspect ratio, so nothing is cropped. Ratios are read from the images as
// they load, so new photos can be added to `gallery` without extra setup.
export default function PhotoCollage({ photos }) {
  const [ratios, setRatios] = useState({});
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open !== null ? photos[open] : null;

  return (
    <>
      <div className="collage">
        {photos.map((photo, i) => {
          const r = photo.ratio || ratios[photo.src] || 1;
          return (
            <button
              key={photo.src}
              type="button"
              className="collage-tile"
              style={{ flexGrow: r, flexBasis: `calc(var(--collage-row) * ${r})`, aspectRatio: r }}
              onClick={() => setOpen(i)}
              aria-label={`View ${photo.caption} full screen`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                onLoad={(e) => {
                  const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                  if (w && h) setRatios((prev) => ({ ...prev, [photo.src]: w / h }));
                }}
              />
              <span className="collage-caption">{photo.caption}</span>
            </button>
          );
        })}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.caption} />
            <figcaption>{current.caption}</figcaption>
          </figure>
          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
