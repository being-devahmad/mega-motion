'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'

export default function BookingPage() {
  return (
    <main className="w-full">
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Book Your Shipment</h1>
            <p className="text-lg text-muted-foreground">Quick and easy booking process with real-time pricing</p>
          </div>
          <BookingForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
