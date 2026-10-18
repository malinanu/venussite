import { useCallback, useEffect, useRef, useState } from 'react';

const clamp = (v) => Math.min(1, Math.max(0, v));
const ease = (v) => 1 - Math.pow(1 - v, 3);
const smooth = (v) => v * v * (3 - 2 * v);

function headerHeight() {
  const h = document.querySelector('.site-header');
  return h ? h.offsetHeight : 81;
}

/**
 * Scroll-driven hero stage. The hero section is a tall track; the stage inside it is sticky.
 * Progress p (0 → 1) runs while the stage is pinned:
 *   0 → 0.35   closed curtains part and reveal the text (the logo rises first)
 *   0.35 → 0.75 text zooms toward the viewer and fades; tied-back drapes slide away
 *   0.7 → 1    logo and spotlights fade, then the next section scrolls in
 */
export default function useHeroScroll() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [st, setSt] = useState({ p: 0, stageH: 820, top: 81, textH: 330, reduced: false });

  const measure = useCallback(() => {
    const top = headerHeight();
    const vh = window.innerHeight || 900;
    const stageH = Math.max(600, Math.min(vh - top, 920));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let p = 0;
    if (heroRef.current) {
      const r = heroRef.current.getBoundingClientRect();
      const travel = r.height - stageH;
      if (travel > 0) p = clamp((top - r.top) / travel);
    }
    const textH = textRef.current ? textRef.current.offsetHeight : 330;
    setSt((s) =>
      s.p === p && s.stageH === stageH && s.top === top && s.textH === textH && s.reduced === reduced
        ? s
        : { p, stageH, top, textH, reduced }
    );
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; measure(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
    // Fonts change the text height once they load.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [measure]);

  const { p: hp, stageH, textH, reduced, top } = st;
  const reveal = smooth(clamp(hp / 0.35));
  const textT = clamp((hp - 0.35) / 0.35);
  const zoom = reduced ? 0 : ease(textT);
  const slide = ease(clamp((hp - 0.45) / 0.45));
  const logoFade = clamp((hp - 0.7) / 0.28);

  return {
    heroRef,
    textRef,
    v: {
      top,
      trackH: Math.round(stageH * 2.8),
      stageH,
      panTx: -102 * reveal,
      panTxR: 102 * reveal,
      logoMb: textH + 26,
      logoDy: Math.round(((textH + 26) / 2) * (1 - smooth(clamp(hp / 0.12)))),
      cueOp: 1 - clamp(hp / 0.05),
      curtS: 1.6 - 0.3 * reveal - 0.3 * ease(textT),
      curtTx: -110 * slide,
      curtTxR: 110 * slide,
      logoSize: Math.round(Math.min(200, Math.max(120, stageH * 0.22))),
      h1Size: Math.round(Math.min(92, Math.max(48, stageH * 0.1))),
      logoOp: 1 - logoFade,
      logoS: 1 + 0.12 * ease(clamp((hp - 0.35) / 0.5)),
      textOp: 1 - textT,
      textS: 1 + 0.9 * zoom,
      textY: Math.round(60 * zoom),
      textInteractive: reveal >= 0.6 && textT <= 0.6,
      stripOp: 1 - clamp((hp - 0.35) / 0.15),
      stripInteractive: reveal >= 0.6 && hp <= 0.45,
    },
  };
}
