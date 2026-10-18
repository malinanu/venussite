import { stats } from '../data.js';
import useCountUp from '../hooks/useCountUp.js';

export default function Highlights() {
  const [ref, p] = useCountUp();
  const e = 1 - Math.pow(1 - p, 3);
  return (
    <section ref={ref} aria-label="Company highlights" className="highlights">
      <div className="highlights__box bronze">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat__num" style={{ opacity: Math.min(1, p * 2.5), transform: `translateY(${Math.round((1 - e) * 18)}px)` }}>
              {Math.round(s.value * e)}
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
