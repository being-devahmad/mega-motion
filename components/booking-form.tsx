'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, CheckCircle, Package, MapPin, Calculator, CreditCard, ClipboardCheck } from 'lucide-react'
import { ServiceSelection } from './booking-steps/service-selection'
import { JobDetails } from './booking-steps/job-details'
import { EstimateQuote } from './booking-steps/estimate-quote'
import { PaymentInfo } from './booking-steps/payment-info'
import { Confirmation } from './booking-steps/confirmation'
import { useBookingStore } from '@/store/use-booking-store'
import { cn } from '@/lib/utils'

export function BookingForm() {
  const { currentStep, nextStep, previousStep, formData, resetForm } = useBookingStore()

  const steps = [
    { name: 'Service', icon: Package },
    { name: 'Details', icon: MapPin },
    { name: 'Quote', icon: Calculator },
    { name: 'Payment', icon: CreditCard },
    { name: 'Confirm', icon: ClipboardCheck },
  ]

  const handleSubmit = async () => {
    // In a real app, this would be an API call
    console.log('Submitting Booking:', formData)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    nextStep()
  }

  return (
    <div className="space-y-12">
      {/* Dynamic Progress Stepper */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-accent-orange -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        <div className="relative flex justify-between gap-2">
          {steps.map((s, index) => {
            const isCompleted = index + 1 < currentStep
            const isActive = index + 1 === currentStep
            const Icon = s.icon

            return (
              <div key={index} className="flex flex-col items-center group">
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 z-10",
                    isCompleted ? "bg-accent-orange border-accent-orange text-white scale-110 shadow-lg shadow-accent-orange/20" :
                      isActive ? "bg-white border-accent-orange text-accent-orange scale-125 shadow-xl shadow-accent-orange/10" :
                        "bg-white border-gray-100 text-gray-400"
                  )}
                >
                  {isCompleted ? <CheckCircle size={24} /> : <Icon size={24} />}
                </div>
                <p className={cn(
                  "text-xs mt-4 font-bold uppercase tracking-widest transition-colors duration-300",
                  isActive || isCompleted ? "text-primary-navy" : "text-gray-400"
                )}>
                  {s.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Form Content Area */}
      <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary-navy/5 relative overflow-hidden min-h-[500px] flex flex-col">
        {/* Subtle Background Decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex-1 relative z-10">
          {currentStep === 1 && <ServiceSelection />}
          {currentStep === 2 && <JobDetails />}
          {currentStep === 3 && <EstimateQuote />}
          {currentStep === 4 && <PaymentInfo />}
          {currentStep === 5 && <Confirmation />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-6 mt-12 pt-8 border-t border-gray-50 relative z-10">
          {currentStep < 5 && (
            <Button
              onClick={previousStep}
              disabled={currentStep === 1}
              variant="outline"
              className="h-14 px-8 rounded-xl border-2 border-gray-100 hover:bg-gray-50 text-primary-navy font-bold gap-2 transition-all transition-duration-300"
            >
              <ChevronLeft size={20} />
              Back
            </Button>
          )}

          {currentStep === 4 ? (
            <Button
              onClick={handleSubmit}
              className="flex-1 h-14 bg-primary-navy hover:bg-primary-navy/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-navy/20 gap-2 transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Shipment <CheckCircle size={22} className="group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          ) : currentStep === 5 ? (
            <Button
              onClick={resetForm}
              className="flex-1 h-14 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-lg rounded-xl shadow-lg gap-2"
            >
              Start New Booking
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={currentStep === 1 && !formData.service}
              className="flex-1 h-14 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-accent-orange/20 gap-2 transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Continue to {steps[currentStep]?.name || 'Next Step'} <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
