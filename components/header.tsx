'use client'

import Link from 'next/link'
import { Menu, X, Truck, PhoneCall } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Book Now', href: '/booking' },
    { name: 'Contact', href: '/contact' },
    { name: 'Track your Shipment', href: '/tracking' },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-sm"
          : "bg-primary-navy/95 border-primary-navy/20 py-5 text-white"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "p-2 rounded-xl transition-all duration-300 transform group-hover:scale-110",
              scrolled ? "bg-primary-navy text-white shadow-lg" : "bg-white text-primary-navy shadow-xl"
            )}>
              <Truck size={24} className="group-hover:animate-bounce-slow" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-2xl tracking-tight leading-none",
                scrolled ? "text-primary-navy" : "text-white"
              )}>
                MEGA<span className="text-accent-orange">MOTION</span>
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium leading-none mt-1",
                scrolled ? "text-muted-foreground" : "text-white/60"
              )}>
                Logistics Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-all duration-200 hover:text-accent-orange relative group",
                  scrolled ? "text-text-dark" : "text-white/90"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className={cn(
              "hidden xl:flex items-center gap-2 text-sm font-medium",
              scrolled ? "text-text-dark" : "text-white/90"
            )}>
              <PhoneCall size={16} className="text-accent-orange" />
              <span>912-477-9714</span>
            </div>
            <Button asChild size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-full px-8 shadow-lg shadow-accent-orange/20 transition-all hover:scale-105">
              <Link href="/booking">Book a Truck</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-primary-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 top-[70px] bg-white text-text-dark shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px] border-b" : "max-h-0"
        )}>
          <nav className="px-6 py-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-semibold hover:text-accent-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-4 mt-2">
              <Button asChild className="w-full bg-primary-navy text-white font-bold h-12">
                <Link href="/quote" onClick={() => setIsOpen(false)}>Get a Fast Quote</Link>
              </Button>
              <Button asChild className="w-full bg-accent-orange text-white font-bold h-12">
                <Link href="/booking" onClick={() => setIsOpen(false)}>Book a Truck Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
