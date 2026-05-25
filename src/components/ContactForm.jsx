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

function IconAt({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 01-5 0V12m5 0v1.5a2.5 2.5 0 01-5 0" />
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
  { icon: IconUser, label: 'Your name *', type: 'text', name: 'name', required: true },
  { icon: IconAt, label: 'Your email *', type: 'email', name: 'email', required: true },
  { icon: IconDocument, label: 'Subject *', type: 'text', name: 'subject', required: true },
  { icon: IconPhone, label: 'Phone *', type: 'tel', name: 'phone', required: true },
]

export default function ContactForm({ className = '' }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`}>
      {fields.map((field) => {
        const Icon = field.icon
        return (
          <div key={field.name} className="contact-form-group">
            <label className="contact-form-label" htmlFor={`contact-${field.name}`}>
              {field.label}
            </label>
            <div className="contact-form-input-wrap">
              <span className="contact-form-input-icon" aria-hidden>
                <Icon />
              </span>
              <input
                id={`contact-${field.name}`}
                className="contact-form-input"
                type={field.type}
                name={field.name}
                required={field.required}
                autoComplete={
                  field.name === 'email' ? 'email' : field.name === 'name' ? 'name' : field.name === 'phone' ? 'tel' : undefined
                }
              />
            </div>
          </div>
        )
      })}

      <div className="contact-form-group">
        <label className="contact-form-label" htmlFor="contact-message">
          Your message (optional)
        </label>
        <div className="contact-form-input-wrap contact-form-textarea-wrap">
          <span className="contact-form-input-icon contact-form-input-icon-top" aria-hidden>
            <IconPencil />
          </span>
          <textarea
            id="contact-message"
            className="contact-form-input contact-form-textarea"
            name="message"
            rows={5}
          />
        </div>
      </div>

      <button type="submit" className="contact-form-submit">
        SUBMIT
      </button>
    </form>
  )
}
