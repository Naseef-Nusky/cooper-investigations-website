export const emptyContactForm = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
}

const namePattern = /^[\p{L}\s'.-]+$/u

export function validateContactField(name, values) {
  const value = values[name]?.trim?.() ?? values[name] ?? ''

  switch (name) {
    case 'name':
      if (!value) return 'Please enter your name.'
      if (value.length < 2) return 'Name must be at least 2 characters.'
      if (!namePattern.test(value)) return 'Please use letters only in your name.'
      return ''
    case 'email':
      if (!value) return 'Please enter your email address.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value)) return 'Please enter a valid email address.'
      return ''
    case 'subject':
      if (!value) return 'Please enter a subject.'
      if (value.length < 3) return 'Subject must be at least 3 characters.'
      return ''
    case 'phone': {
      if (!value) return 'Please enter your phone number.'
      const digits = value.replace(/\D/g, '')
      if (digits.length < 10) return 'Please enter a valid phone number (at least 10 digits).'
      if (digits.length > 15) return 'Phone number is too long.'
      return ''
    }
    case 'message':
      if (value.length > 2000) return 'Message must be 2000 characters or fewer.'
      return ''
    default:
      return ''
  }
}

export function validateContactForm(values) {
  const fields = ['name', 'email', 'subject', 'phone', 'message']
  const errors = {}

  for (const field of fields) {
    const message = validateContactField(field, values)
    if (message) errors[field] = message
  }

  return errors
}
