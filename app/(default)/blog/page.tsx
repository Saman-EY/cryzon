import HeroSection from '@/components/common/hero-section'
import SubscribePage from '@/components/common/subscribe-page'
import BlogCardsSection from '@/components/custom/blog-cards-section'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog',
        title: 'Blog | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Blog | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
    },
}

export const blogs = [
    {
        id: 1,
        title: 'Building a Strong Corporate Brand Identity',
        author: 'David Carter',
        date: 'Aug 09, 2025',
        category: 'Business Strategy',
        description:
            'Discover the latest layout trends, typography choices, and color palettes that create a professional and engaging online presence.',
        likes: 10,
        comments: 10,
    },
    {
        id: 2,
        title: 'Maximizing ROI with Targeted Marketing',
        author: 'Emily Rodriguez',
        date: 'Aug 12, 2025',
        category: 'Marketing',
        description:
            'Learn how to create high-impact campaigns that connect with your audience and deliver measurable business results.',
        likes: 8,
        comments: 5,
    },
    {
        id: 3,
        title: 'Modern Web Design Principles for Businesses',
        author: 'Olivia Bennett',
        date: 'Aug 15, 2025',
        category: 'Design Trends',
        description:
            'Explore clean layouts, responsive design techniques, and typography trends to enhance user experience.',
        likes: 12,
        comments: 7,
    },
    {
        id: 4,
        title: 'Leadership Skills for the Digital Era',
        author: 'James Parker',
        date: 'Aug 18, 2025',
        category: 'Leadership',
        description:
            'Develop the skills necessary to inspire, motivate, and guide teams in an ever-changing business environment.',
        likes: 9,
        comments: 6,
    },
    {
        id: 5,
        title: 'Leveraging AI to Improve Business Efficiency',
        author: 'Daniel Foster',
        date: 'Aug 21, 2025',
        category: 'Technology',
        description:
            'Discover how AI-powered tools can streamline workflows, reduce costs, and boost productivity across departments.',
        likes: 15,
        comments: 11,
    },
    {
        id: 6,
        title: 'Strategic Planning for Sustainable Growth',
        author: 'David Carter',
        date: 'Aug 23, 2025',
        category: 'Business Strategy',
        description:
            'Implement effective long-term plans that balance innovation with stability for ongoing success.',
        likes: 7,
        comments: 4,
    },
    {
        id: 7,
        title: 'Content Marketing that Converts',
        author: 'Emily Rodriguez',
        date: 'Aug 25, 2025',
        category: 'Marketing',
        description:
            'Craft compelling content that engages your audience and drives meaningful business results.',
        likes: 14,
        comments: 9,
    },
    {
        id: 8,
        title: 'The Future of UI/UX in Corporate Websites',
        author: 'Olivia Bennett',
        date: 'Aug 27, 2025',
        category: 'Design Trends',
        description:
            'Stay ahead with emerging design innovations that enhance both usability and brand appeal.',
        likes: 11,
        comments: 8,
    },
]

export const blogList = [
    {
        id: 1,
        image: '/images/blog1.jpg',
        title: 'Building a Strong Corporate Brand Identity',
        author: 'David Carter',
        date: 'Aug 09, 2025',
        category: 'Business Strategy',
        description:
            'Discover the latest layout trends, typography choices, and color palettes that create a professional and engaging online presence.',
        likes: 10,
        comments: 10,
    },
    {
        id: 2,
        image: '/images/blog2.jpg',
        title: 'Maximizing ROI with Targeted Marketing',
        author: 'Emily Rodriguez',
        date: 'Aug 12, 2025',
        category: 'Marketing',
        description:
            'Learn how to create high-impact campaigns that connect with your audience and deliver measurable business results.',
        likes: 8,
        comments: 5,
    },
    {
        id: 3,
        image: '/images/blog3.jpg',
        title: 'Modern Web Design Principles for Businesses',
        author: 'Olivia Bennett',
        date: 'Aug 15, 2025',
        category: 'Design Trends',
        description:
            'Explore clean layouts, responsive design techniques, and typography trends to enhance user experience.',
        likes: 12,
        comments: 7,
    },
    {
        id: 4,
        image: '/images/blog4.jpg',
        title: 'Leadership Skills for the Digital Era',
        author: 'James Parker',
        date: 'Aug 18, 2025',
        category: 'Leadership',
        description:
            'Develop the skills necessary to inspire, motivate, and guide teams in an ever-changing business environment.',
        likes: 9,
        comments: 6,
    },
    {
        id: 5,
        image: '/images/blog5.jpg',
        title: 'Leveraging AI to Improve Business Efficiency',
        author: 'Daniel Foster',
        date: 'Aug 21, 2025',
        category: 'Technology',
        description:
            'Discover how AI-powered tools can streamline workflows, reduce costs, and boost productivity across departments.',
        likes: 15,
        comments: 11,
    },
    {
        id: 6,
        image: '/images/blog6.jpg',
        title: 'Strategic Planning for Sustainable Growth',
        author: 'David Carter',
        date: 'Aug 23, 2025',
        category: 'Business Strategy',
        description:
            'Implement effective long-term plans that balance innovation with stability for ongoing success.',
        likes: 7,
        comments: 4,
    },
    {
        id: 7,
        image: '/images/blog1.jpg',
        title: 'Content Marketing that Converts',
        author: 'Emily Rodriguez',
        date: 'Aug 25, 2025',
        category: 'Marketing',
        description:
            'Craft compelling content that engages your audience and drives meaningful business results.',
        likes: 14,
        comments: 9,
    },
    {
        id: 8,
        image: '/images/blog2.jpg',
        title: 'The Future of UI/UX in Corporate Websites',
        author: 'Olivia Bennett',
        date: 'Aug 27, 2025',
        category: 'Design Trends',
        description:
            'Stay ahead with emerging design innovations that enhance both usability and brand appeal.',
        likes: 11,
        comments: 8,
    },
]

export default function Blog() {
    const categories = [
        'All',
        'Business Strategy',
        'Marketing',
        'Design Trends',
        'Leadership',
        'Technology',
    ]

    const blogItems: string[] = []
    for (const blog of blogList) {
        blogItems.push(`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "name": "${blog.title}",
            "image": "${process.env.NEXT_PUBLIC_APP_URL}${blog?.image}",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}/blog/blog-details",
            "datePublished": "${blog?.date}",
            "author": ${helper.getOrganizationJsonString()},
            "publisher": ${helper.getOrganizationJsonString()},
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${process.env.NEXT_PUBLIC_APP_URL}/blog/blog-details"
            }
        }`)
    }

    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Blog' },
                    ]}
                    title={<>Expert Tips For Growth & Success</>}
                    description={
                        'Discover the latest trends, strategies, and insights to help your business grow and succeed.'
                    }
                />

                <BlogCardsSection categories={categories} blogs={blogs} />

                <SubscribePage />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Blog | Cryzion",
                    "url": "${process.env.NEXT_PUBLIC_APP_URL}/blog",
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
                            "name": "Blog | Cryzion",
                            "item": "${process.env.NEXT_PUBLIC_APP_URL}/blog"
                        }
                        ]
                    },
                    "blogPost": [${blogItems.join(',')}]
                }`,
                }}
            />
        </>
    )
}
