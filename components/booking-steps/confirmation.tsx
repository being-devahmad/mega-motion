import { CheckCircle, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ConfirmationProps {
  formData: {
    service: string
    origin: string
    destination: string
    weight: string
    pickupDate: string
    deliveryDate: string
    email: string
    company: string
  }
}

export function Confirmation({ formData }: ConfirmationProps) {
  return (
    <div className="space-y-8 py-8">
      {/* Success Message */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Booking Confirmed!</h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Your shipment has been successfully booked. A confirmation email has been sent to your inbox with all the details.
        </p>
      </div>

      {/* Booking Details */}
      <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-border rounded-lg p-8 space-y-4">
        <h3 className="font-semibold text-foreground mb-4">Booking Reference</h3>
        <div className="bg-card rounded border border-border p-4 font-mono text-center font-bold text-lg text-foreground">
          DF-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Service Type</p>
            <p className="font-medium text-foreground">
              {formData.service === 'ftl' ? 'Full Truckload' : formData.service === 'ltl' ? 'Less Than Truckload' : 'Same-Day Express'}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Pickup Date</p>
            <p className="font-medium text-foreground">{formData.pickupDate || 'To be scheduled'}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">From</p>
            <p className="font-medium text-foreground">{formData.origin}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">To</p>
            <p className="font-medium text-foreground">{formData.destination}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Weight</p>
            <p className="font-medium text-foreground">{formData.weight} lbs</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
            <p className="font-medium text-foreground">{formData.deliveryDate || '3-5 business days'}</p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground text-lg">What's Next?</h3>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 bg-card border border-border rounded-lg">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-semibold text-sm text-accent">1</div>
            <div>
              <p className="font-medium text-foreground">Confirmation Email</p>
              <p className="text-sm text-muted-foreground">Check your inbox for booking details and tracking information</p>
            </div>
          </div>

          <div className="flex gap-3 p-4 bg-card border border-border rounded-lg">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-semibold text-sm text-accent">2</div>
            <div>
              <p className="font-medium text-foreground">Pre-Pickup Call</p>
              <p className="text-sm text-muted-foreground">Our team will call to confirm pickup details within 24 hours</p>
            </div>
          </div>

          <div className="flex gap-3 p-4 bg-card border border-border rounded-lg">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-semibold text-sm text-accent">3</div>
            <div>
              <p className="font-medium text-foreground">Real-Time Tracking</p>
              <p className="text-sm text-muted-foreground">Track your shipment live from pickup to delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6 border-t border-border">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2">
          <Download size={20} />
          Download Booking Confirmation
        </Button>

        <Button asChild variant="outline" className="w-full">
          <Link href="/" className="flex items-center justify-center gap-2">
            Back to Home <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
