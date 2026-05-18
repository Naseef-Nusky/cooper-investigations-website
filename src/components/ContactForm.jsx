function IconUser({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function IconEnvelope({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function IconPhone({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function IconDocument({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

function IconPencil({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  )
}

const fields = [
  { icon: IconUser, placeholder: 'Your name *', type: 'text', name: 'name', required: true },
  { icon: IconEnvelope, placeholder: 'Your email *', type: 'email', name: 'email', required: true },
  { icon: IconDocument, placeholder: 'Subject *', type: 'text', name: 'subject', required: true },
  { icon: IconPhone, placeholder: 'Phone *', type: 'tel', name: 'phone', required: true },
]

export default function ContactForm({ className = '' }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form space-y-4 ${className}`}>
      {fields.map((field) => {
        const Icon = field.icon
        return (
          <label key={field.name} className="contact-form-field flex items-center gap-3">
            <span className="text-slate-400">
              <Icon />
            </span>
            <input
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.name === 'email' ? 'email' : field.name === 'name' ? 'name' : field.name === 'phone' ? 'tel' : undefined}
            />
          </label>
        )
      })}
      <label className="contact-form-field flex gap-3">
        <span className="pt-1 text-slate-400">
          <IconPencil />
        </span>
        <textarea
          className="min-h-[120px] w-full resize-y border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
          name="message"
          placeholder="Your message (optional)"
          rows={4}
        />
      </label>
      <button type="submit" className="contact-form-submit w-full">
        SUBMIT
      </button>
    </form>
  )
}
