import HeroSection from '@/components/common/hero-section'
import TrustedLeading from '@/components/common/trusted-leading'
import ProjectDetailsFAQ from '@/components/custom/project-details-faq'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Project details | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/project/project-details',
        title: 'Project details | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Project details | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/project/project-details`,
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
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Project', href: '/projects' },
                        { label: 'Project details' },
                    ]}
                    title={<>Project Overview and Execution Plan</>}
                    description={
                        'Explore the full scope of our project-from goals and milestones to the tools and teams driving progress.'
                    }
                />

                <div className="container flex-col items-start gap-12 space-y-12 lg:flex lg:flex-row lg:gap-16 lg:space-y-0">
                    <div className="grow">
                        <div className="from-gray-light to-gray-light flex flex-wrap justify-between gap-5 bg-gradient-to-r via-transparent p-6 sm:gap-10">
                            <div className="flex flex-col gap-1 font-medium">
                                <span>Project Name:</span>
                                <span className="text-primary text-lg/6">
                                    Digital Transformation Initiative
                                </span>
                            </div>
                            <div className="flex flex-col gap-1 font-medium sm:text-right">
                                <span>Client:</span>
                                <span className="text-primary text-lg/6">
                                    AB Technologies
                                </span>
                            </div>
                        </div>
                        <div className="section-heading mt-8 space-y-6 text-base/5.5 lg:mt-12 lg:text-lg/6">
                            <h2 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-4 text-2xl font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 md:text-3xl">
                                Project Objective:
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    To modernize ABC Corporation’s internal
                                    operations by implementing cloud-based
                                    solutions, automating workflows, and
                                    enhancing digital collaboration tools to
                                    increase efficiency by 30% within six
                                    months.
                                </p>
                                <p>
                                    We combine industry expertise with
                                    innovative approaches to help you navigate
                                    complex business landscapes and gain
                                    competitive advantage.
                                </p>
                            </div>
                        </div>
                        <div className="border-border divide-border relative mt-8 grid divide-y border sm:grid-cols-2 sm:divide-x">
                            <span className="absolute top-1/2 left-1/2 hidden size-14 -translate-1/2 border-0 bg-white lg:block"></span>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    Scope of Work:
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li>
                                        Assessment of current IT infrastructure
                                    </li>
                                    <li>
                                        Cloud migration strategy and execution
                                    </li>
                                    <li>
                                        Implementation of Microsoft 365 and
                                        Teams
                                    </li>
                                    <li>Integration of automation tools</li>
                                    <li>
                                        Employee training and change management
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 border-r-0 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    Key Deliverables:
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li>Workflow Automation Suite</li>
                                    <li>User Adoption & Training Report</li>
                                    <li>Cloud Infrastructure Setup</li>
                                    <li>Digital Collaboration Toolkit</li>
                                    <li>
                                        Final Project Evaluation & Performance
                                        Reports
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-5 border-b-0 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    Team Members / Departments Involved:
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li>IT Department</li>
                                    <li>Operations</li>
                                    <li>HR & Training</li>
                                    <li>External Consultants</li>
                                    <li>Testing</li>
                                </ul>
                            </div>
                            <div className="space-y-5 p-4 sm:px-8 sm:py-6">
                                <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                                    Tools & Technologies:
                                </h3>
                                <ul className="list-disc space-y-2.5 pl-4.5 lg:text-lg/6">
                                    <li>Microsoft Azure</li>
                                    <li>Microsoft 365 Suite</li>
                                    <li>Power Platform</li>
                                    <li>Slack (for cross-functional teams)</li>
                                    <li>Jira (for project tracking)</li>
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

                        <ProjectDetailsFAQ faqList={faqList} />
                    </div>
                    <div className="ml-auto grid shrink-0 gap-8 md:grid-cols-2 lg:w-96 lg:grid-cols-1">
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                Project details
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">
                                        Client Name:
                                    </span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        Mark Smith
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">
                                        Project manager:
                                    </span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        John Doe
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">Budget:</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        $20k USD
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">Location:</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        New York, USA
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">
                                        Project Year:
                                    </span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        15 Oct, 2023
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">End date:</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        30 June, 2025
                                    </span>
                                </div>
                                <div className="flex justify-between gap-2.5 font-medium">
                                    <span className="shrink-0">Duration:</span>
                                    <span className="text-primary inline-flex text-right break-all">
                                        850 hours
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-light space-y-6 p-6">
                            <h2 className="font-red-hat after:bg-primary relative pb-2 text-2xl font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/4">
                                Recent projects
                            </h2>
                            <div className="divide-gray/10 space-y-4 divide-y">
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        Software Development
                                    </span>
                                    <Link
                                        href="/project"
                                        className="text-primary text-lg/6 font-medium transition hover:opacity-90"
                                    >
                                        ERP Integration for Retail
                                    </Link>
                                    <div className="mt-0.5 flex items-center gap-1.5 text-sm/4.5">
                                        <p className="font-normal">Client:</p>
                                        <p>Mark Smith</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        Automation
                                    </span>
                                    <Link
                                        href="/project"
                                        className="text-primary text-lg/6 font-medium transition hover:opacity-90"
                                    >
                                        Automation for Manufacturing
                                    </Link>
                                    <div className="mt-0.5 flex items-center gap-1.5 text-sm/4.5">
                                        <p className="font-normal">Client:</p>
                                        <p>Harry Wood</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pb-4 font-medium">
                                    <span className="inline-flex w-fit bg-white/50 px-2.5 py-0.5 text-sm/4">
                                        Cloud Migration
                                    </span>
                                    <Link
                                        href="/project"
                                        className="text-primary text-lg/6 font-medium transition hover:opacity-90"
                                    >
                                        Cloud Migration Strategy
                                    </Link>
                                    <div className="mt-0.5 flex items-center gap-1.5 text-sm/4.5">
                                        <p className="font-normal">Client:</p>
                                        <p>Larry Page</p>
                                    </div>
                                </div>
                            </div>
                            <Button type="button" asChild>
                                <Link href="/project" className="w-full">
                                    <span>View All Projects</span>
                                </Link>
                            </Button>
                        </div>
                        <div className="border-border space-y-6 border">
                            <div className="relative h-110 overflow-hidden">
                                <Image
                                    src="/images/person-img.png"
                                    alt="Person img"
                                    width={382}
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
                                    <Button type="button" asChild>
                                        <Link
                                            href="/contact"
                                            className="mt-3.5 block w-full"
                                        >
                                            <span>
                                                Book a free consultation
                                            </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
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
                                "name": "Project details | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/project-details",
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
                                        "name": "Project",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/project"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Project details",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/project/project-details"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
