import { Check } from 'lucide-react'

interface ServiceSelectionProps {
  selected: string
  onSelect: (service: string) => void
}

export function ServiceSelection({ selected, onSelect }: ServiceSelectionProps) {
  const services = [
    {
      id: 'ftl',
      name: 'Full Truckload (FTL)',
      description: 'Complete vehicle for large shipments',
      price: 'from $1,200'
    },
    {
      id: 'ltl',
      name: 'Less Than Truckload (LTL)',
      description: 'Shared truck for smaller shipments',
      price: 'from $400'
    },
    {
      id: 'express',
      name: 'Same-Day Express',
      description: 'Urgent local deliveries',
      price: 'from $600'
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Select Service Type</h2>
      <p className="text-muted-foreground mb-6">Choose the shipping service that best fits your needs</p>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className={`p-6 rounded-lg border-2 transition-all text-left ${
              selected === service.id
                ? 'border-accent bg-accent/5'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                selected === service.id
                  ? 'border-accent bg-accent'
                  : 'border-muted'
              }`}>
                {selected === service.id && (
                  <Check size={16} className="text-accent-foreground" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              <div className="text-accent font-semibold text-sm flex-shrink-0">
                {service.price}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
