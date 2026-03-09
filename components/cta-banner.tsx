import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-background.png"
          alt="Logistics at Night"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-primary-navy/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 via-transparent to-primary-navy/40 z-10" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-[1.1] max-w-4xl">
            Ready to Move Your Freight <span className="text-accent-orange italic">With Confidence?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-2xl">
            Fast scheduling. Direct communication. No brokers. <br className="hidden sm:block" />
            Just reliable trucking you can count on.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full mb-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/90 text-white font-black h-16 px-10 text-lg rounded-2xl shadow-2xl shadow-accent-orange/40 transition-all hover:scale-105 group"
            >
              <Link href="/booking" className="flex items-center gap-2">
                Book Your Truck Today
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 text-white font-bold h-16 px-10 text-lg rounded-2xl transition-all hover:scale-105"
            >
              <Link href="tel:912-477-9714" className="flex items-center gap-3">
                <Phone size={20} className="text-accent-orange animate-pulse" />
                Call Dispatch Now
              </Link>
            </Button>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in zoom-in duration-1000 delay-500">
            <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Direct Line:</span>
            <a href="tel:912-477-9714" className="text-2xl font-black text-accent-orange hover:text-white transition-colors tracking-tighter">
              912-477-9714
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
