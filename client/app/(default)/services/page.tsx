import HeroSection from '@/components/common/hero-section'
import LatestService from '@/components/common/latest-service'
import LogoAnimate from '@/components/common/logo-animate'
import ServingClient from '@/components/common/serving-client'
import TestimonialSection from '@/components/common/testimonial-section'
import TrustedLeading from '@/components/common/trusted-leading'
import Counter from '@/components/custom/counter'
import helper from '@/lib/helper'
import { Award, CheckCheck } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: 'Service | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/services',
        title: 'Service | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Service | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
    },
}

export default function Service() {
    const services = [
        {
            id: 1,
            title: 'RAIL FREIGHT',
            description:
                'Cross-border rail logistics for containerized, bulk and specialized cargo, with coordinated wagon, platform and terminal operations across regional and international rail networks.',
            image: '/images/quick-solutions.png',
        },
        {
            id: 2,
            title: 'MARITIME TRANSPORT',
            description:
                'Port-to-port and multimodal sea logistics through Russian and international ports, connecting vessels, terminals, railways and road transport within one coordinated movement.',
            image: '/images/icon-cybersecurity.png',
        },
        {
            id: 3,
            title: 'ROAD TRANSPORT',
            description:
                'Cross-border trucking and regional distribution for general, bulk and specialized cargo, including coordinated border crossings, transshipment and last-mile delivery.',
            image: '/images/cloud-computing.png',
        },
        {
            id: 4,
            title: 'MULTIMODAL CORRIDORS',
            description:
                'End-to-end routing across rail, road and sea, designed around the most efficient combination of borders, ports, terminals and transit corridors for each cargo flow.',
            image: '/images/icon-software.png',
        },
        {
            id: 5,
            title: 'ISO TANK & LIQUID CARGO',
            description:
                'Specialized logistics for liquid commodities using ISO tank containers, tank wagons and compatible transport equipment, including positioning, repositioning and multimodal transfer.',
            image: '/images/icon-mangement.png',
        },
        {
            id: 6,
            title: 'BULK & BAGGED CARGO',
            description:
                'Handling and transportation of dry bulk, agricultural commodities, fertilizers and bagged cargo using hopper wagons, FIBC and jumbo bags, with coordinated loading and discharge operations.',
            image: '/images/icon-integration.png',
        },
        {
            id: 7,
            title: 'DANGEROUS GOODS',
            description:
                'Controlled logistics for hazardous and regulated cargo, including chemicals, petroleum products and other classified goods, with transport documentation, regulatory coordination and specialized equipment.',
            image: '/images/icon-ai.png',
        },
        {
            id: 8,
            title: 'CUSTOMS & TRANSIT DOCUMENTATION',
            description:
                'Coordination of customs, transit and cargo documentation across international movements, including declarations, permits, certificates, transit procedures and regulatory requirements.',
            image: '/images/icon-support.png',
        },
    ]

    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Services' },
                    ]}
                    title={
                        <>
                            MULTIMODAL LOGISTICS.
                            <br />
                            <span>CORRIDOR-DRIVEN EXECUTION.</span>
                        </>
                    }
                    description={
                        'Integrated cargo solutions across rail, maritime and road networks, connecting Russian ports, inland terminals and international trade corridors.'
                    }
                />
                <LatestService services={services} />

                <div className="bg-primary relative px-4 py-16">
                    <div className="container">
                        <div className="border-border/10 grid items-center border-b text-white sm:grid-cols-2 sm:gap-0 sm:pb-8 lg:grid-cols-3 lg:gap-16">
                            <div className="border-border/10 relative order-2 py-6 sm:p-8 lg:order-none lg:border-r">
                                <h3 className="text-lg/5">
                                    MULTIMODAL OPERATIONS
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 10; let interval = setInterval(() => { if (count < target) count += 1; else clearInterval(interval) }, 20)"
                                >
                                    <span>Rail + Road + Sea</span>

                                    <p className="mt-1">
                                        Integrated transport planning across
                                        multiple modes, with coordinated
                                        transfers between ports, rail terminals,
                                        border crossings and final destinations.
                                    </p>
                                </div>
                                <Image
                                    src="/images/growth-icon.png"
                                    alt="Growth icon"
                                    width={80}
                                    height={80}
                                    className="animate-customPulse absolute top-5 right-5 h-20"
                                />
                            </div>
                            <div
                                className="section-heading order-1 mb-12 text-center sm:col-span-2 lg:order-none lg:col-span-1 lg:mb-0"
                                data-aos="fade-up"
                            >
                                <h2 className="text-sm text-white/50">
                                    BUILT AROUND THE CARGO. CONNECTED BY THE
                                    CORRIDOR.
                                </h2>
                                <h3 className="text-2xl text-white after:bg-white">
                                    OUR OPERATING MODEL
                                </h3>
                            </div>
                            <div className="border-border/10 relative order-3 border-t py-6 sm:border-t-0 sm:border-l sm:p-8 lg:order-none">
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 400; let interval = setInterval(() => { if (count < target) count += 3; else clearInterval(interval) }, 1)"
                                >
                                    <p className="mt-1">
                                        We coordinate cargo movements across
                                        rail, road and maritime networks,
                                        combining routing, equipment, border
                                        procedures, terminals and documentation
                                        into one controlled logistics flow.
                                    </p>
                                </div>
                                <Image
                                    src="/images/team-icon.png"
                                    alt="Growth icon"
                                    width={80}
                                    height={80}
                                    className="animate-customPulse absolute top-5 right-5 h-20"
                                />
                            </div>

                            <div className="border-border/10 relative order-2 py-6 sm:p-8 lg:order-none lg:border-r">
                                <h3 className="text-lg/5">
                                    CROSS-BORDER EXECUTION
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 10; let interval = setInterval(() => { if (count < target) count += 1; else clearInterval(interval) }, 20)"
                                >
                                    <span>Multiple Corridors</span>

                                    <p className="mt-1">
                                        Route planning through established
                                        international corridors, connecting
                                        Russia with the Caucasus, Central Asia,
                                        the Caspian region, Europe and the
                                        Middle East.
                                    </p>
                                </div>
                            </div>
                            <div className="border-border/10 relative order-2 py-6 sm:p-8 lg:order-none lg:border-r">
                                <h3 className="text-lg/5">
                                    EQUIPMENT & HANDLING
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 10; let interval = setInterval(() => { if (count < target) count += 1; else clearInterval(interval) }, 20)"
                                >
                                    <span>
                                        ISO Tanks • Hopper Wagons • Platforms
                                    </span>

                                    <p className="mt-1">
                                        Equipment positioning, loading
                                        coordination, terminal handling and
                                        multimodal transfers for specialized and
                                        bulk cargo flows.
                                    </p>
                                </div>
                            </div>
                            <div className="border-border/10 relative order-2 py-6 sm:p-8 lg:order-none lg:border-r">
                                <h3 className="text-lg/5">
                                    CONTROLLED AT EVERY TRANSFER
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 10; let interval = setInterval(() => { if (count < target) count += 1; else clearInterval(interval) }, 20)"
                                >
                                    <p className="mt-1">
                                        From the first loading point to the
                                        final delivery, each movement is
                                        coordinated around cargo requirements,
                                        route conditions, border procedures,
                                        equipment availability and applicable
                                        transport regulations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid text-white sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
                            <div className="border-border/10 relative order-2 border-b py-6 sm:border-r sm:border-b-0 sm:p-8 lg:order-none lg:border-r-0">
                                <div className="section-heading mb-6">
                                    <h3 className="text-2xl/7 font-medium text-white after:left-0 after:-translate-x-0 after:bg-white/60">
                                        OUR CORE CAPABILITIES
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    {items1.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2.5"
                                        >
                                            <Award className="mt-1 size-4! shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Image
                                    src="/images/certificate-icon.png"
                                    alt="Growth icon"
                                    width={64}
                                    height={64}
                                    className="animate-customPulse absolute top-5 right-5 h-16"
                                />
                            </div>
                            <div className="border-border/10 relative order-1 space-y-8 overflow-hidden border-b py-6 sm:col-span-2 sm:mb-8 sm:p-8 lg:order-none lg:mb-0 lg:border-x lg:border-b-0">
                                <Image
                                    src="/images/core-values-icon.png"
                                    alt="Growth icon"
                                    width={80}
                                    height={80}
                                    className="animate-customPulse absolute top-2.5 right-5 h-20"
                                />
                                <div className="section-heading mb-6">
                                    <h3 className="text-2xl/7 font-medium text-white after:left-0 after:-translate-x-0 after:bg-white/60">
                                        CORRIDOR COVERAGE
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    {items2.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2.5"
                                        >
                                            <CheckCheck className="mt-1 size-4! shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative order-3 py-6 sm:p-8 lg:order-none">
                                <div className="section-heading mb-6">
                                    <h3 className="text-2xl/7 font-medium text-white after:left-0 after:-translate-x-0 after:bg-white/60">
                                        OPERATIONAL SCOPE
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    {items3.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2.5"
                                        >
                                            <Award className="mt-1 size-4! shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Image
                                    src="/images/certificate-icon.png"
                                    alt="Growth icon"
                                    width={64}
                                    height={64}
                                    className="animate-customPulse absolute top-5 right-5 h-16"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <LogoAnimate />

                <ServingClient />

                <TestimonialSection variant="dark" />
                <TrustedLeading />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Service | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/service",
                                "description": "Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.",
                                "inLanguage": "en",
                                "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png",
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [{
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Service",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/service"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}

const items1 = [
    'Rail freight and wagon coordination',
    'Maritime and port-to-port logistics',
    'Cross-border road transportation',
    'Multimodal corridor planning',
    'ISO tank and liquid bulk logistics',
    'Hopper wagon and dry bulk operations',
    'Dangerous goods transportation',
    'Customs and transit documentation',
    'Cargo permits and regulatory coordination',
    'Port, terminal and border operations',
]
const items2 = [
    'RUSSIA',
    'CAUCASUS',
    'CENTRAL ASIA',
    'CASPIAN REGION',
    'EUROPE',
    'MIDDLE EAST',
]
const items3 = [
    'ORIGIN',
    'PORT',
    'BORDER',
    'RAIL / ROAD',
    'TRANSIT HUB',
    'DESTINATION',
]
