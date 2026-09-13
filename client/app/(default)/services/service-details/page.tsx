import HeroSection from '@/components/common/hero-section'
import { ChevronsRight, CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TrustedLeading from '@/components/common/trusted-leading'
import { Metadata } from 'next'
import helper from '@/lib/helper'
import RecentServices from '@/components/custom/recent-services'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Service details | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/services/service-details',
        title: 'Service details | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Service details | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/services/service-details`,
    },
}

export default function ServiceDetails() {
    const services = [
        {
            id: 1,
            title: 'CARGO',
            description:
                'Cargo specifications determine the transport and equipment requirements.',
            image: '/images/quick-solutions.png',
        },
        {
            id: 2,
            title: 'ROUTE',
            description:
                'The corridor is selected according to geography, borders, ports and transit conditions.',
            image: '/images/icon-cybersecurity.png',
        },
        {
            id: 3,
            title: 'EQUIPMENT',
            description:
                'Equipment is matched to the physical and regulatory characteristics of the cargo.',
            image: '/images/cloud-computing.png',
        },
        {
            id: 4,
            title: 'DOCUMENTS',
            description:
                'Customs, transit, transport and cargo-specific documentation is coordinated.',
            image: '/images/icon-software.png',
        },
        {
            id: 5,
            title: 'TRANSFER',
            description:
                'Each handover between rail, road, sea and terminal operations is planned in advance.',
            image: '/images/icon-mangement.png',
        },
        {
            id: 6,
            title: 'DELIVERY',
            description:
                'The movement remains coordinated through the final delivery point.',
            image: '/images/icon-integration.png',
        },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Service', href: '/services' },
                        { label: 'Service details' },
                    ]}
                    title={
                        <div>
                            <p>SERVICE DETAILS</p>
                            {/* <p className="text-xl">
                                From Cargo Specification to Final Delivery
                            </p> */}
                        </div>
                    }
                    description={'MULTIMODAL FREIGHT OPERATIONS'}
                />
                <div className="container flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
                    <div className="grow">
                        <div className="prose prose-base lg:prose-lg lg:prose-h2:text-4xl prose-h2:first:mt-0 max-w-full">
                            <h2>From Cargo Specification to Final Delivery</h2>
                            <p>
                                A shipment is not defined by one transport mode.
                                It is defined by its cargo, route, equipment,
                                border requirements and final destination.
                            </p>
                            <p>
                                We structure each movement around these
                                operational parameters and connect the required
                                rail, road, maritime, customs and terminal
                                operations into one coordinated flow.
                            </p>

                            <section className="flex flex-col gap-5 md:flex-row">
                                <div>
                                    <h6 className="text-3xl font-bold!">
                                        EQUIPMENT
                                    </h6>
                                    <ol
                                        className="flex flex-col gap-0!"
                                        type="1"
                                    >
                                        <li className="m-0! p-0!">
                                            <h3 className="m-0!">
                                                ISO TANK CONTAINERS
                                            </h3>
                                            <p>
                                                For liquid bulk, chemicals and
                                                regulated cargo.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>HOPPER WAGONS</h3>
                                            <p>
                                                For grain, fertilizers and dry
                                                bulk commodities.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>PLATFORM WAGONS</h3>
                                            <p>
                                                For containers, machinery, steel
                                                and heavy cargo.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>CONTAINERS</h3>
                                            <p>
                                                For general, commercial and
                                                industrial shipments.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>SPECIALIZED VEHICLES</h3>
                                            <p>
                                                For road legs, border transfers
                                                and final delivery.
                                            </p>
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <h6 className="text-3xl font-bold!">
                                        CARGO PROFILE
                                    </h6>
                                    <ol
                                        className="flex flex-col gap-0!"
                                        type="1"
                                    >
                                        <li className="m-0! p-0!">
                                            <h3 className="m-0!">
                                                GENERAL CARGO
                                            </h3>
                                            <p>
                                                Containerized • Palletized •
                                                Industrial • Commercial
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>BULK CARGO</h3>
                                            <p>
                                                Grain • Fertilizers • Minerals •
                                                Raw Materials
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>LIQUID CARGO</h3>
                                            <p>
                                                Edible Oils • Chemicals •
                                                Petroleum Products
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>SPECIAL CARGO</h3>
                                            <p>
                                                Dangerous Goods • ISO Tanks •
                                                Oversized • Regulated Cargo
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            <section className="flex flex-col gap-5 md:flex-row">
                                <div>
                                    <h6 className="text-3xl font-bold!">
                                        TRANSPORT MODES
                                    </h6>
                                    <ol
                                        className="flex flex-col gap-0!"
                                        type="1"
                                    >
                                        <li className="m-0! p-0!">
                                            <h3 className="m-0!">RAIL</h3>
                                            <p>
                                                Long-distance inland movement,
                                                bulk transportation and
                                                cross-border rail corridors.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>HOPPER WAGONS</h3>
                                            <p>
                                                For grain, fertilizers and dry
                                                bulk commodities.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>SEA</h3>
                                            <p>
                                                Port-to-port transportation,
                                                Caspian connections,
                                                international shipping and
                                                maritime distribution
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>ROAD</h3>
                                            <p>
                                                Border crossings, regional
                                                distribution, first-mile and
                                                last-mile operations.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>MULTIMODAL</h3>
                                            <p>
                                                Integrated combinations of rail,
                                                sea and road with controlled
                                                transfer points.
                                            </p>
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <h6 className="text-3xl font-bold!">
                                        DOCUMENTATION & COMPLIANCE
                                    </h6>
                                    <ol
                                        className="flex flex-col gap-0!"
                                        type="1"
                                    >
                                        <li className="m-0! p-0!">
                                            <h3 className="m-0!">
                                                CUSTOMS DOCUMENTATION
                                            </h3>
                                            <p>
                                                Export and transit declarations,
                                                cargo documentation and customs
                                                procedures.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>TRANSPORT DOCUMENTS</h3>
                                            <p>
                                                Railway, maritime and road
                                                transport documentation.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>DANGEROUS GOODS</h3>
                                            <p>
                                                Applicable dangerous-goods
                                                documentation and classification
                                                requirements.
                                            </p>
                                        </li>
                                        <li className="m-0! p-0!">
                                            <h3>CERTIFICATES & PERMITS</h3>
                                            <p>
                                                Cargo-specific certificates,
                                                export documents and regulatory
                                                approvals where required.
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            <Image
                                src="/images/service-img.jpg"
                                alt="Service img"
                                width={449}
                                height={300}
                            />

                            <h3>WHAT WE NEED TO START</h3>
                            <p>
                                The movement remains coordinated through the
                                final delivery point.
                            </p>
                            <ul>
                                <li>
                                    <h4>Cargo Type</h4>
                                </li>
                                <li>
                                    <h4>Origin</h4>
                                </li>
                                <li>
                                    <h4>Destination</h4>
                                </li>
                                <li>
                                    <h4>Volume / Weight</h4>
                                </li>
                                <li>
                                    <h4>Loading Date</h4>
                                </li>
                            </ul>
                            <h4>Preferred Transport Mode</h4>
                            <p>Dangerous Goods Status</p>
                            <p>Required Delivery Time</p>
                        </div>
                        <div className="border-border divide-border mt-8 grid divide-x divide-y border sm:grid-cols-2 sm:divide-y-0">
                            <div className="space-y-6 p-6">
                                <h3 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    CARGO FLOWS WE HANDLE
                                </h3>
                                <ul className="space-y-3 font-medium lg:text-lg/6">
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        GENERAL CARGO
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        DRY BULK
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        BAGGED CARGO
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        LIQUID BULK
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        DANGEROUS GOODS
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6 p-6">
                                <h3 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    CORRIDOR APPLICATION
                                </h3>
                                <ul className="space-y-3 font-medium lg:text-lg/6">
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        NORTH–SOUTH
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        TRANS-CASPIAN
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        CENTRAL ASIA
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        CAUCASUS–TÜRKİYE
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        CASPIAN–GULF
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto shrink-0 space-y-8 lg:w-90">
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                ROUTE CONFIGURATION
                            </h2>
                            <div className="-ml-1 flex flex-col space-y-4">
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    ORIGIN
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    FIRST MILE
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    BORDER / PORT
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    TRANSIT CORRIDOR
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    TERMINAL
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    FINAL DESTINATION
                                </Link>
                            </div>
                        </div>
                        <div className="border-border space-y-6 border">
                            <div className="relative h-110 overflow-hidden">
                                <Image
                                    src="/images/person-img.png"
                                    alt="Person img"
                                    width={358}
                                    height={440}
                                    className="h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                                <div className="absolute inset-x-0 bottom-0 p-5 text-center backdrop-blur-[2px]">
                                    <h3 className="text-primary font-red-hat text-2xl/7 font-bold">
                                        Need a talk with us?
                                    </h3>
                                    <p className="mt-1.5 text-justify font-semibold">
                                        Send us the cargo details and
                                        origin–destination pair. We will
                                        determine the applicable corridor,
                                        transport combination, equipment
                                        requirements and documentation scope.
                                    </p>
                                    <Button
                                        type="button"
                                        className="!btn mt-3.5 w-full"
                                    >
                                        <span>REQUEST A ROUTE ASSESSMENT</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RecentServices services={services} />

                <TrustedLeading />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Service details | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/service/service-details",
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
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Service details",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/service/service-details"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
