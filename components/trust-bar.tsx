import { CheckCircle, Award, Users, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TrustBar() {
  const stats = [
    {
      icon: CheckCircle,
      label: '98%',
      description: 'On-Time Delivery Rate',
      color: 'text-success-green'
    },
    {
      icon: Award,
      label: '15+',
      description: 'Years Industry Experience',
      color: 'text-trust-blue'
    },
    {
      icon: Users,
      label: '2,500+',
      description: 'Trusted Clients Nationwide',
      color: 'text-accent-orange'
    },
    {
      icon: Truck,
      label: '150+',
      description: 'Modern Fleet Vehicles',
      color: 'text-primary-navy'
    }
  ]

  return (
    <section className="relative z-30 -mt-10 sm:-mt-16 mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300",
                  stat.color
                )}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className="font-heading font-bold text-primary-navy text-3xl mb-2">{stat.label}</p>
                <p className="text-sm font-medium text-text-muted leading-tight max-w-[150px]">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
