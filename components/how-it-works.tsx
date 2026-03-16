'use client'

import { ClipboardList, Calculator, CalendarCheck, Navigation, PackageCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Submit Truck Details',
      description: 'Tell us pickup, drop-off, and truck type through our simple intake form.',
      icon: ClipboardList,
      color: 'bg-trust-blue'
    },
    {
      id: '02',
      title: 'Get a Clear Quote',
      description: 'Transparent pricing with no hidden fees. Instant digital estimation.',
      icon: Calculator,
      color: 'bg-accent-orange'
    },
    {
      id: '03',
      title: 'Confirm & Schedule',
      description: 'Choose your preferred time window and secure your booking in seconds.',
      icon: CalendarCheck,
      color: 'bg-primary-navy'
    },
    // {
    //   id: '04',
    //   title: 'Track in Real Time',
    //   description: 'Stay updated throughout transit with live GPS and status notifications.',
    //   icon: Navigation,
    //   color: 'bg-success-green'
    // },
    {
      id: '04',
      title: 'Delivery Completed',
      description: 'Signed confirmation and digital documentation provided instantly.',
      icon: PackageCheck,
      color: 'bg-primary-navy'
    }
  ]

  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-navy rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-accent-orange" />
            <span className="text-accent-orange font-bold tracking-[0.2em] uppercase text-xs">Our Process</span>
            <span className="h-px w-8 bg-accent-orange" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-navy mb-6 tracking-tight">
            Simple. Fast. <span className="text-accent-orange">Transparent.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            We've streamlined every step of the logistics journey to ensure your cargo moves with maximum efficiency and zero confusion.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-trust-blue via-accent-orange to-primary-navy opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Icon Container */}
                <div className="relative z-10 mb-8">
                  <div className={cn(
                    "w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6",
                    step.color,
                    "shadow-xl shadow-gray-200"
                  )}>
                    <step.icon size={36} className="text-white" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center font-heading font-black text-primary-navy text-sm">
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-4">
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector (visible only on mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 mb-4 h-12 w-px bg-gradient-to-b from-gray-200 to-transparent" />
                )}

                {/* Desktop Arrow (Small detail) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[40px] -right-[10%] text-gray-200 z-0">
                    <ArrowRight size={16} className="opacity-50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for the process */}
        {/* <div className="mt-20 text-center animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
          <div className="inline-block p-1 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="px-8 py-4 rounded-xl bg-white shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <span className="text-primary-navy font-bold">Ready to start step 01?</span>
              <button className="bg-accent-orange text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-accent-orange/20 transition-all hover:scale-105 active:scale-95">
                Book My First Truck
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Side visual elements */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-80 border-y-[20px] border-l-[20px] border-gray-50 rounded-l-[100px] opacity-50" />
      <div className="absolute -left-20 top-1/3 w-40 h-80 border-y-[20px] border-r-[20px] border-gray-50 rounded-r-[100px] opacity-50" />
    </section>
  )
}
