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
        {
            id: 7,
            title: 'AI & Automation Services',
            description:
                'Leverage artificial intelligence and robotic process automation (RPA) to boost productivity and reduce manual tasks.',
            image: '/images/icon-ai.png',
        },
        {
            id: 8,
            title: 'End-to-End Support',
            description:
                'We provide personalized services solutions that drive impact, streamline operations, and deliver real results.',
            image: '/images/icon-support.png',
        },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Service' },
                    ]}
                    title={
                        <>
                            Smart Solutions. <br />
                            <span>Proven Results.</span>
                        </>
                    }
                    description={
                        'We provide personalized services solutions that drive impact, streamline operations, and deliver real results.'
                    }
                />
                <LatestService services={services} />

                <div className="bg-primary relative px-4 py-16">
                    <div className="container">
                        <div className="border-border/10 grid items-center border-b text-white sm:grid-cols-2 sm:gap-0 sm:pb-8 lg:grid-cols-3 lg:gap-16">
                            <div className="border-border/10 relative order-2 py-6 sm:p-8 lg:order-none lg:border-r">
                                <h3 className="text-lg/5">
                                    Experienced IT Professionals
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 10; let interval = setInterval(() => { if (count < target) count += 1; else clearInterval(interval) }, 20)"
                                >
                                    <Counter
                                        target={10}
                                        interval={200}
                                        step={1}
                                        suffix="+"
                                        className="font-red-hat text-5xl font-semibold sm:text-6xl"
                                    ></Counter>

                                    <p className="mt-1">
                                        years of industry experience
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
                                <h2 className="text-white">Our Approach</h2>
                                <h3 className="text-white after:bg-white">
                                    Why Businesses Trust Us
                                </h3>
                            </div>
                            <div className="border-border/10 relative order-3 border-t py-6 sm:border-t-0 sm:border-l sm:p-8 lg:order-none">
                                <h3 className="text-lg/5">
                                    Projects delivered by our team
                                </h3>
                                <div
                                    className="mt-8"
                                    x-data="{ count: 0 }"
                                    x-init="let target = 400; let interval = setInterval(() => { if (count < target) count += 3; else clearInterval(interval) }, 1)"
                                >
                                    <Counter
                                        target={400}
                                        interval={1}
                                        step={1}
                                        suffix="+"
                                        className="font-red-hat text-5xl font-semibold sm:text-6xl"
                                    ></Counter>
                                    <p className="mt-1">projects delivered</p>
                                </div>
                                <Image
                                    src="/images/team-icon.png"
                                    alt="Growth icon"
                                    width={80}
                                    height={80}
                                    className="animate-customPulse absolute top-5 right-5 h-20"
                                />
                            </div>
                        </div>
                        <div className="grid text-white sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
                            <div className="border-border/10 relative order-2 border-b py-6 sm:border-r sm:border-b-0 sm:p-8 lg:order-none lg:border-r-0">
                                <div className="section-heading mb-6">
                                    <h3 className="text-2xl/7 font-medium text-white after:left-0 after:-translate-x-0 after:bg-white/60">
                                        Our Certifications
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        Microsoft Certified Professionals
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        AWS Certified
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        CompTIA Certified
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        Cisco Certified
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        Certified Information Systems Security
                                    </li>
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
                                        Our Core Values
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCheck className="mt-1 size-4! shrink-0" />
                                        We are committed to delivering
                                        high-quality work.
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCheck className="mt-1 size-4! shrink-0" />
                                        We are dedicated to our clients and
                                        their success.
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCheck className="mt-1 size-4! shrink-0" />
                                        We are passionate about our work and
                                        strive to exceed expectations.
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCheck className="mt-1 size-4! shrink-0" />
                                        We are innovative and always looking for
                                        new ways to improve our services.
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCheck className="mt-1 size-4! shrink-0" />
                                        We are transparent and honest in our
                                        dealings with clients.
                                    </li>
                                </ul>
                            </div>
                            <div className="relative order-3 py-6 sm:p-8 lg:order-none">
                                <div className="section-heading mb-6">
                                    <h3 className="text-2xl/7 font-medium text-white after:left-0 after:-translate-x-0 after:bg-white/60">
                                        Compliance Expertise
                                    </h3>
                                </div>
                                <ul className="text-gray-light/90 space-y-1.5">
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        HIPAA
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        GDPR
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        SOC 2 Type I & II
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        ISO/IEC 27001
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Award className="mt-1 size-4! shrink-0" />
                                        PCI-DSS
                                    </li>
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
