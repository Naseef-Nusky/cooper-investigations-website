import { useCallback, useEffect, useState } from 'react'

const TESTIMONIAL_INTERVAL_MS = 6000

const testimonials = [
  {
    id: 'corporate',
    quote:
      'Cooper Investigations handled our internal enquiry with complete discretion. Reporting was clear, timely, and stood up to scrutiny when we needed it most.',
    name: 'Operations Director',
    role: 'FTSE-listed company, London',
    initials: 'OD',
  },
  {
    id: 'legal',
    quote:
      'Their digital forensics team preserved evidence properly and explained every step. We could move forward with confidence in a complex fraud matter.',
    name: 'Senior Partner',
    role: 'Commercial law firm',
    initials: 'SP',
  },
  {
    id: 'private',
    quote:
      'Professional from the first call. I was kept informed throughout and finally had the facts I needed to make difficult decisions about my family.',
    name: 'Private client',
    role: 'Matrimonial investigation',
    initials: 'PC',
  },
]

function StarRating() {
  return (
    <div className="hero-testimonial-stars flex gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-4 w-4 text-amber-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HeroTestimonials({ paused = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const count = testimonials.length
  const active = testimonials[activeIndex]

  const goTo = useCallback(
    (index) => {
      const next = (index + count) % count
      if (next === activeIndex) return
      setDirection(next > activeIndex ? 1 : -1)
      setActiveIndex(next)
    },
    [activeIndex, count],
  )

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((i) => (i + 1) % count)
    }, TESTIMONIAL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, count])

  return (
    <div className="hero-testimonials w-full max-w-md lg:max-w-lg" aria-label="Client testimonials">
      <div className="hero-testimonial-shell relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="hero-testimonial-glow pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-teal/30 blur-3xl" aria-hidden />
        <div className="hero-testimonial-glow pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />

        <div className="relative flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" aria-hidden />
            Client feedback
          </span>
          <StarRating />
        </div>

        <div className="relative mt-6 min-h-[10.5rem] md:min-h-[11rem]">
          <span className="hero-testimonial-quote-mark pointer-events-none absolute -left-1 -top-2 font-serif text-6xl leading-none text-white/15 md:text-7xl" aria-hidden>
            &ldquo;
          </span>
          {testimonials.map((item, i) => (
            <blockquote
              key={item.id}
              className={`hero-testimonial-quote absolute inset-0 m-0 transition-all duration-500 ${
                i === activeIndex
                  ? 'translate-y-0 opacity-100'
                  : direction > 0
                    ? 'pointer-events-none translate-y-4 opacity-0'
                    : 'pointer-events-none -translate-y-4 opacity-0'
              }`}
              aria-hidden={i !== activeIndex}
            >
              <p className="relative text-base leading-relaxed text-white/95 md:text-lg">{item.quote}</p>
            </blockquote>
          ))}
        </div>

        <footer className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-brand-teal to-brand-green text-sm font-bold text-white shadow-lg"
            aria-hidden
          >
            {active.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-white">{active.name}</p>
            <p className="truncate text-sm text-white/65">{active.role}</p>
          </div>
        </footer>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 px-1">
        <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className="group relative h-2 overflow-hidden rounded-full bg-white/20 transition-all"
              style={{ width: i === activeIndex ? '2.5rem' : '0.5rem' }}
            >
              {i === activeIndex && (
                <span
                  className={`hero-testimonial-progress absolute inset-y-0 left-0 rounded-full bg-brand-teal ${paused ? 'hero-testimonial-progress-paused' : ''}`}
                  key={`progress-${activeIndex}-${paused}`}
                />
              )}
            </button>
          ))}
        </div>
        <p className="text-xs font-medium tabular-nums text-white/50">
          {activeIndex + 1} / {count}
        </p>
      </div>

      <p className="sr-only" aria-live="polite">
        Testimonial {activeIndex + 1}: {active.quote}
      </p>
    </div>
  )
}
