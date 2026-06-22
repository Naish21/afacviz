import { Icon } from './Icon'
import { cat } from './categories'

const SUBTITLES: Record<string, string> = {
  blog: 'Toda la actualidad y los avisos del AFAC.',
  inspiration: 'Actividades extraescolares deportivas, culturales y tecnológicas.',
  podcasts: 'Fiestas, salidas y citas importantes del curso.',
  tools: 'Servicios del AFAC para ayudaros a conciliar.',
  resources: 'Circulares, actas y documentos para descargar.',
}

export default function CategoryHeader({
  title,
  templateKey,
}: {
  title: string
  templateKey: string
}) {
  const c = cat(templateKey)
  return (
    <header className="pt-12 pb-6 flex flex-col items-center text-center gap-4">
      <span
        className={`grid place-items-center size-16 rounded-3xl ${c.chip} shadow-lift`}
      >
        <Icon name={templateKey} className="size-8" />
      </span>
      <h1 className="font-display font-extrabold text-3xl md:text-4xl text-ink">
        {title}
      </h1>
      <p className="max-w-xl text-muted">
        {SUBTITLES[templateKey] ?? ''}
      </p>
      <span className={`h-1.5 w-16 rounded-full ${c.bar}`} aria-hidden />
    </header>
  )
}
