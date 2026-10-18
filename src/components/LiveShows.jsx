import { img, shows } from '../data.js';

export default function LiveShows() {
  return (
    <section id="events" className="section section--clip section--rule">
      <img className="mandala" src={img('mandala.svg')} alt="" aria-hidden="true" style={{ left: -480, top: 40, width: 1000, height: 1000, opacity: 0.12 }} />
      <div className="wrap stack" style={{ gap: 48 }}>
        <div className="section-split">
          <div className="section-head" style={{ maxWidth: 640 }}>
            <p className="eyebrow">Live shows &amp; stage dramas</p>
            <h2 className="h2">On stage in Australia.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 420 }}>Concerts and award-winning Sinhala theatre, presented by Venus Productions in Victoria and South Australia.</p>
        </div>
        <div className="grid grid--shows">
          {shows.map((s) => (
            <article key={s.title} className="show">
              <img src={s.img} alt={s.alt} loading="lazy" />
              <div className="show__body">
                <span className="show__meta">{s.kind} · {s.date}</span>
                <h3 className="show__title">{s.title}</h3>
                <p className="show__si">{s.si}</p>
                <p className="show__detail">{s.detail}</p>
                <p className="show__venue">{s.venue}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
