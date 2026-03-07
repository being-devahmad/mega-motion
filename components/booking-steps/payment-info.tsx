'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useBookingStore } from '@/store/use-booking-store'
import { Mail, Phone, Building2, CreditCard, ShieldCheck } from 'lucide-react'

export function PaymentInfo() {
  const { formData, updateFormData } = useBookingStore()

  const handleUpdate = (name: string, value: string) => {
    updateFormData({ [name]: value } as any)
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
      <div>
        <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Contact & Payment Info</h2>
        <p className="text-text-muted text-lg leading-relaxed">Please provide your contact information to finalize the booking process.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Mail size={16} className="text-accent-orange" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@company.com"
            value={formData.email}
            onChange={(e) => handleUpdate('email', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Phone size={16} className="text-accent-orange" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 555-0123"
            value={formData.phone}
            onChange={(e) => handleUpdate('phone', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        <div className="md:col-span-2 space-y-3">
          <Label htmlFor="company" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Building2 size={16} className="text-accent-orange" />
            Company Name
          </Label>
          <Input
            id="company"
            placeholder="Logistics Pros Inc."
            value={formData.company}
            onChange={(e) => handleUpdate('company', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-primary-navy/5 border border-primary-navy/10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-navy shadow-sm">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-navy">Secure Transaction</h3>
            <p className="text-text-muted text-sm leading-relaxed mt-1">
              Your information is protected by industry-leading encryption. We will process your quote and reach out within 15 minutes for final payment.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-bold text-primary-navy/50 flex items-center gap-2">
          <CreditCard size={14} />
          ACCEPTED PAYMENT METHODS
        </p>
        <div className="flex gap-4 opacity-40">
          <div className="h-8 w-12 bg-gray-400 rounded-md" />
          <div className="h-8 w-12 bg-gray-400 rounded-md" />
          <div className="h-8 w-12 bg-gray-400 rounded-md" />
        </div>
      </div>
    </div>
  )
}
