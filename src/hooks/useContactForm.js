import { useCallback, useState } from 'react'
import { emptyContactForm, validateContactField, validateContactForm } from '../utils/contactFormValidation.js'

export function useContactForm({ onSuccess } = {}) {
  const [values, setValues] = useState(emptyContactForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState(null)

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

  const handleSubmit = (e) => {
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

    setStatus('success')
    onSuccess?.(values)
    setValues(emptyContactForm)
    setTouched({})
    setSubmitted(false)
    setErrors({})
  }

  return {
    values,
    errors,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
  }
}
