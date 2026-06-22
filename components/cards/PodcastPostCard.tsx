import Link from 'next/link'
import { Podcasts } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

function fmtDate(d?: string) {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
    })
  } catch {
    return ''
  }
}

export default function PodcastPostCard({ post }: { post: Podcasts }) {
  return (
    <Link
      href={`/podcasts/${post.slug}/`}
      className="group flex flex-col rounded-2xl bg-white border border-line shadow-card hover:shadow-lift hover:-translate-y-1 transition-all overflow-hidden"
    >
      <figure className="relative overflow-hidden aspect-square bg-sun-light">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={600}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {post.date && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-sun text-ink px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide shadow">
            {fmtDate(post.date)}
          </span>
        )}
      </figure>
      <div className="p-4 flex flex-col gap-1">
        <h2 className="font-display font-bold text-ink leading-snug">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-sm text-muted line-clamp-2">{post.description}</p>
        )}
      </div>
    </Link>
  )
}
