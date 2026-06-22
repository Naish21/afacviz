import Link from 'next/link'
import { Inspiration } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

export default function InspirationPostCard({ post }: { post: Inspiration }) {
  return (
    <Link
      href={`/inspiration/${post.slug}/`}
      className="group flex flex-col rounded-2xl bg-white border border-line shadow-card hover:shadow-lift hover:-translate-y-1 transition-all overflow-hidden"
    >
      <figure className="relative overflow-hidden bg-coral-light">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={800}
          height={514}
          className="aspect-[14/9] object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-coral text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wide shadow">
          Actividad
        </span>
      </figure>
      <div className="p-5 flex flex-col gap-2">
        <h2 className="font-display font-bold text-lg text-ink leading-snug">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-sm text-muted line-clamp-3">{post.description}</p>
        )}
      </div>
    </Link>
  )
}
