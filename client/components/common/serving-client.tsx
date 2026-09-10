import { cn } from '@/lib/utils'
import {
    Activity,
    BadgeCheck,
    BadgeDollarSign,
    Blocks,
    Boxes,
    Briefcase,
    Bubbles,
    Calendar,
    Container,
    FileText,
    Gem,
    MapPinHouse,
    Mic,
    Package,
    PackageOpen,
    Plug2,
    Popcorn,
    Ship,
    Tractor,
    TrainFront,
    TriangleAlert,
    Truck,
    Warehouse,
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
  { icon: Truck, label: "LOGISTICS" },
  { icon: TrainFront, label: "RAIL" },
  { icon: Ship, label: "MARITIME" },
  { icon: Truck, label: "ROAD" },
  { icon: Warehouse, label: "CUSTOMS" },
  { icon: FileText, label: "DOCUMENTS" },
  { icon: TriangleAlert, label: "DANGEROUS" },
  { icon: BadgeCheck, label: "CERTIFICATION" },
  { icon: PackageOpen, label: "BULK" },
  { icon: Container, label: "ISOTANK" },
  { icon: Boxes, label: "INTERMODAL" },
  { icon: Package, label: "CARGO" },
];

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
                    <h2>Connecting Russia to Global Markets</h2>
                    <h3 className={cn(isDark && 'after:bg-white')}>
                        Our Logistics Services
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
