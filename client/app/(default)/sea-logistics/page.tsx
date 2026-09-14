import HeroSection from '@/components/common/hero-section'
import TrustedLeading from '@/components/common/trusted-leading'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sea Logistics',
    description:
        'Maritime freight across Russian ports and Eurasian trade routes, connecting cargo origins, terminals, vessels and destination markets.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/sea-logistics',
        title: 'Sea Logistics',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Sea Logistics',
        description:
            'Maritime freight across Russian ports and Eurasian trade routes.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sea-logistics`,
    },
}

const sectionTitleClass =
    'text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7'

const portRegions = [
    {
        title: 'BALTIC',
        ports: [
            'Saint Petersburg',
            'Ust-Luga',
            'Primorsk',
            'Vysotsk',
            'Vyborg',
            'Kaliningrad',
        ],
    },
    {
        title: 'BLACK SEA / AZOV',
        ports: [
            'Novorossiysk',
            'Taman',
            'Tuapse',
            'Rostov-on-Don',
            'Taganrog',
            'Azov',
            'Kavkaz',
            'Temryuk',
            'Eysk',
        ],
    },
    {
        title: 'CASPIAN',
        ports: ['Astrakhan', 'Makhachkala', 'Olya'],
    },
    {
        title: 'ARCTIC',
        ports: [
            'Murmansk',
            'Arkhangelsk',
            'Sabetta',
            'Dudinka',
            'Varandey',
            'Naryan-Mar',
            'Kandalaksha',
        ],
    },
    {
        title: 'FAR EAST',
        ports: [
            'Vladivostok',
            'Vostochny',
            'Nakhodka',
            'Vanino',
            'Zarubino',
            'Posyet',
            'De-Kastri',
            'Magadan',
            'Korsakov',
            'Petropavlovsk-Kamchatsky',
        ],
    },
]

const vesselTypes = [
    {
        title: 'DRY BULK CARRIERS',
        description: 'Designed for large-volume dry bulk commodities.',
        label: 'SUITABLE FOR',
        items: [
            'Grain',
            'Corn',
            'Soy products',
            'Oilseed meal',
            'Fertilizers',
            'Minerals',
            'Industrial raw materials',
            'Other dry bulk commodities',
        ],
    },
    {
        title: 'GENERAL CARGO / MULTIPURPOSE VESSELS',
        description: 'For cargo requiring flexible loading configurations.',
        label: 'SUITABLE FOR',
        items: [
            'Machinery',
            'Steel',
            'Construction materials',
            'Industrial equipment',
            'Packaged cargo',
            'Project cargo',
            'Heavy units',
        ],
    },
    {
        title: 'CONTAINER VESSELS',
        description: 'For standardized containerized cargo.',
        label: 'SUITABLE FOR',
        items: [
            'General cargo',
            'Industrial goods',
            'Consumer goods',
            'Machinery',
            'Packaged products',
            'Intermodal cargo',
        ],
    },
    {
        title: 'TANKERS',
        description:
            'For liquid bulk cargo requiring dedicated tanker capacity.',
        label: 'SUITABLE FOR',
        items: [
            'Petroleum products',
            'Chemical liquids',
            'Vegetable oils',
            'Industrial liquids',
            'Other compatible bulk liquids',
        ],
    },
    {
        title: 'CHEMICAL TANKERS',
        description:
            'Specialized vessels designed for compatible chemical cargoes.',
        label: 'CARGO REQUIREMENTS MAY INCLUDE',
        items: [
            'Cargo compatibility',
            'Tank material',
            'Tank coating',
            'Temperature control',
            'Segregation',
            'Cleaning requirements',
            'Loading / discharge procedures',
            'Applicable regulations',
        ],
    },
    {
        title: 'RO-RO / VEHICLE CARRIERS',
        description: 'For rolling cargo and vehicles.',
        label: 'SUITABLE FOR',
        items: [
            'Cars',
            'Trucks',
            'Trailers',
            'Rolling equipment',
            'Specialized vehicles',
            'Other self-propelled or trailer-based cargo',
        ],
    },
    {
        title: 'HEAVY-LIFT / PROJECT CARGO VESSELS',
        description:
            'For cargo requiring specialized lifting and securing arrangements.',
        label: 'SUITABLE FOR',
        items: [
            'Industrial machinery',
            'Heavy equipment',
            'Oversized components',
            'Energy equipment',
            'Construction units',
            'Project cargo',
        ],
    },
]

