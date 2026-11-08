'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { Highlight } from '../payload-types'

interface HighlightsSectionProps {
  highlights: Highlight
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ highlights }) => {
  const stats = highlights.stats || [
    { value: 2, label: 'Countries — Sri Lanka & Australia' },
    { value: 1, label: 'Feature film in production' },
    { value: 1, label: 'In-house teledrama' },
    { value: 4, label: 'Live productions staged in Australia' },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number
    let hasStarted = false

    const startAnimation = () => {
      if (hasStarted) return
      hasStarted = true

      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setProgress(1)
        return
      }

      const t0 = performance.now()
      const duration = 1800

      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / duration)
        setProgress(t)
        if (t < 1) {
          rafId = requestAnimationFrame(tick)
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    } else {
      startAnimation()
    }

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Cubic ease-out
  const ease = 1 - Math.pow(1 - progress, 3)
  const statOp = Math.min(1, progress * 2.5)
  const statY = Math.round((1 - ease) * 18)

  return (
    <section ref={containerRef} aria-label="Company highlights" style={{ padding: '24px 32px 0' }}>
      <div
        style={{
          maxWidth: '1176px',
          margin: '0 auto',
          padding: '48px',
          borderRadius: '20px',
          background: '#8A6A3A',
          border: '1px solid #B08A50',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
        }}
      >
        {stats.map((stat, i) => {
          const currentCount = Math.round(stat.value * ease)
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                paddingLeft: '24px',
                borderLeft: '1px solid #C7A469',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '72px',
                  lineHeight: 1,
                  fontWeight: 600,
                  color: '#FFF1D6',
                  display: 'inline-block',
                  opacity: statOp,
                  transform: `translateY(${statY}px)`,
                }}
              >
                {currentCount}
              </span>
              <span style={{ fontSize: '16px', color: '#FFF3DF' }}>{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

