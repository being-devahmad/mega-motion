'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Send, AlertCircle, CheckCircle, User, Mail, Phone, MessageSquare, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)

    // Reset after some time
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center border-2 border-accent-orange/10 shadow-2xl shadow-accent-orange/5 animate-in zoom-in-95 duration-500">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-accent-orange/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-20 h-20 bg-accent-orange text-white rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle size={40} />
          </div>
        </div>
        <h3 className="text-3xl font-black text-primary-navy mb-4 font-heading">Message Sent!</h3>
        <p className="text-text-muted text-lg leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Our team has received your inquiry and will get back to you within 2 business hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-8 border-gray-100 rounded-xl h-12 px-8 font-bold text-primary-navy hover:bg-gray-50"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary-navy/5 relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div>
          <h3 className="text-3xl font-black text-primary-navy mb-2 font-heading tracking-tight">Send us a Message</h3>
          <p className="text-text-muted text-lg">We'd love to hear from you. Fill out the form below.</p>
        </div>

        {error && (
          <div className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl animate-in shake-1">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-sm font-bold text-red-600">{error}</p>
          </div>
        )}

        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2 group">
            <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-primary-navy/60 flex items-center gap-2 mb-1">
              <User size={14} className="group-focus-within:text-accent-orange transition-colors" />
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2 group">
              <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-primary-navy/60 flex items-center gap-2 mb-1">
                <Mail size={14} className="group-focus-within:text-accent-orange transition-colors" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2 group">
              <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-primary-navy/60 flex items-center gap-2 mb-1">
                <Phone size={14} className="group-focus-within:text-accent-orange transition-colors" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2 group">
            <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-primary-navy/60 flex items-center gap-2 mb-1">
              <ClipboardList size={14} className="group-focus-within:text-accent-orange transition-colors" />
              Subject
            </Label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-14 pl-4 pr-10 bg-gray-50/50 border-2 border-gray-100 rounded-xl text-lg text-primary-navy focus:bg-white focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="booking">Booking Question</option>
                <option value="tracking">Tracking Issue</option>
                <option value="partnership">Partnership</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary-navy/40">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2 group">
            <Label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-primary-navy/60 flex items-center gap-2 mb-1">
              <MessageSquare size={14} className="group-focus-within:text-accent-orange transition-colors" />
              Your Message *
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you today?"
              rows={5}
              className="w-full p-4 bg-gray-50/50 border-2 border-gray-100 rounded-xl text-lg text-primary-navy focus:bg-white focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange outline-none transition-all resize-none"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-16 bg-primary-navy hover:bg-primary-navy/95 text-white font-black text-xl rounded-2xl shadow-xl shadow-primary-navy/20 gap-3 transition-all group overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>

        <p className="text-sm text-text-muted text-center font-bold opacity-60">
          Average response time: <span className="text-primary-navy">15 minutes</span>
        </p>
      </div>
    </form>
  )
}