const cargoGroups = [
    {
        title: 'LIQUID BULK',
        groups: [
            {
                title: 'EDIBLE OILS',
                items: [
                    'Vegetable oils',
                    'Sunflower oil',
                    'Other food-grade liquid products',
                ],
            },
            {
                title: 'CHEMICAL LIQUIDS',
                items: [
                    'Compatible industrial chemicals',
                    'Chemical raw materials',
                    'Regulated liquid cargo',
                ],
            },
            {
                title: 'PETROLEUM PRODUCTS',
                items: [
                    'Fuel products',
                    'Oil products',
                    'Other compatible petroleum cargo',
                ],
            },
        ],
        description:
            'The cargo specification determines the appropriate tanker configuration, loading system, segregation requirements and discharge infrastructure.',
    },
    {
        title: 'DRY BULK',
        groups: [
            {
                title: 'GRAIN',
                items: [
                    'Corn',
                    'Wheat',
                    'Barley',
                    'Other agricultural commodities',
                ],
            },
            {
                title: 'FEED MATERIALS',
                items: ['Soy products', 'Oilseed meal', 'Feed ingredients'],
            },
            {
                title: 'FERTILIZERS',
                items: [
                    'Bulk fertilizers',
                    'Mineral fertilizers',
                    'Industrial agricultural inputs',
                ],
            },
            {
                title: 'MINERAL / INDUSTRIAL BULK',
                items: [
                    'Minerals',
                    'Raw materials',
                    'Aggregates',
                    'Industrial bulk commodities',
                ],
            },
        ],
    },
]

const dangerousGoods = [
    'UN NUMBER',
    'IMO CLASS',
    'PACKING GROUP',
    'CARGO COMPATIBILITY',
    'SEGREGATION',
    'PACKAGING / CONTAINMENT',
    'MARKING',
    'DOCUMENTATION',
    'VESSEL ACCEPTANCE',
    'PORT REQUIREMENTS',
]

const routePlanning = [
    {
        number: '01',
        title: 'CARGO PROFILE',
        items: [
            'Commodity',
            'Weight',
            'Volume',
            'Packaging',
            'Density',
            'Liquid / dry / general',
            'Dangerous goods status',
        ],
    },
    {
        number: '02',
        title: 'VESSEL CONFIGURATION',
        items: [
            'Vessel type',
            'Cargo capacity',
            'Cargo compatibility',
            'Loading system',
            'Discharge system',
            'Draft requirements',
        ],
    },
    {
        number: '03',
        title: 'PORT SELECTION',
        items: [
            'Origin port',
            'Destination port',
            'Terminal capability',
            'Rail access',
            'Road access',
            'Storage',
        ],
    },
    {
        number: '04',
        title: 'MARITIME ROUTE',
        items: [
            'Sea basin',
            'Port sequence',
            'Transshipment',
            'Destination gateway',
            'Inland connection',
        ],
    },
    {
        number: '05',
        title: 'OPERATIONAL CHECK',
        items: [
            'Vessel availability',
            'Berth availability',
            'Cargo readiness',
            'Documentation',
            'Port restrictions',
            'Transit requirements',
        ],
    },
]

const resilienceItems = [
    'PORT CAPACITY',
    'VESSEL AVAILABILITY',
    'BERTH ACCESS',
    'DRAFT',
    'CARGO COMPATIBILITY',
    'TERMINAL CAPABILITY',
    'WEATHER',
    'SEASONAL NAVIGATION',
    'BORDER CONDITIONS',
    'DESTINATION CONNECTIVITY',
]

const specializedSolutions = [
    ['DRY BULK', 'Grain, agricultural commodities, fertilizers and minerals'],
    ['LIQUID BULK', 'Edible oils, chemical liquids and petroleum products'],
    ['CONTAINERIZED CARGO', 'General and industrial cargo'],
    ['PROJECT CARGO', 'Heavy, oversized and specialized equipment'],
    [
        'DANGEROUS GOODS',
        'Regulated cargo requiring dedicated maritime procedures',
    ],
    ['ISO TANK', 'Intermodal liquid bulk'],
    ['RO-RO', 'Vehicles and rolling cargo'],
    ['MULTIPURPOSE', 'General, project and mixed cargo configurations'],
]

