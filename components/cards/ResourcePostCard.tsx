import Link from 'next/link'
import { Resources } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

export default function ResourcesPostCard({ post }: { post: Resources }) {
  return (
    <Link
      href={`/resources/${post.slug}/`}
      className="group flex items-center gap-4 rounded-2xl bg-white border border-line p-4 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all overflow-hidden"
    >
      <figure className="grid place-items-center size-16 shrink-0 rounded-xl bg-grape-light text-grape-dark ring-1 ring-line overflow-hidden">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </figure>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="inline-flex w-fit items-center rounded-full bg-grape-light text-grape-dark px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide">
          Documento
        </span>
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
