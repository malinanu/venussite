import { img } from '../data.js';
import useHeroScroll from '../hooks/useHeroScroll.js';
import useMediaQuery from '../hooks/useMediaQuery.js';

const Play = ({ size = 14, fill = '#0B0908' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill={fill} /></svg>
);

function HeroCopy({ h1Style }) {
  return (
    <>
      <p className="eyebrow">Film · Television · Live entertainment</p>
      <h1 className="hero__title" style={h1Style}>Sri Lankan stories,<br />on screen and on stage.</h1>
      <p className="hero__intro">Venus Productions creates films and teledramas, and brings Sri Lanka’s finest artists to live audiences across Australia.</p>
      <div className="hero__actions">
        <a href="#productions" className="btn btn--gold">Explore our work</a>
        <a href="#red-soil" className="btn btn--outline btn--play">
          <span className="btn__dot"><Play /></span>
          Watch the Red Soil teaser
        </a>
      </div>
    </>
  );
}

function NowStrip({ style }) {
  return (
    <div className="now-strip" style={style}>
      <a href="#red-soil">
        <span className="now-strip__dot" style={{ background: '#E2704A' }} />
        <span className="now-strip__text"><span>In production</span><span>Red Soil — feature film</span></span>
        <span aria-hidden="true" className="now-strip__arrow">→</span>
      </a>
      <a href="#productions">
        <span className="now-strip__dot" />
        <span className="now-strip__text"><span>Now streaming</span><span>Natath Ayek Sura Mathin</span></span>
        <span aria-hidden="true" className="now-strip__arrow">→</span>
      </a>
    </div>
  );
}

function Beams({ style }) {
  return (
    <div className="hero__beams" aria-hidden="true" style={style}>
      <div className="hero__beam hero__beam--l" />
      <div className="hero__beam hero__beam--r" />
    </div>
  );
}

function StageHero() {
  const { heroRef, textRef, v } = useHeroScroll();
  return (
    <section id="top" ref={heroRef} className="hero" style={{ height: v.trackH }}>
      <div className="hero__stage" style={{ top: v.top, height: v.stageH }}>
        <Beams style={{ opacity: v.logoOp }} />

        {/* Closed velvet curtains that part on scroll */}
        <div className="hero__panel hero__panel--l" aria-hidden="true" style={{ transform: `translateX(${v.panTx}%)` }}>
          <div className="vp-sway hero__velvet hero__velvet--l" />
        </div>
        <div className="hero__panel hero__panel--r" aria-hidden="true" style={{ transform: `translateX(${v.panTxR}%)` }}>
          <div className="vp-sway hero__velvet hero__velvet--r" />
        </div>

        {/* Tied-back drapes framing the stage */}
        <div className="hero__drape hero__drape--l" aria-hidden="true" style={{ transform: `translateX(${v.curtTx}%) scaleX(${v.curtS})` }}>
          <img className="vp-sway" src={img('curtain-left.png')} alt="" />
        </div>
        <div className="hero__drape hero__drape--r" aria-hidden="true" style={{ transform: `translateX(${v.curtTxR}%) scaleX(${v.curtS})` }}>
          <img className="vp-sway" src={img('curtain-right.png')} alt="" />
        </div>

        <div className="hero__content">
          <div aria-hidden="true" style={{ width: v.logoSize, height: v.logoSize, flexShrink: 0 }} />
          <div
            ref={textRef}
            className="hero__copy"
            style={{
              opacity: v.textOp,
              transform: `translateY(${v.textY}px) scale(${v.textS})`,
              pointerEvents: v.textInteractive ? 'auto' : 'none',
              visibility: v.textOp <= 0.01 ? 'hidden' : 'visible',
            }}
          >
            <HeroCopy h1Style={{ fontSize: v.h1Size }} />
          </div>
        </div>

        {/* Logo sits above the curtains like a stage emblem */}
        <div className="hero__emblem">
          <img
            src={img('foil-emblem.png')}
            alt="Venus Productions"
            style={{
              width: v.logoSize,
              height: v.logoSize,
              opacity: v.logoOp,
              transform: `translateY(${v.logoDy}px) scale(${v.logoS})`,
              marginBottom: v.logoMb,
            }}
          />
        </div>

        <div className="hero__cue" aria-hidden="true" style={{ opacity: v.cueOp }}>
          Scroll
          <svg width="16" height="10" viewBox="0 0 16 10"><path d="M1 1l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
        </div>

        <NowStrip style={{ opacity: v.stripOp, pointerEvents: v.stripInteractive ? 'auto' : 'none' }} />
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section id="top" className="hero-m">
      <img className="vp-curtain hero-m__curtain hero-m__curtain--l" src={img('curtain-left.png')} alt="" aria-hidden="true" />
      <img className="vp-curtain hero-m__curtain hero-m__curtain--r" src={img('curtain-right.png')} alt="" aria-hidden="true" />
      <div className="hero-m__beam hero-m__beam--l" aria-hidden="true" />
      <div className="hero-m__beam hero-m__beam--r" aria-hidden="true" />
      <img className="hero-m__logo" src={img('foil-emblem.png')} alt="Venus Productions" />
      <HeroCopy />
      <NowStrip />
    </section>
  );
}

export default function Hero() {
  const mobile = useMediaQuery('(max-width: 760px)');
  return mobile ? <MobileHero /> : <StageHero />;
}
