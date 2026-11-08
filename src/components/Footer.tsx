import React from 'react'
import type { SiteSetting } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface FooterProps {
  siteSettings: SiteSetting
  accent: string
}

export const Footer: React.FC<FooterProps> = ({ siteSettings, accent }) => {
  const logoIcon = getMediaUrl(siteSettings.logoIcon, '/assets/6692a004b32ad002c42101d498c7fa94.png')
  const logoWordmark = getMediaUrl(siteSettings.logoWordmark, '/assets/802167aeeeca580eecd49d948f62fbe2.png')

  const tagline =
    siteSettings.tagline ||
    'Film, television and live entertainment — Sri Lankan stories on screen and on stage, across Sri Lanka and Australia.'

  const email = siteSettings.email || 'hello@venusproductions.com.au'
  const phone = siteSettings.phone || '+61 4XX XXX XXX'
  const address = siteSettings.address || 'Melbourne, VIC'
  const abn = siteSettings.abn || 'XX XXX XXX XXX'

  return (
    <footer style={{ background: '#070605', borderTop: '1px solid #2A241C' }}>
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '72px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 64px' }}>
          <div style={{ flex: '1.4 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={logoIcon}
                alt=""
                style={{ width: '56px', height: '56px', objectFit: 'contain' }}
              />
              <img
                src={logoWordmark}
                alt="Venus Productions"
                style={{ height: '36px', width: 'auto' }}
              />
            </div>
            <p style={{ margin: 0, maxWidth: '360px', fontSize: '15px', color: '#BDB2A0' }}>
              {tagline}
            </p>
          </div>

          <nav
            aria-label="Footer"
            style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}
          >
            <span
              style={{
                fontSize: '13px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              Explore
            </span>
            <a href="#about" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              About
            </a>
            <a href="#productions" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Productions
            </a>
            <a href="#events" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Events
            </a>
            <a href="#watch" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Watch
            </a>
            <a href="#community" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Giving back
            </a>
            <a href="#contact" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Work with us
            </a>
          </nav>

          <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
            <span
              style={{
                fontSize: '13px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              Productions
            </span>
            <a href="#productions" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Natath Ayek Sura Mathin
            </a>
            <a href="#red-soil" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Red Soil
            </a>
            <a href="#events" style={{ color: '#D8CFBF', textDecoration: 'none' }}>
              Live shows &amp; dramas
            </a>
          </div>

          <div
            style={{
              flex: '1 1 200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '15px',
              color: '#D8CFBF',
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
              Contact
            </span>
            <a href={`mailto:${email}`} style={{ color: '#D8CFBF' }}>
              {email}
            </a>
            <span>{phone}</span>
            <span>{address}</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '12px 24px',
            paddingTop: '24px',
            borderTop: '1px solid #221D16',
            fontSize: '14px',
            color: '#A79C89',
          }}
        >
          <span>© 2026 Venus Productions · ABN {abn}</span>
          <span style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#A79C89' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#A79C89' }}>
              Terms of Use
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

