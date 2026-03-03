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
import { inStockItems } from './data/inStock'
import { projects, projectsBySlug } from './data/projects'

const HEADER_OFFSET = 104
const CONTACT_EMAIL = 'zoobx@vk.com'
const CONTACT_TELEGRAM = '@egellans'
const LANG_STORAGE_KEY = 'katya-lang'

const ui = {
  en: {
    metaTitle: 'Katya Shmakova | Painter & Wallpainter',
    metaDescription:
      'Portfolio website for Katya Shmakova, a painter and wallpainter creating hand-painted murals and interiors.',
    loaderWord: 'Katya',
    navAbout: 'About author',
    navGallery: 'Gallery',
    navInStock: 'In stock',
    navContact: 'Contact me',
    heroRole: 'Painter / Wallpainter',
    heroDescription:
      'Hand-painted walls, murals, and textured surfaces for homes, studios, and intimate public spaces.',
    heroCta: 'View selected works',
    heroNote: 'Soft palettes, botanical forms, and layered brushwork built for calm interiors.',
    aboutTitle: 'About author',
    aboutTextOne:
      'Katya creates site-specific painting for walls and architectural surfaces. Every piece is made by hand, with no digital prints and no repetition.',
    aboutTextTwo:
      'Her practice combines mural painting, faux plaster textures, and fine line ornament inspired by plants, stone, and faded European interiors.',
    galleryTitle: 'Gallery',
    selectedProjects: 'Selected Projects',
    placeholder: 'Placeholder',
    comingSoon: 'Coming soon',
    tbd: 'TBD',
    contactTitle: 'Contact me',
    contactKicker: 'Direct',
    labelTelegram: 'Telegram',
    labelEmail: 'Email',
    footerName: 'Ekaterina Shmakova, 2026',
    footerTravel: 'Available for travel',
    footerCopyright: '© 2026 All rights reserved.',
    projectLabel: 'Project',
    backToGallery: 'Back to gallery',
    backToGalleryShort: 'Back',
    shortDescription: 'Description',
    inStockTitle: 'In stock',
    inStockIntro: 'A curated set of available paintings and studies.',
    availableNow: 'Available now',
    priceLabel: 'Price',
    discussProject: 'Discuss a project',
    projectGallery: 'Project Gallery',
    galleryComingSoon: 'Gallery coming soon',
    moreProjects: 'More Projects',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    openDetailImage: 'Open detail image',
    altWallPainting: 'wall painting',
    altProjectPreview: 'project preview',
    altDetail: 'detail',
    languageLabel: 'Language',
  },
  ru: {
    metaTitle: 'Катя Шмакова | Художница и роспись стен',
    metaDescription:
      'Портфолио Кати Шмаковой — художницы по росписи стен, создающей ручные росписи и авторские интерьерные поверхности.',
    loaderWord: 'Katya',
    navAbout: 'Об авторе',
    navGallery: 'Галерея',
    navInStock: 'В наличии',
    navContact: 'Связаться',
    heroRole: 'Художница / Роспись стен',
    heroDescription:
      'Ручная роспись стен, муралы и фактурные поверхности для домов, студий и камерных общественных пространств.',
    heroCta: 'Смотреть работы',
    heroNote: 'Мягкие палитры, ботанические формы и многослойная кистевая работа для спокойных интерьеров.',
    aboutTitle: 'Об авторе',
    aboutTextOne:
      'Катя создает росписи под конкретное пространство — для стен и архитектурных поверхностей. Каждая работа выполняется вручную, без цифровой печати и повторов.',
    aboutTextTwo:
      'В практике сочетаются муральная живопись, имитация штукатурных фактур и тонкая линейная орнаментика, вдохновленная природой, камнем и выцветшими европейскими интерьерами.',
    galleryTitle: 'Галерея',
    selectedProjects: 'Избранные проекты',
    placeholder: 'Плейсхолдер',
    comingSoon: 'Скоро',
    tbd: 'Скоро',
    contactTitle: 'Связаться',
    contactKicker: 'Напрямую',
    labelTelegram: 'Телеграм',
    labelEmail: 'Почта',
    footerName: 'Екатерина Шмакова, 2026',
    footerTravel: 'Готова к поездкам',
    footerCopyright: '© 2026 Все права защищены.',
    projectLabel: 'Проект',
    backToGallery: 'Назад к галерее',
    backToGalleryShort: 'Назад',
    shortDescription: 'Описание',
    inStockTitle: 'В наличии',
    inStockIntro: 'Подборка работ, которые доступны на данный момент.',
    availableNow: 'Доступно',
    priceLabel: 'Цена',
    discussProject: 'Обсудить проект',
    projectGallery: 'Галерея проекта',
    galleryComingSoon: 'Галерея скоро появится',
    moreProjects: 'Другие проекты',
    previousImage: 'Предыдущее изображение',
    nextImage: 'Следующее изображение',
    openDetailImage: 'Открыть изображение',
    altWallPainting: 'роспись стены',
    altProjectPreview: 'превью проекта',
    altDetail: 'деталь',
    languageLabel: 'Язык',
  },
} as const

