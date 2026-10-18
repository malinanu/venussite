import { img, TELEDRAMA_EP1, TELEDRAMA_PLAYLIST } from '../data.js';
import PlayBadge from './PlayBadge.jsx';

export default function Teledrama() {
  return (
    <section id="productions">
      <div className="wrap section-head" style={{ paddingTop: 112, paddingBottom: 56 }}>
        <p className="eyebrow">Our productions</p>
        <h2 className="h2">Made by Venus, for the screen.</h2>
      </div>
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <div className="teledrama bronze">
          <a href={TELEDRAMA_EP1} className="teledrama__media" aria-label="Watch Natath Ayek Sura Mathin, Episode 1">
            <img className="cover" src={img('teledrama.jpg')} alt="Natath Ayek Sura Mathin key art" />
            <PlayBadge size={76} icon={24} />
          </a>
          <div className="teledrama__body">
            <span className="tag tag--dark">Teledrama · Now streaming</span>
            <h3 className="teledrama__title">Natath Ayek Sura Mathin</h3>
            <dl className="facts facts--bronze">
              <div><dt>Broadcaster</dt><dd>Swarnawahini</dd></div>
              <div><dt>Episodes</dt><dd>52</dd></div>
              <div><dt>Premiered</dt><dd>18 April</dd></div>
            </dl>
            <p style={{ color: '#FFF3DF' }}>[Short story description — two or three sentences introducing the characters, the setting and what is at stake.]</p>
            <div className="btn-row" style={{ paddingTop: 4 }}>
              <a href={TELEDRAMA_PLAYLIST} className="btn btn--dark btn--sm">Watch all episodes</a>
              <a href={TELEDRAMA_EP1} className="btn btn--sm" style={{ border: '1px solid #F3E3C3', color: '#F4EEE3' }}>Start from Episode 1</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
