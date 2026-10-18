import { img, videos, YT_CHANNEL, FEATURED_VIDEO } from '../data.js';
import PlayBadge from './PlayBadge.jsx';

export default function Watch() {
  return (
    <section id="watch" className="watch">
      <div className="wrap stack" style={{ gap: 44 }}>
        <div className="section-split">
          <div className="section-head">
            <p className="eyebrow">Watch</p>
            <h2 className="h2">On our YouTube channel.</h2>
          </div>
          <a href={YT_CHANNEL} className="btn btn--light">
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><rect x="0.5" y="0.5" width="21" height="15" rx="4" fill="#C4302B" /><path d="M9 4.5v7l6-3.5z" fill="#FFFFFF" /></svg>
            Subscribe on YouTube
          </a>
        </div>
        <div className="featured">
          <a href={FEATURED_VIDEO} className="featured__media" aria-label="Play featured video">
            <img className="cover" src={img('featured-hd.jpg')} alt="Sriyani Amarasena in conversation" />
            <PlayBadge youtube size={84} icon={24} />
          </a>
          <div className="featured__body">
            <span className="eyebrow eyebrow--sm">Featured video</span>
            <h3 className="featured__title">A moment with Sriyani Amarasena</h3>
            <p style={{ color: '#D8CFBF' }}>“I’m not Sriyani Amarasena — I’m Laddu’s mother.” A conversation with Mrs Sriyani Amarasena, who brought Laddu’s mother to life in the teledrama Natath Ayek Sura Mathin.</p>
            <a href={FEATURED_VIDEO} className="btn btn--gold btn--sm" style={{ alignSelf: 'flex-start' }}>Watch on YouTube</a>
            <a href={YT_CHANNEL}>More on @VenusProductionsMagic →</a>
          </div>
        </div>
        <div className="grid grid--videos">
          {videos.map((v) => (
            <a key={v.href} href={v.href} className="video">
              <span className="video__thumb">
                <img className="cover" src={v.img} alt="" loading="lazy" />
                <PlayBadge />
              </span>
              <span className="video__text">
                <span className="video__title">{v.title}</span>
                <span className="video__sub">{v.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
