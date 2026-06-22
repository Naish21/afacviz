'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Icon } from './Icon'

const NAV = [
  { href: '/', label: 'Inicio', icon: 'home' },
  { href: '/blog', label: 'Noticias', icon: 'blog' },
  { href: '/inspiration', label: 'Actividades', icon: 'inspiration' },
  { href: '/podcasts', label: 'Eventos', icon: 'podcasts' },
  { href: '/tools', label: 'Servicios', icon: 'tools' },
  { href: '/resources', label: 'Documentos', icon: 'resources' },
]

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0 group"
      aria-label="Inicio AFAC"
    >
      <span className="relative grid place-items-center size-9 rounded-full bg-brand text-white font-display font-extrabold shadow-[0_4px_10px_rgba(47,122,77,.3)]">
        <span className="absolute -right-1 -top-1 size-3 rounded-full bg-sun border-2 border-cream" />
        A
      </span>
      <span className="leading-none">
        <span className="block font-display font-extrabold text-xl text-ink tracking-tight">
          AFAC
        </span>
        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">
          Familias del cole
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur border-b border-line">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Wordmark />

        {/* Navegación de escritorio */}
        <ul className="hidden lg:flex items-center gap-7 text-[0.95rem]">
          {NAV.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/resources" className="btn btn-primary hidden sm:inline-flex">
            Hazte socio/a
          </Link>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="lg:hidden grid place-items-center size-10 rounded-full bg-white border border-line text-ink shadow-sm"
          >
            <Icon name={open ? 'close' : 'burger'} className="size-5" />
          </button>
        </div>
      </nav>

      {/* Panel móvil */}
      {open && (
        <div className="lg:hidden border-t border-line bg-cream">
          <ul className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 font-bold text-ink border-b border-line/70 last:border-0"
                >
                  <Icon name={item.icon} className="size-5 text-brand" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/resources"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center"
              >
                Hazte socio/a
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