type Lang = keyof typeof ui
type Dictionary = (typeof ui)[Lang]

type FluidImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  loading?: 'lazy' | 'eager'
}

function readInitialLang(): Lang {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY)
  if (savedLang === 'en' || savedLang === 'ru') {
    return savedLang
  }

  return window.navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

function App() {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)
  const [showLoader, setShowLoader] = useState(true)
  const [lang, setLang] = useState<Lang>(readInitialLang)

  const t = ui[lang]

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.title = t.metaTitle

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', t.metaDescription)
    }
  }, [lang, t.metaDescription, t.metaTitle])

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
      <AnimatePresence>
        {showLoader ? <SiteLoader key="site-loader" title={t.loaderWord} /> : null}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              lang={lang}
              setLang={setLang}
            />
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <ProjectPage
              lang={lang}
              setLang={setLang}
            />
          }
        />
        <Route
          path="/in-stock"
          element={
            <InStockPage
              lang={lang}
              setLang={setLang}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

function SiteLoader({ title }: { title: string }) {
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
        <span className="site-loader-word font-serif">{title}</span>
        <div className="site-loader-line" />
      </motion.div>
    </motion.div>
  )
}

function LanguageSwitch({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (nextLang: Lang) => void
}) {
  const t = ui[lang]

  return (
    <motion.div
      className="lang-switch-shell"
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="lang-switch" role="group" aria-label={t.languageLabel}>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
          aria-label="English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang('ru')}
          className={`lang-btn ${lang === 'ru' ? 'is-active' : ''}`}
          aria-label="Русский"
        >
          RU
        </button>
      </div>
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

function HomePage({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (nextLang: Lang) => void
}) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const location = useLocation()
  const t = ui[lang]

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
      <div className="site-backdrop pointer-events-none fixed inset-0 -z-10" />
      <div
        aria-hidden
        className={`hover-dim pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 ${
          hoveredProject ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <header className="safe-x fixed inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-7xl items-center justify-between backdrop-blur-md">
        <a href="#top" onClick={onAnchorClick('top')} className="site-brand font-serif tracking-wide">
          Katya
        </a>

        <div className="flex min-w-0 items-center gap-2 md:gap-4">
          <nav className="site-nav">
            <a href="#about" onClick={onAnchorClick('about')} className="hover:text-[var(--ink)]">
              {t.navAbout}
            </a>
            <a href="#gallery" onClick={onAnchorClick('gallery')} className="hover:text-[var(--ink)]">
              {t.navGallery}
            </a>
            <Link to="/in-stock" className="hover:text-[var(--ink)]">
              {t.navInStock}
            </Link>
            <a href="#contact" onClick={onAnchorClick('contact')} className="hover:text-[var(--ink)]">
              {t.navContact}
            </a>
          </nav>

          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main id="top" className="safe-x mx-auto max-w-7xl pb-12 pt-28">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid min-h-[calc(100vh-8rem)] items-end border-b border-[var(--line)] pb-18 md:grid-cols-12"
        >
          <div className="hero-main md:col-span-8">
            <p className="hero-role text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.heroRole}
            </p>
            <h1 className="hero-title font-serif text-6xl md:text-8xl lg:text-9xl">
              <span className="block">Katya</span>
              <span className="block">Shmakova</span>
            </h1>
            <p className="hero-description max-w-lg text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t.heroDescription}
            </p>
          </div>
          <div className="mt-10 space-y-5 md:col-span-4 md:mt-0 md:justify-self-end">
            <a
              href="#gallery"
              onClick={onAnchorClick('gallery')}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {t.heroCta}
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">{t.heroNote}</p>
          </div>
        </motion.section>

        <section
          id="about"
          className="anchor-section grid gap-8 border-b border-[var(--line)] py-18 md:grid-cols-12 md:gap-12"
        >
          <h2 className="font-serif text-4xl md:col-span-4 md:text-5xl">{t.aboutTitle}</h2>
          <div className="space-y-6 md:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed">{t.aboutTextOne}</p>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">{t.aboutTextTwo}</p>
          </div>
        </section>

        <section id="gallery" className="anchor-section border-b border-[var(--line)] py-18">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">{t.galleryTitle}</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.selectedProjects}</p>
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
                className={`tile-pop surface-card relative overflow-hidden rounded-3xl border border-[var(--line)] ${
                  hoveredProject === item.slug ? 'z-30' : 'z-10'
                }`}
              >
                {item.isPlaceholder ? (
                  <div className="group block">
                    <div className="placeholder-surface flex aspect-[4/5] items-center justify-center border-b border-dashed border-[var(--line)]">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{t.placeholder}</p>
                    </div>
                    <div className="flex items-start justify-between gap-4 p-5 md:items-center md:p-6">
                      <div className="min-w-0">
                        <h3 className="project-card-title font-serif text-[1.35rem] leading-tight md:text-2xl">
                          {item.title[lang]}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">{t.comingSoon}</p>
                      </div>
                      <p className="shrink-0 pt-0.5 text-right text-sm text-[var(--muted)] md:pt-0">{t.tbd}</p>
                    </div>
                  </div>
                ) : (
                  <Link to={`/projects/${encodeURIComponent(item.slug)}`} className="group block">
                    <FluidImage
                      key={item.image}
                      src={item.image}
                      alt={`${item.title[lang]} ${t.altWallPainting}`}
                      className="aspect-[4/5]"
                      imageClassName="h-full w-full object-cover"
                    />
                    <div className="flex items-start justify-between gap-4 p-5 md:items-center md:p-6">
                      <div className="min-w-0">
                        <h3 className="project-card-title font-serif text-[1.35rem] leading-tight md:text-2xl">
                          {item.title[lang]}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">{item.place[lang]}</p>
                      </div>
                      <p className="shrink-0 pt-0.5 text-right text-sm text-[var(--muted)] md:pt-0">{item.year}</p>
                    </div>
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="anchor-section py-18">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">{t.navContact}</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.contactKicker}</p>
          </div>

          <div className="contact-fluid">
            <a
              href="https://t.me/egellans"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label={t.labelTelegram}
            >
              <p className="contact-label">{t.labelTelegram}</p>
              <p className="contact-value">{CONTACT_TELEGRAM}</p>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link" aria-label={t.labelEmail}>
              <p className="contact-label">{t.labelEmail}</p>
              <p className="contact-value">{CONTACT_EMAIL}</p>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}

function InStockPage({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (nextLang: Lang) => void
}) {
  const location = useLocation()
  const t = ui[lang]

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
      window.history.replaceState(null, '', `/in-stock#${sectionId}`)
    }

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="site-backdrop pointer-events-none fixed inset-0 -z-10" />

      <header className="safe-x fixed inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-7xl items-center justify-between backdrop-blur-md">
        <Link to="/" className="site-brand font-serif tracking-wide">
          Katya
        </Link>

        <div className="flex min-w-0 items-center gap-2 md:gap-4">
          <nav className="site-nav">
            <Link to="/#about" className="hover:text-[var(--ink)]">
              {t.navAbout}
            </Link>
            <Link to="/#gallery" className="hover:text-[var(--ink)]">
              {t.navGallery}
            </Link>
            <Link to="/in-stock" className="text-[var(--ink)]">
              {t.navInStock}
            </Link>
            <a href="#contact" onClick={onAnchorClick('contact')} className="hover:text-[var(--ink)]">
              {t.navContact}
            </a>
          </nav>

          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="safe-x mx-auto max-w-7xl pb-12 pt-28">
        <section className="border-b border-[var(--line)] pb-12">
          <h1 className="font-serif text-4xl leading-[0.95] sm:text-5xl md:text-7xl">{t.inStockTitle}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {t.inStockIntro}
          </p>
        </section>

        <section className="py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {inStockItems.map((item, index) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="tile-pop surface-card overflow-hidden rounded-3xl border border-[var(--line)]"
              >
                {item.isPlaceholder || !item.image ? (
                  <div className="group block">
                    <div className="placeholder-surface flex aspect-[4/5] items-center justify-center border-b border-dashed border-[var(--line)]">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{t.placeholder}</p>
                    </div>
                    <div className="space-y-3 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="project-card-title font-serif text-[1.35rem] leading-tight md:text-2xl">
                          {item.title[lang]}
                        </h3>
                        <p className="shrink-0 pt-0.5 text-right text-sm text-[var(--muted)] md:pt-0">
                          {item.year}
                        </p>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{item.medium[lang]}</p>
                      <div className="stock-meta-row text-sm text-[var(--muted)]">
                        <p>{item.size}</p>
                        <a
                          href="#contact"
                          onClick={onAnchorClick('contact')}
                          className="stock-price-corner"
                          aria-label={`${t.priceLabel}: ${item.price[lang]} / ${t.navContact}`}
                        >
                          {t.priceLabel}: {item.price[lang]}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="group block">
                    <FluidImage
                      key={item.image}
                      src={item.image}
                      alt={`${item.title[lang]} ${t.altProjectPreview}`}
                      className="aspect-[4/5]"
                      imageClassName="h-full w-full object-cover"
                    />
                    <div className="space-y-3 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="project-card-title font-serif text-[1.35rem] leading-tight md:text-2xl">
                          {item.title[lang]}
                        </h3>
                        <p className="shrink-0 pt-0.5 text-right text-sm text-[var(--muted)] md:pt-0">
                          {item.year}
                        </p>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{item.medium[lang]}</p>
                      <div className="stock-meta-row text-sm text-[var(--muted)]">
                        <p>{item.size}</p>
                        <a
                          href="#contact"
                          onClick={onAnchorClick('contact')}
                          className="stock-price-corner"
                          aria-label={`${t.priceLabel}: ${item.price[lang]} / ${t.navContact}`}
                        >
                          {t.priceLabel}: {item.price[lang]}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="anchor-section border-t border-[var(--line)] py-18">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">{t.navContact}</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.contactKicker}</p>
          </div>

          <div className="contact-fluid">
            <a
              href="https://t.me/egellans"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label={t.labelTelegram}
            >
              <p className="contact-label">{t.labelTelegram}</p>
              <p className="contact-value">{CONTACT_TELEGRAM}</p>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link" aria-label={t.labelEmail}>
              <p className="contact-label">{t.labelEmail}</p>
              <p className="contact-value">{CONTACT_EMAIL}</p>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}

function SiteFooter({ lang }: { lang: Lang }) {
  const t = ui[lang]

  return (
    <footer className="site-footer safe-x safe-bottom mx-auto flex max-w-7xl flex-col gap-2 border-t border-[var(--line)] py-7 text-[0.78rem] leading-relaxed text-[var(--muted)] sm:text-sm md:flex-row md:items-center md:justify-between md:gap-0">
      <p className="footer-item">{t.footerName}</p>
      <p className="footer-item">{t.footerTravel}</p>
      <p className="footer-item">{t.footerCopyright}</p>
    </footer>
  )
}

function ProjectShowcaseGallery({
  projectTitle,
  images,
  t,
}: {
  projectTitle: string
  images: string[]
  t: Dictionary
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
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.projectGallery}</p>
        <div className="empty-gallery-surface flex h-56 items-center justify-center rounded-3xl border border-dashed border-[var(--line)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {t.galleryComingSoon}
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-[var(--line)] py-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.projectGallery}</p>
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
            alt={`${projectTitle} ${t.altDetail} ${activeIndex + 1}`}
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
            aria-label={t.previousImage}
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
                aria-label={`${t.openDetailImage} ${index + 1}`}
              >
                <FluidImage
                  key={image}
                  src={image}
                  alt={`${projectTitle} ${t.altDetail} ${index + 1}`}
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
            aria-label={t.nextImage}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      ) : null}
    </section>
  )
}

