import { useEffect } from "react";
import "./InstagramEmbed.css";

let scriptPromise = null;

function loadInstagramScript() {
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export default function InstagramEmbed({ url, title, note, views }) {
  useEffect(() => {
    let cancelled = false;
    loadInstagramScript().then(() => {
      if (!cancelled && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="ig-embed">
      <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
        <a href={url} target="_blank" rel="noreferrer">
          {title || "View on Instagram"}
        </a>
      </blockquote>
      <div className="ig-embed-caption">
        {title && <p className="ig-embed-title">{title}</p>}
        {views && <p className="ig-embed-views">{views}</p>}
        {note && <p className="ig-embed-note">{note}</p>}
      </div>
    </div>
  );
}
