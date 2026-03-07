'use client'

import { CheckCircle, Download, ArrowRight, Share2, Printer, MapPin, Truck, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useBookingStore } from '@/store/use-booking-store'

export function Confirmation() {
  const { formData } = useBookingStore()
  const bookingId = `BK-${Math.random().toString(36).substr(2, 6).toUpperCase()}-2026`

  return (
    <div className="space-y-12 py-4 animate-in zoom-in-95 duration-700">
      {/* Success Hero */}
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent-orange/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-24 h-24 bg-accent-orange text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-accent-orange/40 mx-auto">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-black font-heading text-primary-navy tracking-tight">Booking Confirmed!</h2>
          <p className="text-text-muted text-lg max-w-md mx-auto leading-relaxed">
            Your logistics request has been received. Our dispatchers are already working on your shipment.
          </p>
        </div>
      </div>

      {/* Booking summary card */}
      <div className="bg-white rounded-[2.5rem] border-2 border-gray-50 shadow-xl shadow-gray-200/40 overflow-hidden">
        <div className="bg-primary-navy p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Booking Reference</p>
            <h3 className="text-2xl font-black text-white font-mono tracking-wider">{bookingId}</h3>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 border-0 text-white">
              <Printer size={18} />
            </Button>
            <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 border-0 text-white">
              <Share2 size={18} />
            </Button>
          </div>
        </div>

        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-xs font-bold text-primary-navy/40 uppercase tracking-widest flex items-center gap-2">
              <Truck size={14} className="text-accent-orange" />
              Service
            </p>
            <p className="text-lg font-bold text-primary-navy capitalize">{formData.service.replace('-', ' ') || 'Express'}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-primary-navy/40 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={14} className="text-accent-orange" />
              Pickup Date
            </p>
            <p className="text-lg font-bold text-primary-navy">{formData.pickupDate || 'Scheduled ASAP'}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-primary-navy/40 uppercase tracking-widest flex items-center gap-2">
              <MapPin size={14} className="text-accent-orange" />
              Destination
            </p>
            <p className="text-lg font-bold text-primary-navy truncate">{formData.destination || 'Global'}</p>
          </div>
        </div>

        <div className="px-8 pb-8 md:px-10 md:pb-10">
          <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary-navy shadow-sm">
                <CheckCircle size={24} className="text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-navy">Total Proposed Quote</p>
                <p className="text-xs text-text-muted">Including estimated taxes and fees</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary-navy">${(parseFloat(formData.price || '0') * 1.08).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="h-14 px-8 bg-primary-navy hover:bg-primary-navy/90 text-white font-bold rounded-xl shadow-lg shadow-primary-navy/20 gap-2 min-w-[200px]">
          <Download size={20} />
          Download Receipt
        </Button>
        <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl border-2 border-gray-100 hover:bg-gray-50 text-primary-navy font-bold gap-2 min-w-[200px]">
          <Link href="/">
            Back to Home <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
