'use client'

import '../styles/index.css'
import '../styles/prism-a11y-dark.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'
import NetlifyIdentityRedirect from '../components/NetlifyIdentityRedirect'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;1,6..12,400&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      <body className="flex flex-col min-h-[100dvh] bg-cream text-ink font-body antialiased">
        <Header />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
        <Footer />
        <NetlifyIdentityRedirect />
      </body>
    </html>
  )
}
