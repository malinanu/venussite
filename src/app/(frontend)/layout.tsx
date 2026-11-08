import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Venus Productions — Sri Lankan stories, on screen and on stage',
  description:
    'Venus Productions creates films and teledramas, and brings Sri Lanka’s finest artists to live audiences across Australia.',
  icons: {
    icon: '/assets/6692a004b32ad002c42101d498c7fa94.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@400;500;600&family=Noto+Serif+Sinhala:wght@500;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
