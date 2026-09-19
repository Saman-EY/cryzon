import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import TestimonialSection from '@/components/common/testimonial-section'
import LatestService from '@/components/common/latest-service'
import ServingClient from '@/components/common/serving-client'
import Link from 'next/link'
import ProjectCard from '@/components/custom/project-card'
import FaqSection from '@/components/common/faq-section'
import { Metadata } from 'next'
import helper from '@/lib/helper'
import Counter from '@/components/custom/counter'
import PricingPlanSection from '@/components/custom/pricing-plan-section'
import { Button, buttonVariants } from '@/components/ui/button'
import LogoAnimate from '@/components/common/logo-animate'

export const metadata: Metadata = {
    title: 'Home | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/',
        title: 'Home | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Home | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    },
}

const countries = [
    {
        title: 'Rail',
        description: '',
        img: '/images/01_RAIL.png',
    },
    {
        title: 'RZD',
        description: 'Russian Railways',
        img: '/images/02_RZD.png',
    },
    {
        title: 'KTZ',
        description: 'Kazakhstan Temir Zholy',
        img: '/images/03_KTZ.png',
    },
    {
        title: 'ADY',
        description: 'Azerbaijan Railways',
        img: '/images/04_ADY.png',
    },
    {
        title: 'RAI',
        description: 'Islamic Republic of Iran Railways',
        img: '/images/05_RAI.png',
    },
    {
        title: 'ARA',
        description: 'Armenian Railways',
        img: '/images/06_ARA.png',
    },
    {
        title: 'TCDD',
        description: 'Turkish State Railways',
        img: '/images/07_TCDD.png',
    },
    {
        title: 'PR',
        description: 'Pakistan Railways',
        img: '/images/08_PR.png',
    },
    {
        title: 'Sea',
        description: '',
        img: '/images/09_SEA.png',
    },
    {
        title: 'RU',
        description: 'Russia',
        img: '/images/10_RU.png',
    },
    {
        title: 'AZ',
        description: 'Azerbaijan',
        img: '/images/11_AZ.png',
    },
    {
        title: 'GCC',
        description: 'Gulf Cooperation Council',
        img: '/images/12_GCC.png',
    },
    {
        title: 'AF',
        description: 'Afghanistan',
        img: '/images/13_AF.png',
    },
    {
        title: 'IR',
        description: 'Iran',
        img: '/images/14_IR.png',
    },
    {
        title: 'PK',
        description: 'Pakistan',
        img: '/images/15_PK.png',
    },
    {
        title: 'IQ',
        description: 'Iraq',
        img: '/images/16_IQ.png',
    },
    {
        title: 'Corridors',
        description: '',
        img: '/images/17_CORRIDORS.png',
    },
    {
        title: 'INSTC',
        description: 'International North–South Transport Corridor',
        img: '/images/18_INSTC.png',
    },
    {
        title: 'TITR',
        description: 'Trans-Caspian Transport Route',
        img: '/images/19_TITR.png',
    },
    {
        title: 'TRACECA',
        description: 'Transport Corridor Europe–Caucasus–Asia',
        img: '/images/20_TRACECA.png',
    },
    {
        title: 'CPEC',
        description: 'China–Pakistan Economic Corridor',
        img: '/images/21_CPEC.png',
    },
    {
        title: 'CAREC',
        description: 'Central Asia Regional Economic Cooperation',
        img: '/images/22_CAREC.png',
    },
    {
        title: 'NSR',
        description: 'Northern Sea Route',
        img: '/images/23_NSR.png',
    },
]

