import Link from 'next/link'
import { Blog } from '../../.contentlayer/generated'

function fmtDate(d?: string) {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export default function BlogPostCard({ post }: { post: Blog }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group relative flex flex-col gap-3 rounded-2xl bg-white border border-line p-6 pl-7 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all overflow-hidden"
    >
      <span className="absolute left-0 inset-y-0 w-1.5 bg-brand" aria-hidden />
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-brand-light text-brand-dark px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
          Noticia
        </span>
        {post.date && (
          <span className="text-xs text-muted font-semibold">
            {fmtDate(post.date)}
          </span>
        )}
      </div>
      <h3 className="font-display font-bold text-xl text-ink text-balance leading-snug">
        {post.title}
      </h3>
      {post.description && (
        <p className="text-[0.95rem] text-muted line-clamp-3">
          {post.description}
        </p>
      )}
      <span className="mt-auto pt-1 font-display font-bold text-sm text-brand-dark group-hover:underline underline-offset-4">
        Leer más &rarr;
      </span>
    </Link>
  )
}
