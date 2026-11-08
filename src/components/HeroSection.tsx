import React from 'react'
import type { Hero as HeroType } from '../payload-types'

interface HeroSectionProps {
  hero: HeroType
  accent: string
  logoIcon: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ hero, accent, logoIcon }) => {
  const headline = hero.headline || 'Sri Lankan stories,\non screen and on stage.'
  const headlineLines = headline.split('\n')

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 45% 55% at 50% 38%, rgba(214,174,92,0.14), rgba(11,9,8,0) 70%), #0B0908',
      }}
    >
      {/* Light ray beam background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1100px',
          height: '100%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '14%',
            width: '260px',
            height: '780px',
            background:
              'linear-gradient(to bottom, rgba(240,212,140,0.20), rgba(240,212,140,0) 85%)',
            clipPath: 'polygon(42% 0, 58% 0, 100% 100%, 0 100%)',
            transform: 'rotate(-16deg)',
            transformOrigin: 'top center',
            filter: 'blur(6px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '14%',
            width: '260px',
            height: '780px',
            background:
              'linear-gradient(to bottom, rgba(240,212,140,0.20), rgba(240,212,140,0) 85%)',
            clipPath: 'polygon(42% 0, 58% 0, 100% 100%, 0 100%)',
            transform: 'rotate(16deg)',
            transformOrigin: 'top center',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* Opening Curtains */}
      <img
        className="vp-curtain"
        src="/assets/66e72f72abbbe63d894d1e3f4a13ec69.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: 'auto',
          transformOrigin: 'left center',
          animation: 'vpCurtainL 5.5s cubic-bezier(0.45,0,0.2,1) both',
          pointerEvents: 'none',
        }}
      />
      <img
        className="vp-curtain"
        src="/assets/12457606c98126387fa62a5dbf6b4fc4.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: 'auto',
          transformOrigin: 'right center',
          animation: 'vpCurtainR 5.5s cubic-bezier(0.45,0,0.2,1) both',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1040px',
          margin: '0 auto',
          padding: '72px 32px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px' }}>
          <img
            src={logoIcon || '/assets/6692a004b32ad002c42101d498c7fa94.png'}
            alt=""
            style={{
              width: '210px',
              height: '210px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(214,174,92,0.35))',
            }}
          />

          {hero.tagline && (
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              {hero.tagline}
            </p>
          )}

          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 600,
              fontSize: 'clamp(48px, 6.6vw, 96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: '#F7F1E6',
            }}
          >
            {headlineLines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < headlineLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {hero.subheadline && (
            <p style={{ margin: 0, maxWidth: '600px', fontSize: '19px', color: '#CFC5B3' }}>
              {hero.subheadline}
            </p>
          )}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px',
              paddingTop: '8px',
            }}
          >
            {hero.primaryCTA && (
              <a
                href={hero.primaryCTA.link || '#productions'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '52px',
                  padding: '0 28px',
                  borderRadius: '999px',
                  background: accent,
                  color: '#0B0908',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {hero.primaryCTA.label || 'Explore our work'}
              </a>
            )}
            {hero.secondaryCTA && (
              <a
                href={hero.secondaryCTA.link || '#red-soil'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  minHeight: '52px',
                  padding: '0 26px 0 8px',
                  borderRadius: '999px',
                  border: '1px solid #5A4A30',
                  color: '#F4EEE3',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '999px',
                    background: '#F4EEE3',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3 1.5v11l9-5.5z" fill="#0B0908" />
                  </svg>
                </span>
                {hero.secondaryCTA.label || 'Watch the Red Soil teaser'}
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Bottom Ticker Cards */}
        {hero.featuredTickers && hero.featuredTickers.length > 0 && (
          <div
            style={{
              width: '100%',
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              borderTop: '1px solid #2A241C',
              textAlign: 'left',
            }}
          >
            {hero.featuredTickers.map((ticker, i) => (
              <a
                key={i}
                href={ticker.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: i > 0 ? '24px 8px 24px 24px' : '24px 8px',
                  borderLeft: i > 0 ? '1px solid #2A241C' : 'none',
                  textDecoration: 'none',
                  color: '#F4EEE3',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: ticker.dotColor || accent,
                    flexShrink: 0,
                  }}
                />
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.35 }}>
                  <span
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#A79C89',
                    }}
                  >
                    {ticker.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '24px',
                      fontWeight: 700,
                    }}
                  >
                    {ticker.title}
                  </span>
                </span>
                <span aria-hidden="true" style={{ marginLeft: 'auto', color: accent, fontSize: '22px' }}>
                  →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

