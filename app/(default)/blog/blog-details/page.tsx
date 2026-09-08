import HeroSection from '@/components/common/hero-section'
import SubscribePage from '@/components/common/subscribe-page'
import BlogDetailsComment from '@/components/custom/blog-details-comment'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog details | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog/blog-details',
        title: 'Blog details | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Blog details | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/blog-details`,
    },
}

export default function BlogDetails() {
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Blog details' },
                    ]}
                    title={<>Building a Strong Corporate Brand Identity</>}
                    category="Business Strategy"
                    date="Aug 09, 2025"
                    likes={10}
                    comments={8}
                />

                <BlogDetailsComment />

                <SubscribePage />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${process.env.NEXT_PUBLIC_APP_URL}/blog/blog-details"
                        },
                        "headline": "Building a Strong Corporate Brand Identity",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/blog2.jpg",
                        "author": ${helper.getOrganizationJsonString()},
                        "publisher": ${helper.getOrganizationJsonString()},
                        "datePublished": "October 10, 2024",
                        "description": "A corporate brand identity is more than just a logo or color scheme — it’s the personality of your business. A strong identity helps you stand out in a competitive market, build trust with customers, and create a lasting impression.",
                        "articleBody": "A corporate brand identity is more than just a logo or color scheme — it’s the personality of your business. A strong identity helps you stand out in a competitive market, build trust with customers, and create a lasting impression. In this article, we’ll explore the essential elements needed to build and maintain a strong corporate brand identity."
                        }`,
                }}
            />
        </>
    )
}
