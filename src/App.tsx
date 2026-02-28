import {
  type MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Lenis from 'lenis'
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { projects, projectsBySlug } from './data/projects'

const HEADER_OFFSET = 104
const CONTACT_EMAIL = 'zoobx@vk.com'
const CONTACT_TELEGRAM = '@egellans'

type FluidImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  loading?: 'lazy' | 'eager'
}

function App() {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenisRef.current = null
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    let minTimeReached = false
    let pageLoaded = document.readyState === 'complete'

    const maybeHide = () => {
      if (minTimeReached && pageLoaded) {
        setShowLoader(false)
      }
    }

    const minTimer = window.setTimeout(() => {
      minTimeReached = true
      maybeHide()
    }, 760)

    const onLoad = () => {
      pageLoaded = true
      maybeHide()
    }

    if (!pageLoaded) {
      window.addEventListener('load', onLoad, { once: true })
    } else {
      maybeHide()
    }

    return () => {
      window.clearTimeout(minTimer)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  useLayoutEffect(() => {
    const resetToTop = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true })
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    resetToTop()
    const rafId = window.requestAnimationFrame(resetToTop)
    const timeoutId = window.setTimeout(resetToTop, 40)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>{showLoader ? <SiteLoader key="site-loader" /> : null}</AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

function SiteLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
      className="site-loader"
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="site-loader-inner"
      >
        <span className="site-loader-word font-serif">Katya</span>
        <div className="site-loader-line" />
      </motion.div>
    </motion.div>
  )
}

function FluidImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
}: FluidImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`image-shell ${isLoaded ? 'is-loaded' : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={imageClassName}
      />
    </div>
  )
}

function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const location = useLocation()

  const scrollToSectionById = useCallback((id: string, smooth: boolean) => {
    const section = document.getElementById(id)
    if (!section) {
      return
    }

    const nextTop = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: nextTop, behavior: smooth ? 'smooth' : 'auto' })
  }, [])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const sectionId = location.hash.slice(1)
    const timeout = window.setTimeout(() => {
      scrollToSectionById(sectionId, false)
    }, 0)

    return () => window.clearTimeout(timeout)
  }, [location.hash, scrollToSectionById])

  const onAnchorClick =
    (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      scrollToSectionById(sectionId, true)
      window.history.replaceState(null, '', `/#${sectionId}`)
    }

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(188,164,141,.24),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(78,87,75,.12),transparent_42%)]" />
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-20 bg-black/14 transition-opacity duration-300 ${
          hoveredProject ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <header className="fixed inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 backdrop-blur-md md:px-10">
        <a href="#top" onClick={onAnchorClick('top')} className="font-serif text-2xl tracking-wide">
          Katya
        </a>
        <nav className="flex gap-5 text-xs uppercase tracking-[0.24em] text-[var(--muted)] md:text-sm">
          <a href="#about" onClick={onAnchorClick('about')} className="hover:text-[var(--ink)]">
            About
          </a>
          <a href="#gallery" onClick={onAnchorClick('gallery')} className="hover:text-[var(--ink)]">
            Gallery
          </a>
          <a href="#contact" onClick={onAnchorClick('contact')} className="hover:text-[var(--ink)]">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 pb-12 pt-28 md:px-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid min-h-[calc(100vh-8rem)] items-end border-b border-[var(--line)] pb-18 md:grid-cols-12"
        >
          <div className="md:col-span-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              Painter / Wallpainter
            </p>
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl lg:text-9xl">Katya</h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Hand-painted walls, murals, and textured surfaces for homes, studios, and intimate
              public spaces.
            </p>
          </div>
          <div className="mt-10 space-y-5 md:col-span-4 md:mt-0 md:justify-self-end">
            <a
              href="#gallery"
              onClick={onAnchorClick('gallery')}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              View selected works
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Soft palettes, botanical forms, and layered brushwork built for calm interiors.
            </p>
          </div>
        </motion.section>

        <section
          id="about"
          className="anchor-section grid gap-8 border-b border-[var(--line)] py-18 md:grid-cols-12 md:gap-12"
        >
          <h2 className="font-serif text-4xl md:col-span-4 md:text-5xl">About</h2>
          <div className="space-y-6 md:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed">
              Katya creates site-specific painting for walls and architectural surfaces. Every
              piece is made by hand, with no digital prints and no repetition.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Her practice combines mural painting, faux plaster textures, and fine line ornament
              inspired by plants, stone, and faded European interiors.
            </p>
          </div>
        </section>

        <section id="gallery" className="anchor-section border-b border-[var(--line)] py-18">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">Gallery</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Selected Projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((item, index) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                onMouseEnter={() => setHoveredProject(item.slug)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocusCapture={() => setHoveredProject(item.slug)}
                onBlurCapture={() => setHoveredProject(null)}
                className={`tile-pop relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white/35 ${
                  hoveredProject === item.slug ? 'z-30' : 'z-10'
                }`}
              >
                {item.isPlaceholder ? (
                  <div className="group block">
                    <div className="flex aspect-[4/5] items-center justify-center border-b border-dashed border-[var(--line)] bg-[rgba(255,255,255,0.18)]">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                        Placeholder
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                      <div>
                        <h3 className="font-serif text-2xl">{item.title}</h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">Coming soon</p>
                      </div>
                      <p className="text-sm text-[var(--muted)]">TBD</p>
                    </div>
                  </div>
                ) : (
                  <Link to={`/projects/${encodeURIComponent(item.slug)}`} className="group block">
                    <FluidImage
                      key={item.image}
                      src={item.image}
                      alt={`${item.title} wall painting`}
                      className="aspect-[4/5]"
                      imageClassName="h-full w-full object-cover"
                    />
                    <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                      <div>
                        <h3 className="font-serif text-2xl">{item.title}</h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">{item.place}</p>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{item.year}</p>
                    </div>
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="anchor-section py-18">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">Contact</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Direct</p>
          </div>

          <div className="contact-fluid">
            <a
              href="https://t.me/egellans"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="Telegram"
            >
              <p className="contact-label">Telegram</p>
              <p className="contact-value">{CONTACT_TELEGRAM}</p>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link" aria-label="Email">
              <p className="contact-label">Email</p>
              <p className="contact-value">{CONTACT_EMAIL}</p>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-[var(--line)] px-6 py-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10">
      <p>Ekaterina Shmakova, 2026</p>
      <p>Available for travel</p>
      <p>© 2026 All rights reserved.</p>
    </footer>
  )
}

function ProjectShowcaseGallery({
  projectTitle,
  images,
}: {
  projectTitle: string
  images: string[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const total = images.length
  const hasMultiple = total > 1
  const activeImage = images[activeIndex]

  const onPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }

  const onNext = () => {
    setActiveIndex((current) => (current + 1) % total)
  }

  if (total === 0) {
    return (
      <section className="border-b border-[var(--line)] py-12">
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Project Gallery</p>
        <div className="flex h-56 items-center justify-center rounded-3xl border border-dashed border-[var(--line)] bg-white/20 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Gallery coming soon
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-[var(--line)] py-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Project Gallery</p>
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          {activeIndex + 1} / {total}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="project-gallery-stage"
        >
          <FluidImage
            src={activeImage}
            alt={`${projectTitle} detail ${activeIndex + 1}`}
            className="aspect-[16/10] md:aspect-[16/9]"
            imageClassName="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple ? (
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="project-gallery-nav"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="no-scrollbar flex flex-1 gap-3 overflow-x-auto px-0.5 py-1">
            {images.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`project-thumb ${index === activeIndex ? 'is-active' : ''}`}
                aria-label={`Open detail image ${index + 1}`}
              >
                <FluidImage
                  key={image}
                  src={image}
                  alt={`${projectTitle} thumbnail ${index + 1}`}
                  className="h-full w-full"
                  imageClassName="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            className="project-gallery-nav"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      ) : null}
    </section>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const decodedSlug = useMemo(() => (slug ? decodeURIComponent(slug) : ''), [slug])
  const project = decodedSlug ? projectsBySlug[decodedSlug] : undefined

  if (!project || project.isPlaceholder) {
    return <Navigate to="/" replace />
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && !item.isPlaceholder)
    .slice(0, 2)

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(188,164,141,.24),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(78,87,75,.12),transparent_42%)]" />

      <header className="fixed inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 backdrop-blur-md md:px-10">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          Katya
        </Link>
        <Link
          to="/#gallery"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)] hover:text-[var(--ink)]"
        >
          <ArrowLeft size={16} />
          Back to gallery
        </Link>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-12 pt-28 md:px-10">
        <section className="border-b border-[var(--line)] pb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Project</p>
          <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl">{project.title}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            {project.place} / {project.year}
          </p>
        </section>

        <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="overflow-hidden rounded-3xl md:col-span-7"
          >
            <FluidImage
              key={project.image}
              src={project.image}
              alt={`${project.title} mural primary image`}
              className="aspect-[5/6] md:aspect-auto md:h-full"
              imageClassName="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>

          <aside className="space-y-6 md:col-span-5 md:pt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Short Description</p>
            <p className="font-serif text-3xl leading-tight">{project.summary}</p>
            <p className="text-base leading-relaxed text-[var(--muted)]">{project.description}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--ink)]"
            >
              Discuss a project
              <ArrowUpRight size={16} />
            </a>
          </aside>
        </section>

        <ProjectShowcaseGallery
          key={project.slug}
          projectTitle={project.title}
          images={project.detailImages}
        />

        <section className="py-12">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">More Projects</p>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${encodeURIComponent(item.slug)}`}
                className="tile-pop group overflow-hidden rounded-3xl border border-[var(--line)] bg-white/35"
              >
                <FluidImage
                  key={item.image}
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="aspect-[16/10]"
                  imageClassName="h-full w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="font-serif text-2xl">{item.title}</h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.place}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
