import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/emailjs.js'
import { emptyContactForm, validateContactField, validateContactForm } from '../utils/contactFormValidation.js'

export function useContactForm({ onSuccess } = {}) {
  const [values, setValues] = useState(emptyContactForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState(null)
  const [isSending, setIsSending] = useState(false)

  const runFieldValidation = useCallback(
    (name, nextValues) => {
      const message = validateContactField(name, nextValues)
      setErrors((prev) => {
        const next = { ...prev }
        if (message) next[name] = message
        else delete next[name]
        return next
      })
    },
    [],
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    setStatus(null)

    if (submitted || touched[name]) {
      runFieldValidation(name, nextValues)
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    runFieldValidation(name, { ...values, [name]: value })
  }

  const showError = (name) => {
    if (!(submitted || touched[name])) return ''
    return errors[name] ?? ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null)
      const firstInvalid = ['name', 'email', 'subject', 'phone', 'message'].find((key) => nextErrors[key])
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid}`)?.focus()
      }
      return
    }

    setIsSending(true)
    setStatus(null)
    setErrors((prev) => {
      const next = { ...prev }
      delete next.submit
      return next
    })

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          phone: values.phone,
          message: values.message,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )

      setStatus('success')
      onSuccess?.(values)
      setValues(emptyContactForm)
      setTouched({})
      setSubmitted(false)
      setErrors({})
    } catch (err) {
      // Avoid leaking internal details; show a friendly message.
      setStatus('error')
      setErrors((prev) => ({
        ...prev,
        submit: 'Sorry — your message could not be sent. Please try again, or call us if it is urgent.',
      }))
    } finally {
      setIsSending(false)
    }
  }

  return {
    values,
    errors,
    status,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
  }
}