function ProjectPage({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (nextLang: Lang) => void
}) {
  const { slug } = useParams()
  const decodedSlug = useMemo(() => (slug ? decodeURIComponent(slug) : ''), [slug])
  const project = decodedSlug ? projectsBySlug[decodedSlug] : undefined
  const t = ui[lang]

  if (!project || project.isPlaceholder) {
    return <Navigate to="/" replace />
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && !item.isPlaceholder)
    .slice(0, 2)

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="site-backdrop pointer-events-none fixed inset-0 -z-10" />

      <header className="safe-x fixed inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-7xl items-center justify-between backdrop-blur-md">
        <Link to="/" className="site-brand font-serif tracking-wide">
          Katya
        </Link>

        <div className="flex min-w-0 items-center gap-2 md:gap-4">
          <Link
            to="/#gallery"
            className="project-back-link inline-flex shrink-0 items-center gap-1 text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{t.backToGallery}</span>
            <span className="sm:hidden">{t.backToGalleryShort}</span>
          </Link>
          <Link
            to="/in-stock"
            className="project-back-link inline-flex shrink-0 items-center text-[var(--muted)] hover:text-[var(--ink)]"
          >
            {t.navInStock}
          </Link>

          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="safe-x mx-auto max-w-7xl pb-12 pt-28">
        <section className="border-b border-[var(--line)] pb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{t.projectLabel}</p>
          <h1 className="font-serif text-4xl leading-[0.95] break-words sm:text-5xl md:text-7xl">
            {project.title[lang]}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            {project.place[lang]} / {project.year}
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
              alt={`${project.title[lang]} ${t.altWallPainting}`}
              className="aspect-[5/6] md:aspect-auto md:h-full"
              imageClassName="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>

          <aside className="space-y-6 md:col-span-5 md:pt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.shortDescription}</p>
            <p className="font-serif text-2xl leading-tight sm:text-3xl">{project.summary[lang]}</p>
            <p className="text-base leading-relaxed text-[var(--muted)]">{project.description[lang]}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--ink)]"
            >
              {t.discussProject}
              <ArrowUpRight size={16} />
            </a>
          </aside>
        </section>

        <ProjectShowcaseGallery
          key={project.slug}
          projectTitle={project.title[lang]}
          images={project.detailImages}
          t={t}
        />

        <section className="py-12">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.moreProjects}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${encodeURIComponent(item.slug)}`}
                className="tile-pop surface-card group overflow-hidden rounded-3xl border border-[var(--line)]"
              >
                <FluidImage
                  key={item.image}
                  src={item.image}
                  alt={`${item.title[lang]} ${t.altProjectPreview}`}
                  className="aspect-[16/10]"
                  imageClassName="h-full w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="project-card-title font-serif text-[1.35rem] leading-tight md:text-2xl">
                    {item.title[lang]}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.place[lang]}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}

export default App
