import { useEffect } from 'react'
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

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

  const gallery = [
    {
      title: 'Sage Bloom',
      place: 'Private Residence, Moscow',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1624969862293-b749659ccc4b?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Studio Garden',
      place: 'Yoga Loft, Kazan',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1460904577954-8fadb262612c?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Quiet Coast',
      place: 'Boutique Hotel, Sochi',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Clay Horizon',
      place: 'Cafe Margo, Saint Petersburg',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Wild Iris',
      place: 'Atelier Apartment, Tver',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1578301978069-227b81b86942?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Linen Echo',
      place: 'Children Library, Yaroslavl',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=80',
    },
  ]

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(188,164,141,.24),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(78,87,75,.12),transparent_42%)]" />

      <header className="fixed inset-x-0 top-0 z-20 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 backdrop-blur-md md:px-10">
        <a href="#top" className="font-serif text-2xl tracking-wide">
          Katya
        </a>
        <nav className="flex gap-5 text-xs uppercase tracking-[0.24em] text-[var(--muted)] md:text-sm">
          <a href="#about" className="hover:text-[var(--ink)]">
            About
          </a>
          <a href="#gallery" className="hover:text-[var(--ink)]">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[var(--ink)]">
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
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
              Katya
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Hand-painted walls, murals, and textured surfaces for homes,
              studios, and intimate public spaces.
            </p>
          </div>
          <div className="mt-10 space-y-5 md:col-span-4 md:mt-0 md:justify-self-end">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              View selected works
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Soft palettes, botanical forms, and layered brushwork built for
              calm interiors.
            </p>
          </div>
        </motion.section>

        <section
          id="about"
          className="grid gap-8 border-b border-[var(--line)] py-18 md:grid-cols-12 md:gap-12"
        >
          <h2 className="font-serif text-4xl md:col-span-4 md:text-5xl">About</h2>
          <div className="space-y-6 md:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed">
              Katya creates site-specific painting for walls and architectural
              surfaces. Every piece is made by hand, with no digital prints and
              no repetition.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Her practice combines mural painting, faux plaster textures, and
              fine line ornament inspired by plants, stone, and faded European
              interiors.
            </p>
          </div>
        </section>

        <section id="gallery" className="border-b border-[var(--line)] py-18">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">Gallery</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Selected Projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-white/35"
              >
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
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-6 py-18 md:grid-cols-3 md:gap-8"
        >
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

export default App
