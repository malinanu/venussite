import React from 'react'
import type { Event as EventType } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface EventsSectionProps {
  events: EventType[]
  accent: string
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, accent }) => {
  return (
    <section
      id="events"
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
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
          left: '-480px',
          top: '40px',
          width: '1000px',
          height: '1000px',
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
          gap: '48px',
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
              Live shows &amp; stage dramas
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
              On stage in Australia.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: '420px', color: '#BDB2A0' }}>
            Concerts and award-winning Sinhala theatre, presented by Venus Productions in Victoria and
            South Australia.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {events.map((show) => {
            const posterUrl = getMediaUrl(show.poster, '/assets/a829600621c4ec8607d558a084e4cab2.jpg')
            const typeLabel =
              show.type === 'stage-drama'
                ? 'Stage drama'
                : show.type === 'concert'
                ? 'Concert'
                : show.type

            return (
              <article
                key={show.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#14110D',
                  border: '1px solid #2A241C',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={posterUrl}
                  alt={show.title}
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    display: 'block',
                    background: '#1A1611',
                  }}
                />
                <div
                  style={{
                    padding: '22px 22px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: accent,
                    }}
                  >
                    {typeLabel} · {show.eventDate}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-cormorant), serif',
                      fontWeight: 700,
                      fontSize: '30px',
                      lineHeight: 1.05,
                      color: '#F7F1E6',
                    }}
                  >
                    {show.title}
                  </h3>
                  {show.sinhalaTitle && (
                    <p
                      style={{
                        margin: 0,
                        fontFamily: 'var(--font-sinhala), serif',
                        fontSize: '15px',
                        color: '#BDB2A0',
                      }}
                    >
                      {show.sinhalaTitle}
                    </p>
                  )}
                  {show.description && (
                    <p style={{ margin: 0, fontSize: '15px', color: '#D8CFBF', lineHeight: 1.5 }}>
                      {show.description}
                    </p>
                  )}
                  <p
                    style={{
                      margin: 'auto 0 0',
                      paddingTop: '12px',
                      borderTop: '1px solid #2E271D',
                      fontSize: '14px',
                      color: '#A79C89',
                      lineHeight: 1.5,
                    }}
                  >
                    {show.venue}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

