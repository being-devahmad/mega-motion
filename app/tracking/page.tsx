'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Search,
    Package,
    Truck,
    MapPin,
    Clock,
    CheckCircle2,
    Info,
    ArrowRight,
    ShieldCheck,
    Zap,
    Navigation
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock Tracking Data Types
interface TrackingEvent {
    time: string
    date: string
    location: string
    status: string
    completed: boolean
}

interface TrackingResult {
    id: string
    status: 'ordered' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered'
    origin: string
    destination: string
    estimatedDelivery: string
    serviceType: string
    weight: string
    events: TrackingEvent[]
}

const MOCK_DATA: Record<string, TrackingResult> = {
    'BK-FTL-7822': {
        id: 'BK-FTL-7822',
        status: 'in_transit',
        origin: 'Dallas, TX',
        destination: 'Chicago, IL',
        estimatedDelivery: 'Oct 12, 2026',
        serviceType: 'Full Truckload (FTL)',
        weight: '12,500 lbs',
        events: [
            { date: 'Oct 07, 2026', time: '02:30 PM', location: 'St. Louis, MO', status: 'Arrived at Sorting Facility', completed: true },
            { date: 'Oct 07, 2026', time: '06:00 AM', location: 'Tulsa, OK', status: 'In Transit to Destination', completed: true },
            { date: 'Oct 06, 2026', time: '04:15 PM', location: 'Dallas, TX', status: 'Picked up from Shipper', completed: true },
            { date: 'Oct 06, 2026', time: '09:00 AM', location: 'Dallas, TX', status: 'Shipment Information Received', completed: true },
        ]
    },
    'BK-EXP-9901': {
        id: 'BK-EXP-9901',
        status: 'delivered',
        origin: 'Austin, TX',
        destination: 'Houston, TX',
        estimatedDelivery: 'Oct 05, 2026',
        serviceType: 'Same-Day Express',
        weight: '450 lbs',
        events: [
            { date: 'Oct 05, 2026', time: '04:45 PM', location: 'Houston, TX', status: 'Delivered - Signed by M. Jones', completed: true },
            { date: 'Oct 05, 2026', time: '01:20 PM', location: 'Houston, TX', status: 'Out for Delivery', completed: true },
            { date: 'Oct 05, 2026', time: '11:00 AM', location: 'Houston, TX', status: 'Arrived at Local Facility', completed: true },
            { date: 'Oct 05, 2026', time: '07:30 AM', location: 'Austin, TX', status: 'Picked up from Shipper', completed: true },
        ]
    }
}

