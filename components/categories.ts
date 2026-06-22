// Código de color y etiquetas por sección del AFAC.
// Las clases se escriben completas (no dinámicas) para que Tailwind las genere.

export type CatKey =
  | 'blog'
  | 'inspiration'
  | 'podcasts'
  | 'tools'
  | 'resources'

type Cat = {
  label: string
  href: string
  chip: string // fondo sólido del icono
  soft: string // pastilla suave (eyebrow)
  bar: string // barra de acento
  hex: string
}

export const CATEGORIES: Record<CatKey, Cat> = {
  blog: {
    label: 'Noticias',
    href: '/blog',
    chip: 'bg-brand text-white',
    soft: 'bg-brand-light text-brand-dark',
    bar: 'bg-brand',
    hex: '#2F7A4D',
  },
  inspiration: {
    label: 'Actividades',
    href: '/inspiration',
    chip: 'bg-coral text-white',
    soft: 'bg-coral-light text-coral-dark',
    bar: 'bg-coral',
    hex: '#E26D5C',
  },
  podcasts: {
    label: 'Eventos',
    href: '/podcasts',
    chip: 'bg-sun text-ink',
    soft: 'bg-sun-light text-sun-dark',
    bar: 'bg-sun',
    hex: '#F2B441',
  },
  tools: {
    label: 'Servicios',
    href: '/tools',
    chip: 'bg-sky text-white',
    soft: 'bg-sky-light text-sky-dark',
    bar: 'bg-sky',
    hex: '#3D8DA8',
  },
  resources: {
    label: 'Documentos',
    href: '/resources',
    chip: 'bg-grape text-white',
    soft: 'bg-grape-light text-grape-dark',
    bar: 'bg-grape',
    hex: '#7A5BB0',
  },
}

export const cat = (key: string): Cat =>
  CATEGORIES[(key as CatKey)] ?? CATEGORIES.blog
