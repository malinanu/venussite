import React from 'react'
import type { About as AboutType } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface AboutSectionProps {
  about: AboutType
  accent: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, accent }) => {
  const decorativeImg = getMediaUrl(about.decorativeImage, '/assets/755b4debe523031de5cd68f014bb8bf2.png')

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid #2A241C' }}>
      <img
        src="/assets/35478477a5ba01d7a257ad47d5fe48b5.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-470px',
          top: '-150px',
          width: '1060px',
          height: '1060px',
          opacity: 0.16,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '112px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px 80px',
        }}
      >
        <div style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            {about.label || 'About us'}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 600,
              fontSize: 'clamp(38px, 4vw, 56px)',
              lineHeight: 1.08,
              color: '#F7F1E6',
            }}
          >
            {about.headline || 'One company, telling stories across two countries.'}
          </h2>
          {decorativeImg && (
            <img
              src={decorativeImg}
              alt=""
              style={{ width: '180px', height: 'auto', marginTop: '16px', opacity: 0.9 }}
            />
          )}
        </div>
        <div
          style={{
            flex: '1.3 1 460px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            fontSize: '19px',
            color: '#D8CFBF',
            paddingTop: '44px',
          }}
        >
          {about.paragraphs && about.paragraphs.length > 0 ? (
            about.paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0 }}>
                {p.text}
              </p>
            ))
          ) : (
            <>
              <p style={{ margin: 0 }}>
                Venus Productions is a film, television and live entertainment company working across
                Sri Lanka and Australia. We develop and produce our own screen productions — feature
                films and teledramas — from script to screen.
              </p>
              <p style={{ margin: 0 }}>
                On stage, we organise concerts and stage dramas featuring celebrated Sri Lankan
                artists, bringing award-winning theatre and much-loved music to audiences overseas.
              </p>
              <p style={{ margin: 0 }}>
                Whether on screen or in a theatre, our work has one purpose: connecting Sri Lankan
                stories and talent with audiences at home and around the world.
              </p>
            </>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '10px' }}>
            <a
              href="#productions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '52px',
                padding: '0 28px',
                borderRadius: '999px',
                background: accent,
                color: '#0B0908',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Discover our work
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '52px',
                padding: '0 28px',
                borderRadius: '999px',
                border: '1px solid #5A4A30',
                color: '#F4EEE3',
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Work with us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

