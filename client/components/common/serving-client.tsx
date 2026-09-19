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
import Image from 'next/image'
import React from 'react'

export default function ServingClient({
    className,
    variant,
}: {
    className?: string
    variant?: 'light' | 'dark'
}) {
    const IconServices = [
        { icon: '/service-LOGISTICS.svg', label: 'LOGISTICS' },
        { icon: '/service-RAIL.svg', label: 'RAIL' },
        { icon: '/service-MARITIME.svg', label: 'MARITIME' },
        { icon: '/service-ROAD.svg', label: 'ROAD' },
        { icon: '/service-CUSTOMS.svg', label: 'CUSTOMS' },
        { icon: '/service-DOCUMENTS.svg', label: 'DOCUMENTS' },
        { icon: '/service-DANGEROUS.svg', label: 'DANGEROUS' },
        { icon: '/service-CERTIFICATION.svg', label: 'CERTIFICATION' },
        { icon: '/service-BULK.svg', label: 'BULK' },
        { icon: '/service-ISOTANK.svg', label: 'ISOTANK' },
        { icon: '/service-INTERMODAL.svg', label: 'INTERMODAL' },
        { icon: '/service-CARGO.svg', label: 'CARGO' },
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
                                    'group relative z-1 flex aspect-square flex-col items-center justify-center gap-4 border duration-300 after:absolute after:inset-0 after:top-full after:-z-1 after:w-full after:bg-white after:duration-300 hover:after:top-0',
                                    isDark
                                        ? 'border-border/5 hover:text-primary text-white'
                                        : 'border-border after:bg-primary hover:text-white',
                                )}
                            >
                                {isDark ? (
                                    <>
                                        <Image
                                            width={100}
                                            height={100}
                                            className="group-hover:hidden"
                                            src={`/svgs/light${service.icon}`}
                                            alt={service.label}
                                        />
                                        <Image
                                            width={100}
                                            height={100}
                                            className="hidden group-hover:block"
                                            src={`/svgs/dark${service.icon}`}
                                            alt={service.label}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={`/svgs/dark${service.icon}`}
                                            className="group-hover:hidden"
                                            alt={service.label}
                                        />
                                        <Image
                                            width={100}
                                            height={100}
                                            src={`/svgs/light${service.icon}`}
                                            className="hidden group-hover:block"
                                            alt={service.label}
                                        />
                                    </>
                                )}

                                {/* <Icon className="!size-10 stroke-1 md:!size-14" /> */}
                                <h2>{service.label}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
