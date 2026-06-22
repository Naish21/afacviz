import Link from 'next/link'
import { Tools } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

export default function ToolsPostCard({ post }: { post: Tools }) {
  return (
    <Link
      href={`/tools/${post.slug}/`}
      className="group flex items-center gap-4 rounded-2xl bg-white border border-line p-4 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all overflow-hidden"
    >
      <figure className="overflow-hidden size-20 sm:size-24 shrink-0 rounded-xl bg-sky-light ring-1 ring-line">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </figure>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="inline-flex w-fit items-center rounded-full bg-sky-light text-sky-dark px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide">
          Servicio
        </span>
        <h2 className="font-display font-bold text-ink text-balance leading-snug">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-sm text-muted line-clamp-2">{post.description}</p>
        )}
        <span className="mt-1 font-display font-bold text-sm text-sky-dark group-hover:underline underline-offset-4">
          Ver más &rarr;
        </span>
      </div>
    </Link>
  )
}
