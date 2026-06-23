import { useEffect } from 'react';

/**
 * Warms the browser cache for below-the-fold media after the page is idle, so
 * images are already decoded by the time the user scrolls to them — no
 * pop-in/flicker on the first pass.
 *
 * Why this approach: the gallery <img>s use `loading="lazy"` (fast initial
 * paint), which otherwise only fetch once they're nearly in view. We keep the
 * fast first paint, then prefetch everything during idle time. Posters are
 * warmed, but full <video> files are intentionally skipped (too heavy).
 *
 * Runs once on mount, after the first paint, via requestIdleCallback (with a
 * setTimeout fallback). All section markup is already in the DOM at this point
 * (lazy only defers the network fetch, not the element), so reading `img`/
 * `video` from the document captures every URL.
 */
export function useMediaPreload(): void {
  useEffect(() => {
    let cancelled = false;

    const warm = () => {
      if (cancelled) return;
      const urls = new Set<string>();

      document.querySelectorAll('img').forEach((img) => {
        const src = img.getAttribute('src');
        if (src) urls.add(src);
      });
      document.querySelectorAll('video').forEach((video) => {
        const poster = video.getAttribute('poster');
        if (poster) urls.add(poster);
      });

      urls.forEach((url) => {
        const preloader = new Image();
        preloader.src = url;
      });
    };

    const ric = window.requestIdleCallback;
    if (typeof ric === 'function') {
      const id = ric(warm, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const id = window.setTimeout(warm, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);
}
