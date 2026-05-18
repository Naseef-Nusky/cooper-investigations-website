import { useCallback, useEffect, useState } from 'react'

const HERO_AUTOPLAY_MS = 7000

const heroSlides = [
  {
    id: 'investigation',
    image:
      "url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2400&q=80')",
    overlay: 'bg-gradient-to-br from-brand-navy/92 via-brand-navy/65 to-brand-green/75',
    title: 'Experts in',
    highlight: 'Private Investigation',
    highlightClass: 'bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent',
    subtitle:
      'Discreet, evidence-led investigations for businesses and individuals across the UK and internationally.',
  },
  {
    id: 'cyber',
    image: "url('/cyber-security.jpg')",
    overlay: 'bg-gradient-to-b from-brand-navy/88 via-slate-950/70 to-cyan-950/85',
    title: 'We are Experts',
    highlight: 'in Cyber Security',
    highlightClass: 'bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent',
    subtitle:
      'Protect your organisation with practical assessments, incident response, and security guidance you can act on.',
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

  useEffect(() => {
    if (!isTransitioning) return undefined
    const timer = setTimeout(() => setIsTransitioning(false), SLIDE_TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [isTransitioning])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      goNext()
    }, HERO_AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, goNext])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px * 16, y: py * 12 })
  }

  const handleMouseLeave = () => {
    setPaused(false)
    setTilt({ x: 0, y: 0 })
  }

  const contentTilt = {
    transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
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
      className="hero-slider relative min-h-[min(100svh,900px)] overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Featured services"
      onMouseEnter={() => setPaused(true)}
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
                transform: `translate3d(${tilt.x * 0.6}px, ${tilt.y * 0.5}px, 0) scale(1.05)`,
              }}
            />
            <div className={`absolute inset-0 ${s.overlay}`} />
          </div>
        )
      })}

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,34,51,0.45)_100%)]"
        aria-hidden
      />

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 p-3 text-white/80 transition hover:border-white/50 hover:bg-white/10 hover:text-white md:left-8"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 p-3 text-white/80 transition hover:border-white/50 hover:bg-white/10 hover:text-white md:right-8"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="hero-3d-scene relative z-10 mx-auto flex min-h-[min(100svh,900px)] max-w-4xl flex-col items-center justify-center px-6 pb-32 pt-28 text-center md:px-8">
        <div className="hero-3d-content flex flex-col items-center" style={contentTilt}>
          <div
            key={`${slide.id}-${direction}`}
            className={`hero-slide-copy flex flex-col items-center ${contentEnterClass}`}
          >
          <IconSearch className="hero-3d-icon mb-6 h-10 w-10 text-white/90" />

          <h1 className="hero-3d-title text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">{slide.title}</span>
            <span className={`mt-1 block ${slide.highlightClass}`}>{slide.highlight}</span>
          </h1>

          <p className="hero-3d-subtitle mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
            {slide.subtitle}
          </p>

          <a href="#contact" className="hero-3d-cta hero-contact-btn group mt-10">
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
          </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden />

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-5">
        <div className="flex gap-2.5" role="tablist" aria-label="Choose slide">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Slide ${i + 1}: ${s.highlight}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 transition ${i === activeIndex ? 'bg-white' : 'border border-white/60 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>

        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-white/70 transition hover:text-white"
          aria-label="Scroll to services"
        >
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 p-1">
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
