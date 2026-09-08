import { cn } from '@/lib/utils'
import {
    Activity,
    BadgeDollarSign,
    Blocks,
    Briefcase,
    Bubbles,
    Calendar,
    Gem,
    MapPinHouse,
    Mic,
    Plug2,
    Popcorn,
    Tractor,
} from 'lucide-react'
import React from 'react'

export default function ServingClient({
    className,
    variant,
}: {
    className?: string
    variant?: 'light' | 'dark'
}) {
    const IconServices = [
        { icon: Mic, label: 'Publishing' },
        { icon: BadgeDollarSign, label: 'Finance' },
        { icon: Activity, label: 'Sciences' },
        { icon: Briefcase, label: 'Consultant' },
        { icon: Popcorn, label: 'Food' },
        { icon: MapPinHouse, label: 'Travel' },
        { icon: Bubbles, label: 'Dairy' },
        { icon: Gem, label: 'Jewellery' },
        { icon: Plug2, label: 'Energy' },
        { icon: Tractor, label: 'Farming' },
        { icon: Blocks, label: 'Industries' },
        { icon: Calendar, label: 'Events' },
    ]

    const isDark = variant === 'dark'
    return (
        <div className={cn(isDark ? className : '')}>
            <div className="container">
                <div
                    className={cn(
                        'section-heading text-center',
                        isDark && '*:!text-white',
                    )}
                    data-aos="fade-up"
                >
                    <h2>Your Industry, Our Insight</h2>
                    <h3 className={cn(isDark && 'after:bg-white')}>
                        Serving our clients across the diverse industries.
                    </h3>
                </div>
                <div
                    className={cn(
                        'font-red-hat mx-auto mt-10 grid max-w-7xl grid-cols-3 text-center text-sm font-medium uppercase sm:grid-cols-4 sm:text-base lg:mt-14 lg:grid-cols-6',
                        isDark ? 'text-white' : 'text-black',
                    )}
                >
                    {IconServices.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className={cn(
                                    'relative z-1 flex aspect-square flex-col items-center justify-center gap-4 border duration-300 after:absolute after:inset-0 after:top-full after:-z-1 after:w-full after:bg-white after:duration-300 hover:after:top-0',
                                    isDark
                                        ? 'border-border/5 hover:text-primary text-white'
                                        : 'border-border after:bg-primary hover:text-white',
                                )}
                            >
                                <Icon className="!size-10 stroke-1 md:!size-14" />
                                <h2>{service.label}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