const documentation = [
    'BILL OF LADING',
    'COMMERCIAL INVOICE',
    'PACKING LIST',
    'CERTIFICATE OF ORIGIN',
    'CARGO CERTIFICATES',
    'DANGEROUS GOODS DECLARATION',
    'IMO DOCUMENTATION',
    'CUSTOMS DOCUMENTATION',
    'PORT DOCUMENTATION',
    'VESSEL / CARGO INSTRUCTIONS',
]

export default function SeaLogistics() {
    return (
        <>
            <div className="mb-16 grow lg:mb-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Sea Logistics' },
                    ]}
                    title={<>SEA LOGISTICS</>}
                    descriptions={[
                        'MARITIME FREIGHT ACROSS RUSSIAN PORTS AND EURASIAN TRADE ROUTES',
                        'Sea transport is not a single port-to-port movement.',
                        'It is a connected maritime system linking cargo origins, inland transport networks, port terminals, vessels, transshipment points and destination markets.',
                        'Our maritime logistics structure is built around the full transport chain — from cargo collection in Russia, rail and road access to the port, terminal handling and vessel loading, through to the receiving port and final inland connection.',
                        'The solution is configured according to cargo type, vessel capability, port infrastructure, route geography and destination requirements.',
                    ]}
                />

                <div className="container my-10 flex-col items-start gap-12 space-y-12 lg:flex lg:flex-row lg:gap-16 lg:space-y-0">
                    <div className="grow">
                        {/* MARITIME NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MARITIME NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIAN ORIGIN',
                                    'RAIL / ROAD',
                                    'PORT TERMINAL',
                                    'VESSEL',
                                    'MARITIME ROUTE',
                                    'DESTINATION PORT',
                                    'RAIL / ROAD',
                                    'FINAL MARKET',
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
                        </div>

                        {/* RUSSIAN PORT NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                RUSSIAN PORT NETWORK
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {portRegions.map((region) => (
                                    <div
                                        key={region.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {region.title}
                                        </h4>

                                        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm/6 text-black/70">
                                            {region.ports.map((port) => (
                                                <span key={port}>{port}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PORT SELECTION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                PORT SELECTION
                            </h3>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The most suitable port is determined by more
                                than geographical distance.
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'CARGO TYPE',
                                    'VESSEL TYPE',
                                    'DRAFT REQUIREMENTS',
                                    'TERMINAL CAPABILITY',
                                    'LOADING EQUIPMENT',
                                    'STORAGE CAPACITY',
                                    'RAIL ACCESS',
                                    'ROAD ACCESS',
                                    'CUSTOMS / BORDER INTERFACE',
                                    'DESTINATION CONNECTION',
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
                                The port is selected as part of the entire
                                logistics chain — not as an isolated loading
                                point.
                            </p>
                        </div>

                        {/* VESSEL TYPES */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>VESSEL TYPES</h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {vesselTypes.map((vessel) => (
                                    <div
                                        key={vessel.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {vessel.title}
                                        </h4>

                                        <p className="mt-3 text-sm/6 text-black/70">
                                            {vessel.description}
                                        </p>

                                        <span className="mt-4 block text-sm font-bold">
                                            {vessel.label}
                                        </span>

                                        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm/6 text-black/70">
                                            {vessel.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LIQUID / DRY BULK */}
                        {cargoGroups.map((group) => (
                            <div
                                key={group.title}
                                className="mt-8 space-y-5 lg:mt-12"
                            >
                                <h3 className={sectionTitleClass}>
                                    {group.title}
                                </h3>

                                <div className="border-border grid border sm:grid-cols-2">
                                    {group.groups.map((subgroup) => (
                                        <div
                                            key={subgroup.title}
                                            className="border-border border-b p-5 sm:p-6"
                                        >
                                            <h4 className="text-primary font-red-hat text-lg font-bold">
                                                {subgroup.title}
                                            </h4>

                                            <ul className="mt-3 space-y-1 text-sm/6 text-black/70">
                                                {subgroup.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {group.description && (
                                    <p className="text-sm/6 text-black/70 lg:text-base/6">
                                        {group.description}
                                    </p>
                                )}
                            </div>
                        ))}

                        {/* GENERAL & PROJECT CARGO */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                GENERAL & PROJECT CARGO
                            </h3>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[
                                    'Machinery',
                                    'Industrial equipment',
                                    'Steel products',
                                    'Construction materials',
                                    'Vehicles',
                                    'Timber',
                                    'Packaged cargo',
                                    'Oversized units',
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
                                Cargo handling is configured according to
                                weight, dimensions, lifting points, securing
                                requirements and terminal equipment.
                            </p>
                        </div>

                        {/* DANGEROUS GOODS BY SEA */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                DANGEROUS GOODS BY SEA
                            </h3>

                            <div className="space-y-4 text-sm/6 text-black/70 lg:text-base/6">
                                <p>
                                    Dangerous goods require a dedicated maritime
                                    configuration.
                                </p>

                                <p>
                                    Cargo classification, UN number, IMO class,
                                    packing group, containment, segregation,
                                    vessel compatibility, documentation and
                                    terminal procedures must be considered
                                    together.
                                </p>
                            </div>

                            <h4 className="text-lg font-bold">
                                KEY REQUIREMENTS
                            </h4>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {dangerousGoods.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The final maritime configuration depends on the
                                specific commodity and applicable regulations.
                            </p>
                        </div>

                        {/* ISO TANK + SEA */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                ISO TANK + SEA
                            </h3>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                ISO tanks create an intermodal connection
                                between inland and maritime transport.
                            </p>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RAIL',
                                    'TERMINAL',
                                    'ISO TANK',
                                    'VESSEL',
                                    'DESTINATION PORT',
                                    'ROAD / RAIL',
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

                            <p className="text-sm/6 text-black/70">
                                The tank itself remains the cargo unit while the
                                transport mode changes around it.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                This allows liquid bulk cargo to move through a
                                combined rail–road–sea structure without
                                conventional bulk cargo transfer.
                            </p>
                        </div>

                        {/* RAIL + PORT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>RAIL + PORT</h3>

                            <p className="text-sm/6 text-black/70">
                                Russian rail infrastructure can function as the
                                inland feeder to maritime gateways.
                            </p>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIAN ORIGIN',
                                    'RAIL',
                                    'PORT RAIL TERMINAL',
                                    'VESSEL',
                                    'INTERNATIONAL MARKET',
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

                            <p className="text-sm/6 text-black/70">
                                The rail–port interface is planned according to
                                wagon availability, terminal capacity, cargo
                                handling requirements and vessel schedule.
                            </p>
                        </div>

                        {/* ROAD + PORT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>ROAD + PORT</h3>

                            <p className="text-sm/6 text-black/70">
                                For regional origins and final-mile delivery:
                            </p>

                            <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
                                {['ORIGIN', 'TRUCK', 'PORT', 'VESSEL'].map(
                                    (item, index, items) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="bg-gray-light px-3 py-2 text-sm font-medium">
                                                {item}
                                            </span>

                                            {index < items.length - 1 && (
                                                <span className="text-primary">
                                                    →
                                                </span>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>

                            <p className="text-sm/6 text-black/70">
                                At destination:
                            </p>

                            <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
                                {[
                                    'VESSEL',
                                    'PORT',
                                    'TRUCK',
                                    'FINAL MARKET',
                                ].map((item, index, items) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="bg-gray-light px-3 py-2 text-sm font-medium">
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
                        </div>

                        {/* MULTIMODAL SEA LOGISTICS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MULTIMODAL SEA LOGISTICS
                            </h3>

                            <p className="text-sm/6 text-black/70">
                                A maritime shipment can combine:
                            </p>

                            <div className="grid grid-cols-3 gap-3">
                                {['RAIL', 'ROAD', 'SEA'].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-center text-sm font-bold"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70">
                                The operational objective is to maintain
                                continuity between every mode.
                            </p>

                            <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
                                {[
                                    'ORIGIN',
                                    'INLAND TRANSPORT',
                                    'PORT',
                                    'VESSEL',
                                    'DESTINATION PORT',
                                    'INLAND DELIVERY',
                                ].map((item, index, items) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="bg-gray-light px-3 py-2 text-sm font-medium">
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
                        </div>

                        {/* CASPIAN SEA NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                CASPIAN SEA NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIA',
                                    'ASTRAKHAN / MAKHACHKALA / OLYA',
                                    'CASPIAN SEA',
                                    'AZERBAIJAN / IRAN / KAZAKHSTAN / TURKMENISTAN',
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

                            <p className="text-sm/6 text-black/70">
                                The Caspian network creates a maritime interface
                                between Russian cargo and the transport systems
                                of the South Caucasus, Iran and Central Asia.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                It can be integrated with rail and road
                                connections on both sides of the Caspian.
                            </p>
                        </div>

                        {/* CASPIAN — SOUTHERN CONNECTION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                CASPIAN — SOUTHERN CONNECTION
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIA',
                                    'CASPIAN PORT',
                                    'IRAN',
                                    'GULF / IRAQ / AFGHANISTAN / PAKISTAN / TÜRKİYE',
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

                            <p className="text-sm/6 text-black/70">
                                The Caspian maritime leg can form the northern
                                section of a larger multimodal movement toward
                                southern regional markets.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                The final route depends on port compatibility,
                                cargo type, border conditions and downstream
                                connectivity.
                            </p>
                        </div>

                        {/* BLACK SEA / AZOV */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                BLACK SEA / AZOV NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIAN ORIGIN',
                                    'BLACK SEA / AZOV PORTS',
                                    'MEDITERRANEAN',
                                    'MIDDLE EAST / NORTH AFRICA / INTERNATIONAL MARKETS',
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

                            <p className="text-sm/6 text-black/70">
                                Ports such as Novorossiysk, Taman and other
                                Black Sea / Azov gateways provide maritime
                                access to wider international shipping networks.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                The appropriate gateway depends on cargo, vessel
                                requirements, terminal capability and
                                destination.
                            </p>
                        </div>

                        {/* BALTIC NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                BALTIC NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIAN ORIGIN',
                                    'BALTIC PORT',
                                    'BALTIC SEA',
                                    'NORTH SEA / INTERNATIONAL MARITIME NETWORK',
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

                            <p className="text-sm/6 text-black/70">
                                Baltic gateways provide access to northern
                                European maritime routes and international
                                shipping connections.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                The rail–port interface is particularly
                                important for bulk, containerized and industrial
                                cargo.
                            </p>
                        </div>

                        {/* FAR EAST NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                FAR EAST NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIA',
                                    'VLADIVOSTOK / VOSTOCHNY / NAKHODKA / VANINO',
                                    'PACIFIC',
                                    'CHINA / KOREA / JAPAN / SOUTHEAST ASIA / GLOBAL MARKETS',
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

                            <p className="text-sm/6 text-black/70">
                                The Russian Far Eastern ports connect inland
                                Russian cargo with Pacific maritime networks.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                Rail access through the Russian eastern railway
                                system can form the inland backbone of these
                                movements.
                            </p>
                        </div>

                        {/* ARCTIC NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                ARCTIC NETWORK
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIAN ORIGIN',
                                    'NORTHERN RAIL / ROAD',
                                    'ARCTIC PORT',
                                    'NORTHERN MARITIME ROUTES',
                                    'DESTINATION MARKET',
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

                            <p className="text-sm/6 text-black/70">
                                Arctic gateways serve specialized industrial,
                                energy and bulk logistics flows.
                            </p>

                            <p className="text-sm/6 text-black/70">
                                Port accessibility, seasonal navigation, vessel
                                suitability and cargo infrastructure must be
                                considered when designing an Arctic movement.
                            </p>
                        </div>

                        {/* PORT — VESSEL MATCHING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                PORT — VESSEL MATCHING
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    ['DRY BULK', 'BULK CARRIER'],
                                    ['LIQUID BULK', 'TANKER'],
                                    ['CHEMICAL LIQUID', 'CHEMICAL TANKER'],
                                    ['CONTAINERS', 'CONTAINER VESSEL'],
                                    ['VEHICLES', 'RO-RO'],
                                    [
                                        'HEAVY / PROJECT CARGO',
                                        'HEAVY-LIFT / MULTIPURPOSE VESSEL',
                                    ],
                                    [
                                        'ISO TANK',
                                        'CONTAINER / MULTIMODAL VESSEL',
                                    ],
                                ].map(([cargo, vessel]) => (
                                    <div
                                        key={cargo}
                                        className="border-border flex items-center justify-between gap-4 border-b p-5 sm:p-6"
                                    >
                                        <span className="font-medium">
                                            {cargo}
                                        </span>

                                        <span className="text-primary text-xl">
                                            ↔
                                        </span>

                                        <span className="text-right font-medium">
                                            {vessel}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CARGO — TERMINAL MATCHING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                CARGO — TERMINAL MATCHING
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'CARGO',
                                    'STORAGE',
                                    'HANDLING EQUIPMENT',
                                    'VESSEL',
                                    'MARITIME ROUTE',
                                    'DESTINATION PORT',
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
                                                ↔
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Every maritime movement depends on compatibility
                                between cargo, terminal and vessel.
                            </p>
                        </div>

                        {/* PORT OPERATIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                PORT OPERATIONS
                            </h3>

                            <div className="border-border grid border md:grid-cols-4">
                                {[
                                    {
                                        title: 'VESSEL ARRIVAL',
                                        items: [
                                            'Berth allocation',
                                            'Port formalities',
                                            'Cargo documentation',
                                            'Terminal preparation',
                                        ],
                                    },
                                    {
                                        title: 'LOADING',
                                        items: [
                                            'Cargo reception',
                                            'Weighing',
                                            'Storage',
                                            'Loading operation',
                                            'Securing',
                                            'Final documentation',
                                        ],
                                    },
                                    {
                                        title: 'TRANSIT',
                                        items: [
                                            'Voyage',
                                            'Cargo monitoring',
                                            'Route coordination',
                                            'Destination preparation',
                                        ],
                                    },
                                    {
                                        title: 'DISCHARGE',
                                        items: [
                                            'Berth',
                                            'Discharge operation',
                                            'Cargo release',
                                            'Terminal handling',
                                            'Inland dispatch',
                                        ],
                                    },
                                ].map((stage) => (
                                    <div
                                        key={stage.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {stage.title}
                                        </h4>

                                        <ul className="mt-4 space-y-2 text-sm/6 text-black/70">
                                            {stage.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PORT INTERFACE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                PORT INTERFACE
                            </h3>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                A maritime route begins before the vessel
                                arrives.
                            </p>

                            <div className="border-border grid border md:grid-cols-3">
                                {[
                                    {
                                        title: 'PRE-ARRIVAL',
                                        items: [
                                            'Cargo readiness',
                                            'Documentation',
                                            'Vessel nomination',
                                            'Terminal coordination',
                                            'Loading window',
                                        ],
                                    },
                                    {
                                        title: 'PORT',
                                        items: [
                                            'Berth',
                                            'Loading / discharge',
                                            'Storage',
                                            'Customs / border procedures',
                                        ],
                                    },
                                    {
                                        title: 'POST-PORT',
                                        items: [
                                            'Rail',
                                            'Road',
                                            'Warehouse',
                                            'Final destination',
                                        ],
                                    },
                                ].map((stage) => (
                                    <div
                                        key={stage.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {stage.title}
                                        </h4>

                                        <ul className="mt-4 space-y-2 text-sm/6 text-black/70">
                                            {stage.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MARITIME DOCUMENTATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MARITIME DOCUMENTATION
                            </h3>

                            <p className="text-sm/6 text-black/70">
                                Depending on the cargo and route, maritime
                                operations may involve:
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {documentation.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Documentation is configured according to cargo,
                                vessel, port and destination requirements.
                            </p>
                        </div>

                        {/* SEA ROUTE PLANNING */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SEA ROUTE PLANNING
                            </h3>

                            <div className="border-border border">
                                {routePlanning.map((step) => (
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

                        {/* MARITIME NETWORK CONFIGURATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MARITIME NETWORK CONFIGURATION
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'ORIGIN',
                                    'INLAND TRANSPORT',
                                    'ORIGIN PORT',
                                    'TERMINAL',
                                    'VESSEL',
                                    'MARITIME ROUTE',
                                    'DESTINATION PORT',
                                    'INLAND TRANSPORT',
                                    'FINAL MARKET',
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

                        {/* PORT ALTERNATIVES */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                PORT ALTERNATIVES
                            </h3>

                            <div className="border-border grid border md:grid-cols-3">
                                {[
                                    {
                                        title: 'PRIMARY PORT',
                                        description:
                                            'The principal maritime gateway selected according to cargo, vessel requirements, terminal capability and destination.',
                                    },
                                    {
                                        title: 'ALTERNATIVE PORT',
                                        description:
                                            'A secondary gateway providing another maritime connection when the primary option becomes less suitable.',
                                    },
                                    {
                                        title: 'MULTIPORT STRUCTURE',
                                        description:
                                            'More than one Russian port can be considered when cargo geography, port capacity or destination requirements justify diversification.',
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

                        {/* MARITIME ROUTE RESILIENCE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MARITIME ROUTE RESILIENCE
                            </h3>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                A maritime route is influenced by more than
                                sailing distance.
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {resilienceItems.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The most efficient route is the one where the
                                port, vessel, maritime leg and inland connection
                                operate as one system.
                            </p>
                        </div>

                        {/* RUSSIAN MARITIME GATEWAYS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                RUSSIAN MARITIME GATEWAYS
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    {
                                        title: 'BALTIC',
                                        items: [
                                            'Saint Petersburg',
                                            'Ust-Luga',
                                            'Primorsk',
                                            'Vysotsk',
                                            'Kaliningrad',
                                        ],
                                    },
                                    {
                                        title: 'BLACK SEA / AZOV',
                                        items: [
                                            'Novorossiysk',
                                            'Taman',
                                            'Kavkaz',
                                            'Rostov-on-Don',
                                            'Taganrog',
                                            'Azov',
                                            'Temryuk',
                                            'Tuapse',
                                        ],
                                    },
                                    {
                                        title: 'CASPIAN',
                                        items: [
                                            'Astrakhan',
                                            'Makhachkala',
                                            'Olya',
                                        ],
                                    },
                                    {
                                        title: 'ARCTIC',
                                        items: [
                                            'Murmansk',
                                            'Arkhangelsk',
                                            'Sabetta',
                                            'Dudinka',
                                            'Varandey',
                                        ],
                                    },
                                    {
                                        title: 'FAR EAST',
                                        items: [
                                            'Vladivostok',
                                            'Vostochny',
                                            'Nakhodka',
                                            'Vanino',
                                            'Zarubino',
                                            'Posyet',
                                            'Korsakov',
                                            'Petropavlovsk-Kamchatsky',
                                        ],
                                    },
                                ].map((region) => (
                                    <div
                                        key={region.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {region.title}
                                        </h4>

                                        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm/6 text-black/70">
                                            {region.items.map((item) => (
                                                <span key={item}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SEA TO MARKET */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>SEA TO MARKET</h3>

                            <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
                                {[
                                    'RUSSIA',
                                    'PORT',
                                    'VESSEL',
                                    'MARITIME CORRIDOR',
                                    'DESTINATION PORT',
                                    'REGIONAL NETWORK',
                                    'FINAL MARKET',
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
                                From Russian origins to Caspian, Gulf, Middle
                                Eastern, Asian, African and wider international
                                markets.
                            </p>
                        </div>

                        {/* MARITIME LOGISTICS INTELLIGENCE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MARITIME LOGISTICS INTELLIGENCE
                            </h3>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'The right port.',
                                    'The right vessel.',
                                    'The right cargo configuration.',
                                    'The right terminal.',
                                    'The right maritime connection.',
                                    'The right inland interface.',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="border-border border p-5 text-sm font-medium sm:text-base"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Sea logistics becomes efficient when these
                                elements are engineered as one continuous
                                transport chain.
                            </p>
                        </div>

                        {/* SPECIALIZED SEA SOLUTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SPECIALIZED SEA SOLUTIONS
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2">
                                {specializedSolutions.map(
                                    ([title, description]) => (
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
                                    ),
                                )}
                            </div>
                        </div>

                        {/* REQUEST SEA ROUTE ASSESSMENT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                REQUEST A SEA ROUTE ASSESSMENT
                            </h3>

                            <p className="text-sm/6 text-black/70">Tell us:</p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'ORIGIN',
                                    'DESTINATION',
                                    'CARGO TYPE',
                                    'WEIGHT / VOLUME',
                                    'PACKAGING',
                                    'VESSEL / EQUIPMENT REQUIREMENTS',
                                    'DANGEROUS GOODS STATUS',
                                    'REQUIRED DELIVERY WINDOW',
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
                                We will assess the appropriate Russian port,
                                vessel configuration, maritime route, terminal
                                interface and inland transport connection.
                            </p>
                        </div>

                        {/* CTA */}
                        {/* <div className="mt-8 mb-10 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                DISCUSS YOUR SEA MOVEMENT
                            </h3>

                            <Button type="button" asChild>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-fit"
                                >
                                    <span>REQUEST SEA ASSESSMENT</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>

                    {/* SIDEBAR */}
                    <div className="ml-auto grid shrink-0 gap-8 md:grid-cols-2 lg:w-96 lg:grid-cols-1">
                        {/* MARITIME NETWORK */}
                        <div className="bg-gray-light space-y-6 p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    MARITIME NETWORK
                                </h2>

                                <span className="mt-2 block font-bold">
                                    RUSSIAN PORTS → GLOBAL MARKETS
                                </span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    ['BALTIC', 'NORTHERN ROUTES'],
                                    ['BLACK SEA', 'MEDITERRANEAN'],
                                    ['CASPIAN', 'REGIONAL NETWORKS'],
                                    ['ARCTIC', 'NORTHERN MARITIME ROUTES'],
                                    ['FAR EAST', 'PACIFIC NETWORKS'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex justify-between gap-2.5 font-medium"
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

                        {/* PORT SELECTION LOGIC */}
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                PORT SELECTION LOGIC
                            </h2>

                            <div className="divide-gray/10 space-y-4 divide-y">
                                {[
                                    'Cargo type determines the handling configuration.',
                                    'Vessel type determines maritime compatibility.',
                                    'Terminal capability determines loading and discharge options.',
                                    'Rail and road access determine inland connectivity.',
                                    'Destination requirements determine the maritime route.',
                                ].map((text) => (
                                    <div
                                        key={text}
                                        className="flex flex-col gap-2 pb-4 font-medium"
                                    >
                                        <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SEA ROUTE OPTIONS */}
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                SEA ROUTE OPTIONS
                            </h2>

                            <div className="space-y-4">
                                {[
                                    [
                                        'PRIMARY PORT',
                                        'Principal maritime gateway',
                                    ],
                                    [
                                        'ALTERNATIVE PORT',
                                        'Secondary maritime gateway',
                                    ],
                                    ['MULTIPORT', 'Diversified port structure'],
                                    ['MULTIMODAL', 'Rail + Road + Sea'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex justify-between gap-2.5 font-medium"
                                    >
                                        <span className="shrink-0">
                                            {label}
                                        </span>

                                        <span className="text-primary text-right">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DISCUSS YOUR SEA MOVEMENT */}
                        <div className="border-border space-y-6 border p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    DISCUSS YOUR SEA MOVEMENT
                                </h2>
                            </div>

                            <p className="text-sm/6 text-black/70">
                                Tell us your origin, destination, cargo type and
                                required delivery timeframe.
                            </p>

                            <Button type="button" asChild>
                                <Link href="/contact" className="w-full">
                                    <span>REQUEST SEA ASSESSMENT</span>
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
                        name: 'Sea Logistics',
                        url: `${process.env.NEXT_PUBLIC_APP_URL}/sea-logistics`,
                        description:
                            'Maritime freight across Russian ports and Eurasian trade routes, connecting cargo origins, terminals, vessels and destination markets.',
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
                                    name: 'Sea Logistics',
                                    item: `${process.env.NEXT_PUBLIC_APP_URL}/sea-logistics`,
                                },
                            ],
                        },
                    }),
                }}
            />
        </>
    )
}
