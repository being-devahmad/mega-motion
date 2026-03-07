'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useBookingStore } from '@/store/use-booking-store'
import { MapPin, Weight, Maximize, FileText, Calendar } from 'lucide-react'

export function JobDetails() {
  const { formData, updateFormData } = useBookingStore()

  const handleUpdate = (name: string, value: string) => {
    updateFormData({ [name]: value } as any)
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Shipment Details</h2>
          <p className="text-text-muted text-lg leading-relaxed">Please provide the route and cargo specifications for your shipment.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Origin */}
        <div className="space-y-3">
          <Label htmlFor="origin" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <MapPin size={16} className="text-accent-orange" />
            Pick-up Location
          </Label>
          <Input
            id="origin"
            placeholder="City, State or Full Address"
            value={formData.origin}
            onChange={(e) => handleUpdate('origin', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Destination */}
        <div className="space-y-3">
          <Label htmlFor="destination" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <MapPin size={16} className="text-trust-blue" />
            Delivery Destination
          </Label>
          <Input
            id="destination"
            placeholder="City, State or Full Address"
            value={formData.destination}
            onChange={(e) => handleUpdate('destination', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Weight */}
        <div className="space-y-3">
          <Label htmlFor="weight" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Weight size={16} className="text-primary-navy" />
            Total Weight (lbs)
          </Label>
          <Input
            id="weight"
            type="number"
            placeholder="e.g. 15,000"
            value={formData.weight}
            onChange={(e) => handleUpdate('weight', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Dimensions */}
        <div className="space-y-3">
          <Label htmlFor="dimensions" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Maximize size={16} className="text-primary-navy" />
            Cargo Dimensions
          </Label>
          <Input
            id="dimensions"
            placeholder="L x W x H (inches)"
            value={formData.dimensions}
            onChange={(e) => handleUpdate('dimensions', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Pickup Date */}
        <div className="space-y-3">
          <Label htmlFor="pickupDate" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Calendar size={16} className="text-primary-navy" />
            Requested Pickup Date
          </Label>
          <Input
            id="pickupDate"
            type="date"
            value={formData.pickupDate}
            onChange={(e) => handleUpdate('pickupDate', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Delivery Date */}
        <div className="space-y-3">
          <Label htmlFor="deliveryDate" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <Calendar size={16} className="text-primary-navy" />
            Requested Delivery Date
          </Label>
          <Input
            id="deliveryDate"
            type="date"
            value={formData.deliveryDate}
            onChange={(e) => handleUpdate('deliveryDate', e.target.value)}
            className="h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-3">
          <Label htmlFor="itemDescription" className="text-sm font-bold uppercase tracking-widest text-primary-navy/70 flex items-center gap-2">
            <FileText size={16} className="text-primary-navy" />
            Item Description
          </Label>
          <textarea
            id="itemDescription"
            placeholder="What exactly are you shipping? (e.g. 10 pallets of frozen goods)"
            value={formData.itemDescription}
            onChange={(e) => handleUpdate('itemDescription', e.target.value)}
            rows={4}
            className="w-full p-4 bg-gray-50/50 border-2 border-gray-100 focus:bg-white focus:ring-accent-orange/20 focus:border-accent-orange rounded-xl text-lg transition-all focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}
