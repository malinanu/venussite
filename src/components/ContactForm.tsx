'use client'

import React, { useState } from 'react'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'artist',
    organisation: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          category: 'artist',
          organisation: '',
          message: '',
        })
      } else {
        const errorData = await res.json().catch(() => ({}))
        setErrorMessage(errorData.errors?.[0]?.message || 'Failed to submit inquiry. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flex: '1.2 1 440px',
        minWidth: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '18px',
        background: '#8A6A3A',
        border: '1px solid #B08A50',
        borderRadius: '20px',
        padding: '36px',
      }}
    >
      {status === 'success' ? (
        <div
          style={{
            gridColumn: '1 / -1',
            padding: '24px',
            background: 'rgba(26, 18, 8, 0.65)',
            border: '1px solid #C7A469',
            borderRadius: '12px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '32px' }}>✓</span>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: '#FFF1D6' }}>
            Enquiry Received
          </h3>
          <p style={{ margin: 0, color: '#FFF3DF', fontSize: '15px' }}>
            Thank you for reaching out to Venus Productions. Rochelle Stephani and our team will be in touch with you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            style={{
              alignSelf: 'center',
              marginTop: '10px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: '#1A1208',
              color: '#F0D48C',
              border: 0,
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#FFF3DF',
            }}
          >
            Your name
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                minHeight: '48px',
                padding: '0 14px',
                background: '#6E5230',
                border: '1px solid #B08A50',
                borderRadius: '6px',
                color: '#F4EEE3',
              }}
            />
          </label>

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#FFF3DF',
            }}
          >
            Email
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                minHeight: '48px',
                padding: '0 14px',
                background: '#6E5230',
                border: '1px solid #B08A50',
                borderRadius: '6px',
                color: '#F4EEE3',
              }}
            />
          </label>

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#FFF3DF',
            }}
          >
            I am a…
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{
                minHeight: '48px',
                padding: '0 12px',
                background: '#6E5230',
                border: '1px solid #B08A50',
                borderRadius: '6px',
                color: '#F4EEE3',
              }}
            >
              <option value="artist">Artist</option>
              <option value="venue">Venue</option>
              <option value="sponsor">Sponsor</option>
              <option value="broadcaster">Broadcaster</option>
              <option value="co-producer">Co-producer</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#FFF3DF',
            }}
          >
            Organisation (optional)
            <input
              type="text"
              value={formData.organisation}
              onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
              style={{
                minHeight: '48px',
                padding: '0 14px',
                background: '#6E5230',
                border: '1px solid #B08A50',
                borderRadius: '6px',
                color: '#F4EEE3',
              }}
            />
          </label>

          <label
            style={{
              gridColumn: '1 / -1',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#FFF3DF',
            }}
          >
            Message
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                padding: '12px 14px',
                background: '#6E5230',
                border: '1px solid #B08A50',
                borderRadius: '6px',
                color: '#F4EEE3',
                resize: 'vertical',
              }}
            />
          </label>

          {errorMessage && (
            <div style={{ gridColumn: '1 / -1', color: '#FFB3B3', fontSize: '14px' }}>
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              gridColumn: '1 / -1',
              justifySelf: 'start',
              minHeight: '52px',
              padding: '0 30px',
              border: 0,
              borderRadius: '999px',
              background: '#1A1208',
              color: '#F0D48C',
              fontWeight: 600,
              fontSize: '16px',
              cursor: status === 'submitting' ? 'wait' : 'pointer',
              opacity: status === 'submitting' ? 0.7 : 1,
            }}
          >
            {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
          </button>
        </>
      )}
    </form>
  )
}

