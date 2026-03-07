'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Package, Clock, Calendar, MapPin, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServicesSection() {
  const services = [
    {
      id: '01',
      title: 'Full Truckload (FTL)',
      description: 'Dedicated truck for your shipment. Ideal for large loads and direct routes with no transfers.',
      buttonText: 'Schedule FTL',
      image: '/service-ftl.png',
      icon: Truck,
      href: '/booking'
    },
    {
      id: '02',
      title: 'LTL Shipping',
      description: 'Cost-effective solution for smaller loads. Pay only for the space you use in a professional freight environment.',
      buttonText: 'Book LTL',
      image: '/service-ltl.png',
      icon: Package,
      href: '/booking'
    },
    {
      id: '03',
      title: 'Same-Day Delivery',
      description: 'Urgent freight? We provide fast pickup and rapid delivery options for your time-sensitive shipments.',
      buttonText: 'Check Availability',
      image: '/service-sameday.png',
      icon: Clock,
      href: '/booking'
    },
    {
      id: '04',
      title: 'Scheduled Routes',
      description: 'Recurring deliveries with predictable schedules. Ideal for long-term partnerships and stable logistics.',
      buttonText: 'Set Up Route',
      image: '/service-scheduled.png',
      icon: Calendar,
      href: '/booking'
    },
    {
      id: '05',
      title: 'Real-Time Tracking',
      description: 'Know where your load is at every moment with live tracking updates and GPS integration.',
      buttonText: 'Track a Load',
      image: '/service-tracking.png',
      icon: MapPin,
      href: '/tracking'
    },
    {
      id: '06',
      title: 'Licensed & Insured',
      description: 'Fully compliant with DOT regulations and insured for secure transport. Your cargo is in safe hands.',
      buttonText: 'View Credentials',
      image: '/service-licensed.png',
      icon: ShieldCheck,
      href: '/contact'
    }
  ]

  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-light-gray/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trust-blue/10 border border-trust-blue/20 text-trust-blue font-bold text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-trust-blue" />
              Our Specializations
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary-navy mb-6">
              Complete Freight & <span className="text-accent-orange">Delivery</span> Solutions
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Built for businesses, fleet owners, and independent truck operators. We provide the infrastructure you need to move cargo across the U.S. efficiently.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary-navy hover:bg-primary-navy/90 text-white font-bold h-14 px-8 rounded-xl shadow-lg">
            <Link href="/services">Explorer All Services</Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-navy/10 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent opacity-60" />

                {/* ID Badge */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold text-lg">
                  {service.id}
                </div>

                {/* Icon Circle */}
                <div className="absolute -bottom-6 right-8 w-14 h-14 rounded-2xl bg-accent-orange text-white flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <service.icon size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 pt-10">
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4 group-hover:text-accent-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <hr className="border-gray-100 mb-6" />

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-navy font-bold text-sm tracking-wide group-hover:gap-4 transition-all"
                >
                  <span className="relative">
                    {service.buttonText}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight size={18} className="text-accent-orange" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
