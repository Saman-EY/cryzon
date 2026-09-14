import HeroSection from '@/components/common/hero-section'
import TrustedLeading from '@/components/common/trusted-leading'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '4PL Logistics',
    description:
        'End-to-end supply chain orchestration across Russia and Eurasian markets, connecting suppliers, carriers, terminals, ports, customs and destinations through one controlled logistics structure.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/4pl-logistics',
        title: '4PL Logistics',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: '4PL Logistics',
        description:
            'End-to-end supply chain orchestration across Russia and Eurasian markets.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/4pl-logistics`,
    },
}

const sectionTitleClass =
    'text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7'

const managementGroups = [
    {
        title: 'SUPPLIER COORDINATION',
        items: [
            'Supplier identification',
            'Supplier communication',
            'Cargo availability',
            'Production readiness',
            'Loading schedule',
            'Commercial documentation',
            'Cargo specifications',
            'Pickup coordination',
        ],
    },
    {
        title: 'TRANSPORT MANAGEMENT',
        items: [
            'Road',
            'Rail',
            'Sea',
            'Multimodal',
            'Intermodal',
            'Terminal transfers',
        ],
    },
    {
        title: 'NETWORK MANAGEMENT',
        items: [
            'Route design',
            'Carrier allocation',
            'Port selection',
            'Rail connection',
            'Border selection',
            'Alternative routing',
            'Capacity planning',
        ],
    },
    {
        title: 'CONTROL & GOVERNANCE',
        items: [
            'Shipment visibility',
            'Milestone management',
            'Exception management',
            'Provider coordination',
            'KPI monitoring',
            'Documentation control',
            'Performance reporting',
        ],
    },
]

const agriculturalServices = [
    'Supplier sourcing',
    'Origin inspection',
    'Cargo preparation',
    'Bagged or bulk loading',
    'FIBC / Jumbo Bag handling',
    'Hopper wagon allocation',
    'Truck loading',
    'Warehouse coordination',
    'Rail terminal operations',
    'Port delivery',
    'Bulk vessel nomination',
    'Destination discharge',
    'Final inland distribution',
]

const agriculturalCargo = [
    'Grain',
    'Corn',
    'Soy',
    'Oilseed meal',
    'Fertilizers',
    'Agricultural raw materials',
    'Other dry bulk commodities',
]
const liquidCargo = [
    'VEGETABLE OILS',
    'SUNFLOWER OIL',
    'FOOD-GRADE LIQUIDS',
    'CHEMICAL LIQUIDS',
    'INDUSTRIAL LIQUIDS',
    'PETROLEUM PRODUCTS',
    'OTHER COMPATIBLE BULK LIQUIDS',
]
const dangerousParameters = [
    'UN NUMBER',
    'HAZARD CLASS',
    'PACKING GROUP',
    'CARGO COMPATIBILITY',
    'CONTAINMENT',
    'TANK SPECIFICATION',
    'LOADING REQUIREMENTS',
    'SEGREGATION',
    'MARKING',
    'DOCUMENTATION',
    'ROUTE RESTRICTIONS',
    'PORT REQUIREMENTS',
]
const generalCargo = [
    'Machinery',
    'Industrial equipment',
    'Steel',
    'Construction materials',
    'Commercial goods',
    'Palletized products',
    'Containers',
    'Vehicles',
    'Project cargo',
]
const bulkCargo = [
    'Grain',
    'Corn',
    'Soy',
    'Oilseed meal',
    'Minerals',
    'Fertilizers',
    'Industrial raw materials',
]
const baggedCargo = ['Jumbo Bags', 'FIBC', 'Sacks', 'Palletized bags']
const railEquipment = [
    ['HOPPER WAGONS', 'For dry bulk'],
    ['COVERED WAGONS', 'For protected general cargo'],
    ['PLATFORM WAGONS', 'For containers, machinery and heavy cargo'],
    ['TANK WAGONS', 'For compatible liquid cargo'],
    ['ISO TANK CONTAINERS', 'For intermodal liquid bulk'],
    ['SPECIALIZED WAGONS', 'For technically specific cargo'],
]

const portRegions = [
    ['BALTIC', ['Saint Petersburg', 'Ust-Luga', 'Primorsk', 'Kaliningrad']],
    ['BLACK SEA / AZOV', ['Novorossiysk', 'Taman', 'Rostov-on-Don', 'Kavkaz']],
    ['CASPIAN', ['Astrakhan', 'Makhachkala', 'Olya']],
    ['ARCTIC', ['Murmansk', 'Arkhangelsk', 'Sabetta']],
    ['FAR EAST', ['Vladivostok', 'Vostochny', 'Nakhodka', 'Vanino']],
] as const

