import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./PhotoCollage.css";

const GAP = 10;

// Splits photos (in order) into balanced rows that each exactly fill `width`.
// The row count is picked so rows land near the target height; contiguous
// groups are chosen so row widths are as even as possible (no lone leftover
// photo blown up on its own row).
function layoutRows(ratios, width, target) {
  const n = ratios.length;
  if (!n) return [];
  const total = ratios.reduce((a, r) => a + r, 0);
  const k = Math.min(n, Math.max(1, Math.round((total * target) / width)));

  // prefix sums for quick group totals
  const pre = [0];
  ratios.forEach((r) => pre.push(pre[pre.length - 1] + r));
  const ideal = total / k;

  // best[j][i]: min cost to place first i photos in j rows; cut[j][i]: split
  const best = Array.from({ length: k + 1 }, () => Array(n + 1).fill(Infinity));
  const cut = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
  best[0][0] = 0;
  for (let j = 1; j <= k; j++) {
    for (let i = j; i <= n; i++) {
      for (let m = j - 1; m < i; m++) {
        const dev = pre[i] - pre[m] - ideal;
        const cost = best[j - 1][m] + dev * dev;
        if (cost < best[j][i]) {
          best[j][i] = cost;
          cut[j][i] = m;
        }
      }
    }
  }

  const rows = [];
  let i = n;
  for (let j = k; j >= 1; j--) {
    const m = cut[j][i];
    const items = [];
    for (let x = m; x < i; x++) items.push(x);
    const sum = pre[i] - pre[m];
    const height = Math.min((width - GAP * (items.length - 1)) / sum, target * 1.6);
    rows.unshift({ items, height });
    i = m;
  }
  return rows;
}

// Justified collage: every photo keeps its own aspect ratio, so nothing is
// cropped or stretched. Ratios come from `photo.ratio`, or are read from the
// image as it loads, so new photos can be added to `gallery` without setup.
export default function PhotoCollage({ photos }) {
  const [ratios, setRatios] = useState({});
  const [open, setOpen] = useState(null);
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
      <div className="collage" ref={boxRef}>
        {width > 0 &&
          layoutRows(
            photos.map((p) => p.ratio || ratios[p.src] || 1),
            width,
            width < 600 ? 160 : 240
          ).map((row) => (
            <div className="collage-row" key={row.items.join("-")} style={{ height: row.height }}>
              {row.items.map((i) => {
                const photo = photos[i];
                const r = photo.ratio || ratios[photo.src] || 1;
                return (
                  <button
                    key={photo.src}
                    type="button"
                    className="collage-tile"
                    style={{ width: Math.floor(row.height * r), height: row.height }}
                    onClick={() => setOpen(i)}
                    aria-label={`View ${photo.caption} full screen`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      onLoad={(e) => {
                        const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                        if (w && h && !photo.ratio) setRatios((prev) => ({ ...prev, [photo.src]: w / h }));
                      }}
                    />
                    <span className="collage-caption">{photo.caption}</span>
                  </button>
                );
              })}
            </div>
          ))}
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
