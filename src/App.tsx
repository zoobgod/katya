import { type MouseEvent, useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
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

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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
                className={`relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white/35 ${
                  hoveredProject === item.slug ? 'z-30' : 'z-10'
                }`}
              >
                <Link to={`/projects/${item.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} wall painting`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                    <div>
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.place}</p>
                    </div>
                    <p className="text-sm text-[var(--muted)]">{item.year}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="anchor-section grid gap-6 py-18 md:grid-cols-3 md:gap-8">
          <a
            href="mailto:katya.mural@example.com"
            className="contact-card"
            aria-label="Email Katya"
          >
            <Mail size={18} />
            <p className="contact-label">Email</p>
            <p className="contact-value">katya.mural@example.com</p>
          </a>
          <a href="tel:+79991234567" className="contact-card" aria-label="Call Katya">
            <Phone size={18} />
            <p className="contact-label">Phone</p>
            <p className="contact-value">+7 999 123 45 67</p>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="Katya Instagram"
          >
            <Instagram size={18} />
            <p className="contact-label">Instagram</p>
            <p className="contact-value">@katya.walls</p>
          </a>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[var(--line)] px-6 py-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10">
        <p>Katya Painter Portfolio</p>
        <p className="inline-flex items-center gap-2">
          <MapPin size={14} />
          Moscow, available for travel
        </p>
      </footer>
    </div>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? projectsBySlug[slug] : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2)

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
            <img
              src={project.image}
              alt={`${project.title} mural primary image`}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <aside className="space-y-6 md:col-span-5 md:pt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Short Description</p>
            <p className="font-serif text-3xl leading-tight">{project.summary}</p>
            <p className="text-base leading-relaxed text-[var(--muted)]">{project.description}</p>
            <a
              href="mailto:katya.mural@example.com"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--ink)]"
            >
              Discuss a project
              <ArrowUpRight size={16} />
            </a>
          </aside>
        </section>

        <section className="border-b border-[var(--line)] py-12">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Project Gallery</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.detailImages.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white/35"
              >
                <img
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  loading="lazy"
                  className="h-60 w-full object-cover md:h-72"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">More Projects</p>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-white/35"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-2xl">{item.title}</h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.place}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[var(--line)] px-6 py-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10">
        <p>Katya Painter Portfolio</p>
        <p className="inline-flex items-center gap-2">
          <MapPin size={14} />
          Moscow, available for travel
        </p>
      </footer>
    </div>
  )
}

export default App
