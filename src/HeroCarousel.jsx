import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HERO_AUTOPLAY_MS = 5000

const heroSlides = [
  {
    id: 'investigation',
    image:
      "url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2400&q=80')",
    overlay: 'bg-gradient-to-br from-brand-navy/92 via-brand-navy/70 to-brand-green/80',
    eyebrow: 'UK & International',
    title: 'Experts in',
    highlight: 'Private Investigation',
    highlightClass: 'bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent',
    subtitle:
      'Discreet, evidence-led investigations for businesses and individuals, giving you the clarity you need to act decisively.',
  },
  {
    id: 'cyber',
    image: "url('/experts-in-cyber-security-UK.jpg')",
    overlay: 'bg-gradient-to-b from-brand-navy/90 via-slate-950/75 to-cyan-950/88',
    eyebrow: 'Digital Forensics',
    title: 'Trusted',
    highlight: 'Cyber Security',
    highlightClass: 'bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent',
    subtitle:
      'Incident response, forensic analysis, and practical guidance to protect your organisation when it matters most.',
  },
]

function IconSearch({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [tabHidden, setTabHidden] = useState(() =>
    typeof document !== 'undefined' ? document.hidden : false,
  )
  const [reducedMotion, setReducedMotion] = useState(false)
  const [timerEpoch, setTimerEpoch] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const slideCount = heroSlides.length
  const slide = heroSlides[activeIndex]
  const autoplayPaused = tabHidden || reducedMotion

  const resetAutoplayTimer = useCallback(() => {
    setTimerEpoch((epoch) => epoch + 1)
  }, [])

  const advanceSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount)
  }, [slideCount])

  const advanceRef = useRef(advanceSlide)
  advanceRef.current = advanceSlide

  const goTo = useCallback(
    (index) => {
      const next = (index + slideCount) % slideCount
      if (next !== activeIndex) {
        setActiveIndex(next)
        resetAutoplayTimer()
      }
    },
    [activeIndex, slideCount, resetAutoplayTimer],
  )

  const goNext = useCallback(() => {
    advanceSlide()
    resetAutoplayTimer()
  }, [advanceSlide, resetAutoplayTimer])

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount)
    resetAutoplayTimer()
  }, [slideCount, resetAutoplayTimer])

  useEffect(() => {
    if (autoplayPaused) return undefined

    const timer = window.setInterval(() => {
      advanceRef.current()
    }, HERO_AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [autoplayPaused, timerEpoch])

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px * 10, y: py * 8 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      className="hero-slider relative min-h-[min(100svh,920px)] overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-3d-orb hero-3d-orb-1" aria-hidden />
      <div className="hero-3d-orb hero-3d-orb-2" aria-hidden />
      <div className="hero-3d-orb hero-3d-orb-3" aria-hidden />

      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slide-bg hero-slide-fade absolute inset-0 overflow-hidden ${
            i === activeIndex ? 'hero-slide-fade-active' : 'hero-slide-fade-inactive'
          }`}
          aria-hidden={i !== activeIndex}
        >
          <div
            className={`absolute inset-[-5%] bg-cover bg-center bg-no-repeat ${i === activeIndex ? 'hero-ken-burns' : ''}`}
            style={{
              backgroundImage: s.image,
              transform:
                i === activeIndex
                  ? `translate3d(${tilt.x * 0.5}px, ${tilt.y * 0.4}px, 0) scale(1.06)`
                  : 'scale(1.06)',
            }}
          />
          <div className={`absolute inset-0 ${s.overlay}`} />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(17,34,51,0.5)_100%)]"
        aria-hidden
      />

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 p-3 text-white/80 transition hover:border-white/50 hover:bg-white/10 hover:text-white lg:flex xl:left-6"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 p-3 text-white/80 transition hover:border-white/50 hover:bg-white/10 hover:text-white lg:flex xl:right-6"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,920px)] max-w-6xl flex-col justify-center px-4 pb-28 pt-24 md:px-6 lg:pt-28">
        <div
          className="hero-3d-content mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left"
          style={{ transform: `rotateY(${tilt.x * 0.4}deg) rotateX(${-tilt.y * 0.35}deg)` }}
        >
          <div key={slide.id} className="hero-slide-copy hero-content-fade">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/90 backdrop-blur-sm">
              <IconSearch className="h-3.5 w-3.5" />
              {slide.eyebrow}
            </p>

            <h1 className="hero-3d-title mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl xl:text-[3.25rem]">
              <span className="block">{slide.title}</span>
              <span className={`mt-1 block ${slide.highlightClass}`}>{slide.highlight}</span>
            </h1>

            <p className="hero-3d-subtitle mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:mx-0">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/contact" className="hero-3d-cta hero-contact-btn group w-full sm:w-auto">
                <span>Contact us</span>
                <svg
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                Our services
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70 lg:justify-start">
              <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">24/7 support</li>
              <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                40+ years experience
              </li>
              <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                99% client satisfaction
              </li>
            </ul>
          </div>

          <div className="mt-8 hidden items-center gap-2 lg:flex" role="tablist" aria-label="Hero background slides">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={s.highlight}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/35 hover:bg-white/55'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden />

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 lg:hidden">
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={s.highlight}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <a
          href="#services"
          className="flex flex-col items-center text-white/60 transition hover:text-white"
          aria-label="Scroll to services"
        >
          <span className="flex h-8 w-5 justify-center rounded-full border border-white/30 p-1">
            <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </a>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {slideCount}: {slide.title} {slide.highlight}
        {autoplayPaused ? ' (autoplay paused)' : ''}
      </p>
    </section>
  )
}
