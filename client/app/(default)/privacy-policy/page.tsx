import HeroSection from '@/components/common/hero-section'
import helper from '@/lib/helper'
import { Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Privacy policy | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy',
        title: 'Privacy policy | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Privacy policy | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    },
}

export default function PrivacyPolicy() {
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Privacy policy' },
                    ]}
                    title={<>Privacy Policy</>}
                />
                <div className="container">
                    <div className="prose prose-base prose-ol:ps-0 lg:prose-lg prose-h2:text-2xl border-border prose-ol:divide-y prose-ol:divide-border mx-auto w-full max-w-300 border-x px-2 sm:px-4 lg:px-8">
                        <ol className="list-none">
                            <li>
                                <h2>Introduction</h2>
                                <p>
                                    We respects your privacy and is committed to
                                    protecting your personal data. This Privacy
                                    Policy explains how we collect, use,
                                    disclose, and safeguard your information
                                    when you visit our website, use our
                                    services, or engage with us in any way.
                                </p>
                                <p>
                                    If you do not agree with any part of these
                                    Terms, you must not use our services.
                                </p>
                            </li>
                            <li>
                                <h2>Information We Collect</h2>
                                <p>
                                    We may collect the following types of
                                    information:
                                </p>
                                <h4>1. Personal Information</h4>
                                <ul>
                                    <li>Name, email address, phone number</li>
                                    <li>Job title, company name</li>
                                    <li>Billing and payment details</li>
                                    <li>IP address and location data</li>
                                    <li>
                                        Any personal data you provide through
                                        contact forms, support tickets, or email
                                    </li>
                                </ul>
                                <h4>2. Technical & Usage Data</h4>
                                <ul>
                                    <li>Browser type and version</li>
                                    <li>Operating system and device type</li>
                                    <li>Website usage patterns</li>
                                    <li>
                                        Cookies and similar tracking
                                        technologies
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>How We Use Your Information</h2>
                                <p>We use your information to:</p>
                                <ul>
                                    <li>Provide and manage our IT services</li>
                                    <li>
                                        Respond to inquiries and provide
                                        customer support
                                    </li>
                                    <li>Improve our website and services</li>
                                    <li>
                                        Send service updates or marketing
                                        communications
                                    </li>
                                    <li>
                                        Comply with legal or regulatory
                                        requirements
                                    </li>
                                    <li>
                                        Ensure system security and prevent fraud
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>Sharing & Disclosure</h2>
                                <p>
                                    We do not sell or rent your personal data.
                                    We may share your information with:
                                </p>
                                <ul>
                                    <li>
                                        Trusted service providers (e.g. cloud
                                        platforms, payment processors)
                                    </li>
                                    <li>
                                        Legal authorities when required by law
                                        or to enforce our rights
                                    </li>
                                    <li>
                                        Business partners as part of joint
                                        ventures or subcontracted services
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>Data Security</h2>
                                <p>
                                    We implement appropriate technical and
                                    organizational measures to protect your data
                                    against unauthorized access, disclosure, or
                                    loss. These include:
                                </p>
                                <ul>
                                    <li>SSL/TLS encryption</li>
                                    <li>Firewalls and intrusion detection</li>
                                    <li>Access control and audit logs</li>
                                    <li>Regular security audits and updates</li>
                                </ul>
                            </li>

                            <li>
                                <h2>Your Rights</h2>
                                <p>
                                    Depending on your location, you may have the
                                    following rights:
                                </p>
                                <ul>
                                    <li>Access to your personal data</li>
                                    <li>
                                        Correction of inaccurate or incomplete
                                        data
                                    </li>
                                    <li>Deletion of your personal data</li>
                                    <li>
                                        Restriction or objection to processing
                                    </li>
                                </ul>
                                <p>
                                    To exercise these rights, contact us
                                    at&nbsp;
                                    <Link href="mailto:support@example.com">
                                        support@example.com
                                    </Link>
                                    .
                                </p>
                            </li>
                            <li>
                                <h2>Cookies Policy</h2>
                                <p>
                                    We use cookies to improve website
                                    performance and enhance user experience. You
                                    can control cookie preferences through your
                                    browser settings or our cookie banner.
                                </p>
                                <p>
                                    For more details, please see our&nbsp;
                                    <Link href="/cookie-policy" target="_blank">
                                        Cookies Policy
                                    </Link>
                                    .
                                </p>
                            </li>
                            <li>
                                <h2>Third-Party Links</h2>
                                <p>
                                    Our website may contain links to external
                                    sites. We are not responsible for the
                                    privacy practices or content of such
                                    websites.
                                </p>
                            </li>
                            <li>
                                <h2>International Data Transfers</h2>
                                <p>
                                    If you are accessing our services from
                                    outside our primary operating region, your
                                    data may be transferred to and processed in
                                    other countries with different data
                                    protection laws.
                                </p>
                            </li>
                            <li>
                                <h2>Contact Us</h2>
                                <p>
                                    If you have questions or concerns about this
                                    Privacy Policy or our data practices, please
                                    contact us:
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
                                "name": "Privacy policy | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy",
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
                                        "name": "Privacy policy",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
