'use client'

import { AlertCircle, Truck, DollarSign, ShieldCheck, MapPin } from 'lucide-react'
import { useBookingStore } from '@/store/use-booking-store'

export function EstimateQuote() {
  const { formData } = useBookingStore()

  const userPrice = parseFloat(formData.price) || 0
  const tax = Math.round(userPrice * 0.08)
  const total = userPrice + tax

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
      <div>
        <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Review Your Quote</h2>
        <p className="text-text-muted text-lg leading-relaxed">Here's a summary of your shipment details and the proposed price.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipment summary card */}
        <div className="bg-primary-navy/[0.02] border border-primary-navy/5 rounded-[2rem] p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-accent-orange shadow-sm">
              <Truck size={24} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary-navy/50 mb-1">Service Type</p>
              <p className="text-xl font-bold text-primary-navy capitalize">
                {formData.service ? formData.service.replace('-', ' ') : 'Not selected'}
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-primary-navy/5">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-accent-orange mt-1" />
              <div>
                <p className="text-sm font-bold text-primary-navy/50">Origin</p>
                <p className="font-bold text-primary-navy">{formData.origin || 'Not specified'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-trust-blue mt-1" />
              <div>
                <p className="text-sm font-bold text-primary-navy/50">Destination</p>
                <p className="font-bold text-primary-navy">{formData.destination || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price display card */}
        <div className="bg-accent-orange/[0.03] border border-accent-orange/10 rounded-[2rem] p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-primary-navy/60 font-bold uppercase tracking-widest text-xs">Proposed Price</span>
              <span className="font-bold text-primary-navy">${userPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-primary-navy/60 font-bold uppercase tracking-widest text-xs">Estimated Tax (8%)</span>
              <span className="font-bold text-primary-navy">${tax.toLocaleString()}</span>
            </div>
            <div className="pt-4 border-t border-accent-orange/10 flex justify-between items-end">
              <span className="text-primary-navy font-bold text-xl uppercase tracking-widest">Total Cost</span>
              <div className="text-right">
                <span className="text-4xl font-black text-accent-orange block">${total.toLocaleString()}</span>
                <span className="text-xs text-text-muted font-bold text-primary-navy/40 uppercase tracking-widest">Estimated Total</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3 p-4 bg-white rounded-2xl border border-accent-orange/5 shadow-sm">
            <AlertCircle className="w-5 h-5 text-accent-orange flex-shrink-0" />
            <p className="text-xs text-text-muted leading-relaxed font-bold">
              Your proposed price will be reviewed by our dispatch team. We aim to match your budget while ensuring maximum safety and reliability.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: 'Insured Cargo', text: 'Full coverage included' },
          { icon: MapPin, title: 'Live Tracking', text: 'Real-time GPS updates' },
          { icon: DollarSign, title: 'Fix Price', text: 'No hidden storage fees' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-gray-200/20 group hover:border-accent-orange/40 transition-all cursor-default">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary-navy group-hover:bg-accent-orange/10 group-hover:text-accent-orange transition-colors">
              <item.icon size={20} />
            </div>
            <div>
              <p className="font-bold text-primary-navy text-sm uppercase tracking-widest">{item.title}</p>
              <p className="text-xs text-text-muted font-bold opacity-60">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
