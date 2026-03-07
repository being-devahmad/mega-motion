'use client'

import { Star, Quote, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager, Retail Logistics',
      content: 'Switching to DeepFlow was the best decision for our holiday rush. No brokers, no confusion—just on-time deliveries every single time. Their direct communication model is a breath of fresh air.',
      rating: 5,
      avatar: '/avatar-1.png'
    },
    {
      name: 'Michael Chen',
      role: 'Fleet Owner, Chen Transport',
      content: 'As a carrier partner, I appreciate the transparency and direct communication. Their real-time tracking gives my drivers and customers peace of mind. Truly a professional-first platform.',
      rating: 5,
      avatar: '/avatar-2.png'
    },
    {
      name: 'David Rodriguez',
      role: 'CEO, Manufacturing Plus',
      content: "DeepFlow's scheduled routes have stabilized our supply chain. Their DOT compliance and professional drivers are exactly what we needed for our high-value freight requirements.",
      rating: 5,
      avatar: '/avatar-3.png'
    }
  ]

  return (
    <section id="testimonials" className="w-full bg-white py-20 sm:py-8 relative overflow-hidden text-primary-navy">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
            Client Success
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
            Trusted by <span className="text-trust-blue">Industry Leaders</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            See why manufacturers, retailers, and fleet owners choose DeepFlow
            for dependable, broker-free logistics across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-accent-orange/20 animate-in fade-in fill-mode-both",
                index === 0 ? "delay-0" : index === 1 ? "delay-150" : "delay-300"
              )}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-trust-blue/10 group-hover:text-accent-orange/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent-orange text-accent-orange"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-text-dark/80 text-lg font-medium italic mb-10 leading-relaxed font-sans relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author & Badge */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-8">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="font-heading font-bold text-primary-navy">{testimonial.name}</p>
                    <ShieldCheck size={14} className="text-trust-blue" fill="currentColor" />
                  </div>
                  <p className="text-xs font-black tracking-widest text-text-muted uppercase">{testimonial.role}</p>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-success-green/10 text-success-green text-[10px] font-black tracking-wide uppercase">
                  <span className="w-1 h-1 rounded-full bg-success-green" />
                  Verified Partner
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar Subtle */}
        <div className="mt-20 pt-10 border-t border-gray-50 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
          {['LogisticsPro', 'FreightForward', 'CarrierConnect', 'SupplyChainX'].map((brand) => (
            <span key={brand} className="text-xl font-heading font-black tracking-tighter text-primary-navy">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
