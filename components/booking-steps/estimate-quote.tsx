import { AlertCircle, Truck } from 'lucide-react'

interface EstimateQuoteProps {
  service: string
  origin: string
  destination: string
  weight: string
}

export function EstimateQuote({ service, origin, destination, weight }: EstimateQuoteProps) {
  // Calculate estimate based on service and weight
  const getEstimate = () => {
    const basePrice = service === 'ftl' ? 1200 : service === 'express' ? 600 : 400
    const weightFactor = (parseInt(weight) || 1000) / 1000
    const distanceFactor = 1.2 // Simplified
    return Math.round(basePrice * weightFactor * distanceFactor)
  }

  const estimate = getEstimate()
  const tax = Math.round(estimate * 0.08)
  const total = estimate + tax

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Review Your Quote</h2>
        <p className="text-muted-foreground mb-6">Here's your estimated price based on the details provided</p>
      </div>

      {/* Quote Summary */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm text-muted-foreground">Service Type</p>
            <p className="font-semibold text-foreground capitalize">
              {service === 'ftl' ? 'Full Truckload' : service === 'ltl' ? 'Less Than Truckload' : 'Same-Day Express'}
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">From</p>
              <p className="font-medium text-foreground">{origin || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">To</p>
              <p className="font-medium text-foreground">{destination || 'Not specified'}</p>
            </div>
          </div>

          {weight && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Weight</p>
              <p className="font-medium text-foreground">{weight} lbs</p>
            </div>
          )}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 py-6 border-y border-border">
        <div className="flex justify-between">
          <span className="text-foreground">Shipping:</span>
          <span className="font-medium">${estimate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground">Tax (8%):</span>
          <span className="font-medium">${tax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center pt-3">
          <span className="text-lg font-bold text-foreground">Total:</span>
          <span className="text-2xl font-bold text-accent">${total.toLocaleString()}</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="flex gap-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div className="text-sm text-foreground">
          <p className="font-medium mb-1">This is an estimate only</p>
          <p className="text-muted-foreground">Final pricing may vary based on actual pickup/delivery conditions and any special handling requirements.</p>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <p className="font-medium text-foreground">Your quote includes:</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>✓ Full cargo insurance coverage</li>
          <li>✓ Real-time GPS tracking</li>
          <li>✓ Professional driver</li>
          <li>✓ Delivery confirmation</li>
        </ul>
      </div>
    </div>
  )
}
