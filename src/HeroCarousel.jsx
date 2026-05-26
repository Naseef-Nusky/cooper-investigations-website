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
      'Discreet, evidence-led investigations for businesses and individuals — with the clarity you need to act decisively.',
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

const SLIDE_TRANSITION_MS = 900

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const slideCount = heroSlides.length
  const slide = heroSlides[activeIndex]

  const changeSlide = useCallback(
    (next, dir) => {
      if (next === activeIndex) return
      setPrevIndex(activeIndex)
      setDirection(dir)
      setActiveIndex(next)
      setIsTransitioning(true)
    },
    [activeIndex],
  )

  const goTo = useCallback(
    (index) => {
      const next = (index + slideCount) % slideCount
      if (next === activeIndex) return
      const forward = (next - activeIndex + slideCount) % slideCount === 1
      changeSlide(next, forward ? 1 : -1)
    },
    [activeIndex, slideCount, changeSlide],
  )

  const goNext = useCallback(() => {
    changeSlide((activeIndex + 1) % slideCount, 1)
  }, [activeIndex, slideCount, changeSlide])

  const goPrev = useCallback(() => {
    changeSlide((activeIndex - 1 + slideCount) % slideCount, -1)
  }, [activeIndex, slideCount, changeSlide])

  const goNextRef = useRef(goNext)
  goNextRef.current = goNext

  useEffect(() => {
    if (!isTransitioning) return undefined
    const timer = setTimeout(() => setIsTransitioning(false), SLIDE_TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [isTransitioning])

  useEffect(() => {
    if (paused) return undefined

    const timer = setInterval(() => goNextRef.current(), HERO_AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px * 10, y: py * 8 })
  }

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) setPaused(false)
    setTilt({ x: 0, y: 0 })
  }

  const contentEnterClass = direction > 0 ? 'hero-content-slide-next' : 'hero-content-slide-prev'

  const getBgSlideClass = (index) => {
    if (index === activeIndex) {
      return direction > 0 ? 'hero-slide-active hero-slide-in-from-right' : 'hero-slide-active hero-slide-in-from-left'
    }
    if (isTransitioning && index === prevIndex) {
      return direction > 0 ? 'hero-slide-leaving hero-slide-out-to-left' : 'hero-slide-leaving hero-slide-out-to-right'
    }
    return 'hero-slide-hidden'
  }

  return (
    <section
      className="hero-slider relative min-h-[min(100svh,920px)] overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
      onMouseEnter={() => {
        if (window.matchMedia('(hover: hover)').matches) setPaused(true)
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-3d-orb hero-3d-orb-1" aria-hidden />
      <div className="hero-3d-orb hero-3d-orb-2" aria-hidden />
      <div className="hero-3d-orb hero-3d-orb-3" aria-hidden />

      {heroSlides.map((s, i) => {
        const visible = i === activeIndex || (isTransitioning && i === prevIndex)
        if (!visible) return null

        return (
          <div
            key={s.id}
            className={`hero-slide-bg absolute inset-0 overflow-hidden ${getBgSlideClass(i)}`}
            aria-hidden={i !== activeIndex}
          >
            <div
              className={`absolute inset-[-5%] bg-cover bg-center bg-no-repeat ${i === activeIndex ? 'hero-ken-burns' : ''}`}
              style={{
                backgroundImage: s.image,
                transform: `translate3d(${tilt.x * 0.5}px, ${tilt.y * 0.4}px, 0) scale(1.06)`,
              }}
            />
            <div className={`absolute inset-0 ${s.overlay}`} />
          </div>
        )
      })}

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
          <div key={`${slide.id}-${direction}`} className={`hero-slide-copy ${contentEnterClass}`}>
              <p className="hero-enter hero-enter-delay-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/90 backdrop-blur-sm">
                <IconSearch className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </p>

              <h1 className="hero-enter hero-enter-delay-2 hero-3d-title mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl xl:text-[3.25rem]">
                <span className="block">{slide.title}</span>
                <span className={`mt-1 block ${slide.highlightClass}`}>{slide.highlight}</span>
              </h1>

              <p className="hero-enter hero-enter-delay-3 hero-3d-subtitle mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:mx-0">
                {slide.subtitle}
              </p>

              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/contact" className="hero-3d-cta hero-contact-btn group w-full sm:w-auto">
                  <span>Contact us</span>
                  <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
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

              <ul className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70 lg:justify-start">
                <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">24/7 support</li>
                <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">40+ years experience</li>
                <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">99% client satisfaction</li>
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
                  className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/35 hover:bg-white/55'}`}
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
              className={`h-2 w-2 rounded-full transition ${i === activeIndex ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <a href="#services" className="flex flex-col items-center text-white/60 transition hover:text-white" aria-label="Scroll to services">
          <span className="flex h-8 w-5 justify-center rounded-full border border-white/30 p-1">
            <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </a>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {slideCount}: {slide.title} {slide.highlight}
      </p>
    </section>
  )
}
