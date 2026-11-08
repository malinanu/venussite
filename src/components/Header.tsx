import React from 'react'
import type { SiteSetting } from '../payload-types'
import { getMediaUrl } from '../utilities/getMediaUrl'

interface HeaderProps {
  siteSettings: SiteSetting
}

export const Header: React.FC<HeaderProps> = ({ siteSettings }) => {
  const accent = siteSettings.accentColor || '#D6AE5C'
  const logoIcon = getMediaUrl(siteSettings.logoIcon, '/assets/6692a004b32ad002c42101d498c7fa94.png')
  const logoWordmark = getMediaUrl(siteSettings.logoWordmark, '/assets/802167aeeeca580eecd49d948f62fbe2.png')

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(11,9,8,0.92)',
        borderBottom: '1px solid #2A241C',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px 32px',
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none',
          }}
          aria-label="Venus Productions home"
        >
          <img
            src={logoIcon}
            alt=""
            style={{ width: '52px', height: '52px', objectFit: 'contain' }}
          />
          <img
            src={logoWordmark}
            alt="Venus Productions"
            style={{ height: '34px', width: 'auto' }}
          />
        </a>
        <nav
          aria-label="Main"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '4px 28px',
            fontSize: '15px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <a href="#about" style={{ color: '#E9E1D2', textDecoration: 'none', padding: '12px 0' }}>
            About
          </a>
          <a
            href="#productions"
            style={{ color: '#E9E1D2', textDecoration: 'none', padding: '12px 0' }}
          >
            Productions
          </a>
          <a href="#events" style={{ color: '#E9E1D2', textDecoration: 'none', padding: '12px 0' }}>
            Events
          </a>
          <a href="#watch" style={{ color: '#E9E1D2', textDecoration: 'none', padding: '12px 0' }}>
            Watch
          </a>
          <a
            href="#community"
            style={{ color: '#E9E1D2', textDecoration: 'none', padding: '12px 0' }}
          >
            Community
          </a>
          <a
            href="#contact"
            style={{
              color: '#0B0908',
              background: accent,
              textDecoration: 'none',
              padding: '11px 22px',
              borderRadius: '999px',
              fontWeight: 600,
            }}
          >
            Work with us
          </a>
        </nav>
      </div>
    </header>
  )
}

