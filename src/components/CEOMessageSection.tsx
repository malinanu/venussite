import React from 'react'
import type { CeoMessage } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface CEOMessageSectionProps {
  ceo: CeoMessage
  accent: string
}

export const CEOMessageSection: React.FC<CEOMessageSectionProps> = ({ ceo, accent }) => {
  const photoUrl = getMediaUrl(ceo.photo, '')

  return (
    <section
      aria-label="Message from our CEO"
      style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}
    >
      <img
        src="/assets/35478477a5ba01d7a257ad47d5fe48b5.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          zIndex: -1,
          pointerEvents: 'none',
          left: '50%',
          top: '50%',
          width: '900px',
          height: '900px',
          transform: 'translate(-50%, -50%)',
          opacity: 0.09,
        }}
      />
      <div
        style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: '120px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          textAlign: 'center',
        }}
      >
        <img
          src="/assets/6692a004b32ad002c42101d498c7fa94.png"
          alt=""
          style={{ width: '72px', height: '72px', objectFit: 'contain', opacity: 0.85 }}
        />
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: accent,
          }}
        >
          {ceo.label || 'A message from our CEO'}
        </p>
        <blockquote
          style={{
            margin: 0,
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: 1.3,
            color: '#F7F1E6',
          }}
        >
          {ceo.quote}
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', textAlign: 'left' }}>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={ceo.name}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '1px solid #4A3D28',
              }}
            />
          ) : (
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '999px',
                background: '#1E1913',
                border: '1px solid #4A3D28',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: '#A79C89',
              }}
            >
              CEO
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 600, color: '#F4EEE3' }}>
              {ceo.name || 'Rochelle Stephani Hettiarachchi'}
            </span>
            <span style={{ fontSize: '15px', color: '#BDB2A0' }}>
              {ceo.title || 'Chief Executive Officer, Venus Productions'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

