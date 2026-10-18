import { useEffect, useRef, useState } from 'react';

/** Returns [ref, progress 0→1]. Progress runs over `duration` ms once the element is 40% visible. */
export default function useCountUp(duration = 1800) {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return; }
      const t0 = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        setP(t);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!ref.current || typeof IntersectionObserver === 'undefined') { start(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); start(); }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [duration]);

  return [ref, p];
}
