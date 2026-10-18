import { useState } from 'react';
import { img, nav } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="Venus Productions home" onClick={close}>
          <img className="brand__emblem" src={img('foil-emblem.png')} alt="" />
          <img className="brand__wordmark" src={img('foil-wordmark.png')} alt="Venus Productions" />
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
            <path d={open ? 'M3 1l12 10M15 1L3 11' : 'M1 1h16M1 6h16M1 11h16'} stroke="#F0D48C" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <nav id="main-nav" aria-label="Main" className={`main-nav${open ? ' is-open' : ''}`}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
          <a href="#contact" className="main-nav__cta" onClick={close}>Work with us</a>
        </nav>
      </div>
    </header>
  );
}