const routeDesign = [
    [
        '01',
        'ORIGIN',
        ['Supplier', 'Production location', 'Warehouse', 'Collection point'],
    ],
    [
        '02',
        'CARGO',
        [
            'Commodity',
            'Quantity',
            'Packaging',
            'Density',
            'Hazard classification',
            'Handling requirements',
        ],
    ],
    ['03', 'NETWORK', ['Rail', 'Road', 'Sea', 'Terminal', 'Port', 'Border']],
    [
        '04',
        'DESTINATION',
        ['Port', 'Warehouse', 'Distribution centre', 'Final consignee'],
    ],
    [
        '05',
        'ALTERNATIVES',
        [
            'Primary route',
            'Secondary route',
            'Alternative port',
            'Alternative carrier',
            'Alternative mode',
        ],
    ],
] as const

const documents = [
    'COMMERCIAL INVOICE',
    'PACKING LIST',
    'CONTRACT DOCUMENTATION',
    'CARGO SPECIFICATION',
    'TRANSPORT DOCUMENTS',
    'CUSTOMS DOCUMENTS',
    'TRANSIT DOCUMENTS',
    'DANGEROUS GOODS DOCUMENTATION',
    'CERTIFICATES',
    'ORIGIN DOCUMENTATION',
    'PORT DOCUMENTATION',
]
const kpis = [
    [
        'SERVICE',
        ['On-time performance', 'Transit performance', 'Delivery reliability'],
    ],
    [
        'COST',
        ['Freight cost', 'Accessorial cost', 'Terminal cost', 'Storage cost'],
    ],
    [
        'OPERATIONS',
        ['Loading performance', 'Equipment utilization', 'Carrier performance'],
    ],
    [
        'COMPLIANCE',
        [
            'Documentation accuracy',
            'Exception frequency',
            'Regulatory compliance',
        ],
    ],
    [
        'VISIBILITY',
        ['Milestone reporting', 'Status accuracy', 'Exception response'],
    ],
] as const

const clientOutsources = [
    'NETWORK DESIGN',
    'SUPPLIER COORDINATION',
    'CARRIER MANAGEMENT',
    'TRANSPORT PLANNING',
    'WAREHOUSE / TERMINAL COORDINATION',
    'PORT MANAGEMENT',
    'CUSTOMS COORDINATION',
    'DOCUMENT CONTROL',
    'SHIPMENT VISIBILITY',
    'EXCEPTION MANAGEMENT',
    'KPI MANAGEMENT',
    'CONTINUOUS OPTIMIZATION',
]
const supplyChainCriteria = [
    'COST',
    'TIME',
    'CAPACITY',
    'RELIABILITY',
    'RISK',
    'SERVICE LEVEL',
    'EQUIPMENT',
    'INFRASTRUCTURE',
]
const industrialApplications = [
    'Multiple suppliers',
    'Multiple origins',
    'Multiple destinations',
    'Multiple transport modes',
    'Bulk commodities',
    'Liquid products',
    'Dangerous goods',
    'Industrial materials',
    'Agricultural commodities',
    'International trade flows',
]

const flowSteps = (items: string[]) => (
    <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
        {items.map((item, index) => (
            <div
                key={`${item}-${index}`}
                className="flex flex-col items-center"
            >
                <span className="text-base font-medium lg:text-lg">{item}</span>
                {index < items.length - 1 && (
                    <span className="text-primary my-2 text-xl">↓</span>
                )}
            </div>
        ))}
    </div>
)

const horizontalFlow = (items: string[]) => (
    <div className="border-border flex flex-wrap items-center justify-center gap-2 border p-6 sm:p-8">
        {items.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-2">
                <span className="bg-gray-light px-3 py-2 text-sm font-medium sm:text-base">
                    {item}
                </span>
                {index < items.length - 1 && (
                    <span className="text-primary">→</span>
                )}
            </div>
        ))}
    </div>
)

