'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(800) 555-0123',
      secondary: 'Available 24/7',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@deepflow.com',
      secondary: 'Response within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Logistics Ave',
      secondary: 'Dallas, TX 75001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 6 AM - 8 PM',
      secondary: 'Sat - Sun: 8 AM - 6 PM',
    },
  ]

  return (
    <main className="w-full">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Have questions? Our team is ready to help. Reach out to us via phone, email, or the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all"
                >
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm font-medium text-foreground mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.secondary}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href="/booking" className="block p-3 hover:bg-accent/10 rounded-lg transition-colors">
                  <p className="font-medium text-foreground">Book Now</p>
                  <p className="text-sm text-muted-foreground">Start your booking</p>
                </a>
                <a href="/" className="block p-3 hover:bg-accent/10 rounded-lg transition-colors">
                  <p className="font-medium text-foreground">Track Shipment</p>
                  <p className="text-sm text-muted-foreground">Check your delivery status</p>
                </a>
                <a href="/" className="block p-3 hover:bg-accent/10 rounded-lg transition-colors">
                  <p className="font-medium text-foreground">FAQ</p>
                  <p className="text-sm text-muted-foreground">Find common answers</p>
                </a>
                <a href="/" className="block p-3 hover:bg-accent/10 rounded-lg transition-colors">
                  <p className="font-medium text-foreground">Support Portal</p>
                  <p className="text-sm text-muted-foreground">24/7 self-service</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