export default function HomePage() {
    const services = [
        {
            id: 1,
            title: 'Multimodal Logistics',
            description:
                'One shipment. Multiple modes. One accountable logistics solution. We coordinate rail, sea, road and terminal operations across international trade routes.',
            image: '/svgs/logistics.svg',
        },
        {
            id: 2,
            title: 'Rail Freight Solutions',
            description:
                'Reliable rail capacity across Russia, Central Asia, the Caucasus, Iran and beyond — from wagon allocation and loading to transit and final delivery.',
            image: '/svgs/rail.svg',
        },
        {
            id: 3,
            title: 'Sea & Port Logistics',
            description:
                'Connecting cargo to major ports and maritime routes across the Caspian, Black Sea, Persian Gulf and global markets — with coordinated port-to-port and multimodal execution.',
            image: '/svgs/sea.svg',
        },
        {
            id: 4,
            title: 'Customs & Trade Compliance',
            description:
                'We manage the documentation, customs procedures, permits and regulatory requirements behind every movement — keeping cargo compliant, controlled and moving.',
            image: '/svgs/customs_trade.svg',
        },
    ]
    const projectList = [
        {
            id: 1,
            title: 'NORTH & SOUTH',
            description: 'Russia → Azerbaijan → Iran → Gulf',
            description2: 'Rail • Sea • Multimodal',
            image: '/images/project3.jpg',
            category: 'Software Development',
            url: '/project/project-details',
        },
        {
            id: 2,
            title: 'CENTRAL ASIA',
            description: 'Russia → Kazakhstan → Central Asia → Afghanistan',
            description2: 'Rail • Road • Multimodal',
            image: '/images/project4.jpg',
            category: 'Cybersecurity',
            url: '/project/project-details',
        },
        {
            id: 3,
            title: 'CAUCASUS & TÜRKİYE',
            description: 'Russia → Caspian → Azerbaijan → Georgia → Türkiye',
            description2: 'Rail • Sea • Multimodal',
            image: '/images/project5.jpg',
            category: 'Automation',
            url: '/project/project-details',
        },
        {
            id: 4,
            title: 'GLOBAL MARKETS',
            description: 'Russia → Middle East → Asia → Africa',
            description2: 'Rail • Sea • Road • Multimodal',
            image: '/images/project6.jpg',
            category: 'Software Development',
            url: '/project/project-details',
        },
    ]
    const faqList = [
        {
            id: 1,
            question: 'What transport options are available for my cargo?',
            answer: 'We provide rail, road, sea and multimodal transport solutions for general, bulk, liquid, chemical, dangerous and specialized cargo.',
        },
        {
            id: 2,
            question: 'Which corridor is best for my shipment?',
            answer: 'We assess the cargo, origin, destination, border requirements and transit conditions to select the most efficient available corridor.',
        },
        {
            id: 3,
            question: 'Can you handle dangerous and regulated cargo?',
            answer: 'Yes. We coordinate the required documentation and compliance procedures for dangerous goods, chemicals, petroleum products and other regulated cargo.',
        },
        {
            id: 4,
            question: 'What customs documents and export permits are required?',
            answer: 'Requirements depend on the cargo and destination. We coordinate customs documentation, export certificates, permits and regulatory formalities required for the shipment.',
        },
        {
            id: 5,
            question: 'Can you combine rail, road and sea transport?',
            answer: 'Yes. We organize multimodal transport by combining rail, road and sea routes to create a continuous logistics chain from origin to destination.',
        },
        {
            id: 6,
            question:
                'Can you handle cargo through Russian ports and gateways?',
            answer: 'Yes. We coordinate cargo movement through key Russian maritime, rail and border gateways, connecting Russian origins with international markets.',
        },
    ]

    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <div className="relative flex w-full items-center justify-center overflow-hidden py-14 sm:py-24 lg:min-h-[calc(100vh-134px)] lg:py-14">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 h-full w-full object-cover"
                    >
                        <source
                            src="/images/home-banner.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

                    <div className="relative flex h-full w-full items-center">
                        <div className="container">
                            <div
                                className="max-w-3xl text-white"
                                data-aos="fade-up"
                            >
                                <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm tracking-wider uppercase backdrop-blur-sm">
                                    Trusted by 333+ businesses
                                </span>

                                <h1 className="font-red-hat mb-6 text-4xl leading-tight font-extrabold drop-shadow-xl sm:text-5xl lg:text-6xl">
                                    SUCCESSFUL SHIPMENTS
                                    <span className="block">
                                        CONNECTING RUSSIA TO GLOBAL MARKETS
                                    </span>
                                </h1>

                                <p className="mb-8 text-lg text-white/90 drop-shadow-sm md:text-xl">
                                    We source. We contract. We deliver.
                                    End-to-end logistics solutions connecting
                                    suppliers, markets and destinations across
                                    borders.
                                </p>
                                <p className="mb-8 text-lg font-semibold text-white drop-shadow-sm md:text-2xl">
                                    RAIL • SEA • ROAD • MULTIMODAL
                                </p>

                                <div className="mb-10 flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className={buttonVariants({
                                            variant: 'secondary',
                                        })}
                                    >
                                        <span>Get a Free Quote</span>
                                    </Link>
                                    <Button
                                        type="button"
                                        variant={'secondary'}
                                        asChild
                                    >
                                        <Link
                                            href="/services"
                                            className="border border-white bg-transparent! text-white! hover:border-transparent"
                                        >
                                            <span>Our Services</span>
                                        </Link>
                                    </Button>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 text-center sm:grid-cols-3 sm:gap-6 sm:text-left">
                                    <div className="rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition duration-300 hover:scale-105 sm:p-4">
                                        <Counter
                                            target={119}
                                            interval={20}
                                            step={5}
                                            suffix="+"
                                            className="text-white"
                                        />
                                        <p className="text-sm text-white/80">
                                            INTERNATIONAL ROUTES
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition duration-300 hover:scale-105 sm:p-4">
                                        <Counter
                                            target={99}
                                            interval={30}
                                            step={1}
                                            suffix="%"
                                            className="text-white"
                                        />
                                        <p className="text-sm text-white/80">
                                            ON-TIME DELIVERY
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition duration-300 hover:scale-105 sm:p-4">
                                        <Counter
                                            target={8}
                                            interval={200}
                                            step={1}
                                            suffix="+"
                                            className="text-white"
                                        />
                                        <p className="text-sm text-white/80">
                                            YEARS IN LOGISTICS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div
                        className="section-heading text-center"
                        data-aos="fade-up"
                    >
                        <h3>LOGISTICS NETWORK</h3>
                        <h2 className="text-lg">
                            Connecting international trade through strategic
                            transport corridors.
                        </h2>
                    </div>

                    {/* GRID */}
                    <section className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-8 my-5">
                        {countries.map((country) => (
                            <CountryCard
                                key={country.title}
                                title={country.title}
                                description={country.description}
                                img={country.img}
                            />
                        ))}
                    </section>
                </div>

                <LogoAnimate />

                <LatestService services={services} viewAllButton />

                <div className="container">
                    <div
                        className="section-heading text-center"
                        data-aos="fade-up"
                    >
                        <h2>STRATEGIC LOGISTICS ROUTES</h2>
                        <h3>RUSSIA → THE WORLD</h3>
                        <h2>Connecting Russian Cargo to Global Markets</h2>
                    </div>
                    <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 xl:gap-10">
                        {projectList.map((project) => {
                            return (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            )
                        })}
                    </div>
                    <div className="mt-10 text-center lg:mt-14">
                        <Button type="button" asChild>
                            <Link href="/project">
                                <span>EXPLORE OUR NETWORK →</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <ServingClient
                    className="bg-primary py-16 lg:py-25"
                    variant="dark"
                />

                <div className="container">
                    <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
                        <div className="relative mx-auto shrink-0 pb-10 pl-6 lg:mx-0 lg:w-100 xl:w-150">
                            <div className="bg-primary up-down absolute bottom-0 left-0 h-[calc(100%-70px)] w-1/2 rounded-xl"></div>
                            <Image
                                src="/images/about-3.jpg"
                                alt="About Us"
                                width={576}
                                height={480}
                                className="relative h-full w-full object-cover"
                            />
                        </div>
                        <div className="grow space-y-8 md:space-y-10">
                            <div className="section-heading" data-aos="fade-up">
                                <h2>About Our Company</h2>
                                <h3 className="after:left-0 after:translate-0">
                                    CONNECTING RUSSIA TO INTERNATIONAL MARKETS
                                </h3>
                            </div>
                            <p>
                                We coordinate cargo movement across strategic
                                corridors, combining rail, sea, road, customs
                                and documentation into one seamless logistics
                                solution. From Russian origin to international
                                destination, we manage the route, the cargo and
                                the critical details that keep trade moving.
                            </p>
                            <div className="border-border divide-border font-red-hat text-primary grid max-w-125 grid-cols-1 divide-y rounded-2xl border text-lg sm:grid-cols-2">
                                <div className="p-4">01. MULTI-CORRIDOR</div>
                                <div className="p-4">02. RAIL & SEA</div>
                                <div className="p-4">03. ROAD & TRANSIT</div>
                                <div className="p-4">
                                    04. CUSTOMS & DOCUMENTS
                                </div>
                                <div className="p-4">
                                    05. INTERNATIONAL CARGO
                                </div>
                            </div>
                            <Link href="/contact" className={buttonVariants()}>
                                <span>EXPLORE OUR NETWORK</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden px-4">
                    <div className="bg-gray-light relative py-16 lg:py-25">
                        <div className="absolute -top-35 -left-10 h-50 w-30 rotate-45 bg-white md:-top-20"></div>
                        <div className="absolute -top-25 -right-20 h-30 w-50 rotate-45 bg-white md:-top-10"></div>
                        <div className="container">
                            <div
                                className="section-heading text-center"
                                data-aos="fade-up"
                            >
                                <h2>
                                    Russia Connected. The World Within Reach.
                                </h2>
                                <h3>LOGISTICS IN MOTION</h3>
                            </div>
                            <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:gap-14 lg:mt-14 xl:grid-cols-4">
                                <div className="group space-y-5 sm:space-y-8">
                                    <div className="border-gray/30 relative mx-auto size-30 rounded-full border-2 border-dashed p-2.5 sm:size-40 sm:p-4 lg:size-50 lg:p-6">
                                        <div className="grid size-full place-content-center rounded-full bg-white">
                                            <Image
                                                src="/images/icon-research.png"
                                                alt="Research icon"
                                                width={64}
                                                height={64}
                                                className="size-14 lg:size-16"
                                            />
                                        </div>
                                        <div className="bg-primary absolute top-0 right-0 grid size-10 place-content-center rounded-full font-semibold text-white opacity-0 transition group-hover:opacity-100">
                                            01
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-primary font-red-hat text-xl font-semibold">
                                            ROUTE INTELLIGENCE
                                        </h2>
                                        <p>
                                            We design efficient multimodal
                                            routes across rail, sea, road and
                                            strategic corridors, connecting
                                            Russian cargo with key markets
                                            across Eurasia and beyond.
                                        </p>
                                    </div>
                                </div>
                                <div className="group space-y-5 sm:space-y-8">
                                    <div className="border-gray/30 relative mx-auto size-30 rounded-full border-2 border-dashed p-2.5 sm:size-40 sm:p-4 lg:size-60 lg:p-6">
                                        <div className="grid size-full place-content-center rounded-full bg-white">
                                            <Image
                                                src="/images/strategic-planning.png"
                                                alt="Research icon"
                                                width={72}
                                                height={72}
                                                className="size-14 lg:size-18"
                                            />
                                        </div>
                                        <div className="bg-primary absolute top-0 right-0 grid size-10 place-content-center rounded-full font-semibold text-white opacity-0 transition group-hover:opacity-100">
                                            02
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-primary font-red-hat text-xl font-semibold">
                                            CARGO & COMPLIANCE
                                        </h2>
                                        <p>
                                            We manage customs clearance, export
                                            documentation, certificates,
                                            licenses and dangerous-goods
                                            requirements to ensure every
                                            shipment is ready for movement.
                                        </p>
                                    </div>
                                </div>
                                <div className="group space-y-5 sm:space-y-8">
                                    <div className="border-gray/30 relative mx-auto size-30 rounded-full border-2 border-dashed p-2.5 sm:size-40 sm:p-4 lg:size-50 lg:p-6">
                                        <div className="grid size-full place-content-center rounded-full bg-white">
                                            <Image
                                                src="/images/icon-software.png"
                                                alt="Research icon"
                                                width={64}
                                                height={64}
                                                className="size-14 lg:size-16"
                                            />
                                        </div>
                                        <div className="bg-primary absolute top-0 right-0 grid size-10 place-content-center rounded-full font-semibold text-white opacity-0 transition group-hover:opacity-100">
                                            03
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-primary font-red-hat text-xl font-semibold">
                                            MULTIMODAL EXECUTION
                                        </h2>
                                        <p>
                                            We coordinate ports, terminals,
                                            railways, road carriers and
                                            transshipment points, turning
                                            complex international routes into
                                            one controlled operation.
                                        </p>
                                    </div>
                                </div>
                                <div className="group space-y-5 sm:space-y-8">
                                    <div className="border-gray/30 relative mx-auto size-30 rounded-full border-2 border-dashed p-2.5 sm:size-40 sm:p-4 lg:size-60 lg:p-6">
                                        <div className="grid size-full place-content-center rounded-full bg-white">
                                            <Image
                                                src="/images/icon-support.png"
                                                alt="Research icon"
                                                width={72}
                                                height={72}
                                                className="size-14 lg:size-18"
                                            />
                                        </div>
                                        <div className="bg-primary absolute top-0 right-0 grid size-10 place-content-center rounded-full font-semibold text-white opacity-0 transition group-hover:opacity-100">
                                            04
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-primary font-red-hat text-xl font-semibold">
                                            CONTROL BEYOND DELIVERY
                                        </h2>
                                        <p>
                                            We track critical points throughout
                                            the journey, manage operational
                                            exceptions and keep every shipment
                                            moving toward its final destination.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container space-y-16 lg:space-y-25">
                    <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14">
                        <div className="relative mx-auto shrink-0 md:pb-10 md:pl-6 lg:mx-0 lg:w-125 xl:w-150 2xl:w-200">
                            <Image
                                src="/images/about-3.jpg"
                                alt="About Us"
                                width={582}
                                height={388}
                                className="relative ml-auto h-full object-cover md:w-3/4"
                            />
                            <div className="absolute bottom-10 left-0 hidden h-2/3 w-2/4 md:block">
                                <div className="bg-primary up-down absolute -right-6 -bottom-10 h-[calc(100%-20px)] w-1/2 rounded-xl"></div>
                                <Image
                                    src="/images/project-2.jpg"
                                    alt="About Us"
                                    height={400}
                                    width={285}
                                    className="relative h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="grow space-y-8 md:space-y-10">
                            <div className="section-heading" data-aos="fade-up">
                                <h2>OUR CAPABILITIES</h2>
                                <h3 className="after:left-0 after:translate-0">
                                    BUILT FOR COMPLEX CARGO
                                </h3>
                            </div>
                            <p>
                                We handle the movements that demand more than a
                                standard freight solution — from bulk
                                commodities and liquid cargo to specialized
                                equipment and regulated goods. Each shipment is
                                approached according to its cargo, route,
                                regulatory requirements and operational
                                conditions.
                            </p>
                            <div className="flex flex-wrap items-center gap-5">
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>BULK COMMODITIES</div>
                                </div>
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>LIQUID CARGO</div>
                                </div>
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>SPECIALIZED EQUIPMENT</div>
                                </div>
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>DANGEROUS GOODS</div>
                                </div>
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>CROSS-BORDER TRADE</div>
                                </div>
                                <div className="border-border flex items-center gap-3 rounded-xl border px-4 py-2 shadow-sm">
                                    <Check className="size-5" />
                                    <div>PROJECT CARGO</div>
                                </div>
                            </div>
                            <Link href="/contact" className={buttonVariants()}>
                                <span>REQUEST A CARGO SOLUTION</span>
                            </Link>
                        </div>
                    </div>

                    <PricingPlanSection />
                </div>

                <TestimonialSection variant="dark" />

                <FaqSection faqList={faqList} />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Home | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/",
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
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}

type CountryCardProps = {
    title: string
    description: string
    img: string
}

function CountryCard({ title, description, img }: CountryCardProps) {
    return (
        <div className="group relative h-44 w-full overflow-hidden rounded-lg">
            {/* Background image */}
            <Image
                src={img}
                alt={title}
                fill
                className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg font-semibold text-white uppercase">
                    {title}
                </h3>

                {description && (
                    <p className="mt-0.5 max-w-[90%] text-xs text-white/80">
                        {description}
                    </p>
                )}

                {/* Arrow */}
                <button
                    type="button"
                    className="mt-3 flex size-7 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black"
                >
                    <ArrowRight className="size-4" />
                </button>
            </div>
        </div>
    )
}
