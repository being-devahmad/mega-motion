'use client'

import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function PricingTable() {
  const plans = [
    {
      name: 'Standard Freight',
      type: 'STANDARD DELIVERY',
      subtitle: 'Best for planned shipments and regular freight.',
      buttonText: 'Request Standard Quote',
      image: '/pricing-standard.png',
      note: 'Ideal for non-urgent freight and routine business deliveries.',
      features: [
        'Full Truckload (FTL) or LTL options',
        'Standard delivery window',
        'Professional driver coordination',
        'Basic truck tracking updates',
        'Email & phone support',
        'Safe and compliant transport'
      ],
      highlighted: false,
      color: 'blue'
    },
    {
      name: 'Express Priority',
      type: 'EXPRESS DELIVERY',
      subtitle: 'For time-sensitive and urgent shipments.',
      buttonText: 'Check Express Availability',
      badge: 'Most Popular',
      image: '/pricing-express.png',
      note: 'Perfect for urgent loads that can\'t afford delays.',
      features: [
        'Priority dispatch scheduling',
        'Faster transit times',
        'Real-time GPS tracking',
        'Direct dispatcher communication',
        'Flexible pickup windows',
        'Delivery confirmation documentation'
      ],
      highlighted: true,
      color: 'orange'
    },
    {
      name: 'Dedicated & Contract Services',
      type: 'ENTERPRISE / CONTRACT',
      subtitle: 'For businesses needing recurring or large-volume freight.',
      buttonText: 'Talk to Our Logistics Team',
      image: '/pricing-enterprise.png',
      note: 'Best for warehouses, distributors, and growing fleets.',
      features: [
        'Dedicated routes & drivers',
        'Recurring scheduled deliveries',
        'Volume-based pricing structure',
        'Advanced tracking solutions',
        '24/7 dispatch support',
        'Long-term partnership benefits'
      ],
      highlighted: false,
      color: 'blue'
    }
  ]

  return (
    <section id="pricing" className="w-full bg-light-gray py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trust-blue/10 border border-trust-blue/20 text-trust-blue font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-trust-blue" />
            Pricing & Plans
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-navy mb-6 tracking-tight">
            Flexible Delivery Options for <span className="text-accent-orange">Every Truck</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Choose the service level that fits your timeline and freight requirements.
            Transparent communication. No hidden broker fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative group flex flex-col bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl overflow-hidden",
                plan.highlighted
                  ? "lg:-mt-8 lg:mb-8 border-2 border-accent-orange shadow-2xl z-10 scale-100 lg:scale-105"
                  : "border border-gray-100 shadow-xl opacity-95 hover:opacity-100 shadow-gray-200/50"
              )}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-accent-orange text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-1.5 shadow-lg shadow-accent-orange/20">
                    <Star size={12} fill="currentColor" />
                    {plan.badge}
                  </div>
                )}

                <div className="absolute bottom-4 left-6">
                  <span className={cn(
                    "text-[10px] font-black tracking-[0.2em] uppercase px-2 py-1 rounded-md",
                    plan.highlighted ? "bg-accent-orange text-white" : "bg-trust-blue text-white"
                  )}>
                    {plan.type}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2 group-hover:text-accent-orange transition-colors">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted font-medium mb-8 leading-relaxed">
                  {plan.subtitle}
                </p>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-1 p-0.5 rounded-full",
                        plan.highlighted ? "bg-accent-orange/10 text-accent-orange" : "bg-trust-blue/10 text-trust-blue"
                      )}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-text-dark/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col gap-6">
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      "w-full font-black text-sm tracking-wide h-14 rounded-xl shadow-lg transition-all active:scale-95",
                      plan.highlighted
                        ? "bg-accent-orange hover:bg-accent-orange/90 text-white shadow-accent-orange/30 hover:shadow-accent-orange/40"
                        : "bg-primary-navy hover:bg-primary-navy/90 text-white shadow-primary-navy/20"
                    )}
                  >
                    <Link href="/quote">{plan.buttonText}</Link>
                  </Button>

                  <div className="flex items-center justify-center gap-2">
                    <p className="text-[10px] text-center font-bold text-text-muted uppercase tracking-widest leading-tight">
                      {plan.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
