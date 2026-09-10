import Image from 'next/image'
import { Check } from 'lucide-react'
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

export default function HomePage() {
    const services = [
        {
            id: 1,
            title: 'Multimodal Logistics',
            description:
                'One shipment. Multiple modes. One accountable logistics solution. We coordinate rail, sea, road and terminal operations across international trade routes.',
            image: '/images/icon-mangement.png',
        },
        {
            id: 2,
            title: 'Rail Freight Solutions',
            description:
                'Reliable rail capacity across Russia, Central Asia, the Caucasus, Iran and beyond — from wagon allocation and loading to transit and final delivery.',
            image: '/images/icon-integration.png',
        },
        {
            id: 3,
            title: 'Sea & Port Logistics',
            description:
                'Connecting cargo to major ports and maritime routes across the Caspian, Black Sea, Persian Gulf and global markets — with coordinated port-to-port and multimodal execution.',
            image: '/images/icon-ai.png',
        },
        {
            id: 4,
            title: 'Customs & Trade Compliance',
            description:
                'We manage the documentation, customs procedures, permits and regulatory requirements behind every movement — keeping cargo compliant, controlled and moving.',
            image: '/images/icon-support.png',
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
            question: 'What is the purpose of this project?',
            answer: 'The primary objective is to achieve operational efficiency and business growth by implementing modern solutions tailored to our organizational goals.',
        },
        {
            id: 2,
            question: 'What is the expected timeline for project completion?',
            answer: 'The project is scheduled to start on [Start Date] and is expected to be completed by [End Date], depending on milestone approvals and testing phases.',
        },
        {
            id: 3,
            question: 'How is the project being managed?',
            answer: 'We are using Agile/Waterfall/Hybrid methodology supported by project management tools such as Jira, Microsoft Project, or Asana, ensuring transparency and timely updates.',
        },
        {
            id: 4,
            question: 'How will progress be communicated?',
            answer: 'Regular updates will be provided through weekly meetings, email summaries, and real-time dashboards accessible via the project management tool.',
        },
        {
            id: 5,
            question:
                'Will employees receive training on new systems or tools?',
            answer: 'Yes. Comprehensive training sessions, user guides, and support resources will be provided to ensure smooth adoption and minimal disruption.',
        },
        {
            id: 6,
            question: 'How can I share feedback or raise a concern?',
            answer: 'You can use the feedback form available on the project portal or contact the Project Manager directly via email or during scheduled check-ins.',
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
                    <div className="mt-10 flex flex-col justify-start overflow-x-auto pb-2 lg:mt-14">
                        <div className="text-gray flex grid-cols-9 text-base lg:grid">
                            <div className="border-border flex h-28 w-28 shrink-0 items-center justify-center border-x-2 border-y-2 text-center font-bold uppercase xl:h-36 xl:w-auto 2xl:h-[168px]">
                                RAIL
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-angular.svg"
                                    alt="Angular"
                                    width={60}
                                    height={60}
                                /> */}
                                RZD
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-laravel.svg"
                                    alt="Laravel"
                                    width={60}
                                    height={60}
                                /> */}
                                KTZ
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-html.svg"
                                    alt="html"
                                    width={60}
                                    height={60}
                                /> */}
                                ADY
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-node-js.svg"
                                    alt="node"
                                    width={60}
                                    height={60}
                                /> */}
                                RAI
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-react.svg"
                                    alt="react"
                                    width={60}
                                    height={60}
                                /> */}
                                ARA
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-nuxt-js.svg"
                                    alt="Nuxt.js"
                                    width={60}
                                    height={60}
                                /> */}
                                TCDD
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-tailwind-css.svg"
                                    alt="Tailwind CSS"
                                    width={60}
                                    height={60}
                                /> */}
                                PR
                            </div>
                        </div>
                        <div className="text-gray flex grid-cols-9 text-base lg:grid">
                            <div className="border-border flex h-28 w-28 shrink-0 items-center justify-center border-x-2 border-b-2 text-center font-bold uppercase xl:h-36 xl:w-auto 2xl:h-[168px]">
                                Sea
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-flutter.svg"
                                    alt="Flutter"
                                    width={60}
                                    height={60}
                                /> */}
                                RU
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-react.svg"
                                    alt="React Native"
                                    width={60}
                                    height={60}
                                /> */}
                                AZ
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-ios.svg"
                                    alt="iOS"
                                    width={60}
                                    height={60}
                                /> */}
                                GCC
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-android.svg"
                                    alt="Android"
                                    width={60}
                                    height={60}
                                /> */}
                                AF
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-kotlin.svg"
                                    alt="Kotlin"
                                    width={60}
                                    height={60}
                                /> */}
                                IR
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-swift.svg"
                                    alt="Swift"
                                    width={60}
                                    height={60}
                                /> */}
                                PK
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-c++.svg"
                                    alt="C++"
                                    width={60}
                                    height={60}
                                /> */}
                                IQ
                            </div>
                        </div>
                        <div className="text-gray flex grid-cols-9 text-base lg:grid">
                            <div className="border-border flex h-28 w-28 shrink-0 items-center justify-center border-x-2 border-b-2 text-center font-bold uppercase xl:h-36 xl:w-auto 2xl:h-[168px]">
                                CORRIDORS
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-figma.svg"
                                    alt="Figma"
                                    width={60}
                                    height={60}
                                /> */}
                                INSTC
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-sketch.svg"
                                    alt="Sketch"
                                    width={60}
                                    height={60}
                                /> */}
                                TITR
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-zeplin.svg"
                                    alt="Zeplin"
                                    width={60}
                                    height={60}
                                /> */}
                                TRACECA
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-ai.svg"
                                    alt="Adobe AI"
                                    width={60}
                                    height={60}
                                /> */}
                                CPEC
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-ps.svg"
                                    alt="Adobe PS"
                                    width={60}
                                    height={60}
                                /> */}
                                CAREC
                            </div>
                            <div className="border-border flex h-28 w-28 shrink-0 flex-col items-center justify-center border-r-2 border-b-2 text-center font-semibold xl:h-36 xl:w-auto 2xl:h-[168px]">
                                {/* <Image
                                    src="/images/icon-ae.svg"
                                    alt="Adobe AE"
                                    width={60}
                                    height={60}
                                /> */}
                                NSR
                            </div>
                        </div>
                    </div>
                </div>

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
