'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'
import { ServiceSelection } from './booking-steps/service-selection'
import { JobDetails } from './booking-steps/job-details'
import { EstimateQuote } from './booking-steps/estimate-quote'
import { PaymentInfo } from './booking-steps/payment-info'
import { Confirmation } from './booking-steps/confirmation'

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    itemDescription: '',
    pickupDate: '',
    deliveryDate: '',
    specialInstructions: '',
    email: '',
    phone: '',
    company: '',
  })

  const steps = ['Service', 'Details', 'Estimate', 'Payment', 'Confirm']

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    // Handle final submission
    console.log('Booking submitted:', formData)
    setStep(5) // Show confirmation
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex justify-between gap-2">
          {steps.map((stepName, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-2 rounded-full transition-all ${
                  index + 1 <= step
                    ? 'bg-accent'
                    : 'bg-muted'
                }`}
              ></div>
              <p className="text-xs mt-2 text-center font-medium text-muted-foreground">
                {stepName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        {step === 1 && (
          <ServiceSelection
            selected={formData.service}
            onSelect={(service) => updateFormData({ service })}
          />
        )}

        {step === 2 && (
          <JobDetails
            data={{
              origin: formData.origin,
              destination: formData.destination,
              weight: formData.weight,
              dimensions: formData.dimensions,
              itemDescription: formData.itemDescription,
              pickupDate: formData.pickupDate,
              deliveryDate: formData.deliveryDate,
              specialInstructions: formData.specialInstructions,
            }}
            onChange={updateFormData}
          />
        )}

        {step === 3 && (
          <EstimateQuote
            service={formData.service}
            origin={formData.origin}
            destination={formData.destination}
            weight={formData.weight}
          />
        )}

        {step === 4 && (
          <PaymentInfo
            data={{
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
            }}
            onChange={updateFormData}
          />
        )}

        {step === 5 && (
          <Confirmation
            formData={formData}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between">
        <Button
          onClick={handlePrevious}
          disabled={step === 1}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Previous
        </Button>

        {step === 4 ? (
          <Button
            onClick={handleSubmit}
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
          >
            Complete Booking <CheckCircle size={20} />
          </Button>
        ) : step === 5 ? (
          <Button
            disabled
            className="bg-accent/50 text-accent-foreground"
          >
            Booking Complete
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
          >
            Next <ChevronRight size={20} />
          </Button>
        )}
      </div>
    </div>
  )
}
