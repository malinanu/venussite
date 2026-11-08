import React from 'react'
import type { CsrInitiative } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface CSRSectionProps {
  csrInitiatives: CsrInitiative[]
  accent: string
}

export const CSRSection: React.FC<CSRSectionProps> = ({ csrInitiatives, accent }) => {
  return (
    <section
      id="community"
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        background: '#14110D',
        borderTop: '1px solid #2A241C',
      }}
    >
      <img
        src="/assets/35478477a5ba01d7a257ad47d5fe48b5.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          zIndex: -1,
          pointerEvents: 'none',
          right: '-460px',
          top: '-80px',
          width: '940px',
          height: '940px',
          opacity: 0.12,
        }}
      />
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '112px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '44px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '16px 32px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              Giving back · CSR
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
              Supporting the communities we come from.
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              maxWidth: '420px',
            }}
          >
            <p style={{ margin: 0, color: '#BDB2A0' }}>
              Beyond the screen and stage, Venus Productions supports causes in Sri Lanka and Australia.
            </p>
            <a
              href="https://youtu.be/uOrzzmzwm20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '52px',
                padding: '0 26px 0 8px',
                borderRadius: '999px',
                background: accent,
                color: '#0B0908',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '999px',
                  background: '#0B0908',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M3 1.5v11l9-5.5z" fill={accent} />
                </svg>
              </span>
              Watch our giving-back video
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {csrInitiatives.map((item) => {
            const coverUrl = getMediaUrl(item.coverImage, '/assets/9629927f3f396e5e256e3876e17e1028.jpg')

            return (
              <article
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#8A6A3A',
                  border: '1px solid #B08A50',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                {item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${item.title}`}
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'repeating-linear-gradient(135deg, #1A1611 0 14px, #1E1913 14px 28px)',
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={coverUrl}
                      alt={item.title}
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
                        width: '64px',
                        height: '46px',
                        borderRadius: '12px',
                        background: '#C4302B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M3.5 1.5v11l9-5.5z" fill="#FFFFFF" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <img
                    src={coverUrl}
                    alt={item.title}
                    style={{
                      display: 'block',
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                    }}
                  />
                )}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#FFF1D6',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-cormorant), serif',
                      fontWeight: 700,
                      fontSize: '32px',
                      lineHeight: 1.08,
                      color: '#F7F1E6',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: '#FFF3DF' }}>{item.description}</p>
                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#FFF1D6', fontWeight: 600, marginTop: '4px' }}
                    >
                      Watch the video →
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

