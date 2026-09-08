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
            title: 'IT Consulting',
            description:
                'Strategic guidance to align technology with your business goals. Improve efficiency, reduce costs, and scale effectively.',
            image: '/images/quick-solutions.png',
        },
        {
            id: 2,
            title: 'Cybersecurity Solutions',
            description:
                'Protect your business from threats with advanced security audits, firewall setup, threat detection, and data protection strategies.',
            image: '/images/icon-cybersecurity.png',
        },
        {
            id: 3,
            title: 'Cloud Services',
            description:
                'Cloud migration, management, and optimization using platforms like AWS, Azure, and Google Cloud.',
            image: '/images/cloud-computing.png',
        },
        {
            id: 4,
            title: 'Software Development',
            description:
                'Custom software and app development tailored to your business processes, from planning to deployment.',
            image: '/images/icon-software.png',
        },
        {
            id: 5,
            title: 'Managed IT Services',
            description:
                'Comprehensive 24/7 IT support, maintenance, and monitoring to ensure optimal system performance and uptime.',
            image: '/images/icon-mangement.png',
        },
        {
            id: 6,
            title: 'System Integration',
            description:
                'Seamlessly connect software, hardware, and third-party platforms to create a unified IT ecosystem.',
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
                    title={<>Business Strategy</>}
                    description={
                        'We provide personalized services solutions that drive impact, streamline operations, and deliver real results.'
                    }
                />
                <div className="container flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
                    <div className="grow">
                        <div className="prose prose-base lg:prose-lg lg:prose-h2:text-4xl prose-h2:first:mt-0 max-w-full">
                            <h2>
                                Empowering Your Business to Thrive in a Dynamic
                                World
                            </h2>
                            <p>
                                We provide innovative, scalable, and tailored
                                business solutions designed to streamline
                                operations, boost efficiency, and drive growth.
                                Our services are trusted by startups, SMEs, and
                                large enterprises seeking strategic and
                                operational excellence.
                            </p>
                            <p>
                                We combine industry expertise with innovative
                                approaches to help you navigate complex business
                                landscapes and gain competitive advantage.
                            </p>
                            <ol type="1">
                                <li>
                                    <h3>Business Process Optimization</h3>
                                    <p>
                                        We help eliminate inefficiencies and
                                        reduce costs while maintaining quality
                                        and compliance.
                                    </p>
                                </li>
                                <li>
                                    <h3>Strategy & Consulting</h3>
                                    <p>
                                        Leverage our expert consultants to
                                        define clear roadmaps, identify growth
                                        opportunities, and align your strategy
                                        with measurable goals.
                                    </p>
                                </li>
                                <li>
                                    <h3>Managed Services</h3>
                                    <p>
                                        Focus on your core business while we
                                        manage your back-end systems, support
                                        desks, network services, and more - all
                                        under SLAs tailored to your needs.
                                    </p>
                                </li>
                            </ol>
                            <Image
                                src="/images/service-img.jpg"
                                alt="Service img"
                                width={449}
                                height={300}
                            />

                            <h3>What We Do</h3>
                            <p>
                                We provide a full suite of business solutions
                                designed to address your operational,
                                technological, and strategic challenges:
                            </p>
                            <ul>
                                <li>
                                    <h4>ERP Implementation & Customization</h4>
                                    <p>
                                        Align your enterprise processes with
                                        robust ERP systems tailored to your
                                        industry.
                                    </p>
                                </li>
                                <li>
                                    <h4>
                                        Business Intelligence & Data Analytics
                                    </h4>
                                    <p>
                                        Gain real-time insights, improve
                                        forecasting, and make data-driven
                                        decisions.
                                    </p>
                                </li>
                                <li>
                                    <h4>Outsourcing & Shared Services</h4>
                                    <p>
                                        Access high-quality back-office
                                        operations with cost-efficiency and
                                        performance guarantees.
                                    </p>
                                </li>
                            </ul>
                            <h4>Partner With Us</h4>
                            <p>Ready to transform your business?</p>
                            <p>
                                Our experienced consultants, analysts, and
                                technologists are ready to help you architect
                                solutions that work — today and into the future.
                            </p>
                        </div>
                        <div className="border-border divide-border mt-8 grid divide-x divide-y border sm:grid-cols-2 sm:divide-y-0">
                            <div className="space-y-6 p-6">
                                <h3 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    Industries We Serve
                                </h3>
                                <ul className="space-y-3 font-medium lg:text-lg/6">
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Retail & E-Commerce
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Manufacturing & Logistics
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Corporate & Government
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Healthcare
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Education
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Financial Services
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6 p-6">
                                <h3 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-3 font-medium lg:text-lg/6">
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Expertise Across Domains
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Client-Centric Approach
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Proven Track Record
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        Custom-Tailored Solutions
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CircleCheckBig className="text-primary mt-0.75 size-4.5! shrink-0" />
                                        24/7 Support & Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto shrink-0 space-y-8 lg:w-90">
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                Recent services
                            </h2>
                            <div className="-ml-1 space-y-4">
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    Project Management
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    Digital Transformation
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    Enterprise Resource Planning
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    Market Research & Business Analysis
                                </Link>
                                <Link
                                    href="/services/service-details"
                                    className="inline-flex items-start gap-2 text-lg/6 text-black transition hover:opacity-80"
                                >
                                    <ChevronsRight className="mt-0.75 size-5! shrink-0 stroke-[1.5px]!" />
                                    End-to-End Support
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
                                    <p className="mt-1.5 font-semibold">
                                        We are here to help you with your
                                        business.
                                    </p>
                                    <Button
                                        type="button"
                                        className="!btn mt-3.5 w-full"
                                    >
                                        <span>Book a free consultation</span>
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
