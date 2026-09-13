import HeroSection from '@/components/common/hero-section'
import TrustedLeading from '@/components/common/trusted-leading'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'
import NetworkSection from './components/NetworkSection'

export const metadata: Metadata = {
    title: 'Corridor details | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/corridor/corridor-details',
        title: 'Corridor details | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Corridor details | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/corridor/corridor-details`,
    },
}

export default function ProjectDetails() {
    const faqList = [
        {
            id: 1,
            question: 'How is the project being managed?',
            answer: 'We are using Agile/Waterfall/Hybrid methodology supported by project management tools such as Jira, Microsoft Project, or Asana, ensuring transparency and timely updates.',
        },
        {
            id: 2,
            question: 'How will progress be communicated?',
            answer: 'Regular updates will be provided through weekly meetings, email summaries, and real-time dashboards accessible via the project management tool.',
        },
        {
            id: 3,
            question:
                'Will employees receive training on new systems or tools?',
            answer: 'Yes. Comprehensive training sessions, user guides, and support resources will be provided to ensure smooth adoption and minimal disruption.',
        },
        {
            id: 4,
            question: 'How can I share feedback or raise a concern?',
            answer: 'You can use the feedback form available on the project portal or contact the Project Manager directly via email or during scheduled check-ins.',
        },
    ]
    return (
        <>
            <div className="mb-16 grow lg:mb-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Corridor', href: '/corridor' },
                        { label: 'Corridor details' },
                    ]}
                    title={<>ROUTE INTELLIGENCE</>}
                    descriptions={[
                        'IRAN — THE SOUTHERN TRANSIT GATEWAY',
                        'RUSSIA → ASTARA → IRAN → REGIONAL MARKETS',
                        'Iran forms a strategic transit interface between the Caspian transport network and the markets of Central Asia, South Asia, the Middle East and Türkiye.',
                        'Through the northern gateway at Astara, cargo originating in Russia and the wider Caspian region can enter the Iranian transit network and continue toward multiple regional destinations.',
                        'The route is therefore designed as a branching network — not as a single fixed corridor.',
                    ]}
                />

                <NetworkSection />

                <div className="container mt-10 flex-col items-start gap-12 space-y-12 lg:flex lg:flex-row lg:gap-16 lg:space-y-0">
                    <div className="grow">
                        <div className="border-border divide-border relative mt-8 grid divide-y border sm:grid-cols-2 sm:divide-x">
                            <span className="absolute top-1/2 left-1/2 hidden size-14 -translate-1/2 border-0 bg-white lg:block"></span>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    NORTHERN ENTRY
                                </h3>
                                <ul className="space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            RUSSIA → AZERBAIJAN → ASTARA
                                        </span>
                                        <span className="px-3 text-sm">
                                            The northern connection provides
                                            access from the Russian and Caspian
                                            transport network into Iran.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            ASTARA
                                        </span>
                                        <span className="px-3 text-sm">
                                            Northern gateway
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN
                                        </span>
                                        <span className="px-3 text-sm">
                                            Transit network <br />
                                            The Astara connection forms the
                                            entry point for southbound and
                                            westbound cargo flows into the
                                            Iranian network.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 border-r-0 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    EASTERN CORRIDOR
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN → AFGHANISTAN
                                        </span>
                                        <span className="px-3 text-sm">
                                            The eastern branch connects the
                                            Iranian transit network with
                                            Afghanistan through designated
                                            eastern gateways.
                                        </span>
                                        <span className="px-3 text-sm">
                                            The route can serve cargo moving
                                            toward Afghan inland markets and
                                            onward Central and South Asian
                                            connections.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            KEY DIRECTION
                                        </span>
                                        <span className="px-3 text-sm">
                                            Iran → Eastern Border → Afghanistan
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 border-b-0 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    SOUTHEASTERN CORRIDOR
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN → PAKISTAN
                                        </span>
                                        <span className="px-3 text-sm">
                                            The southeastern branch provides
                                            overland access between Iran and
                                            Pakistan.
                                        </span>
                                        <span className="px-3 text-sm">
                                            It can support cargo movements
                                            toward Pakistani inland markets and
                                            major commercial and maritime
                                            gateways.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            KEY DIRECTION
                                        </span>
                                        <span className="px-3 text-sm">
                                            Iran → Southeastern Border →
                                            Pakistan
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    WESTERN CORRIDOR
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN → IRAQ
                                        </span>
                                        <span className="px-3 text-sm">
                                            The western branch connects the
                                            Iranian transit network with Iraq
                                            through established border
                                            interfaces.
                                        </span>
                                        <span className="px-3 text-sm">
                                            This creates access toward Iraqi
                                            markets and onward regional
                                            distribution.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            KEY DIRECTION
                                        </span>
                                        <span className="px-3 text-sm">
                                            Iran → Western Border → Iraq
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    NORTHWESTERN CORRIDOR
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN → TÜRKİYE → EUROPE
                                        </span>
                                        <span className="px-3 text-sm">
                                            The northwestern branch connects
                                            Iranian transit flows with Türkiye
                                            and the wider European transport
                                            network
                                        </span>
                                        <span className="px-3 text-sm">
                                            It provides an overland continuation
                                            for cargo moving west from the
                                            Iranian network.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            KEY DIRECTION
                                        </span>
                                        <span className="px-3 text-sm">
                                            Iran → Türkiye → European Markets
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    SOUTHERN MARITIME EXTENSION
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            IRAN → GULF MARKETS
                                        </span>
                                        <span className="px-3 text-sm">
                                            Southbound cargo can continue
                                            through Iranian maritime gateways
                                            toward the Gulf and wider
                                            international shipping networks.
                                        </span>
                                        <span className="px-3 text-sm">
                                            The southern branch creates a
                                            maritime extension for cargo
                                            entering the Iranian network from
                                            northern origins.
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-lg text-black">
                                            KEY DIRECTION
                                        </span>
                                        <span className="px-3 text-sm">
                                            Iranian Inland Network → Southern
                                            Ports → Gulf Markets
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                Risks & Mitigations:
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-base/5.5 font-normal lg:text-lg/6">
                                    <thead>
                                        <tr>
                                            <th className="text-primary w-1/3 border-b border-black/10 p-3 text-lg/6 font-medium first:pl-0">
                                                Risk
                                            </th>
                                            <th className="text-primary border-b border-black/10 p-3 text-lg/6 font-medium first:pl-0">
                                                Mitigation Strategy
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>Data Leak</p>
                                            </td>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>
                                                    We will implement a data
                                                    leak prevention strategy to
                                                    ensure that data is
                                                    protected and secured.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>Resistance to Change</p>
                                            </td>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>
                                                    Early employee engagement,
                                                    workshopss
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>Technical Downtime</p>
                                            </td>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>
                                                    Backup plan, phased rollouts
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>Data Migration Challenges</p>
                                            </td>
                                            <td className="border-border/70 border-b p-3 first:pl-0">
                                                <p>
                                                    Expert consultants, pilot
                                                    testing
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* GATEWAY STRUCTURE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                GATEWAY STRUCTURE
                            </h3>

                            <div className="border-border grid border sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: 'ASTARA',
                                        description:
                                            'Northern entry into the Iranian transit network.',
                                    },
                                    {
                                        title: 'EASTERN GATEWAYS',
                                        description:
                                            'Access toward Afghanistan.',
                                    },
                                    {
                                        title: 'SOUTHEASTERN GATEWAYS',
                                        description: 'Access toward Pakistan.',
                                    },
                                    {
                                        title: 'WESTERN GATEWAYS',
                                        description: 'Access toward Iraq.',
                                    },
                                    {
                                        title: 'NORTHWESTERN GATEWAYS',
                                        description: 'Access toward Türkiye.',
                                    },
                                    {
                                        title: 'SOUTHERN PORTS',
                                        description:
                                            'Access toward Gulf and maritime networks.',
                                    },
                                ].map((gateway) => (
                                    <div
                                        key={gateway.title}
                                        className="border-border space-y-3 border-b p-5 last:border-b-0 sm:border-r sm:p-6 lg:nth-[3n]:border-r-0"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {gateway.title}
                                        </h4>

                                        <p className="text-sm/6 text-black/70">
                                            {gateway.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RAIL EXTENSION */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                RAIL EXTENSION — OUTSIDE IRAN
                            </h3>

                            <div className="space-y-4 text-sm/6 text-black/70 lg:text-base/6">
                                <p>
                                    The Iranian network is not the only rail
                                    option.
                                </p>

                                <p>
                                    Where geography, destination or network
                                    conditions make another route more suitable,
                                    cargo can move through independent Eurasian
                                    rail corridors.
                                </p>
                            </div>

                            <div className="border-border divide-border grid divide-y border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                                {[
                                    'RUSSIA → KAZAKHSTAN → CENTRAL ASIA',
                                    'RUSSIA → CASPIAN → AZERBAIJAN → TÜRKİYE',
                                    'CHINA → KAZAKHSTAN → RUSSIA / CENTRAL ASIA',
                                    'CENTRAL ASIA → CAUCASUS → TÜRKİYE',
                                ].map((route) => (
                                    <div key={route} className="p-5 sm:p-6">
                                        <span className="text-base font-medium text-black lg:text-lg">
                                            {route}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NETWORK FLEXIBILITY */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                NETWORK FLEXIBILITY
                            </h3>

                            <div className="border-border grid border md:grid-cols-3">
                                {[
                                    {
                                        title: 'PRIMARY ROUTE',
                                        description:
                                            'The principal connection selected for the planned cargo flow.',
                                    },
                                    {
                                        title: 'ALTERNATIVE ROUTE',
                                        description:
                                            'A secondary corridor available when the primary connection is less suitable.',
                                    },
                                    {
                                        title: 'DIVERSIFIED ROUTE',
                                        description:
                                            'A structure using more than one gateway or regional corridor to reduce dependency on a single connection.',
                                    },
                                ].map((route) => (
                                    <div
                                        key={route.title}
                                        className="border-border border-b p-5 last:border-b-0 md:border-r md:border-b-0 md:p-6 md:last:border-r-0"
                                    >
                                        <h4 className="text-primary font-red-hat text-lg font-bold">
                                            {route.title}
                                        </h4>

                                        <p className="mt-3 text-sm/6 text-black/70">
                                            {route.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-light p-5 text-sm/6 lg:p-6 lg:text-base/6">
                                <p>
                                    The objective is not to create unnecessary
                                    complexity.
                                </p>

                                <p className="mt-3">
                                    The objective is to preserve practical
                                    connectivity when border, infrastructure,
                                    capacity or operational conditions change.
                                </p>
                            </div>
                        </div>

                        {/* REGIONAL ACCESS MATRIX */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                REGIONAL ACCESS MATRIX
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm/6 lg:text-base/6">
                                    <thead>
                                        <tr>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium first:pl-0">
                                                REGION
                                            </th>
                                            <th className="text-primary border-b border-black/10 p-3 font-medium">
                                                ACCESS
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {[
                                            [
                                                'AFGHANISTAN',
                                                'Eastern overland access',
                                            ],
                                            [
                                                'PAKISTAN',
                                                'Southeastern overland access',
                                            ],
                                            ['IRAQ', 'Western overland access'],
                                            [
                                                'TÜRKİYE',
                                                'Northwestern overland access',
                                            ],
                                            [
                                                'GULF',
                                                'Southern maritime access',
                                            ],
                                            [
                                                'EUROPE',
                                                'Türkiye and wider Eurasian rail connections',
                                            ],
                                        ].map(([region, access]) => (
                                            <tr key={region}>
                                                <td className="border-border/70 border-b p-3 font-medium first:pl-0">
                                                    {region}
                                                </td>

                                                <td className="border-border/70 border-b p-3 text-black/70">
                                                    {access}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* NORTHERN ORIGIN FLOW */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                FROM NORTHERN ORIGIN TO REGIONAL MARKET
                            </h3>

                            <div className="border-border flex flex-col items-center border p-6 text-center sm:p-8">
                                {[
                                    'RUSSIA',
                                    'CASPIAN / CAUCASUS NETWORK',
                                    'ASTARA',
                                    'IRAN',
                                    'REGIONAL GATEWAY',
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
                        </div>

                        {/* ROUTE INTELLIGENCE */}
                        <div className="mt-8 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                ROUTE INTELLIGENCE
                            </h3>

                            <div className="space-y-4 text-sm/6 text-black/70 lg:text-base/6">
                                <p>
                                    A corridor becomes valuable when it creates
                                    choices.
                                </p>

                                <p>
                                    Our network approach connects northern
                                    origins with multiple southern and western
                                    markets while retaining alternative rail
                                    corridors outside Iran.
                                </p>

                                <p>The result is not a single route.</p>

                                <p className="font-medium text-black">
                                    It is a configurable logistics network.
                                </p>
                            </div>
                        </div>

                        {/* ROUTE ASSESSMENT */}
                        <div className="mt-8 mb-10 space-y-5 lg:mt-12">
                            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                ROUTE ASSESSMENT
                            </h3>

                            <div className="border-border grid grid-cols-2 border sm:grid-cols-3">
                                {[
                                    'ORIGIN',
                                    'DESTINATION',
                                    'PRIMARY GATEWAY',
                                    'ALTERNATIVE GATEWAY',
                                    'TRANSIT CORRIDOR',
                                    'FINAL MARKET',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="border-border border-r border-b p-4 last:border-r-0 sm:p-5"
                                    >
                                        <span className="text-primary text-sm font-medium lg:text-base">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="ml-auto grid shrink-0 gap-8 md:grid-cols-2 lg:w-96 lg:grid-cols-1">
                        <div className="bg-gray-light space-y-6 p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    CORRIDOR BRANCHING
                                </h2>
                                <span className="mt-2 block font-bold">
                                    ONE NORTHERN ENTRY
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">ASTARA</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        ONE TRANSIT NETWORK
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">IRAN</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        MULTIPLE REGIONAL DIRECTIONS
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">EAST</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        AFGHANISTAN
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">SOUTHEAST</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        PAKISTAN
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">WEST</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        IRAQ
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">NORTHWEST</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        TÜRKİYE
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">SOUTH</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        GULF MARKETS
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                ROUTE SELECTION LOGIC
                            </h2>
                            <div className="divide-gray/10 space-y-4 divide-y">
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        The destination determines the branch.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        The origin determines the entry.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        The network determines the available
                                        alternatives.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        A shipment entering through Astara does
                                        not have to follow a single
                                        predetermined path. Its onward routing
                                        can be configured according to
                                        destination, infrastructure, border
                                        access and the most practical regional
                                        connection.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-border space-y-6 border p-6">
                            <div>
                                <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    DISCUSS YOUR ROUTE
                                </h2>
                            </div>

                            <p className="text-sm/6 text-black/70">
                                Tell us your origin, destination and cargo
                                requirements. We will assess the available
                                corridor and transport configuration.
                            </p>

                            <Button type="button" asChild>
                                <Link href="/contact" className="w-full">
                                    <span>REQUEST ROUTE ASSESSMENT</span>
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
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Corridor details | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/corridor-details",
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
                                        "name": "Corridor",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/corridor"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Corridor details",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/corridor/corridor-details"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
