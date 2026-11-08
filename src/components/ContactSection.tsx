import React from 'react'
import type { SiteSetting } from '../payload-types'
import { ContactForm } from './ContactForm'

interface ContactSectionProps {
  siteSettings: SiteSetting
  accent: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({ siteSettings, accent }) => {
  const email = siteSettings.email || 'hello@venusproductions.com.au'
  const phone = siteSettings.phone || '+61 4XX XXX XXX'
  const address = siteSettings.address || 'Melbourne, VIC, Australia'

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        borderTop: '1px solid #2A241C',
        background:
          'radial-gradient(ellipse 60% 60% at 85% 20%, rgba(214,174,92,0.10), rgba(11,9,8,0) 70%), #0B0908',
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
          left: '-500px',
          bottom: '-380px',
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
          flexWrap: 'wrap',
          gap: '56px 80px',
        }}
      >
        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            Work with us
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
            Let’s make the next one together.
          </h2>
          <p style={{ margin: 0, color: '#D8CFBF' }}>
            We welcome enquiries from artists, venues, sponsors, broadcasters and co-producers.
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Artists', 'Venues', 'Sponsors', 'Broadcasters', 'Co-producers'].map((tag) => (
              <li
                key={tag}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #4A3D28',
                  borderRadius: '999px',
                  fontSize: '15px',
                  color: '#E9E1D2',
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
          <dl style={{ margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <dt
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#A79C89',
                }}
              >
                Address
              </dt>
              <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>{address}</dd>
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
                Email
              </dt>
              <dd style={{ margin: '4px 0 0' }}>
                <a href={`mailto:${email}`} style={{ color: '#F0D48C' }}>
                  {email}
                </a>
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
                Telephone
              </dt>
              <dd style={{ margin: '4px 0 0', color: '#F4EEE3' }}>{phone}</dd>
            </div>
          </dl>
        </div>

        {/* Interactive Form Component */}
        <ContactForm />
      </div>
    </section>
  )
}

