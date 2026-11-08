import React from 'react'
import type { Production } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface ProductionsSectionProps {
  productions: Production[]
  accent: string
}

export const ProductionsSection: React.FC<ProductionsSectionProps> = ({
  productions,
  accent,
}) => {
  const teledrama =
    productions.find((p) => p.type === 'teledrama') || productions[0]
  const film =
    productions.find((p) => p.type === 'feature-film') || productions[1]

  const teledramaArt = getMediaUrl(
    teledrama?.keyArt,
    '/assets/45f2f2c9ae8a68ded0adf847272c6242.jpg'
  )

  return (
    <>
      {/* 5. TELEDRAMA */}
      <section id="productions">
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '112px 32px 56px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            Our productions
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
            Made by Venus, for the screen.
          </h2>
        </div>

        {teledrama && (
          <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px 56px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                background: '#8A6A3A',
                border: '1px solid #B08A50',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <a
                href={teledrama.trailerUrl || teledrama.watchUrl || '#productions'}
                aria-label={`Watch ${teledrama.title}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1.2 1 480px',
                  minWidth: 0,
                  minHeight: '420px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#0B0908',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={teledramaArt}
                  alt={teledrama.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '76px',
                    height: '76px',
                    borderRadius: '999px',
                    background: 'rgba(244,238,227,0.92)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3.5 1.5v11l9-5.5z" fill="#0B0908" />
                  </svg>
                </span>
              </a>

              <div
                style={{
                  flex: '1 1 400px',
                  minWidth: 0,
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '13px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#F0D48C',
                    background: '#1A1208',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  Teledrama ·{' '}
                  {teledrama.productionPhase === 'now-streaming'
                    ? 'Now streaming'
                    : teledrama.productionPhase === 'in-production'
                    ? 'In production'
                    : teledrama.productionPhase}
                </span>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-cormorant), serif',
                    fontWeight: 700,
                    fontSize: '46px',
                    lineHeight: 1.05,
                    color: '#F7F1E6',
                  }}
                >
                  {teledrama.title}
                </h3>

                <dl
                  style={{
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '16px',
                    borderTop: '1px solid #B08A50',
                    borderBottom: '1px solid #B08A50',
                    padding: '18px 0',
                  }}
                >
                  <div>
                    <dt
                      style={{
                        fontSize: '13px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#F3E3C3',
                      }}
                    >
                      Broadcaster
                    </dt>
                    <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                      {teledrama.broadcaster || 'Swarnawahini'}
                    </dd>
                  </div>
                  <div>
                    <dt
                      style={{
                        fontSize: '13px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#F3E3C3',
                      }}
                    >
                      Episodes
                    </dt>
                    <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                      {teledrama.episodes || 52}
                    </dd>
                  </div>
                  <div>
                    <dt
                      style={{
                        fontSize: '13px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#F3E3C3',
                      }}
                    >
                      Premiered
                    </dt>
                    <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                      {teledrama.premiereDate || '18 April'}
                    </dd>
                  </div>
                </dl>

                <p style={{ margin: 0, color: '#FFF3DF' }}>
                  {teledrama.synopsis ||
                    'A compelling teledrama bringing authentic Sri Lankan drama and emotions to life.'}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '4px' }}>
                  {teledrama.watchUrl && (
                    <a
                      href={teledrama.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: '48px',
                        padding: '0 24px',
                        borderRadius: '999px',
                        background: '#1A1208',
                        color: '#F0D48C',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      Watch all episodes
                    </a>
                  )}
                  {teledrama.trailerUrl && (
                    <a
                      href={teledrama.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: '48px',
                        padding: '0 24px',
                        borderRadius: '999px',
                        border: '1px solid #F3E3C3',
                        color: '#F4EEE3',
                        textDecoration: 'none',
                      }}
                    >
                      Start from Episode 1
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. RED SOIL (FEATURE FILM) */}
      {film && (
        <section
          id="red-soil"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 20% 40%, rgba(150,52,30,0.28), rgba(11,9,8,0) 70%), #0B0908',
            borderTop: '1px solid #2A241C',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '112px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '56px',
            }}
          >
            <div
              style={{
                flex: '1 1 420px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
              }}
            >
              <span
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F2B79C',
                  border: '1px solid #8A4630',
                  padding: '6px 14px',
                  borderRadius: '999px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: '#E2704A',
                  }}
                />
                Feature film ·{' '}
                {film.productionPhase === 'in-production' ? 'In production' : film.productionPhase}
              </span>

              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-cormorant), serif',
                  fontWeight: 700,
                  fontSize: 'clamp(60px, 8vw, 112px)',
                  lineHeight: 0.95,
                  color: '#F7F1E6',
                }}
              >
                {film.title}
              </h2>

              <p style={{ margin: 0, fontSize: '19px', color: '#D8CFBF' }}>
                {film.synopsis ||
                  'An intense and gripping feature film capturing a resonant Sri Lankan story of resilience and love.'}
              </p>

              <dl
                style={{
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '16px',
                  borderTop: '1px solid #3A2A20',
                  paddingTop: '18px',
                }}
              >
                <div>
                  <dt
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#A79C89',
                    }}
                  >
                    Director
                  </dt>
                  <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                    {film.director || 'Prasanna Withanage'}
                  </dd>
                </div>
                <div>
                  <dt
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#A79C89',
                    }}
                  >
                    Producer
                  </dt>
                  <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                    {film.producer || 'Rochelle Hettiarachchi'}
                  </dd>
                </div>
                <div>
                  <dt
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#A79C89',
                    }}
                  >
                    Release
                  </dt>
                  <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>
                    {film.premiereDate || 'To be confirmed'}
                  </dd>
                </div>
              </dl>
            </div>

            <div
              style={{
                flex: '1.3 1 520px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <a
                href={film.trailerUrl || '#red-soil'}
                aria-label={`Play ${film.title} teaser`}
                target={film.trailerUrl ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '16/9',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #4A2E22',
                  background:
                    'repeating-linear-gradient(135deg, #1D120D 0 14px, #22150F 14px 28px)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '20px',
                    bottom: '16px',
                    fontSize: '13px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C9A898',
                  }}
                >
                  Teaser · YouTube
                </span>
                <span
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '999px',
                    background: '#F4EEE3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3.5 1.5v11l9-5.5z" fill="#0B0908" />
                  </svg>
                </span>
              </a>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '8px',
                    border: '1px solid #3A2A20',
                    background: '#1A120E',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '12px',
                    fontSize: '13px',
                    color: '#C9A898',
                  }}
                >
                  Behind the scenes 1
                </div>
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '8px',
                    border: '1px solid #3A2A20',
                    background: '#1A120E',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '12px',
                    fontSize: '13px',
                    color: '#C9A898',
                  }}
                >
                  Behind the scenes 2
                </div>
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '8px',
                    border: '1px solid #3A2A20',
                    background: '#1A120E',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '12px',
                    fontSize: '13px',
                    color: '#C9A898',
                  }}
                >
                  Behind the scenes 3
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

