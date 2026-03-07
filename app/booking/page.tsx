'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'
import { Truck, ShieldCheck, Clock } from 'lucide-react'

export default function BookingPage() {
  return (
    <main className="w-full relative overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-trust-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-primary-navy/5 rounded-full blur-3xl" />

      <Header />

      <div className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Content: Hero Text & Trust Badges */}
            <div className="lg:w-1/3 space-y-10 lg:sticky lg:top-40">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange font-bold text-xs uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-500">
                  <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                  Premium Logistics
                </div>
                <h1 className="text-5xl sm:text-6xl font-black font-heading text-primary-navy leading-[1.1] animate-in fade-in slide-in-from-left-6 duration-700">
                  Book Your <span className="text-accent-orange">Shipment</span> with Ease
                </h1>
                <p className="text-xl text-text-muted leading-relaxed animate-in fade-in slide-in-from-left-8 duration-900">
                  Scale your business with our enterprise-grade transportation engine. Real-time pricing, instant quotes, and global coverage.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 gap-6 pt-10 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-50 flex items-center justify-center text-primary-navy group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary-navy uppercase tracking-wider text-xs">Insured Freight</p>
                    <p className="text-sm text-text-muted font-bold opacity-60">Full Liability Coverage</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-50 flex items-center justify-center text-primary-navy group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary-navy uppercase tracking-wider text-xs">Rapid Dispatch</p>
                    <p className="text-sm text-text-muted font-bold opacity-60">Pick-up in &lt; 24h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center text-primary-navy group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                    <Truck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary-navy uppercase tracking-wider text-xs">Fleet API</p>
                    <p className="text-sm text-text-muted font-bold opacity-60">Real-time GPS Monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Booking Form */}
            <div className="lg:w-2/3 w-full">
              <BookingForm />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
