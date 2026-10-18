import { img } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__cols">
          <div className="footer__brand">
            <div className="brand">
              <img src={img('foil-emblem.png')} alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
              <img src={img('foil-wordmark.png')} alt="Venus Productions" style={{ height: 36, width: 'auto' }} />
            </div>
            <p className="muted" style={{ maxWidth: 360, fontSize: 15 }}>Film, television and live entertainment — Sri Lankan stories on screen and on stage, across Sri Lanka and Australia.</p>
          </div>
          <nav aria-label="Footer" className="footer__col">
            <span className="footer__label">Explore</span>
            <a href="#about">About</a>
            <a href="#productions">Productions</a>
            <a href="#events">Events</a>
            <a href="#watch">Watch</a>
            <a href="#community">Giving back</a>
            <a href="#contact">Work with us</a>
          </nav>
          <div className="footer__col">
            <span className="footer__label">Productions</span>
            <a href="#productions">Natath Ayek Sura Mathin</a>
            <a href="#red-soil">Red Soil</a>
            <a href="#events">Live shows &amp; dramas</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">Contact</span>
            <span>[hello@venusproductions.com.au]</span>
            <span>[+61 4XX XXX XXX]</span>
            <span>[Suburb, VIC]</span>
          </div>
        </div>
        <div className="footer__base">
          <span>© 2026 Venus Productions · ABN [XX XXX XXX XXX]</span>
          <span style={{ display: 'flex', gap: 24 }}><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></span>
        </div>
      </div>
    </footer>
  );
}
