'use client'

import { Check, Truck, Package, Clock, Calendar, MapPin, ShieldCheck, DollarSign } from 'lucide-react'
import { useBookingStore } from '@/store/use-booking-store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ServiceSelection() {
  const { formData, updateFormData } = useBookingStore()

  const services = [
    {
      id: 'ftl',
      name: 'Full Truckload (FTL)',
      description: 'Dedicated truck for large shipments and direct routes.',
      icon: Truck
    },
    {
      id: 'ltl',
      name: 'LTL Shipping',
      description: 'Cost-effective solution for smaller loads and shared space.',
      icon: Package
    },
    {
      id: 'sameday',
      name: 'Same-Day Delivery',
      description: 'Urgent pickup and rapid delivery for time-sensitive cargo.',
      icon: Clock
    },
    {
      id: 'scheduled',
      name: 'Scheduled Routes',
      description: 'Predictable schedules for recurring deliveries and partnerships.',
      icon: Calendar
    },
    {
      id: 'tracking',
      name: 'Real-Time Tracking',
      description: 'Shipment with continuous monitoring and live GPS updates.',
      icon: MapPin
    },
    {
      id: 'insured',
      name: 'Licensed & Insured',
      description: 'Fully compliant transport with maximum security and coverage.',
      icon: ShieldCheck
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Select Your Service</h2>
        <p className="text-text-muted text-lg">Choose the transportation service that best fits your logistics needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => updateFormData({ service: service.id as any })}
            className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-xl hover:shadow-primary-navy/5 ${formData.service === service.id
              ? 'border-accent-orange bg-accent-orange/5 ring-1 ring-accent-orange/20'
              : 'border-gray-100 bg-white hover:border-accent-orange/40 hover:bg-gray-50/50'
              }`}
          >
            <div className="flex items-start gap-5">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${formData.service === service.id
                ? 'bg-accent-orange text-white shadow-lg shadow-accent-orange/20 scale-110'
                : 'bg-gray-50 text-primary-navy group-hover:bg-accent-orange/10 group-hover:text-accent-orange'
                }`}>
                <service.icon size={28} />
              </div>

              <div className="flex-1 pr-8">
                <h3 className={`text-lg font-bold transition-colors ${formData.service === service.id ? 'text-primary-navy' : 'text-primary-navy'
                  }`}>
                  {service.name}
                </h3>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${formData.service === service.id
                ? 'border-accent-orange bg-accent-orange'
                : 'border-gray-200 group-hover:border-accent-orange/40'
                }`}>
                {formData.service === service.id && (
                  <Check size={14} className="text-white" strokeWidth={3} />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-100">
        <div className="max-w-md">
          <Label htmlFor="price" className="text-lg font-bold text-primary-navy mb-3 block flex items-center gap-2">
            <DollarSign size={20} className="text-accent-orange" />
            Proposed Price (Your Quote)
          </Label>
          <div className="group">
            <div className="flex items-center h-16 border-2 border-gray-100 rounded-xl px-4 focus-within:border-accent-orange transition-all">
              <span className="text-text-muted font-bold mr-2 group-focus-within:text-accent-orange">
                $
              </span>

              <Input
                id="price"
                type="number"
                placeholder="e.g. 1200"
                value={formData.price}
                onChange={(e) => updateFormData({ price: e.target.value })}
                className="border-none shadow-none p-0 h-auto text-xl font-bold focus-visible:ring-0"
              />
            </div>

            <p className="mt-2 text-sm text-text-muted">
              Enter the amount you're prepared to pay for this shipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