export default function FourPLLogistics() {
    return (
        <>
            <div className="mb-16 grow lg:mb-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: '4PL Logistics' },
                    ]}
                    title={<>4PL LOGISTICS</>}
                    descriptions={[
                        'END-TO-END SUPPLY CHAIN ORCHESTRATION ACROSS RUSSIA AND EURASIAN MARKETS',
                        '4PL is not a transport service.',
                        'It is the management layer above the transport operation.',
                        'NAVADAS acts as the lead logistics integrator between the client, suppliers, carriers, terminals, warehouses, ports, customs specialists and other logistics providers.',
                        'Instead of managing separate transport legs with separate providers, the client operates through one coordinated logistics structure.',
                    ]}
                />

                <div className="container my-10 flex-col items-start gap-12 space-y-12 lg:flex lg:flex-row lg:gap-16 lg:space-y-0">
                    <div className="grow">
                        {/* INTRODUCTION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>INTRODUCTION</h3>
                            <div className="space-y-4 text-sm/6 text-black/70 lg:text-base/6">
                                <p>4PL is not a transport service.</p>
                                <p>
                                    It is the management layer above the
                                    transport operation.
                                </p>
                                <p>
                                    NAVADAS acts as the lead logistics
                                    integrator between the client, suppliers,
                                    carriers, terminals, warehouses, ports,
                                    customs specialists and other logistics
                                    providers.
                                </p>
                                <p>
                                    Instead of managing separate transport legs
                                    with separate providers, the client operates
                                    through one coordinated logistics structure.
                                </p>
                                <p>
                                    We design the supply chain, select and
                                    coordinate the required providers, manage
                                    the movement, control the interfaces,
                                    monitor performance and manage exceptions
                                    from source to destination.
                                </p>
                                <p>The objective is simple:</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {[
                                    'ONE SUPPLY CHAIN.',
                                    'ONE CONTROL STRUCTURE.',
                                    'ONE LOGISTICS INTERFACE.',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-bold sm:text-base"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* THE 4PL MODEL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>THE 4PL MODEL</h3>
                            {flowSteps([
                                'CLIENT',
                                'NAVADAS 4PL CONTROL TOWER',
                                'SUPPLIERS / CARRIERS / 3PLs',
                                'WAREHOUSES / TERMINALS / PORTS',
                                'CUSTOMS / RAIL / ROAD / VESSEL OPERATORS',
                                'DESTINATION',
                            ])}
                        </div>

                        {/* SOURCE TO DESTINATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                FROM SOURCE TO DESTINATION
                            </h3>
                            {flowSteps([
                                'SUPPLY',
                                'SOURCE VERIFICATION',
                                'CARGO PREPARATION',
                                'PICK-UP',
                                'ORIGIN TERMINAL',
                                'RAIL / ROAD / SEA',
                                'BORDER / PORT',
                                'TRANSIT',
                                'DESTINATION TERMINAL',
                                'FINAL DELIVERY',
                            ])}
                        </div>

                        {/* WHAT NAVADAS MANAGES */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                WHAT NAVADAS MANAGES
                            </h3>
                            <div className="border-border grid border sm:grid-cols-2">
                                {managementGroups.map((group) => (
                                    <div
                                        key={group.title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {group.title}
                                        </h4>
                                        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm/6 text-black/70">
                                            {group.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTROL TOWER */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL CONTROL TOWER
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The Control Tower is the operational layer
                                connecting the physical movement with the
                                information required to manage it.
                            </p>
                            {flowSteps([
                                'ORDER',
                                'SUPPLIER',
                                'CARGO READY',
                                'PICK-UP',
                                'LOADING',
                                'DEPARTURE',
                                'TRANSIT',
                                'BORDER / PORT',
                                'ARRIVAL',
                                'DELIVERY',
                            ])}
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Every critical milestone becomes part of one
                                controlled logistics workflow.
                            </p>
                        </div>

                        {/* SUPPLIER TO MARKET */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SUPPLIER-TO-MARKET
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                A client may not need to manage the supplier,
                                truck, railway, forwarder, port, terminal,
                                customs broker, vessel, warehouse and final-mile
                                carrier separately.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                NAVADAS integrates these parties into one
                                operational structure.
                            </p>
                        </div>

                        {/* SOURCE MANAGEMENT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SOURCE MANAGEMENT
                            </h3>
                            {flowSteps([
                                'SUPPLIER',
                                'PRODUCT SPECIFICATION',
                                'QUALITY / QUANTITY CHECK',
                                'CARGO READY DATE',
                                'LOADING PLAN',
                                'TRANSPORT RELEASE',
                            ])}
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Source-side control begins before the cargo
                                enters the transport network.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The logistics plan is developed around the
                                actual cargo readiness date rather than an
                                assumed shipment date.
                            </p>
                        </div>

                        {/* AGRICULTURAL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                AGRICULTURAL SUPPLY CHAINS
                            </h3>
                            <p className="text-sm/6 text-black/70">
                                For agricultural commodities, the logistics
                                structure can include:
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {agriculturalServices.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">TYPICAL CARGO</h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {agriculturalCargo.map((item) => (
                                    <div
                                        key={item}
                                        className="border-border border p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            {flowSteps([
                                'FARM / PRODUCER',
                                'COLLECTION POINT',
                                'WAREHOUSE / SILO',
                                'TRUCK / HOPPER',
                                'RAIL TERMINAL',
                                'RUSSIAN PORT',
                                'BULK CARRIER',
                                'DESTINATION PORT',
                                'FINAL MARKET',
                            ])}
                        </div>

                        {/* LIQUID */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                LIQUID COMMODITIES
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Liquid supply chains require coordination
                                between product specification, containment,
                                loading infrastructure, transport equipment and
                                receiving facilities.
                            </p>
                            <p className="text-sm/6 text-black/70">
                                NAVADAS can structure:
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'Supplier coordination',
                                    'Product availability',
                                    'Tank allocation',
                                    'ISO Tank positioning',
                                    'Tank wagon planning',
                                    'Pump compatibility',
                                    'Loading',
                                    'Cleaning requirements',
                                    'Terminal handling',
                                    'Rail',
                                    'Road',
                                    'Sea',
                                    'Final discharge',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">LIQUID CARGO</h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {liquidCargo.map((item) => (
                                    <div
                                        key={item}
                                        className="border-border border p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            {flowSteps([
                                'SUPPLIER',
                                'PRODUCT READY',
                                'TANK / ISO TANK',
                                'LOADING',
                                'RAIL / ROAD',
                                'PORT / TERMINAL',
                                'VESSEL',
                                'DESTINATION',
                                'FINAL DELIVERY',
                            ])}
                        </div>

                        {/* DANGEROUS GOODS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                DANGEROUS GOODS
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Dangerous goods require a different level of
                                supply-chain coordination.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The cargo classification must be established
                                before equipment and routing are finalized.
                            </p>
                            <h4 className="text-lg font-bold">
                                KEY PARAMETERS
                            </h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {dangerousParameters.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            {flowSteps([
                                'SUPPLIER',
                                'CARGO CLASSIFICATION',
                                'EQUIPMENT SELECTION',
                                'LOADING',
                                'CONTROLLED TRANSPORT',
                                'BORDER / CUSTOMS',
                                'TERMINAL',
                                'VESSEL / RAIL / ROAD',
                                'DESTINATION',
                            ])}
                        </div>

                        {/* GENERAL CARGO */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>GENERAL CARGO</h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {generalCargo.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL structure determines the appropriate
                                combination of equipment, carrier, terminal and
                                transport mode for each cargo profile.
                            </p>
                        </div>

                        {/* BULK & BAGGED */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                BULK & BAGGED CARGO
                            </h3>
                            <div className="border-border grid border sm:grid-cols-2">
                                <div className="border-border border-b p-5 sm:p-6">
                                    <h4 className="text-primary font-red-hat text-lg font-bold">
                                        BULK
                                    </h4>
                                    <ul className="mt-3 space-y-1 text-sm/6 text-black/70">
                                        {bulkCargo.map((x) => (
                                            <li key={x}>{x}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-border border-b p-5 sm:p-6">
                                    <h4 className="text-primary font-red-hat text-lg font-bold">
                                        BAGGED
                                    </h4>
                                    <ul className="mt-3 space-y-1 text-sm/6 text-black/70">
                                        {baggedCargo.map((x) => (
                                            <li key={x}>{x}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold">EQUIPMENT</h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[
                                    'Hopper wagons',
                                    'Open wagons',
                                    'Covered wagons',
                                    'Platform wagons',
                                    'Bulk terminals',
                                    'Truck loading systems',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RAIL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                RAIL INTEGRATION
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                NAVADAS can integrate rail transport into the
                                4PL network where rail provides the most
                                suitable long-distance connection.
                            </p>
                            {flowSteps([
                                'SUPPLIER',
                                'TRUCK',
                                'RAIL TERMINAL',
                                'RUSSIAN RAIL NETWORK',
                                'BORDER / PORT',
                                'DESTINATION',
                            ])}
                            <h4 className="text-lg font-bold">
                                RAIL EQUIPMENT
                            </h4>
                            <div className="border-border grid border sm:grid-cols-2">
                                {railEquipment.map(([title, desc]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <p className="mt-2 text-sm/6 text-black/70">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PORT INTEGRATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                RUSSIAN PORT INTEGRATION
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL network can connect inland cargo with
                                Russian maritime gateways according to cargo,
                                vessel requirements and destination.
                            </p>
                            <div className="border-border grid border sm:grid-cols-2">
                                {portRegions.map(([title, ports]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm/6 text-black/70">
                                            {ports.map((x) => (
                                                <span key={x}>{x}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">
                                PORT-BASED SUPPLY CHAIN
                            </h4>
                            {flowSteps([
                                'SUPPLIER',
                                'RAIL / ROAD',
                                'PORT TERMINAL',
                                'STORAGE / HANDLING',
                                'VESSEL',
                                'DESTINATION PORT',
                                'RAIL / ROAD',
                                'FINAL MARKET',
                            ])}
                        </div>

                        {/* MULTIMODAL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MULTIMODAL ORCHESTRATION
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                A 4PL network does not depend on one transport
                                mode.
                            </p>
                            <p className="text-sm/6 text-black/70">
                                The mode is selected according to:
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[
                                    'Cargo',
                                    'Origin',
                                    'Destination',
                                    'Volume',
                                    'Urgency',
                                    'Equipment',
                                    'Infrastructure',
                                    'Border',
                                    'Port',
                                    'Cost structure',
                                    'Risk profile',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">
                                AVAILABLE MODES
                            </h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                                {[
                                    'ROAD',
                                    'RAIL',
                                    'SEA',
                                    'MULTIMODAL',
                                    'INTERMODAL',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="border-border border p-4 text-center text-sm font-bold"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROUTE DESIGN */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>ROUTE DESIGN</h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The route is designed before individual
                                transport providers are assigned.
                            </p>
                            <div className="border-border border">
                                {routeDesign.map(([number, title, items]) => (
                                    <div
                                        key={number}
                                        className="border-border flex flex-col gap-4 border-b p-5 last:border-b-0 sm:p-6 md:flex-row md:gap-8"
                                    >
                                        <div className="text-primary font-red-hat shrink-0 text-2xl font-bold">
                                            {number}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">
                                                {title}
                                            </h4>
                                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm/6 text-black/70">
                                                {items.map((x) => (
                                                    <span key={x}>{x}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* EURASIAN NETWORK */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                RUSSIA — EURASIAN NETWORK
                            </h3>
                            <div className="border-border grid gap-3 border p-5 sm:grid-cols-2 sm:p-6">
                                {[
                                    ['RUSSIA', 'BELARUS / WESTERN NETWORKS'],
                                    ['RUSSIA', 'KAZAKHSTAN → CENTRAL ASIA'],
                                    ['RUSSIA', 'CASPIAN → AZERBAIJAN → IRAN'],
                                    ['RUSSIA', 'CAUCASUS → TÜRKİYE'],
                                    [
                                        'RUSSIA',
                                        'EASTERN RAIL NETWORK → CHINA / ASIA',
                                    ],
                                ].map(([from, to]) => (
                                    <div
                                        key={to}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        <span>{from}</span>
                                        <span className="text-primary mx-2">
                                            →
                                        </span>
                                        <span>{to}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NORTH SOUTH */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                NORTH–SOUTH 4PL FLOW
                            </h3>
                            {flowSteps([
                                'RUSSIAN ORIGIN',
                                'RAIL / ROAD',
                                'CASPIAN GATEWAY',
                                'AZERBAIJAN',
                                'ASTARA',
                                'IRAN',
                                'REGIONAL NETWORK',
                            ])}
                            <h4 className="text-lg font-bold">FROM IRAN</h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                                {[
                                    'IRAQ',
                                    'AFGHANISTAN',
                                    'PAKISTAN',
                                    'GULF MARKETS',
                                    'TÜRKİYE',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-center text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL structure allows the transport mode to
                                change while the logistics responsibility
                                remains within one controlled operating
                                framework.
                            </p>
                        </div>

                        {/* SUPPLIER MANAGEMENT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SUPPLIER MANAGEMENT
                            </h3>
                            <p className="text-sm/6 text-black/70">
                                NAVADAS can coordinate multiple suppliers within
                                the same supply chain.
                            </p>
                            {flowSteps([
                                'SUPPLIER A',
                                'SUPPLIER B',
                                'SUPPLIER C',
                                'NAVADAS CONTROL TOWER',
                                'CONSOLIDATED LOGISTICS FLOW',
                            ])}
                        </div>

                        {/* MULTI SUPPLIER */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                MULTI-SUPPLIER CONSOLIDATION
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'Supplier readiness',
                                    'Pickup scheduling',
                                    'Cargo consolidation',
                                    'Equipment allocation',
                                    'Terminal planning',
                                    'Documentation coordination',
                                    'Transport sequencing',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                This allows multiple origins to feed one
                                destination network without requiring the client
                                to manage every transport provider separately.
                            </p>
                        </div>

                        {/* CARRIER */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                CARRIER MANAGEMENT
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL layer can coordinate multiple carriers
                                across the network.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[
                                    'ROAD CARRIERS',
                                    'RAIL OPERATORS',
                                    'VESSEL OPERATORS',
                                    'FORWARDERS',
                                    'TERMINALS',
                                    'WAREHOUSES',
                                    'CUSTOMS PROVIDERS',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The role of the 4PL is to coordinate the network
                                and manage performance rather than treating
                                every provider as an independent shipment.
                            </p>
                        </div>

                        {/* EQUIPMENT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                EQUIPMENT MANAGEMENT
                            </h3>
                            <p className="text-sm/6 text-black/70">
                                Equipment selection is based on cargo and route
                                requirements.
                            </p>
                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    ['TRUCK', 'CARGO'],
                                    ['WAGON', 'CARGO'],
                                    ['ISO TANK', 'LIQUID'],
                                    ['VESSEL', 'BULK / LIQUID / GENERAL'],
                                    ['TERMINAL', 'HANDLING METHOD'],
                                ].map(([a, b]) => (
                                    <div
                                        key={a}
                                        className="border-border flex items-center justify-between gap-4 border-b p-5 sm:p-6"
                                    >
                                        <span className="font-medium">{a}</span>
                                        <span className="text-primary text-xl">
                                            ↔
                                        </span>
                                        <span className="text-right font-medium">
                                            {b}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The equipment decision is integrated into the
                                route design rather than made after the shipment
                                has already been planned.
                            </p>
                        </div>

                        {/* DOCUMENTS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                DOCUMENT CONTROL
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {documents.map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Document consistency is controlled across the
                                supply chain because discrepancies between
                                commercial, customs and transport data can
                                create operational delays.
                            </p>
                        </div>

                        {/* CUSTOMS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                CUSTOMS & BORDER COORDINATION
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Customs is treated as part of the route design.
                            </p>
                            {flowSteps([
                                'ORIGIN',
                                'EXPORT FORMALITIES',
                                'TRANSIT',
                                'BORDER',
                                'IMPORT / TRANSIT FORMALITIES',
                                'DESTINATION',
                            ])}
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The required customs structure depends on the
                                cargo, origin, destination, trade regime and
                                route.
                            </p>
                        </div>

                        {/* EXCEPTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                EXCEPTION MANAGEMENT
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                A 4PL operation is not defined only by what
                                happens when everything works.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                It is also defined by how exceptions are
                                managed.
                            </p>
                            <h4 className="text-lg font-bold">EXAMPLES</h4>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'Supplier delay',
                                    'Cargo not ready',
                                    'Wagon shortage',
                                    'Truck shortage',
                                    'Port congestion',
                                    'Berth delay',
                                    'Border delay',
                                    'Documentation discrepancy',
                                    'Equipment rejection',
                                    'Route disruption',
                                    'Weather-related interruption',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">
                                CONTROL TOWER RESPONSE
                            </h4>
                            {flowSteps([
                                'IDENTIFY',
                                'ASSESS',
                                'RECONFIGURE',
                                'COORDINATE',
                                'EXECUTE',
                                'REPORT',
                            ])}
                        </div>

                        {/* VISIBILITY */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>VISIBILITY</h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The client should not need to call five
                                different providers to understand where the
                                cargo is.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL structure consolidates operational
                                information into one management layer.
                            </p>
                            {horizontalFlow([
                                'ORDER',
                                'CARGO READY',
                                'PICKUP',
                                'LOADING',
                                'DEPARTURE',
                                'BORDER',
                                'TRANSIT',
                                'PORT',
                                'ARRIVAL',
                                'DELIVERY',
                            ])}
                        </div>

                        {/* KPI */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                KPI MANAGEMENT
                            </h3>
                            <div className="border-border grid border sm:grid-cols-2">
                                {kpis.map(([title, items]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <ul className="mt-3 space-y-1 text-sm/6 text-black/70">
                                            {items.map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* OPTIMIZATION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SUPPLY CHAIN OPTIMIZATION
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL network is continuously evaluated
                                against:
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {supplyChainCriteria.map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The objective is not simply to find the lowest
                                freight rate.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The objective is to create the most effective
                                total logistics configuration for the supply
                                chain.
                            </p>
                        </div>

                        {/* OPERATING CYCLE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL OPERATING CYCLE
                            </h3>
                            {horizontalFlow([
                                'DESIGN',
                                'SOURCE',
                                'PLAN',
                                'EXECUTE',
                                'CONTROL',
                                'MEASURE',
                                'OPTIMIZE',
                                'REDESIGN',
                            ])}
                        </div>

                        {/* ONE SUPPLY CHAIN */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                ONE SUPPLY CHAIN
                            </h3>
                            <p className="text-sm/6 text-black/70">
                                Instead of:
                            </p>
                            {horizontalFlow([
                                'SUPPLIER',
                                'TRUCKER',
                                'RAILWAY',
                                'FORWARDER',
                                'PORT',
                                'CUSTOMS',
                                'WAREHOUSE',
                            ])}
                            <p className="text-sm/6 text-black/70">
                                the client works through:
                            </p>
                            {flowSteps([
                                'CLIENT',
                                'NAVADAS 4PL',
                                'INTEGRATED LOGISTICS NETWORK',
                            ])}
                        </div>

                        {/* CLIENT OUTSOURCES */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                WHAT THE CLIENT OUTSOURCES
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {clientOutsources.map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <h4 className="text-lg font-bold">
                                WHAT NAVADAS CONTROLS
                            </h4>
                            {horizontalFlow([
                                'SOURCE',
                                'CARGO',
                                'EQUIPMENT',
                                'CARRIER',
                                'ROUTE',
                                'BORDER',
                                'PORT',
                                'DESTINATION',
                            ])}
                        </div>

                        {/* INDUSTRIAL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL FOR INDUSTRIAL SUPPLY CHAINS
                            </h3>
                            <p className="text-sm/6 text-black/70">
                                Suitable for companies managing:
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {industrialApplications.map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                The 4PL model becomes particularly valuable when
                                the logistics network is too complex to manage
                                efficiently through individual transport
                                providers.
                            </p>
                        </div>

                        {/* CARGO MODELS */}
                        {[
                            [
                                '4PL FOR AGRICULTURAL COMMODITIES',
                                [
                                    'SUPPLIER',
                                    'COLLECTION',
                                    'STORAGE',
                                    'HOPPER / TRUCK',
                                    'RAIL',
                                    'PORT',
                                    'BULK VESSEL',
                                    'DESTINATION',
                                ],
                            ],
                            [
                                '4PL FOR LIQUID PRODUCTS',
                                [
                                    'SUPPLIER',
                                    'ISO TANK / TANK WAGON',
                                    'RAIL / ROAD',
                                    'TERMINAL',
                                    'PORT',
                                    'TANKER',
                                    'DESTINATION',
                                ],
                            ],
                            [
                                '4PL FOR DANGEROUS GOODS',
                                [
                                    'SUPPLIER',
                                    'CLASSIFICATION',
                                    'APPROVED EQUIPMENT',
                                    'CONTROLLED LOADING',
                                    'ROAD / RAIL',
                                    'BORDER',
                                    'PORT / TERMINAL',
                                    'VESSEL',
                                    'DESTINATION',
                                ],
                            ],
                            [
                                '4PL FOR GENERAL INDUSTRIAL CARGO',
                                [
                                    'SUPPLIER',
                                    'PICKUP',
                                    'WAREHOUSE / CONSOLIDATION',
                                    'PLATFORM / CONTAINER',
                                    'RAIL / ROAD / SEA',
                                    'DESTINATION TERMINAL',
                                    'FINAL DELIVERY',
                                ],
                            ],
                        ].map(([title, items]) => (
                            <div
                                key={title as string}
                                className="mt-8 space-y-5 lg:mt-12"
                            >
                                <h3 className={sectionTitleClass}>{title}</h3>
                                {horizontalFlow(items as string[])}
                            </div>
                        ))}

                        {/* END TO END */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                END-TO-END CONTROL
                            </h3>
                            {flowSteps([
                                'SUPPLY',
                                'LOGISTICS DESIGN',
                                'EXECUTION',
                                'VISIBILITY',
                                'EXCEPTION MANAGEMENT',
                                'PERFORMANCE',
                                'OPTIMIZATION',
                            ])}
                        </div>

                        {/* NAVADAS 4PL */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>NAVADAS 4PL</h3>
                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    [
                                        'SOURCE',
                                        'We coordinate the supply side.',
                                    ],
                                    [
                                        'MOVE',
                                        'We design and manage the transport network.',
                                    ],
                                    [
                                        'CONNECT',
                                        'We connect road, rail, sea, ports, terminals and borders.',
                                    ],
                                    [
                                        'CONTROL',
                                        'We manage the operational interfaces.',
                                    ],
                                    [
                                        'OPTIMIZE',
                                        'We measure performance and continuously improve the network.',
                                    ],
                                ].map(([title, desc]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <p className="mt-2 text-sm/6 text-black/70">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* VALUE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL VALUE STRUCTURE
                            </h3>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {[
                                    [
                                        'ONE INTERFACE',
                                        'Across multiple providers',
                                    ],
                                    [
                                        'ONE CONTROL TOWER',
                                        'Across multiple transport modes',
                                    ],
                                    [
                                        'ONE OPERATING MODEL',
                                        'Across the supply chain',
                                    ],
                                    [
                                        'ONE PERFORMANCE FRAMEWORK',
                                        'Across logistics providers',
                                    ],
                                    [
                                        'ONE END-TO-END VIEW',
                                        'From source to destination',
                                    ],
                                ].map(([title, desc]) => (
                                    <div
                                        key={title}
                                        className="border-border border p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <p className="mt-2 text-sm/6 text-black/70">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ARCHITECTURE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                SUPPLY CHAIN ARCHITECTURE
                            </h3>
                            {flowSteps([
                                'SOURCE',
                                'SUPPLIER',
                                'CARGO',
                                'EQUIPMENT',
                                'ORIGIN TRANSPORT',
                                'TERMINAL',
                                'RAIL / ROAD / SEA',
                                'BORDER / PORT',
                                'DESTINATION TERMINAL',
                                'FINAL DELIVERY',
                            ])}
                        </div>

                        {/* LEAD INTEGRATOR */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                NAVADAS AS LEAD LOGISTICS INTEGRATOR
                            </h3>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                We do not treat logistics as a collection of
                                individual shipments.
                            </p>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                We design the supply chain as one operating
                                system.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'Every supplier.',
                                    'Every carrier.',
                                    'Every terminal.',
                                    'Every border.',
                                    'Every port.',
                                    'Every transport mode.',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                Connected through one management structure.
                            </p>
                        </div>

                        {/* CONTROL TOWER ACTIONS */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL CONTROL TOWER
                            </h3>
                            <div className="border-border grid border sm:grid-cols-2">
                                {[
                                    [
                                        'SEE',
                                        'Know what is happening across the network.',
                                    ],
                                    [
                                        'DECIDE',
                                        'Select the appropriate response.',
                                    ],
                                    [
                                        'COORDINATE',
                                        'Align suppliers, carriers and logistics providers.',
                                    ],
                                    [
                                        'ACT',
                                        'Execute the required operational change.',
                                    ],
                                    [
                                        'MEASURE',
                                        'Track performance against agreed KPIs.',
                                    ],
                                    [
                                        'OPTIMIZE',
                                        'Improve the network continuously.',
                                    ],
                                ].map(([title, desc]) => (
                                    <div
                                        key={title}
                                        className="border-border border-b p-5 sm:p-6"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {title}
                                        </h4>
                                        <p className="mt-2 text-sm/6 text-black/70">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* END TO END SUPPLY CHAIN */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                END-TO-END SUPPLY CHAIN
                            </h3>
                            {horizontalFlow([
                                'SOURCE',
                                'RUSSIA',
                                'RAIL / ROAD / SEA',
                                'PORT / BORDER',
                                'EURASIAN CORRIDOR',
                                'DESTINATION',
                                'FINAL MARKET',
                            ])}
                        </div>

                        {/* INTELLIGENCE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                4PL LOGISTICS INTELLIGENCE
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'The right supplier.',
                                    'The right equipment.',
                                    'The right carrier.',
                                    'The right route.',
                                    'The right border.',
                                    'The right port.',
                                    'The right destination interface.',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="border-border border p-5 text-sm font-medium sm:text-base"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                All coordinated through one logistics management
                                structure.
                            </p>
                        </div>

                        {/* ASSESSMENT */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                REQUEST A 4PL SUPPLY CHAIN ASSESSMENT
                            </h3>
                            <p className="text-sm/6 text-black/70">Tell us:</p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    'PRODUCT',
                                    'ORIGIN',
                                    'DESTINATION',
                                    'ANNUAL / MONTHLY VOLUME',
                                    'CARGO TYPE',
                                    'PACKAGING',
                                    'DANGEROUS GOODS STATUS',
                                    'CURRENT TRANSPORT MODEL',
                                    'REQUIRED DELIVERY WINDOW',
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="bg-gray-light p-4 text-sm font-medium"
                                    >
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm/6 text-black/70 lg:text-base/6">
                                We will map the supply chain, identify the
                                required logistics interfaces and develop an
                                integrated 4PL operating structure from source
                                to destination.
                            </p>
                        </div>

                        {/* CTA */}
                        {/* <div className="mt-8 mb-10 space-y-5 lg:mt-12">
                            <h3 className={sectionTitleClass}>
                                DISCUSS YOUR SUPPLY CHAIN
                            </h3>
                            <Button type="button" asChild>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-fit"
                                >
                                    <span>REQUEST 4PL ASSESSMENT</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>

                    {/* SIDEBAR */}
                    <div className="ml-auto grid shrink-0 gap-8 md:grid-cols-2 lg:w-96 lg:grid-cols-1">
                        <div className="bg-gray-light space-y-6 p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    4PL CONTROL TOWER
                                </h2>
                                <span className="mt-2 block font-bold">
                                    ONE CONTROL STRUCTURE → ONE LOGISTICS
                                    INTERFACE
                                </span>
                            </div>
                            <div className="space-y-4">
                                {[
                                    ['SOURCE', 'Supplier control'],
                                    ['MOVE', 'Transport network'],
                                    ['CONNECT', 'Modes + interfaces'],
                                    ['CONTROL', 'Milestones + exceptions'],
                                    ['OPTIMIZE', 'KPIs + performance'],
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
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                NETWORK SCOPE
                            </h2>
                            <div className="divide-gray/10 space-y-4 divide-y">
                                {[
                                    'Suppliers and origins',
                                    'Road and rail',
                                    'Ports and terminals',
                                    'Sea and vessel operators',
                                    'Customs and borders',
                                    'Warehouses and destinations',
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
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                4PL VALUE
                            </h2>
                            <div className="space-y-4">
                                {[
                                    ['ONE INTERFACE', 'Multiple providers'],
                                    ['ONE CONTROL TOWER', 'Multiple modes'],
                                    ['ONE OPERATING MODEL', 'End-to-end'],
                                    ['ONE VIEW', 'Source to destination'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex justify-between gap-2.5 font-medium"
                                    >
                                        <span>{label}</span>
                                        <span className="text-primary text-right">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-border space-y-6 border p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    DISCUSS YOUR SUPPLY CHAIN
                                </h2>
                            </div>
                            <p className="text-sm/6 text-black/70">
                                Tell us your product, origin, destination,
                                volume and current transport model.
                            </p>
                            <Button type="button" asChild>
                                <Link href="/contact" className="w-full">
                                    <span>REQUEST 4PL ASSESSMENT</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <TrustedLeading />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: '4PL Logistics',
                        url: `${process.env.NEXT_PUBLIC_APP_URL}/4pl-logistics`,
                        description:
                            'End-to-end supply chain orchestration across Russia and Eurasian markets, connecting suppliers, carriers, terminals, ports, customs and destinations through one controlled logistics structure.',
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
                                    name: '4PL Logistics',
                                    item: `${process.env.NEXT_PUBLIC_APP_URL}/4pl-logistics`,
                                },
                            ],
                        },
                    }),
                }}
            />
        </>
    )
}
