import HeroSection from '@/components/common/hero-section'
import LogoAnimate from '@/components/common/logo-animate'
import TestimonialSection from '@/components/common/testimonial-section'
import FeaturedProjects from '@/components/custom/featured-projects'
import ProjectDeliveryWorkflow from '@/components/custom/project-delivery-workflow'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Corridor | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/corridor',
        title: 'Corridor | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Corridor | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/corridor`,
    },
}

export default function Projects() {
    const categories = [
        'All',
        'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
        'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
        'NORTHERN EURASIAN CORRIDOR',
        'CENTRAL ASIAN TRANSPORT CORRIDORS',
        'CAUCASUS–TÜRKİYE CORRIDOR',
    ]
    const projects = [
        {
            id: 1,
            title: 'RUSSIA → AZERBAIJAN → IRAN',
            description: 'Rail • Road • Multimodal',
            description2:
                'Direct overland routing connecting Russian cargo with Iranian terminals and onward regional markets.',
            image: '/images/project3.jpg',
            category: 'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
            url: '/project/project-details',
        },
        {
            id: 2,
            title: 'RUSSIA → CASPIAN SEA → IRAN',
            description: 'Sea • Rail • Multimodal',
            description2:
                'Caspian feeder connections combining maritime and rail transport for efficient north–south cargo movement.',
            image: '/images/project4.jpg',
            category: 'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
            url: '/project/project-details',
        },
        {
            id: 3,
            title: 'IRAN → GULF STATES',
            description: 'Road • Sea • Multimodal',
            description2:
                'Integrated routing from Iranian gateways to major Gulf ports and distribution markets.',
            image: '/images/project5.jpg',
            category: 'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
            url: '/project/project-details',
        },
        {
            id: 4,
            title: 'RUSSIA → IRAN → INDIA',
            description: 'Rail • Sea • Road • Multimodal',
            description2:
                'A strategic north–south connection linking Russian cargo with Indian markets through Iranian transit infrastructure.',
            image: '/images/project5.jpg',
            category: 'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
            url: '/project/project-details',
        },
        {
            id: 5,
            title: 'BULK & CONTAINERIZED CARGO',
            description:
                'Grain • Fertilizers • Chemicals • Industrial Goods • Containers',
            description2:
                'Handling structured cargo flows across multiple transport modes and border points.',
            image: '/images/project6.jpg',
            category: 'INTERNATIONAL NORTH–SOUTH TRANSPORT CORRIDOR (INSTC)',
            url: '/project/project-details',
        },

        {
            id: 6,
            title: 'RUSSIA → CASPIAN SEA → AZERBAIJAN',
            description: 'Rail • Sea • Multimodal',
            description2:
                'A coordinated Caspian crossing connecting Russian rail networks with Azerbaijan’s western transport routes.',
            image: '/images/blog2.jpg',
            category: 'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
            url: '/project/project-details',
        },
        {
            id: 7,
            title: 'KAZAKHSTAN → CASPIAN SEA → AZERBAIJAN',
            description: 'Rail • Sea • Multimodal',
            description2:
                'Multimodal access from Central Asia through Caspian ports into the South Caucasus.',
            image: '/images/blog3.jpg',
            category: 'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
            url: '/project/project-details',
        },
        {
            id: 8,
            title: 'AZERBAIJAN → GEORGIA → TÜRKİYE',
            description: 'Rail • Road • Multimodal',
            description2:
                'Overland connectivity across the Caucasus toward Türkiye and onward European destinations.',
            image: '/images/blog4.jpg',
            category: 'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
            url: '/project/project-details',
        },
        {
            id: 9,
            title: 'TÜRKİYE → EUROPE',
            description: 'Rail • Road • Multimodal',
            description2:
                'Integrated land connections supporting cargo movement from Türkiye into European markets.',
            image: '/images/blog5.jpg',
            category: 'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
            url: '/project/project-details',
        },
        {
            id: 10,
            title: 'CONTAINERIZED & GENERAL CARGO',
            description:
                'Containers • Machinery • Industrial Goods • Commercial Cargo Flexible handling for containerized, project and general cargo moving across the corridor.',
            image: '/images/blog2.jpg',
            category: 'TRANS-CASPIAN INTERNATIONAL TRANSPORT ROUTE',
            url: '/project/project-details',
        },

        {
            id: 11,
            title: 'CHINA → KAZAKHSTAN → RUSSIA',
            description: 'Rail • Multimodal',
            description2:
                'Rail-based east–west connectivity for structured cargo flows entering the Russian transport network.',
            image: '/images/project6.jpg',
            category: 'NORTHERN EURASIAN CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 12,
            title: 'CHINA → RUSSIA',
            description: 'Rail • Road • Multimodal',
            description2:
                'Direct multimodal solutions for cargo moving between Chinese production centers and Russian markets.',
            image: '/images/project5.jpg',
            category: 'NORTHERN EURASIAN CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 13,
            title: 'RUSSIA → BELARUS → EUROPE',
            description: 'Rail • Road • Multimodal',
            description2:
                'Western routing through Belarus connecting Russian cargo with European-facing logistics networks.',
            image: '/images/project4.jpg',
            category: 'NORTHERN EURASIAN CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 14,
            title: 'CONTAINERIZED CARGO',
            description: 'FCL • Industrial Cargo • Machinery • Consumer Goods',
            description2:
                'Container solutions designed for predictable long-distance movement and intermodal transfers.',
            image: '/images/project3.jpg',
            category: 'NORTHERN EURASIAN CORRIDOR',
            url: '/project/project-details',
        },

        {
            id: 15,
            title: 'RUSSIA → KAZAKHSTAN',
            description: 'Rail • Road • Multimodal',
            description2:
                'A primary regional connection for Russian cargo entering Central Asian distribution networks.',
            image: '/images/project3.jpg',
            category: 'CENTRAL ASIAN TRANSPORT CORRIDORS',
            url: '/project/project-details',
        },

        {
            id: 16,
            title: 'KAZAKHSTAN → UZBEKISTAN',
            description: 'Rail • Road • Multimodal',
            description2:
                'Reliable southbound routing connecting Kazakhstan with Uzbekistan and regional trade hubs.',
            image: '/images/project4.jpg',
            category: 'CENTRAL ASIAN TRANSPORT CORRIDORS',
            url: '/project/project-details',
        },
        {
            id: 17,
            title: 'CENTRAL ASIA → AFGHANISTAN',
            description: 'Rail • Road • Multimodal',
            description2:
                'Controlled multimodal routing for cargo moving toward Afghan border and inland markets.',
            image: '/images/project5.jpg',
            category: 'CENTRAL ASIAN TRANSPORT CORRIDORS',
            url: '/project/project-details',
        },
        {
            id: 18,
            title: 'BULK & BAGGED CARGO',
            description:
                'Grain • Agricultural Products • Fertilizers • Jumbo Bags',
            description2:
                'Specialized handling of dry bulk and bagged commodities across regional supply chains.',
            image: '/images/project6.jpg',
            category: 'CENTRAL ASIAN TRANSPORT CORRIDORS',
            url: '/project/project-details',
        },
        {
            id: 19,
            title: 'INDUSTRIAL & COMMERCIAL CARGO',
            description: 'Machinery • Raw Materials • General Cargo',
            description2:
                'Transport solutions for industrial inputs, equipment and commercial shipments.',
            image: '/images/project5.jpg',
            category: 'CENTRAL ASIAN TRANSPORT CORRIDORS',
            url: '/project/project-details',
        },
        {
            id: 20,
            title: 'RUSSIA → CASPIAN SEA → AZERBAIJAN',
            description: 'Sea • Rail • Multimodal',
            description2:
                'Caspian connectivity linking Russian cargo with Azerbaijan and the Trans-Caucasus network.',
            image: '/images/project3.jpg',
            category: 'CAUCASUS–TÜRKİYE CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 20,
            title: 'AZERBAIJAN → GEORGIA',
            description: 'Rail • Road • Multimodal',
            description2:
                'A key Caucasus connection supporting continuous cargo movement between the Caspian and Black Sea regions.',
            image: '/images/project4.jpg',
            category: 'CAUCASUS–TÜRKİYE CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 21,
            title: 'GEORGIA → TÜRKİYE',
            description: 'Rail • Road • Multimodal',
            description2:
                'Cross-border routing connecting Georgian logistics nodes with Türkiye’s transport infrastructure.',
            image: '/images/project5.jpg',
            category: 'CAUCASUS–TÜRKİYE CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 22,
            title: 'TÜRKİYE → EUROPE',
            description: 'Rail • Road • Multimodal',
            description2:
                'A strategic westbound connection for cargo entering European markets through Türkiye.',
            image: '/images/project6.jpg',
            category: 'CAUCASUS–TÜRKİYE CORRIDOR',
            url: '/project/project-details',
        },
        {
            id: 23,
            title: 'SPECIALIZED CARGO',
            description:
                'ISO Tanks • Chemicals • Bulk Cargo • Industrial Goods',
            description2:
                'Dedicated logistics for controlled, liquid, bulk and specialized industrial shipments.',
            image: '/images/project3.jpg',
            category: 'CAUCASUS–TÜRKİYE CORRIDOR',
            url: '/project/project-details',
        },

        // {
        //     image: '/images/project3.jpg',
        // },
        // {
        //     image: '/images/project4.jpg',
        // },
        // {
        //     image: '/images/project5.jpg',
        // },
        // {
        //     image: '/images/project6.jpg',
        // },
        // {
        //     image: '/images/blog2.jpg',
        // },
        // {
        //     image: '/images/blog3.jpg',
        // },
        // {
        //     image: '/images/blog4.jpg',
        // },
        // {
        //     image: '/images/blog5.jpg',
        // },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Corridor' },
                    ]}
                    title={
                        <>
                            TRADE ROUTES IN MOTION, <br />
                            <span className="text-lg">RUSSIA → THE WORLD</span>
                        </>
                    }
                    description={'Connecting Russian Cargo to Global Markets'}
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
