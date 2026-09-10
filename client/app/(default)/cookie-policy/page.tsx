import HeroSection from '@/components/common/hero-section'
import helper from '@/lib/helper'
import { Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Cookie policy | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/cookie-policy',
        title: 'Cookie policy | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Cookie policy | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/cookie-policy`,
    },
}

export default function CookiePolicy() {
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Cookie policy' },
                    ]}
                    title={<>Cookie Policy</>}
                />

                <div className="container">
                    <div className="prose prose-base prose-ol:ps-0 lg:prose-lg prose-h2:text-2xl border-border prose-ol:divide-y prose-ol:divide-border mx-auto w-full max-w-300 border-x px-2 sm:px-4 lg:px-8">
                        <ol className="list-none">
                            <li>
                                <h2>Introduction</h2>
                                <p>
                                    This Cookie Policy explains how we uses
                                    cookies and similar tracking technologies
                                    when you visit our website at
                                    <Link href="https://cryzion-nextjs.vercel.app/">
                                        www.cryzion.com
                                    </Link>
                                    .
                                </p>
                            </li>
                            <li>
                                <h2>What Are Cookies?</h2>
                                <p>
                                    Cookies are small text files that are stored
                                    on your device (computer, tablet, or mobile)
                                    when you visit a website. They help websites
                                    remember your preferences and improve your
                                    user experience.
                                </p>
                            </li>
                            <li>
                                <h2>Types of Cookies We Use</h2>
                                <p>We use the following types of cookies:</p>
                                <h4>1. Strictly Necessary Cookies</h4>
                                <p>
                                    These cookies are essential for the website
                                    to function properly. They enable basic
                                    features such as page navigation and access
                                    to secure areas.
                                </p>
                                <ul>
                                    <li>
                                        Example: Session cookies, login
                                        authentication
                                    </li>
                                </ul>
                                <h4>2. Performance & Analytics Cookies</h4>
                                <p>
                                    These cookies help us understand how
                                    visitors interact with our site by
                                    collecting and reporting anonymous data.
                                </p>
                                <ul>
                                    <li>Example: Google Analytics, Hotjar</li>
                                </ul>
                                <h4>3. Functionality Cookies</h4>
                                <p>
                                    These cookies remember your preferences and
                                    choices (like language or region) to
                                    personalize your experience.
                                </p>
                                <ul>
                                    <li>
                                        Example: Remembering your login or form
                                        entries
                                    </li>
                                </ul>
                                <h4>4. Marketing & Advertising Cookies</h4>
                                <p>
                                    These cookies track your browsing habits
                                    across websites to show relevant ads and
                                    marketing content.
                                </p>
                                <ul>
                                    <li>
                                        Example: LinkedIn Insight Tag, Facebook
                                        Pixels
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>Third-Party Cookies</h2>
                                <p>
                                    We may allow trusted third parties to place
                                    cookies on your device for analytics or
                                    advertising purposes. These third parties
                                    are subject to their own privacy policies
                                    and are not governed by ours.
                                </p>
                                <ul>
                                    <li>Google Analytics</li>
                                    <li>LinkedIn Ads</li>
                                    <li>Meta (Facebook) Ads</li>
                                    <li>
                                        Cloudflare (for security and
                                        performance)
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>How to Manage Your Cookie Preferences</h2>
                                <p>
                                    You can control and manage cookies in
                                    several ways:
                                </p>
                                <h4>1. Cookie Consent Banner</h4>
                                <p>
                                    When you first visit our website, a banner
                                    will prompt you to accept or customize your
                                    cookie preferences.
                                </p>
                                <h4>2. Browser Settings</h4>
                                <p>
                                    Most web browsers allow you to control
                                    cookies through settings. You can:
                                </p>
                                <ul>
                                    <li>Block all cookies</li>
                                    <li>Delete existing cookies</li>
                                    <li>Set preferences for specific sites</li>
                                </ul>
                            </li>
                            <li>
                                <h2>Changes to This Cookie Policy</h2>
                                <p>
                                    We may update this Cookie Policy from time
                                    to time to reflect changes in our practices
                                    or regulations. Any updates will be posted
                                    on this page with an updated effective date.
                                </p>
                            </li>
                            <li>
                                <h2>Contact Us</h2>
                                <p>
                                    If you have any questions about our use of
                                    cookies, please contact us:
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray grid shrink-0 place-content-center rounded-full">
                                        <Mail className="size-4" />
                                    </span>
                                    <Link href="mailto:support@example.com">
                                        support@example.com
                                    </Link>
                                </div>
                                <div className="mt-4 flex items-center gap-4">
                                    <span className="text-gray grid shrink-0 place-content-center rounded-full">
                                        <Phone className="size-4" />
                                    </span>
                                    <Link href="tel:+441512223344">
                                        +44 151 222 3344
                                    </Link>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Cookie policy | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/cookie-policy",
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
                                        "name": "Cookie policy",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/cookie-policy"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