export default function TrackingPage() {
    const [query, setQuery] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [result, setResult] = useState<TrackingResult | null>(null)
    const [error, setError] = useState('')

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!query) return

        setIsSearching(true)
        setError('')
        setResult(null)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        const found = MOCK_DATA[query.toUpperCase()]
        if (found) {
            setResult(found)
        } else {
            setError('No shipment found with that tracking ID. Please check and try again.')
        }
        setIsSearching(false)
    }

    const steps = [
        { label: 'Ordered', status: 'ordered', icon: Info },
        { label: 'Picked Up', status: 'picked_up', icon: Package },
        { label: 'In Transit', status: 'in_transit', icon: Truck },
        { label: 'Out for Delivery', status: 'out_for_delivery', icon: Navigation },
        { label: 'Delivered', status: 'delivered', icon: CheckCircle2 },
    ]

    const getStepIndex = (status: string) => steps.findIndex(s => s.status === status)
    const currentStepIndex = result ? getStepIndex(result.status) : -1

    return (
        <main className="w-full relative overflow-hidden bg-white min-h-screen">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent-orange/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-trust-blue/[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />

            <Header />

            <div className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Hero Searching Area */}
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 lg:mb-24">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-navy/5 border border-primary-navy/10 text-primary-navy font-bold text-xs uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-500">
                                <Zap size={14} className="text-accent-orange animate-pulse" />
                                Live Freight Radar
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-black font-heading text-primary-navy tracking-tight leading-none">
                                Track Your <span className="text-accent-orange">Shipment</span>
                            </h1>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
                                Enter your tracking ID to get real-time updates on your cargo's location and estimated delivery time.
                            </p>
                        </div>

                        <form onSubmit={handleTrack} className="relative max-w-2xl mx-auto group animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="relative flex items-center p-2 bg-white border-2 border-gray-100 rounded-[2rem] shadow-2xl shadow-primary-navy/10 group-focus-within:border-accent-orange group-focus-within:ring-4 group-focus-within:ring-accent-orange/10 transition-all duration-300">
                                <div className="pl-6 text-primary-navy/40 group-focus-within:text-accent-orange transition-colors">
                                    <Search size={24} strokeWidth={2.5} />
                                </div>
                                <Input
                                    placeholder="Enter Tracking ID (e.g. BK-FTL-7822)"
                                    className="h-16 border-0 bg-transparent text-xl font-bold text-primary-navy focus-visible:ring-0 placeholder:text-gray-300"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    disabled={isSearching}
                                    className="h-14 px-8 rounded-2xl bg-primary-navy hover:bg-primary-navy/95 text-white font-black text-lg gap-3 transition-all min-w-[140px]"
                                >
                                    {isSearching ? (
                                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>Track <ArrowRight size={20} /></>
                                    )}
                                </Button>
                            </div>

                            <div className="mt-6 flex justify-center gap-4 text-sm font-bold opacity-60">
                                <span className="text-text-muted">TRY:</span>
                                <button type="button" onClick={() => setQuery('BK-FTL-7822')} className="text-accent-orange hover:underline decoration-2 underline-offset-4">BK-FTL-7822</button>
                                <button type="button" onClick={() => setQuery('BK-EXP-9901')} className="text-accent-orange hover:underline decoration-2 underline-offset-4">BK-EXP-9901</button>
                            </div>
                        </form>

                        {error && (
                            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 font-bold animate-in shake-1 inline-flex items-center gap-2">
                                <Info size={18} />
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Results Area */}
                    {result && (
                        <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">

                            {/* Status Stepper Card */}
                            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary-navy/5 p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 relative z-10">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-primary-navy/40 mb-2">Tracking ID: {result.id}</p>
                                        <h2 className="text-3xl font-black text-primary-navy">Shipment is <span className="text-accent-orange capitalize">{result.status.replace('_', ' ')}</span></h2>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-orange">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-text-muted uppercase tracking-widest leading-none mb-1">Estimated Delivery</p>
                                            <p className="text-lg font-black text-primary-navy leading-none">{result.estimatedDelivery}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* The Stepper UI */}
                                <div className="relative mb-8 pb-8">
                                    <div className="absolute top-6 left-0 w-full h-1 bg-gray-100 rounded-full" />
                                    <div
                                        className="absolute top-6 left-0 h-1 bg-accent-orange rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                                    />

                                    <div className="relative flex justify-between items-start">
                                        {steps.map((step, idx) => {
                                            const isActive = idx === currentStepIndex
                                            const isCompleted = idx < currentStepIndex
                                            const Icon = step.icon

                                            return (
                                                <div key={idx} className="flex flex-col items-center">
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center border-4 transition-all duration-500 z-10",
                                                        isCompleted ? "bg-accent-orange border-accent-orange text-white" :
                                                            isActive ? "bg-white border-accent-orange text-accent-orange scale-125 shadow-xl shadow-accent-orange/20" :
                                                                "bg-white border-gray-100 text-gray-300"
                                                    )}>
                                                        {isCompleted ? <CheckCircle2 size={24} /> : <Icon size={24} />}
                                                    </div>
                                                    <p className={cn(
                                                        "mt-4 text-[10px] md:text-xs font-black uppercase tracking-tighter sm:tracking-widest text-center transition-colors",
                                                        isActive ? "text-primary-navy" : "text-gray-400"
                                                    )}>
                                                        {step.label}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Detailed Timeline */}
                                <div className="lg:col-span-2 space-y-8">
                                    <h3 className="text-2xl font-black text-primary-navy font-heading flex items-center gap-3">
                                        <Navigation className="text-accent-orange" size={24} />
                                        Travel History
                                    </h3>

                                    <div className="space-y-0 relative">
                                        <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-100" />

                                        {result.events.map((event, idx) => (
                                            <div key={idx} className="relative pl-16 pb-12 last:pb-0 group">
                                                <div className={cn(
                                                    "absolute left-4 top-1 w-5 h-5 rounded-full border-4 z-10 transition-all duration-300",
                                                    idx === 0 ? "bg-accent-orange border-accent-orange/30 scale-125 shadow-lg shadow-accent-orange/20" : "bg-white border-gray-200 group-hover:border-accent-orange"
                                                )} />

                                                <div className="bg-white p-6 rounded-[1.5rem] border border-gray-50 shadow-sm group-hover:shadow-md group-hover:border-accent-orange/10 transition-all">
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
                                                        <h4 className="font-black text-primary-navy text-xl">{event.status}</h4>
                                                        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/5 px-3 py-1 rounded-full">{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-6 text-text-muted font-bold text-sm">
                                                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent-orange" /> {event.location}</span>
                                                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-trust-blue" /> {event.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Shipment Details Sidebar */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-black text-primary-navy font-heading flex items-center gap-3">
                                        <Info className="text-accent-orange" size={24} />
                                        Shipment Details
                                    </h3>

                                    <div className="bg-primary-navy rounded-[2.5rem] p-8 text-white space-y-8 shadow-2xl shadow-primary-navy/20">
                                        <div className="space-y-6">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">From</p>
                                                <p className="text-lg font-black">{result.origin}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">To</p>
                                                <p className="text-lg font-black">{result.destination}</p>
                                            </div>
                                            <div className="h-px bg-white/10" />
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Service</p>
                                                    <p className="text-sm font-bold">{result.serviceType}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Weight</p>
                                                    <p className="text-sm font-bold">{result.weight}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/10 space-y-4">
                                            <div className="flex items-center gap-3 text-white/60">
                                                <ShieldCheck size={18} className="text-accent-orange" />
                                                <span className="text-xs font-bold uppercase tracking-widest">Insured Shipment</span>
                                            </div>
                                            <Button className="w-full bg-white hover:bg-white/90 text-primary-navy font-black h-14 rounded-xl shadow-lg">
                                                Download Bill of Lading
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Support Card */}
                                    <div className="p-8 rounded-[2rem] border-2 border-gray-50 flex flex-col items-center text-center space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                                            <Zap size={32} />
                                        </div>
                                        <h4 className="text-xl font-black text-primary-navy font-heading">Need Help?</h4>
                                        <p className="text-sm text-text-muted font-medium">Contact our dispatchers for more information about your shipment.</p>
                                        <Button variant="outline" className="w-full h-12 rounded-xl border-gray-100 text-primary-navy font-bold hover:bg-gray-50">
                                            Live Chat Support
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    )
}
