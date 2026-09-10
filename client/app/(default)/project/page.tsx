import HeroSection from '@/components/common/hero-section'
import LogoAnimate from '@/components/common/logo-animate'
import TestimonialSection from '@/components/common/testimonial-section'
import FeaturedProjects from '@/components/custom/featured-projects'
import ProjectDeliveryWorkflow from '@/components/custom/project-delivery-workflow'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Project | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/project',
        title: 'Project | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Project | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/project`,
    },
}

export default function Projects() {
    const categories = [
        'All',
        'Software Development',
        'Cloud Migration',
        'Cybersecurity',
        'Automation',
        'Process Optimization',
    ]
    const projects = [
        {
            id: 1,
            title: 'ERP Integration for Retail',
            description:
                'Implemented SAP ERP to streamline operations across multiple departments.',
            image: '/images/project3.jpg',
            category: 'Software Development',
            url: '/project/project-details',
        },
        {
            id: 2,
            title: 'Digital Commerce Platform',
            description:
                'Launched an eCommerce platform integrated with inventory and CRM tools.',
            image: '/images/project4.jpg',
            category: 'Cybersecurity',
            url: '/project/project-details',
        },
        {
            id: 3,
            title: 'Automation for Manufacturing',
            description: 'Deployed RPA bots for invoice and order processing.',
            image: '/images/project5.jpg',
            category: 'Automation',
            url: '/project/project-details',
        },
        {
            id: 4,
            title: 'CRM Implementation for Finance Sector',
            description:
                'Designed and implemented a CRM system tailored for financial services.',
            image: '/images/project6.jpg',
            category: 'Software Development',
            url: '/project/project-details',
        },
        {
            id: 5,
            title: 'Cloud Migration Strategy',
            description: 'Migrated critical systems to AWS with zero downtime.',
            image: '/images/blog2.jpg',
            category: 'Cloud Migration',
            url: '/project/project-details',
        },
        {
            id: 6,
            title: 'Business Process Optimization',
            description:
                'Reengineered supply chain workflows to reduce overhead by 30%.',
            image: '/images/blog3.jpg',
            category: 'Process Optimization',
            url: '/project/project-details',
        },
        {
            id: 7,
            title: 'AI-Powered Customer Support Bot',
            description:
                'Integrated a multilingual AI chatbot to enhance customer support.',
            image: '/images/blog4.jpg',
            category: 'Automation',
            url: '/project/project-details',
        },
        {
            id: 8,
            title: 'Multi-Market Expansion Strategy',
            description:
                'Developed entry strategies for 4 new global markets in the healthcare sector.',
            image: '/images/blog5.jpg',
            category: 'Process Optimization',
            url: '/project/project-details',
        },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Projects' },
                    ]}
                    title={
                        <>
                            Our Projects, <br />
                            <span>Your Success.</span>
                        </>
                    }
                    description={
                        'Discover how we’ve helped businesses streamline operations, embrace digital transformation, and achieve sustained growth - across industries and geographies.'
                    }
                    descriptionClassName="w-full max-w-200"
                />

                <FeaturedProjects categories={categories} projects={projects} />
                <LogoAnimate />

                <ProjectDeliveryWorkflow />

                <TestimonialSection variant="light" />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Project | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/project",
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
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
