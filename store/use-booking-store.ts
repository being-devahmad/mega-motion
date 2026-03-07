import { create } from 'zustand'

export type ServiceType = 'ftl' | 'ltl' | 'express' | 'scheduled' | 'tracking' | 'licensed'

export interface BookingState {
    // Step Management
    currentStep: number
    setStep: (step: number) => void
    nextStep: () => void
    previousStep: () => void

    // Form Data
    formData: {
        service: ServiceType | ''
        origin: string
        destination: string
        weight: string
        dimensions: string
        itemDescription: string
        pickupDate: string
        deliveryDate: string
        specialInstructions: string
        price: string
        email: string
        phone: string
        company: string
    }

    // Actions
    updateFormData: (data: Partial<BookingState['formData']>) => void
    resetForm: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
    currentStep: 1,
    formData: {
        service: '',
        origin: '',
        destination: '',
        weight: '',
        dimensions: '',
        itemDescription: '',
        pickupDate: '',
        deliveryDate: '',
        specialInstructions: '',
        price: '',
        email: '',
        phone: '',
        company: '',
    },

    setStep: (step) => set({ currentStep: step }),
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
    previousStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

    updateFormData: (data) =>
        set((state) => ({
            formData: { ...state.formData, ...data },
        })),

    resetForm: () =>
        set({
            currentStep: 1,
            formData: {
                service: '',
                origin: '',
                destination: '',
                weight: '',
                dimensions: '',
                itemDescription: '',
                pickupDate: '',
                deliveryDate: '',
                specialInstructions: '',
                price: '',
                email: '',
                phone: '',
                company: '',
            },
        }),
}))
