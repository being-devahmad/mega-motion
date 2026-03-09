'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Our Hotline',
      value: '9124779714',
      secondary: 'Emergency dispatch open 24/7',
      color: 'text-accent-orange',
      bg: 'bg-accent-orange/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'megamotiontrucking@gmail.com',
      secondary: 'Average response: 15 mins',
      color: 'text-trust-blue',
      bg: 'bg-trust-blue/10'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: '1200 Murphy Ave',
      secondary: 'Savannah, GA 31415, US',
      color: 'text-primary-navy',
      bg: 'bg-primary-navy/10'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: '6 AM - 8 PM (CST)',
      secondary: 'Monday to Friday',
      color: 'text-green-600',
      bg: 'bg-green-600/10'
    },
  ]

  return (
    <main className="w-full relative overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-trust-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

      <Header />

      <div className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="max-w-3xl mb-16 lg:mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange font-bold text-xs uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-500">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              Direct Support
            </div>
            <h1 className="text-5xl sm:text-7xl font-black font-heading text-primary-navy leading-[1.05] tracking-tight animate-in fade-in slide-in-from-left-6 duration-700">
              Let's Talk <span className="text-accent-orange">Logistics</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl animate-in fade-in slide-in-from-left-8 duration-900">
              Have a complex shipment or want to integrate our fleet into your supply chain? Our team is dedicated to moving your business forward.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left Content: Contact Info & Map/QuickLinks */}
            <div className="lg:w-[40%] space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl hover:shadow-primary-navy/5 hover:border-accent-orange/40 transition-all duration-500 flex flex-col min-w-0"
                    >
                      <div className={`w-12 h-12 rounded-2xl ${info.bg} ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-md font-bold text-primary-navy mb-1 truncate">{info.title}</h3>
                      <p className="font-bold text-primary-navy mb-1 group-hover:text-accent-orange transition-colors break-words overflow-hidden">
                        {info.value}
                      </p>
                      <p className="text-sm text-text-muted font-bold opacity-60 break-words line-clamp-2">
                        {info.secondary}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Socials & Connectivity */}
              <div className="p-10 bg-primary-navy rounded-[2.5rem] text-white space-y-8 relative overflow-hidden group shadow-2xl shadow-primary-navy/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />

                <h3 className="text-2xl font-black font-heading tracking-tight flex items-center gap-3">
                  <Globe className="text-accent-orange" />
                  Global Connectivity
                </h3>
                <p className="text-white/70 font-medium leading-relaxed">
                  Join our network of over 10,000 carrier partners and businesses moving freight across North America every day.
                </p>

                <div className="flex gap-4">
                  {[Twitter, Facebook, Linkedin, Instagram].map((Social, idx) => (
                    <Button key={idx} variant="ghost" size="icon" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 hover:text-accent-orange text-white border-white/5 border transition-all">
                      <Social size={20} />
                    </Button>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Quick Links</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {['Knowledge Base', 'Carrier Portal', 'API Docs', 'Safety Regulations'].map((link, idx) => (
                      <a key={idx} href="#" className="text-sm font-bold hover:text-accent-orange transition-colors flex items-center gap-2 group/link">
                        {link}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-accent-orange" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Contact Form */}
            <div className="lg:w-[60%] w-full relative">
              {/* Decorative element behind form */}
              <div className="absolute -inset-4 bg-accent-orange/5 rounded-[3rem] blur-2xl -z-10" />
              <ContactForm />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
