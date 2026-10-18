import { img, GIVING_BACK_VIDEO } from '../data.js';
import PlayBadge from './PlayBadge.jsx';

export default function GivingBack() {
  return (
    <section id="community" className="section section--clip section--rule" style={{ background: '#14110D' }}>
      <img className="mandala" src={img('mandala.svg')} alt="" aria-hidden="true" style={{ right: -460, top: -80, width: 940, height: 940, opacity: 0.12 }} />
      <div className="wrap stack" style={{ gap: 44 }}>
        <div className="section-split">
          <div className="section-head" style={{ maxWidth: 640 }}>
            <p className="eyebrow">Giving back · CSR</p>
            <h2 className="h2">Supporting the communities we come from.</h2>
          </div>
          <div className="stack" style={{ alignItems: 'flex-start', gap: 16, maxWidth: 420 }}>
            <p className="muted">Beyond the screen and stage, Venus Productions supports causes in Sri Lanka and Australia.</p>
            <a href={GIVING_BACK_VIDEO} className="btn btn--gold btn--play">
              <span className="btn__dot" style={{ background: '#0B0908' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="#D6AE5C" /></svg>
              </span>
              Watch our giving-back video
            </a>
          </div>
        </div>
        <div className="grid grid--csr">
          <article className="csr bronze">
            <a href={GIVING_BACK_VIDEO} className="csr__media" aria-label="Watch the donation video">
              <img className="cover" src={img('csr.jpg')} alt="LKR 2.5 million donation to Lady Ridgeway Hospital for Children" />
              <PlayBadge youtube size={64} icon={18} />
            </a>
            <div className="csr__body">
              <span className="csr__meta">Donation · Lady Ridgeway Hospital for Children</span>
              <h3 className="csr__title">LKR 2.5 million to help little ones breathe</h3>
              <p>Venus Productions donated LKR 2.5 million in breathing-support equipment to Lady Ridgeway Hospital for Children, Sri Lanka’s leading children’s hospital.</p>
              <a href={GIVING_BACK_VIDEO} style={{ color: '#FFF1D6', fontWeight: 600 }}>Watch the video →</a>
            </div>
          </article>
          <article className="csr bronze">
            <img className="csr__img" src={img('event.jpg')} alt="Sharing a meal and a specially designed cake to celebrate the end of our teledrama" loading="lazy" />
            <div className="csr__body">
              <span className="csr__meta">Community event · 13 October · Nugegoda</span>
              <h3 className="csr__title">Celebrating the end of our teledrama</h3>
              <p>We celebrated the conclusion of our teledrama by sharing a meal, a specially designed cake, and moments of joy with these beautiful souls. It was a heartfelt way to mark the end of our journey, bringing everyone together through kindness, laughter, and togetherness — a memory we will always cherish.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
