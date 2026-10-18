import { img } from '../data.js';

export default function CeoMessage() {
  return (
    <section aria-label="Message from our CEO" className="section section--clip">
      <img className="mandala" src={img('mandala.svg')} alt="" aria-hidden="true" style={{ left: '50%', top: '50%', width: 900, height: 900, transform: 'translate(-50%, -50%)', opacity: 0.09 }} />
      <div className="ceo">
        <img src={img('foil-emblem.png')} alt="" className="ceo__emblem" />
        <p className="eyebrow">A message from our CEO</p>
        <blockquote className="ceo__quote">“Our stories deserve to be told well, and to be seen widely. At Venus Productions we bring Sri Lankan writers, actors and musicians to the screen and the stage — and to audiences wherever they call home.”</blockquote>
        <div className="ceo__by">
          <div className="ceo__photo">[Photo]</div>
          <div className="stack">
            <span style={{ fontWeight: 600, color: '#F4EEE3' }}>Rochelle Stephani Hettiarachchi</span>
            <span className="muted" style={{ fontSize: 15 }}>Chief Executive Officer, Venus Productions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
