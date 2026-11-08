import React from 'react'
import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0B0908', color: '#F4EEE3', fontFamily: 'sans-serif' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            gap: '16px',
          }}
        >
          <h1 style={{ fontSize: '48px', color: '#D6AE5C', margin: 0 }}>404</h1>
          <p style={{ margin: 0 }}>Page not found.</p>
          <Link href="/" style={{ color: '#D6AE5C' }}>
            Go Home
          </Link>
        </div>
      </body>
    </html>
  )
}

