import HeroSection from '@/components/common/hero-section'
import TrustedLeading from '@/components/common/trusted-leading'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Rail Logistics',
    description:
        'Specialized rail transport across Russian and Eurasian networks, including bulk, liquid, intermodal and specialized rail logistics.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/rail-logistics',
        title: 'Rail Logistics',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Rail Logistics',
        description:
            'Specialized rail transport across Russian and Eurasian networks.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/rail-logistics`,
    },
}

export default function RailLogistics() {
    return (
        <>
            <div className="mb-16 grow lg:mb-25">
                {/* HERO */}
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Rail Logistics' },
                    ]}
                    title={<>RAIL LOGISTICS</>}
                    descriptions={[
                        'SPECIALIZED RAIL TRANSPORT ACROSS RUSSIAN & EURASIAN NETWORKS',
                        'Rail freight is the backbone of long-distance cargo movement across Russia and the wider Eurasian transport network.',
                        'From industrial origins and agricultural regions to inland terminals, border stations, Caspian gateways and international corridors, each movement depends on the correct combination of rolling stock, railway infrastructure, terminal capability and onward connectivity.',
                        'Our rail logistics approach is built around this entire chain — matching cargo characteristics with the appropriate wagon, route, border interface and final transport connection.',
                    ]}
                />

                <div className="container my-10  flex-col items-start gap-12 space-y-12 lg:flex lg:flex-row lg:gap-16 lg:space-y-0">
                    <div className="grow">
                        {/* SERVICE OVERVIEW */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">SERVICE OVERVIEW</h3>

                            <div className="border-border grid border sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: 'RAIL FREIGHT',
                                        description:
                                            'Long-distance rail transportation connecting Russian origins with domestic, cross-border and international destinations.',
                                    },
                                    {
                                        title: 'BULK RAIL',
                                        description:
                                            'Specialized movement of grain, agricultural commodities, fertilizers, minerals and other dry bulk cargo.',
                                    },
                                    {
                                        title: 'LIQUID RAIL',
                                        description:
                                            'Rail transportation of compatible liquid commodities through tank wagons and ISO tank containers.',
                                    },
                                    {
                                        title: 'INTERMODAL RAIL',
                                        description:
                                            'Rail combined with road and maritime transport for continuous multimodal cargo flows.',
                                    },
                                    {
                                        title: 'SPECIALIZED RAIL',
                                        description:
                                            'Dedicated rolling stock and handling configurations for heavy, oversized, regulated and technically demanding cargo.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-border border-b p-5 last:border-b-0 sm:p-6 lg:border-r"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {item.title}
                                        </h4>

                                        <p className="mt-3 text-sm/6 text-black/70">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CARGO TYPES */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">CARGO TYPES</h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    {
                                        title: 'GENERAL CARGO',
                                        items: [
                                            'Machinery',
                                            'Industrial goods',
                                            'Steel',
                                            'Construction materials',
                                            'Commercial cargo',
                                            'Packaged products',
                                        ],
                                    },
                                    {
                                        title: 'DRY BULK',
                                        items: [
                                            'Grain',
                                            'Corn',
                                            'Soy',
                                            'Oilseed meal',
                                            'Fertilizers',
                                            'Mineral materials',
                                            'Industrial raw materials',
                                        ],
                                    },
                                    {
                                        title: 'LIQUID BULK',
                                        items: [
                                            'Edible oils',
                                            'Chemical liquids',
                                            'Petroleum products',
                                            'Industrial liquids',
                                        ],
                                    },
                                    {
                                        title: 'REGULATED CARGO',
                                        items: [
                                            'Dangerous goods',
                                            'Chemical products',
                                            'Petroleum-related cargo',
                                            'Specialized regulated commodities',
                                        ],
                                    },
                                ].map((group) => (
                                    <div
                                        key={group.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {group.title}
                                        </h4>

                                        <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm/6 text-black/70">
                                            {group.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROLLING STOCK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">ROLLING STOCK</h3>

                            <div className="border-border grid border sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: 'COVERED WAGONS',
                                        description:
                                            'For protected general cargo, packaged commodities and goods requiring enclosed loading space.',
                                    },
                                    {
                                        title: 'HOPPER WAGONS',
                                        description:
                                            'For grain, agricultural commodities, fertilizers, minerals and other dry bulk materials.',
                                    },
                                    {
                                        title: 'PLATFORM WAGONS',
                                        description:
                                            'For containers, machinery, steel, heavy equipment, vehicles and other open-load cargo.',
                                    },
                                    {
                                        title: 'TANK WAGONS',
                                        description:
                                            'For compatible liquid cargo requiring dedicated rail tank equipment.',
                                    },
                                    {
                                        title: 'ISO TANK CONTAINERS',
                                        description:
                                            'For intermodal liquid bulk movements connecting rail with road and maritime transport.',
                                    },
                                    {
                                        title: 'SPECIALIZED WAGONS',
                                        description:
                                            'For cargo requiring dedicated rolling stock, handling systems or specific loading configurations.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {item.title}
                                        </h4>

                                        <p className="mt-3 text-sm/6 text-black/70">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CARGO — WAGON MATCHING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                CARGO — WAGON MATCHING
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm/6 lg:text-base/6">
                                    <thead>
                                        <tr>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium first:pl-0">
                                                CARGO
                                            </th>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium">
                                                WAGON CONFIGURATION
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {[
                                            [
                                                'GENERAL CARGO',
                                                'COVERED WAGON / PLATFORM',
                                            ],
                                            ['DRY BULK', 'HOPPER WAGON'],
                                            [
                                                'LIQUID BULK',
                                                'TANK WAGON / ISO TANK',
                                            ],
                                            [
                                                'CONTAINERS',
                                                'PLATFORM / CONTAINER WAGON',
                                            ],
                                            [
                                                'HEAVY & SPECIALIZED',
                                                'SPECIALIZED PLATFORM / SPECIAL WAGON',
                                            ],
                                            [
                                                'DANGEROUS GOODS',
                                                'APPROVED WAGON / ISO TANK CONFIGURATION',
                                            ],
                                        ].map(([cargo, wagon]) => (
                                            <tr key={cargo}>
                                                <td className="border-border/70 border-b p-3 font-medium first:pl-0">
                                                    {cargo}
                                                </td>
                                                <td className="border-border/70 border-b p-3 text-black/70">
                                                    {wagon}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* RAIL NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">RAIL NETWORK</h3>

                            <div className="border-border border p-5 sm:p-6">
                                <h4 className="text-primary font-red-hat text-xl font-bold">
                                    RUSSIA
                                </h4>

                                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm/6 text-black/70 sm:grid-cols-3">
                                    {[
                                        'Industrial regions',
                                        'Agricultural origins',
                                        'Inland terminals',
                                        'Major railway hubs',
                                        'Port approaches',
                                        'Border stations',
                                    ].map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-sm/6 text-black/70 lg:text-base/6">
                                    The Russian railway network provides the
                                    primary inland framework for moving cargo
                                    between production regions, logistics hubs,
                                    ports and international gateways.
                                </p>
                            </div>
                        </div>

                        {/* INTERNATIONAL RAIL CONNECTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                INTERNATIONAL RAIL CONNECTIONS
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    {
                                        title: 'WEST',
                                        route: [
                                            'Russia',
                                            'Western railway network',
                                            'European connections',
                                        ],
                                    },
                                    {
                                        title: 'SOUTH',
                                        route: [
                                            'Russia',
                                            'Caspian / Caucasus',
                                            'Azerbaijan',
                                            'Iran / Türkiye',
                                        ],
                                    },
                                    {
                                        title: 'CENTRAL ASIA',
                                        route: [
                                            'Russia',
                                            'Kazakhstan',
                                            'Uzbekistan',
                                            'Central Asia',
                                        ],
                                    },
                                    {
                                        title: 'EAST',
                                        route: [
                                            'Russia',
                                            'Siberian / Eastern network',
                                            'China / Mongolia',
                                            'East Asian markets',
                                        ],
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {item.title}
                                        </h4>

                                        <div className="mt-4 space-y-2">
                                            {item.route.map((route, index) => (
                                                <div
                                                    key={route}
                                                    className="flex items-center gap-3 text-sm/6"
                                                >
                                                    <span className="text-primary font-medium">
                                                        {index > 0 ? '→' : ''}
                                                    </span>

                                                    <span>{route}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NORTH–SOUTH */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                NORTH–SOUTH RAIL CONNECTION
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIA',
                                    'AZERBAIJAN',
                                    'ASTARA',
                                    'IRAN',
                                    'REGIONAL MARKETS',
                                ].map((item, index, items) => (
                                    <div
                                        key={item}
                                        className="flex flex-col items-center"
                                    >
                                        <span className="text-base font-medium lg:text-lg">
                                            {item}
                                        </span>

                                        {index < items.length - 1 && (
                                            <span className="text-primary my-2 text-xl">
                                                ↓
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The northern connection through the Caspian and
                                Astara provides access from Russian and regional
                                railway flows into the Iranian transit network.
                            </p>

                            <p className="text-sm font-medium">
                                From the Iranian network, cargo can continue
                                toward:
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                                {[
                                    'AFGHANISTAN',
                                    'PAKISTAN',
                                    'IRAQ',
                                    'TÜRKİYE',
                                    'GULF MARKETS',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-3 text-center text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70">
                                The final routing depends on cargo
                                characteristics, destination, border conditions,
                                railway infrastructure and available transport
                                connections.
                            </p>
                        </div>

                        {/* MULTIMODAL */}
                        {[
                            {
                                title: 'RAIL + PORT',
                                description:
                                    'Rail can function as the inland backbone of a maritime supply chain.',
                                flow: [
                                    'RAIL ORIGIN',
                                    'RAIL TERMINAL',
                                    'PORT RAIL INTERFACE',
                                    'VESSEL',
                                    'INTERNATIONAL MARITIME NETWORK',
                                ],
                                extra: 'This structure allows cargo from inland Russian and Eurasian origins to connect with Caspian, Black Sea, Baltic, Far Eastern and other maritime gateways.',
                            },
                            {
                                title: 'RAIL + ROAD',
                                description:
                                    'For destinations outside direct rail reach, road transport can provide the first-mile, last-mile or regional distribution connection.',
                                flow: [
                                    'RAIL',
                                    'TERMINAL',
                                    'TRUCK',
                                    'BORDER / DESTINATION',
                                ],
                            },
                            {
                                title: 'RAIL + SEA',
                                description:
                                    'Rail and maritime transport can be combined when cargo requires a longer international connection.',
                                flow: [
                                    'RAIL',
                                    'PORT',
                                    'SEA',
                                    'PORT',
                                    'ROAD / RAIL',
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="mt-8 space-y-5 lg:mt-12"
                            >
                                <h3 className="section-title">{item.title}</h3>

                                <p className="text-sm/6 text-black/70 lg:text-base/6">
                                    {item.description}
                                </p>

                                <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-5 sm:p-6">
                                    {item.flow.map((step, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="bg-gray-light px-3 py-2 text-sm font-medium">
                                                {step}
                                            </span>

                                            {index < item.flow.length - 1 && (
                                                <span className="text-primary">
                                                    →
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {item.extra && (
                                    <p className="text-sm/6 text-black/70">
                                        {item.extra}
                                    </p>
                                )}
                            </div>
                        ))}

                        {/* BORDER OPERATIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">BORDER OPERATIONS</h3>

                            <p className="text-sm/6 text-black/70">
                                International rail movements may involve:
                            </p>

                            <div className="border-border grid border sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    'Railway documentation',
                                    'Customs procedures',
                                    'Transit formalities',
                                    'Technical inspections',
                                    'Cargo inspection',
                                    'Wagon exchange',
                                    'Bogie exchange',
                                    'Cargo transshipment',
                                    'Terminal handling',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="border-border border-b p-4 text-sm font-medium sm:p-5"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70">
                                The appropriate border solution depends on the
                                railway systems, route, cargo and infrastructure
                                involved.
                            </p>
                        </div>

                        {/* GAUGE TRANSITIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">GAUGE TRANSITIONS</h3>

                            <p className="text-sm/6 text-black/70">
                                Different Eurasian railway systems operate with
                                different technical standards.
                            </p>

                            <p className="text-sm font-medium">
                                Where gauge differences occur, cargo may
                                require:
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'BOGIE EXCHANGE',
                                    'TRANSSHIPMENT',
                                    'CARGO TRANSFER',
                                    'SPECIALIZED WAGON SOLUTIONS',
                                    'INTERMODAL TRANSFER',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70">
                                The selected method depends on cargo type, wagon
                                configuration, border infrastructure and
                                destination.
                            </p>
                        </div>

                        {/* TERMINAL OPERATIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                TERMINAL OPERATIONS
                            </h3>

                            <div className="border-border grid border md:grid-cols-3">
                                {[
                                    {
                                        title: 'ORIGIN',
                                        items: [
                                            'Cargo acceptance',
                                            'Wagon positioning',
                                            'Loading',
                                            'Weight control',
                                            'Documentation',
                                            'Departure preparation',
                                        ],
                                    },
                                    {
                                        title: 'TRANSIT',
                                        items: [
                                            'Wagon exchange',
                                            'Inspection',
                                            'Transshipment',
                                            'Intermodal transfer',
                                            'Temporary handling',
                                        ],
                                    },
                                    {
                                        title: 'DESTINATION',
                                        items: [
                                            'Arrival',
                                            'Unloading',
                                            'Cargo release',
                                            'Road connection',
                                            'Final delivery',
                                        ],
                                    },
                                ].map((group) => (
                                    <div
                                        key={group.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {group.title}
                                        </h4>

                                        <ul className="mt-4 space-y-2 text-sm/6 text-black/70">
                                            {group.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LOADING & UNLOADING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                LOADING & UNLOADING
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm/6 lg:text-base/6">
                                    <thead>
                                        <tr>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium first:pl-0">
                                                WAGON
                                            </th>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium">
                                                HANDLING
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {[
                                            [
                                                'HOPPER',
                                                'Gravity / mechanical discharge',
                                            ],
                                            [
                                                'TANK WAGON',
                                                'Controlled liquid discharge',
                                            ],
                                            [
                                                'ISO TANK',
                                                'Intermodal lifting and liquid transfer',
                                            ],
                                            [
                                                'PLATFORM',
                                                'Crane / lifting equipment',
                                            ],
                                            [
                                                'COVERED WAGON',
                                                'Forklift / crane / conventional loading',
                                            ],
                                        ].map(([wagon, handling]) => (
                                            <tr key={wagon}>
                                                <td className="border-border/70 border-b p-3 font-medium first:pl-0">
                                                    {wagon}
                                                </td>
                                                <td className="border-border/70 border-b p-3 text-black/70">
                                                    {handling}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm/6 text-black/70">
                                The wagon must be compatible not only with the
                                cargo, but also with the available loading and
                                unloading infrastructure.
                            </p>
                        </div>

                        {/* DANGEROUS GOODS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">DANGEROUS GOODS</h3>

                            <div className="bg-gray-light p-5 sm:p-6">
                                <p className="text-sm/6 text-black/70 lg:text-base/6">
                                    Dangerous goods require a dedicated rail
                                    configuration.
                                </p>

                                <p className="mt-4 text-sm/6 text-black/70 lg:text-base/6">
                                    Cargo classification, UN number, dangerous
                                    goods class, containment, wagon
                                    compatibility, loading procedures,
                                    documentation, marking and route
                                    requirements must be considered together.
                                </p>

                                <p className="mt-4 text-sm/6 text-black/70 lg:text-base/6">
                                    The applicable configuration depends on the
                                    specific commodity and regulatory
                                    requirements.
                                </p>
                            </div>
                        </div>

                        {/* RAIL ROUTE PLANNING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                RAIL ROUTE PLANNING
                            </h3>

                            <div className="border-border border">
                                {[
                                    {
                                        number: '01',
                                        title: 'CARGO PROFILE',
                                        items: [
                                            'Commodity',
                                            'Weight',
                                            'Volume',
                                            'Packaging',
                                            'Density',
                                            'Dangerous goods status',
                                        ],
                                    },
                                    {
                                        number: '02',
                                        title: 'WAGON CONFIGURATION',
                                        items: [
                                            'Wagon type',
                                            'Capacity',
                                            'Cargo compatibility',
                                            'Loading system',
                                            'Unloading system',
                                        ],
                                    },
                                    {
                                        number: '03',
                                        title: 'ROUTE STRUCTURE',
                                        items: [
                                            'Origin',
                                            'Destination',
                                            'Rail network',
                                            'Border',
                                            'Terminal',
                                            'Port connection',
                                        ],
                                    },
                                    {
                                        number: '04',
                                        title: 'OPERATIONAL CHECK',
                                        items: [
                                            'Wagon availability',
                                            'Infrastructure',
                                            'Border interface',
                                            'Terminal capability',
                                            'Transit requirements',
                                        ],
                                    },
                                    {
                                        number: '05',
                                        title: 'MOVEMENT',
                                        items: [
                                            'Positioning',
                                            'Loading',
                                            'Departure',
                                            'Border processing',
                                            'Transit',
                                            'Arrival',
                                            'Final delivery',
                                        ],
                                    },
                                ].map((step) => (
                                    <div
                                        key={step.number}
                                        className="border-border flex flex-col gap-4 border-b p-5 last:border-b-0 sm:p-6 md:flex-row md:gap-8"
                                    >
                                        <div className="text-primary font-red-hat shrink-0 text-2xl font-bold">
                                            {step.number}
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold">
                                                {step.title}
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm/6 text-black/70">
                                                {step.items.map((item) => (
                                                    <span key={item}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NETWORK CONFIGURATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                NETWORK CONFIGURATION
                            </h3>

                            <div className="border-border flex flex-col items-center border p-5 text-center sm:p-8">
                                {[
                                    'ORIGIN',
                                    'WAGON',
                                    'TERMINAL',
                                    'RAIL NETWORK',
                                    'BORDER / PORT',
                                    'INTERNATIONAL CORRIDOR',
                                    'DESTINATION TERMINAL',
                                    'FINAL DELIVERY',
                                ].map((item, index, items) => (
                                    <div
                                        key={item}
                                        className="flex flex-col items-center"
                                    >
                                        <span className="bg-gray-light px-4 py-2 text-sm font-medium sm:text-base">
                                            {item}
                                        </span>

                                        {index < items.length - 1 && (
                                            <span className="text-primary my-2 text-xl">
                                                ↓
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RAIL ROUTE OPTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                RAIL ROUTE OPTIONS
                            </h3>

                            <div className="border-border grid border md:grid-cols-2">
                                {[
                                    {
                                        title: 'PRIMARY RAIL ROUTE',
                                        description:
                                            'The principal rail connection selected according to cargo, destination and current network conditions.',
                                    },
                                    {
                                        title: 'ALTERNATIVE RAIL ROUTE',
                                        description:
                                            'A secondary railway connection available when the primary route becomes less suitable.',
                                    },
                                    {
                                        title: 'RAIL–SEA OPTION',
                                        description:
                                            'A rail connection integrated with a maritime gateway for longer international movements.',
                                    },
                                    {
                                        title: 'RAIL–ROAD OPTION',
                                        description:
                                            'A rail backbone combined with road transport for final or regional distribution.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {item.title}
                                        </h4>

                                        <p className="mt-3 text-sm/6 text-black/70">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NETWORK RESILIENCE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                NETWORK RESILIENCE
                            </h3>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Rail route selection is influenced by more than
                                distance.
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'CAPACITY',
                                    'BORDER CONDITIONS',
                                    'WAGON AVAILABILITY',
                                    'GAUGE',
                                    'TERMINAL ACCESS',
                                    'PORT INTERFACE',
                                    'CARGO COMPATIBILITY',
                                    'SEASONAL CONDITIONS',
                                    'REGULATORY REQUIREMENTS',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The most practical route is the one where these
                                elements operate together as a functioning
                                transport chain.
                            </p>
                        </div>

                        {/* SPECIALIZED RAIL SOLUTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">
                                SPECIALIZED RAIL SOLUTIONS
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    ['HOPPER WAGON', 'Dry bulk commodities'],
                                    ['TANK WAGON', 'Compatible liquid cargo'],
                                    ['ISO TANK', 'Intermodal liquid bulk'],
                                    [
                                        'PLATFORM WAGON',
                                        'Containers, machinery and heavy cargo',
                                    ],
                                    [
                                        'COVERED WAGON',
                                        'Protected general cargo',
                                    ],
                                    [
                                        'SPECIALIZED WAGON',
                                        'Dedicated and technically demanding cargo',
                                    ],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>

                                        <p className="mt-2 text-sm/6 text-black/70">
                                            {description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RAIL TO MARKET */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="section-title">RAIL TO MARKET</h3>

                            <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
                                {[
                                    'RUSSIA',
                                    'RAIL NETWORK',
                                    'BORDER / PORT',
                                    'REGIONAL CORRIDOR',
                                    'DESTINATION MARKET',
                                ].map((item, index, items) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="bg-gray-light px-3 py-2 text-sm font-medium sm:text-base">
                                            {item}
                                        </span>

                                        {index < items.length - 1 && (
                                            <span className="text-primary">
                                                →
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                From Russian industrial and agricultural origins
                                to Caspian, Caucasus, Central Asian, Middle
                                Eastern, South Asian, Turkish and European
                                markets.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gray-light mt-8 space-y-5 p-6 lg:mt-12 lg:p-8">
                            <h3 className="section-title">
                                DISCUSS YOUR RAIL MOVEMENT
                            </h3>

                            <p className="max-w-3xl text-sm/6 text-black/70 lg:text-base/6">
                                Tell us your origin, destination, cargo type and
                                required delivery timeframe.
                            </p>

                            <p className="max-w-3xl text-sm/6 text-black/70 lg:text-base/6">
                                We will assess the appropriate wagon
                                configuration, rail route, border interface,
                                terminal requirements and available multimodal
                                connections.
                            </p>

                            <Button type="button" asChild>
                                <Link href="/contact" className="w-fit">
                                    <span>REQUEST RAIL ASSESSMENT</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="ml-auto grid shrink-0 gap-8 md:grid-cols-2 lg:w-96 lg:grid-cols-1">
                        {/* RAIL LOGISTICS AT A GLANCE */}
                        <div className="bg-gray-light space-y-6 p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    RAIL LOGISTICS
                                </h2>

                                <span className="mt-2 block font-bold">
                                    RUSSIAN & EURASIAN NETWORKS
                                </span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    ['ORIGIN', 'RUSSIA / EURASIA'],
                                    ['MODE', 'RAIL'],
                                    [
                                        'CARGO',
                                        'GENERAL / BULK / LIQUID / SPECIALIZED',
                                    ],
                                    ['NETWORK', 'DOMESTIC & INTERNATIONAL'],
                                    ['BORDER', 'GAUGE / CUSTOMS / TRANSFER'],
                                    ['INTERMODAL', 'ROAD / PORT / SEA'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex justify-between gap-3 font-medium"
                                    >
                                        <span className="shrink-0">
                                            {label}
                                        </span>

                                        <span className="text-primary text-right break-words">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROUTE CONFIGURATION */}
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                ROUTE CONFIGURATION
                            </h2>

                            <div className="divide-gray/10 space-y-4 divide-y">
                                {[
                                    'Cargo determines the wagon configuration.',
                                    'The destination determines the rail network.',
                                    'Border infrastructure determines the transfer solution.',
                                    'Terminal capability determines loading and unloading options.',
                                    'Multimodal connections determine the final transport configuration.',
                                ].map((text) => (
                                    <div
                                        key={text}
                                        className="pb-4 font-medium last:pb-0"
                                    >
                                        <span className="inline-flex bg-white/50 px-2.5 py-1 text-sm/5">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DISCUSS YOUR RAIL MOVEMENT */}
                        <div className="border-border space-y-6 border p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    DISCUSS YOUR RAIL MOVEMENT
                                </h2>
                            </div>

                            <p className="text-sm/6 text-black/70">
                                Tell us your origin, destination, cargo type and
                                required delivery timeframe.
                            </p>

                            <Button type="button" asChild>
                                <Link href="/contact" className="w-full">
                                    <span>REQUEST RAIL ASSESSMENT</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <TrustedLeading />
            </div>

            {/* STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Rail Logistics',
                        url: `${process.env.NEXT_PUBLIC_APP_URL}/rail-logistics`,
                        description:
                            'Specialized rail transport across Russian and Eurasian networks, including bulk, liquid, intermodal and specialized rail logistics.',
                        inLanguage: 'en',
                        image: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png`,
                        breadcrumb: {
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: process.env.NEXT_PUBLIC_APP_URL,
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Rail Logistics',
                                    item: `${process.env.NEXT_PUBLIC_APP_URL}/rail-logistics`,
                                },
                            ],
                        },
                    }),
                }}
            />
        </>
    )
}
