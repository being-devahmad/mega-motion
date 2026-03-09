import Link from 'next/link'
import { Mail, Phone, MapPin, Truck, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { name: 'Full Truckload (FTL)', href: '/#services' },
    { name: 'LTL Shipping', href: '/#services' },
    { name: 'Same-Day Delivery', href: '/#services' },
    { name: 'Scheduled Routes', href: '/#services' },
    { name: 'Real-Time Tracking', href: '/tracking' },
  ]

  const companyLinks = [
    { name: 'About MegaMotion', href: '/about' },
    { name: 'Carrier Network', href: '/carriers' },
    { name: 'Careers', href: '/careers' },
    { name: 'Get a Fast Quote', href: '/quote' },
    { name: 'Contact Dispatch', href: '/contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FMCSA Safety Data', href: '/safety' },
  ]

  return (
    <footer className="w-full bg-primary-navy text-white pt-20 pb-10 overflow-hidden relative">
      {/* Visual Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand & Mission */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-accent-orange rounded-2xl flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-accent-orange/20">
                <Truck size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl leading-none tracking-tight">MegaMotion</span>
                <span className="text-[10px] font-black tracking-[0.25em] text-accent-orange uppercase mt-1">Specialists</span>
              </div>
            </Link>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              Reliable trucking and freight services across the U.S.
              On-time pickups, direct communication, and zero broker confusion.
              Just dependable logistics you can count on.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:px-4">
            <div>
              <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent-orange rounded-full" />
              </h4>
              <ul className="space-y-4">
                {serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-white/60 hover:text-accent-orange flex items-center gap-2 group transition-all">
                      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent-orange rounded-full" />
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-white/60 hover:text-accent-orange flex items-center gap-2 group transition-all">
                      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent-orange rounded-full" />
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-widest text-white/40 uppercase mb-1">Dispatch Support</span>
                  <Link href="tel:18001234567" className="text-lg font-bold hover:text-accent-orange transition-colors">
                    9124779714
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-widest text-white/40 uppercase mb-1">Send a Message</span>
                  <Link href="mailto:megamotiontrucking@gmail.com" className="text-base font-bold hover:text-accent-orange transition-colors">megamotiontrucking@gmail.com</Link>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-widest text-white/40 uppercase mb-1">Main Headquarters</span>
                  <span className="text-base font-medium">1200 Murphy Ave. Savannah, GA 31415, US</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/40 font-medium">
            <p>&copy; {currentYear} MegaMotion Logistics Specialists. All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex gap-6">
              {legalLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase text-right leading-tight">
              DOT#: 3928421<br />
              MC#: 1093284
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/20 font-black text-[10px]">
              USA
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}