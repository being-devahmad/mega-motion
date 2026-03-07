import { Input } from '@/components/ui/input'

interface PaymentInfoProps {
  data: {
    email: string
    phone: string
    company: string
  }
  onChange: (data: Partial<PaymentInfoProps['data']>) => void
}

export function PaymentInfo({ data, onChange }: PaymentInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange({ [name]: value } as any)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Contact & Payment Information</h2>
        <p className="text-muted-foreground mb-6">We'll use this to confirm your booking</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="Enter your full name"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Company Name
          </label>
          <Input
            type="text"
            name="company"
            value={data.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="bg-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Billing Address
          </label>
          <Input
            type="text"
            placeholder="Street address"
            className="bg-input"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="City"
            className="bg-input"
          />
          <Input
            type="text"
            placeholder="State, ZIP"
            className="bg-input"
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="pt-4 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Payment Method</h3>
        
        <div className="space-y-3">
          <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
            <input
              type="radio"
              name="payment"
              value="card"
              defaultChecked
              className="w-4 h-4"
            />
            <span className="ml-3 text-foreground font-medium">Credit / Debit Card</span>
          </label>

          <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
            <input
              type="radio"
              name="payment"
              value="bank"
              className="w-4 h-4"
            />
            <span className="ml-3 text-foreground font-medium">Bank Transfer</span>
          </label>

          <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
            <input
              type="radio"
              name="payment"
              value="invoice"
              className="w-4 h-4"
            />
            <span className="ml-3 text-foreground font-medium">Invoice (Pay Later)</span>
          </label>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start gap-2 p-4 bg-muted/30 rounded-lg">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 mt-1 cursor-pointer"
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
          I agree to the <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a>
        </label>
      </div>
    </div>
  )
}
