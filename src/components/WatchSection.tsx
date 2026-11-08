import React from 'react'
import type { Video, WatchSection as WatchSectionType } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface WatchSectionProps {
  watchSection: WatchSectionType
  videos: Video[]
  accent: string
}

export const WatchSection: React.FC<WatchSectionProps> = ({
  watchSection,
  videos,
  accent,
}) => {
  // Find featured video: from relationship or featured flag
  const featuredVid =
    (typeof watchSection.featuredVideo === 'object' && watchSection.featuredVideo) ||
    videos.find((v) => v.featured) ||
    videos[0]

  const otherVideos = videos.filter((v) => !featuredVid || v.id !== featuredVid.id)

  const featuredThumb = getMediaUrl(
    featuredVid?.thumbnail,
    '/assets/060df3a0073b10dc57dc6476de99d7f7.jpg'
  )

  const channelUrl =
    watchSection.channelCTA?.url || 'https://www.youtube.com/@VenusProductionsMagic'
  const channelLabel = watchSection.channelCTA?.label || 'Subscribe on YouTube'

  return (
    <section
      id="watch"
      style={{
        background: '#14110D',
        borderTop: '1px solid #2A241C',
        borderBottom: '1px solid #2A241C',
      }}
    >
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
            gap: '20px 32px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              {watchSection.label || 'Watch'}
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
              {watchSection.headline || 'On our YouTube channel.'}
            </h2>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              minHeight: '52px',
              padding: '0 26px',
              borderRadius: '999px',
              background: '#F4EEE3',
              color: '#0B0908',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              <rect x="0.5" y="0.5" width="21" height="15" rx="4" fill="#C4302B" />
              <path d="M9 4.5v7l6-3.5z" fill="#FFFFFF" />
            </svg>
            {channelLabel}
          </a>
        </div>

        {/* Featured Video */}
        {featuredVid && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px', alignItems: 'center' }}>
            <a
              href={featuredVid.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Play ${featuredVid.title}`}
              style={{
                flex: '1.6 1 560px',
                minWidth: 0,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '16/9',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #3A3125',
                background:
                  'repeating-linear-gradient(135deg, #1A1611 0 14px, #1E1913 14px 28px)',
                textDecoration: 'none',
              }}
            >
              <img
                src={featuredThumb}
                alt={featuredVid.title}
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
                  width: '84px',
                  height: '60px',
                  borderRadius: '16px',
                  background: '#C4302B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M3.5 1.5v11l9-5.5z" fill="#FFFFFF" />
                </svg>
              </span>
            </a>

            <div
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: accent,
                }}
              >
                {featuredVid.subtitle || 'Featured video'}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-cormorant), serif',
                  fontWeight: 700,
                  fontSize: '38px',
                  lineHeight: 1.08,
                  color: '#F7F1E6',
                }}
              >
                {featuredVid.title}
              </h3>
              {featuredVid.description && (
                <p style={{ margin: 0, color: '#D8CFBF' }}>{featuredVid.description}</p>
              )}
              <a
                href={featuredVid.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  minHeight: '48px',
                  padding: '0 24px',
                  borderRadius: '999px',
                  background: accent,
                  color: '#0B0908',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Watch on YouTube
              </a>
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F0D48C' }}
              >
                More on @VenusProductionsMagic →
              </a>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {otherVideos.map((v) => {
            const thumbUrl = getMediaUrl(v.thumbnail, '')

            return (
              <a
                key={v.id}
                href={v.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  textDecoration: 'none',
                  color: '#F4EEE3',
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '16/9',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #2E271D',
                    background:
                      'repeating-linear-gradient(135deg, #1A1611 0 12px, #1E1913 12px 24px)',
                  }}
                >
                  {thumbUrl && (
                    <img
                      src={thumbUrl}
                      alt=""
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <span
                    style={{
                      position: 'relative',
                      width: '52px',
                      height: '52px',
                      borderRadius: '999px',
                      background: 'rgba(244,238,227,0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M3.5 1.5v11l9-5.5z" fill="#0B0908" />
                    </svg>
                  </span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '26px',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {v.title}
                  </span>
                  {v.subtitle && (
                    <span style={{ fontSize: '15px', color: '#BDB2A0' }}>{v.subtitle}</span>
                  )}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

