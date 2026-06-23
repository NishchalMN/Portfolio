import CanvasFX from './CanvasFX';
import { neuralConstellation } from './renderers/neuralConstellation';

/**
 * Persistent, full-viewport animated background rendered once behind all page
 * content. A fixed layer at negative z-index sits above the body's slate and
 * below every section (sections are transparent), so the neural constellation
 * stays continuous as you scroll. Pointer-reactive across the whole page.
 *
 * `opacity-[0.85]` is the single global brightness knob — raise toward 1 for
 * more presence, lower (e.g. 0.7) to make it more subtle behind content.
 */
const SiteBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.85]" aria-hidden="true">
    <CanvasFX renderer={neuralConstellation} className="h-full w-full" />
  </div>
);

export default SiteBackground;
