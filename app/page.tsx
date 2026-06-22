import { pick } from 'contentlayer2/client'
import Layout from '../components/Layout'
import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
  allBlogs,
  allInspirations,
  allPages,
  allPodcasts,
  allResources,
  allTools,
} from '../.contentlayer/generated'
import Link from 'next/link'
import BlogCardPost from '../components/cards/BlogPostCard'
import InspirationPostCard from '../components/cards/InspirationPostCard'
import PodcastPostCard from '../components/cards/PodcastPostCard'
import ToolsPostCard from '../components/cards/ToolsPostCard'
import ResourcePostCard from '../components/cards/ResourcePostCard'
import { Metadata } from 'next'
import { Icon } from '../components/Icon'
import { cat, CatKey } from '../components/categories'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../config'

const home = allPages.find((home) => home?.slug === 'home')

export function generateMetadata(): Metadata {
  const SEO = {
    title: home?.title || 'Inicio',
    description:
      home?.description || `Bienvenidas y bienvenidos al ${SITE_NAME}`,
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: SEO.image,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

function SectionHeader({ k }: { k: CatKey }) {
  const c = cat(k)
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-display font-extrabold text-ink">
        <span
          className={`grid place-items-center size-10 rounded-2xl ${c.chip} shadow-sm`}
        >
          <Icon name={k} className="size-5" />
        </span>
        {c.label}
      </h2>
      <Link
        href={c.href}
        className="group inline-flex items-center gap-1 font-display font-bold text-sm text-brand-dark hover:gap-2 transition-all"
      >
        Ver todo
        <span aria-hidden>&rarr;</span>
      </Link>
    </div>
  )
}

export default function Home() {
  let blogs = allBlogs.map((post: Blog) =>
    pick(post, ['featured', 'title', 'date', 'slug', 'description'])
  )
  blogs = blogs
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
    )
    .slice(0, 2)

  let inspirations = allInspirations.map((post: Inspiration) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  inspirations = inspirations.filter((post) => post.featured === true).slice(0, 3)

  let podcasts = allPodcasts.map((post: Podcasts) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  podcasts = podcasts.filter((post) => post.featured === true).slice(0, 4)

  let tools = allTools.map((post: Tools) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  tools = tools.filter((post) => post.featured === true).slice(0, 4)

  let resources = allResources.map((post: Resources) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  resources = resources.filter((post) => post.featured === true).slice(0, 3)

  const quick: CatKey[] = ['inspiration', 'tools', 'podcasts', 'resources']

  return (
    <Layout>
      {/* ---------------- HÉROE ---------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dotgrid opacity-70" aria-hidden />
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-sun-light blur-2xl opacity-60" aria-hidden />
        <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-brand-light blur-2xl opacity-70" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark shadow-sm">
            <span className="size-2 rounded-full bg-coral" />
            AMPA del CEIP [Nombre del Colegio]
          </span>

          <h1 className="mt-5 max-w-3xl font-display font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Una escuela donde las familias{' '}
            <span className="squiggle text-brand">suman</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted">
            {home?.description ||
              'Organizamos actividades extraescolares, servicios para conciliar, fiestas y eventos, y representamos a las familias ante el centro.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resources" className="btn btn-primary">
              Hazte socio/a
            </Link>
            <Link href="/inspiration" className="btn btn-secondary">
              Ver actividades
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quick.map((k) => {
              const c = cat(k)
              return (
                <Link
                  key={k}
                  href={c.href}
                  className="group flex items-center gap-3 rounded-2xl bg-white border border-line p-3 shadow-card hover:shadow-lift hover:-translate-y-0.5 transition-all"
                >
                  <span
                    className={`grid place-items-center size-10 rounded-xl ${c.chip} shrink-0`}
                  >
                    <Icon name={k} className="size-5" />
                  </span>
                  <span className="font-display font-bold text-ink leading-tight">
                    {c.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SECCIONES ---------------- */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-16 sm:gap-20 py-16 sm:py-20">
        <section>
          <SectionHeader k="blog" />
          <div className="grid md:grid-cols-2 gap-4">
            {blogs.map((post) => (
              <BlogCardPost key={post.slug} post={post as Blog} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader k="inspiration" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inspirations.map((post) => (
              <InspirationPostCard key={post.slug} post={post as Inspiration} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader k="podcasts" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {podcasts.map((post) => (
              <PodcastPostCard key={post.slug} post={post as Podcasts} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader k="tools" />
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((post) => (
              <ToolsPostCard key={post.slug} post={post as Tools} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader k="resources" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((post) => (
              <ResourcePostCard key={post.slug} post={post as Resources} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-4xl bg-brand text-white px-6 py-12 sm:px-12 sm:py-14">
          <div className="absolute inset-0 dotgrid opacity-20" aria-hidden />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Con una sola tarde al trimestre, ya ayudas
              </h2>
              <p className="mt-2 text-white/85">
                Asóciate al AFAC y participa en las comisiones. Cuantas más
                familias, más cosas podemos hacer por el cole.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn bg-sun text-ink hover:bg-white shrink-0"
            >
              Quiero colaborar
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
