import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0B0908',
        color: '#F4EEE3',
        textAlign: 'center',
        padding: '32px',
        gap: '20px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '72px',
          margin: 0,
          color: '#D6AE5C',
        }}
      >
        404
      </h1>
      <h2 style={{ margin: 0, fontSize: '28px', color: '#F7F1E6' }}>Page Not Found</h2>
      <p style={{ margin: 0, maxWidth: '400px', color: '#BDB2A0' }}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '48px',
          padding: '0 28px',
          borderRadius: '999px',
          background: '#D6AE5C',
          color: '#0B0908',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Return to Venus Productions
      </Link>
    </div>
  )
}

