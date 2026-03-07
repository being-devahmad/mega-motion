import { Input } from '@/components/ui/input'

interface JobDetailsProps {
  data: {
    origin: string
    destination: string
    weight: string
    dimensions: string
    itemDescription: string
    pickupDate: string
    deliveryDate: string
    specialInstructions: string
  }
  onChange: (data: Partial<JobDetailsProps['data']>) => void
}

export function JobDetails({ data, onChange }: JobDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({ [name]: value } as any)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Shipment Details</h2>
        <p className="text-muted-foreground mb-6">Provide information about your shipment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Pickup Location
          </label>
          <Input
            type="text"
            name="origin"
            value={data.origin}
            onChange={handleChange}
            placeholder="City, State or Address"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Delivery Location
          </label>
          <Input
            type="text"
            name="destination"
            value={data.destination}
            onChange={handleChange}
            placeholder="City, State or Address"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Weight (lbs)
          </label>
          <Input
            type="number"
            name="weight"
            value={data.weight}
            onChange={handleChange}
            placeholder="e.g., 5000"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Dimensions (L x W x H)
          </label>
          <Input
            type="text"
            name="dimensions"
            value={data.dimensions}
            onChange={handleChange}
            placeholder="e.g., 48 x 40 x 60 inches"
            className="bg-input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Item Description
          </label>
          <textarea
            name="itemDescription"
            value={data.itemDescription}
            onChange={handleChange}
            placeholder="What are you shipping?"
            rows={3}
            className="w-full px-3 py-2 bg-input border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Pickup Date
          </label>
          <Input
            type="date"
            name="pickupDate"
            value={data.pickupDate}
            onChange={handleChange}
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Delivery Date
          </label>
          <Input
            type="date"
            name="deliveryDate"
            value={data.deliveryDate}
            onChange={handleChange}
            className="bg-input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Special Instructions (Optional)
          </label>
          <textarea
            name="specialInstructions"
            value={data.specialInstructions}
            onChange={handleChange}
            placeholder="Any special handling requirements?"
            rows={3}
            className="w-full px-3 py-2 bg-input border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
    </div>
  )
}
