import HeroSection from '@/components/common/hero-section'
import TestimonialSection from '@/components/common/testimonial-section'
import ExpertMembers from '@/components/custom/expert-members'
import OurJourney from '@/components/custom/our-journey'
import helper from '@/lib/helper'
import {
    ArrowUpRight,
    ChartNoAxesCombined,
    MoveRight,
    ShieldCheck,
    UsersRound,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'About us | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/about-us',
        title: 'About us | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'About us | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
    },
}

export default function AboutUs() {
    const MembersData = [
        {
            id: 1,
            name: 'David Carter',
            position: 'Founder, CEO',
            image: '/images/profile1.jpg',
        },
        {
            id: 2,
            name: 'Jessica Lee',
            position: 'Tech Lead',
            image: '/images/profile3.jpg',
        },
        {
            id: 3,
            name: 'Robert Johnson',
            position: 'Compliance officer',
            image: '/images/profile2.jpg',
        },
        {
            id: 4,
            name: 'Anna Collins',
            position: 'Product Director',
            image: '/images/profile4.jpg',
        },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'About us' },
                    ]}
                    title={'Smart and Effective Business Agency.'}
                    description={
                        'We deliver customized solutions that empower businesses to operate smarter, grow faster, and achieve lasting success.'
                    }
                />

                <div className="container">
                    <div className="flex flex-wrap gap-8 lg:flex-nowrap xl:gap-14">
                        <div className="w-full grow space-y-8">
                            <div className="section-heading" data-aos="fade-up">
                                <h2>Get to Know Us</h2>
                                <h3 className="after:left-0 after:translate-0 xl:text-3xl">
                                    Committed to Excellence, Powered by
                                    Innovation
                                </h3>
                            </div>
                            <div className="divide-border grid gap-2.5 divide-y">
                                <div className="flex items-start gap-3 py-2">
                                    <ShieldCheck className="mt-0.5 size-5! shrink-0" />
                                    <div>
                                        <h4 className="text-primary font-medium">
                                            24/7 Call Services Available
                                        </h4>
                                        <p>
                                            Our team is made up of seasoned
                                            professionals committed to
                                            excellence.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <ChartNoAxesCombined className="mt-0.5 size-5! shrink-0" />
                                    <div>
                                        <h4 className="text-primary font-medium">
                                            Great Skilled Consultant
                                        </h4>
                                        <p>
                                            Our consultants bring deep industry
                                            knowledge and hands-on experience
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <UsersRound className="mt-0.5 size-5! shrink-0" />
                                    <div>
                                        <h4 className="text-primary font-medium">
                                            Expert Team Members
                                        </h4>
                                        <p>
                                            Our team is made up of seasoned
                                            professionals committed to
                                            excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-72 w-full shrink-0 overflow-hidden lg:h-110 lg:w-100">
                            <Image
                                src="/images/blog2.jpg"
                                alt="Project img"
                                width={400}
                                height={440}
                                style={{
                                    clipPath:
                                        'polygon(20% 0%,100% 0%,100% 0%,100% 80%,80% 100%,0% 100%,0% 100%,0% 20%)',
                                }}
                                className="h-full w-full object-cover object-center"
                            />
                            <Link
                                href="/services"
                                className="group bg-primary/30 absolute top-1/2 left-1/2 grid shrink-0 -translate-1/2 place-content-center rounded-full backdrop-blur-lg"
                            >
                                <Image
                                    src="/images/cta-btn-circle.png"
                                    alt="cta-btn-circle"
                                    width={112}
                                    height={112}
                                    className="mx-auto size-24 animate-[spin_8s_linear_infinite] lg:size-28"
                                />
                                <ArrowUpRight className="group-hover:bg-primary/30 absolute top-1/2 left-1/2 size-7! -translate-1/2 rounded-full text-white duration-300 group-hover:size-8!" />
                            </Link>
                        </div>
                        <div className="w-full grow space-y-6 lg:space-y-10">
                            <div className="space-y-8">
                                <div
                                    className="section-heading"
                                    data-aos="fade-up"
                                >
                                    <h2>About Us</h2>
                                    <h3 className="after:left-0 after:translate-0 xl:text-3xl">
                                        Driving Digital Innovation for a Smarter
                                        Future
                                    </h3>
                                </div>
                                <p>
                                    At our company, we believe technology should
                                    drive growth, not complexity. As a
                                    forward-thinking IT services company, we
                                    specialize in delivering innovative,
                                    reliable, and scalable solutions that help
                                    businesses operate smarter, faster, and more
                                    securely.
                                </p>
                                <p>
                                    Founded in 2008, Cryzion is a team of
                                    experienced IT professionals, engineers, and
                                    consultants dedicated to transforming
                                    businesses through technology. From startups
                                    to enterprises, we partner with clients
                                    across industries to modernize
                                    infrastructure, develop custom software, and
                                    secure digital ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:px-5 xl:px-10">
                        <span className="via-border bg-border absolute inset-x-0 bottom-0 h-0.5"></span>
                        <div className="divide-border mx-auto mt-22 grid w-full max-w-7xl grid-cols-1 gap-y-16 divide-x-2 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
                            <div className="border-border group relative flex flex-col space-y-4 border-y-2 border-l-2 px-4 pt-14 pb-6 2xl:px-6">
                                <div className="bg-gray-light absolute -top-10 left-4 mx-auto grid size-20 place-content-center duration-300 sm:-left-0.5 sm:group-hover:left-4 2xl:group-hover:left-6">
                                    <Image
                                        src="/images/quick-solutions.png"
                                        alt="Quick solutions"
                                        width={48}
                                        height={48}
                                        className="size-12"
                                    />
                                </div>
                                <h2 className="text-primary font-red-hat text-xl font-bold sm:min-h-14 md:min-h-16 md:text-2xl">
                                    Rapid IT Solutions
                                </h2>
                                <p>
                                    We resolve technical challenges swiftly,
                                    helping your business maintain momentum and
                                    avoid costly delays.
                                </p>
                                <Link
                                    href="/services/service-details"
                                    className="group/arrow text-primary mt-auto flex items-center gap-1.5 hover:opacity-80"
                                >
                                    <span className="shrink-0">Learn more</span>
                                    <span className="bg-border h-px grow-0 duration-300 ease-in-out group-hover/arrow:grow"></span>
                                    <MoveRight className="size-5 shrink-0" />
                                </Link>
                            </div>
                            <div className="border-border group relative flex flex-col space-y-4 border-y-2 border-l-2 px-4 pt-14 pb-6 sm:border-l-0 2xl:px-6">
                                <div className="bg-gray-light absolute -top-10 left-4 mx-auto grid size-20 place-content-center duration-300 sm:-left-0.5 sm:group-hover:left-4 2xl:group-hover:left-6">
                                    <Image
                                        src="/images/expert-advice.png"
                                        alt="Expert advice"
                                        width={48}
                                        height={48}
                                        className="size-12"
                                    />
                                </div>
                                <h2 className="text-primary font-red-hat text-xl font-bold sm:min-h-14 md:min-h-16 md:text-2xl">
                                    Industry Expertise
                                </h2>
                                <p>
                                    Gain access to deep IT knowledge and trusted
                                    advice from professionals who understand
                                    your sector and its unique needs.
                                </p>
                                <Link
                                    href="/services/service-details"
                                    className="group/arrow text-primary mt-auto flex items-center gap-1.5 hover:opacity-80"
                                >
                                    <span className="shrink-0">Learn more</span>
                                    <span className="bg-border h-px grow-0 duration-300 ease-in-out group-hover/arrow:grow"></span>
                                    <MoveRight className="size-5 shrink-0" />
                                </Link>
                            </div>
                            <div className="border-border group relative flex flex-col space-y-4 border-y-2 border-l-2 px-4 pt-14 pb-6 lg:border-l-0 2xl:px-6">
                                <div className="bg-gray-light absolute -top-10 left-4 mx-auto grid size-20 place-content-center duration-300 sm:-left-0.5 sm:group-hover:left-4 2xl:group-hover:left-6">
                                    <Image
                                        src="/images/strategic-planning.png"
                                        alt="Strategic planning"
                                        width={48}
                                        height={48}
                                        className="size-12"
                                    />
                                </div>
                                <h2 className="text-primary font-red-hat text-xl font-bold sm:min-h-14 md:min-h-16 md:text-2xl">
                                    Strategic IT Roadmapping
                                </h2>
                                <p>
                                    We align technology with your business
                                    vision, planning future-ready solutions that
                                    support scalability and innovation.
                                </p>
                                <Link
                                    href="/services/service-details"
                                    className="group/arrow text-primary mt-auto flex items-center gap-1.5 hover:opacity-80"
                                >
                                    <span className="shrink-0">Learn more</span>
                                    <span className="bg-border h-px grow-0 duration-300 ease-in-out group-hover/arrow:grow"></span>
                                    <MoveRight className="size-5 shrink-0" />
                                </Link>
                            </div>
                            <div className="border-border group relative flex flex-col space-y-4 border-y-2 border-r-2 border-l-2 px-4 pt-14 pb-6 sm:border-l-0 2xl:px-6">
                                <div className="bg-gray-light absolute -top-10 left-4 mx-auto grid size-20 place-content-center duration-300 sm:-left-0.5 sm:group-hover:left-4 2xl:group-hover:left-6">
                                    <Image
                                        src="/images/efficient-operations.png"
                                        alt="Efficient operations"
                                        width={48}
                                        height={48}
                                        className="size-12"
                                    />
                                </div>
                                <h2 className="text-primary font-red-hat text-xl font-bold sm:min-h-14 md:min-h-16 md:text-2xl">
                                    Optimized Operations
                                </h2>
                                <p>
                                    We enhance the efficiency of your systems
                                    and processes, reducing waste and improving
                                    overall performance.
                                </p>
                                <Link
                                    href="/services/service-details"
                                    className="group/arrow text-primary mt-auto flex items-center gap-1.5 hover:opacity-80"
                                >
                                    <span className="shrink-0">Learn more</span>
                                    <span className="bg-border h-px grow-0 duration-300 ease-in-out group-hover/arrow:grow"></span>
                                    <MoveRight className="size-5 shrink-0" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <OurJourney />

                <div className="overflow-hidden px-4 sm:px-8">
                    <div className="bg-primary relative py-16">
                        <Image
                            src="/images/star.svg"
                            alt="grid"
                            width={80}
                            height={86}
                            className="absolute top-20 right-20 hidden w-20 animate-[spin_8s_linear_infinite] sm:block"
                        />
                        <div className="absolute -top-35 -left-10 h-50 w-30 rotate-45 bg-white md:-top-20"></div>
                        <div className="absolute -right-20 -bottom-25 h-30 w-50 -rotate-45 bg-white md:-bottom-10"></div>
                        <div className="container">
                            <div
                                className="section-heading text-center"
                                data-aos="fade-up"
                            >
                                <h2 className="text-white">Awards</h2>
                                <h3 className="text-white after:bg-white">
                                    Awards and Recognition
                                </h3>
                            </div>

                            <p className="mx-auto mt-8 w-full max-w-4xl text-center text-lg text-white lg:mt-14 lg:text-xl">
                                We take pride in delivering exceptional
                                technology solutions — and the industry has
                                taken notice. Over the years, our dedication to
                                innovation, client satisfaction, and operational
                                excellence has earned us several prestigious
                                awards and certifications.
                            </p>
                            <div className="font-red-hat mx-auto mt-10 grid w-full max-w-5xl flex-wrap items-center justify-center divide-y divide-dashed divide-white/20 text-white sm:mt-14 sm:flex sm:gap-x-8 sm:divide-y-0 lg:mt-0 lg:flex-nowrap lg:justify-between xl:gap-12">
                                <div className="flex shrink-0 flex-col items-center gap-2.5 px-6 py-8">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/award-left.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                        <div className="w-30 shrink-0 text-center">
                                            <p className="text-xl">
                                                Tech Excellence Awards
                                            </p>
                                        </div>
                                        <Image
                                            src="/images/award-right.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                    </div>
                                    <div className="flex w-full items-center justify-center gap-3">
                                        <span className="block h-px w-12 bg-white/20"></span>
                                        <p className="shrink-0 text-lg font-semibold">
                                            2024
                                        </p>
                                        <span className="block h-px w-12 bg-white/20"></span>
                                    </div>
                                </div>
                                <span className="hidden h-30 w-px border-l border-dashed border-white/20 sm:block"></span>
                                <div className="flex shrink-0 flex-col items-center gap-2.5 px-6 py-8 lg:pt-24">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/award-left.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                        <div className="w-30 shrink-0 text-center">
                                            <p className="text-xl">
                                                CloudTech Global Awards
                                            </p>
                                        </div>
                                        <Image
                                            src="/images/award-right.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                    </div>
                                    <div className="flex w-full items-center justify-center gap-3">
                                        <span className="block h-px w-12 bg-white/20"></span>
                                        <p className="shrink-0 text-lg font-semibold">
                                            2023
                                        </p>
                                        <span className="block h-px w-12 bg-white/20"></span>
                                    </div>
                                </div>
                                <span className="hidden h-30 w-px border-l border-dashed border-white/20 lg:block"></span>
                                <div className="flex shrink-0 flex-col items-center gap-2.5 border-dashed border-white/20 px-6 py-8 sm:border-t lg:border-t-0">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/award-left.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                        <div className="w-30 shrink-0 text-center">
                                            <p className="text-xl">
                                                Hack The Future Awards
                                            </p>
                                        </div>
                                        <Image
                                            src="/images/award-right.png"
                                            alt="Award img"
                                            width={48}
                                            height={123}
                                            className="h-auto w-9 animate-pulse lg:w-12"
                                        />
                                    </div>
                                    <div className="flex w-full items-center justify-center gap-3">
                                        <span className="block h-px w-12 bg-white/20"></span>
                                        <p className="shrink-0 text-lg font-semibold">
                                            2022
                                        </p>
                                        <span className="block h-px w-12 bg-white/20"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ExpertMembers MembersData={MembersData} />

                <TestimonialSection variant="dark" />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "About us | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/about-us",
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
                                        "name": "About us",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
