'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  const trustItems = [
    { icon: ShieldCheck, text: 'Licensed & Insured' },
    { icon: CheckCircle, text: 'DOT Compliant' },
    { icon: Clock, text: '24/7 Dispatch Support' },
    { icon: MapPin, text: 'Real-Time Tracking Available' },
  ]

  return (
    <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden pb-20 sm:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-truck.png"
          alt="Professional Trucking Service"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary-navy/20 z-10" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 py-20 sm:py-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-blue/30 border border-trust-blue/40 text-white font-medium text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent-orange animate-pulse" />
            Reliable Freight Solutions Nationwide
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
            Reliable <span className="text-accent-orange font-extrabold italic">Trucking</span> & Freight Services Across the U.S.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-10 max-w-2xl">
            On-time pickups. Transparent pricing. Direct communication.<br className="hidden md:block" />
            No brokers. No confusion. Just dependable logistics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white font-bold h-16 px-10 text-lg rounded-xl shadow-2xl shadow-accent-orange/30 transition-all hover:scale-105"
            >
              <Link href="/booking" className="flex items-center gap-2">
                Book a Load Now <ArrowRight size={22} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-primary-navy font-bold h-16 px-10 text-lg rounded-xl transition-all"
            >
              <Link href="/contact">Get a Fast Quote</Link>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/90">
                <div className="bg-success-green/20 p-1.5 rounded-full">
                  <item.icon className="w-5 h-5 text-success-green flex-shrink-0" />
                </div>
                <span className="text-sm font-semibold tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
