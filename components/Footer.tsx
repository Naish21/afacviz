'use client'

import Link from 'next/link'
import { Icon } from './Icon'
import {
  FORM_SOCIOS,
  EMAIL,
  TELEFONO,
  TELEFONO_TEL,
  DIRECCION,
  CP_CIUDAD,
} from './contacto'

const SECCIONES = [
  { href: '/blog', label: 'Noticias' },
  { href: '/inspiration', label: 'Actividades' },
  { href: '/podcasts', label: 'Eventos' },
  { href: '/tools', label: 'Servicios' },
  { href: '/resources', label: 'Documentos' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative grid place-items-center size-9 rounded-full bg-white text-brand-dark font-display font-extrabold">
              A
              <span className="absolute -right-1 -top-1 size-3 rounded-full bg-sun border-2 border-brand-dark" />
            </span>
            <span className="font-display font-extrabold text-xl">AFA CV</span>
          </div>
          <p className="mt-4 text-white/80 text-[0.95rem] leading-relaxed">
            Asociación de Familias de Alumnos del Colegio Vizcaya. Somos el nexo
            de unión entre las familias y el equipo directivo, y colaboramos con
            el centro por la educación, la salud y el bienestar de nuestros hijos
            e hijas.
          </p>
          <a
            href={FORM_SOCIOS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-sun text-ink hover:bg-white mt-6"
          >
            Hazte socio/a
          </a>
        </div>

        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/60">
            Secciones
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-white/85 hover:text-white hover:underline underline-offset-4"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/60">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-white/85">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-white hover:underline underline-offset-4"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${TELEFONO_TEL}`}
                className="hover:text-white hover:underline underline-offset-4"
              >
                {TELEFONO}
              </a>
            </li>
            <li className="text-white/70 text-sm leading-snug">
              {DIRECCION}
              <br />
              {CP_CIUDAD}
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Escríbenos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4 text-xs text-white/70">
          <p>
            AFA CV · Asociación de Familias de Alumnos del Colegio Vizcaya
            &copy; {year}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-white shrink-0"
          >
            <span>Subir</span>
            <Icon name="up" className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
