import HeroSection from '@/components/common/hero-section'
import helper from '@/lib/helper'
import { Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Terms & Coditions | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/terms-conditions',
        title: 'Terms & Coditions | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Terms & Coditions | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terms-conditions`,
    },
}

export default function TermsConditions() {
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Terms & Coditions' },
                    ]}
                    title={<>Terms & Conditions</>}
                />

                <div className="container">
                    <div className="prose prose-base prose-ol:ps-0 lg:prose-lg prose-h2:text-2xl border-border prose-ol:divide-y prose-ol:divide-border mx-auto w-full max-w-300 border-x px-2 sm:px-4 lg:px-8">
                        <ol className="list-none">
                            <li>
                                <h2>Introduction</h2>
                                <p>
                                    Welcome to Cryzion. These Terms and
                                    Conditions (&quot;Terms&quot;) govern your
                                    use of our website, services, and products.
                                    By accessing or using our services, you
                                    agree to be bound by these Terms.
                                </p>
                                <p>
                                    If you do not agree with any part of these
                                    Terms, you must not use our services.
                                </p>
                            </li>
                            <li>
                                <h2>Services</h2>
                                <p>
                                    We offer IT services including but not
                                    limited to:
                                </p>
                                <ul>
                                    <li>IT Consulting</li>
                                    <li>Software Development</li>
                                    <li>Infrastructure Management</li>
                                    <li>Cloud Services</li>
                                    <li>Cybersecurity Services</li>
                                    <li>System Integration</li>
                                    <li>AI & Automation Services</li>
                                    <li>Technical Support</li>
                                </ul>
                                <p>
                                    The specific terms related to each service
                                    may be outlined in a separate Service
                                    Agreement or Statement of Work.
                                </p>
                            </li>
                            <li>
                                <h2>Use of Website and Services</h2>
                                <p>You agree to:</p>
                                <ul>
                                    <li>
                                        Use our website and services for lawful
                                        purposes only.
                                    </li>
                                    <li>
                                        Not engage in any activity that
                                        interferes with or disrupts the
                                        services.
                                    </li>
                                    <li>
                                        Not attempt to gain unauthorized access
                                        to any portion of our systems or
                                        networks.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>Intellectual Property</h2>
                                <p>
                                    All content on our website and within our
                                    services—including but not limited to text,
                                    graphics, logos, software, and documentation
                                    is the property of Crizon its licensors and
                                    is protected by intellectual property laws.
                                </p>
                            </li>
                            <li>
                                <h2>Confidentiality</h2>
                                <p>
                                    Both parties agree to keep confidential all
                                    non-public information disclosed during the
                                    course of business, including technical,
                                    commercial, and strategic information.
                                </p>
                            </li>

                            <li>
                                <h2>Data Protection & Privacy</h2>
                                <p>
                                    We handle all client data in accordance with
                                    applicable data protection laws, including
                                    the GDPR and any other local privacy
                                    regulations. Please refer to our Privacy
                                    Policy for more information.
                                </p>
                            </li>
                            <li>
                                <h2>Payment & Fees</h2>
                                <p>
                                    All service fees, billing cycles, and
                                    payment terms will be detailed in the
                                    relevant agreement. Late payments may incur
                                    interest or service suspension.
                                </p>
                            </li>
                            <li>
                                <h2>Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law,
                                    [Your Company Name] will not be liable for
                                    any indirect, incidental, special, or
                                    consequential damages arising out of or
                                    related to your use of our services.
                                </p>
                            </li>
                            <li>
                                <h2>Changes to Terms</h2>
                                <p>
                                    We may update these Terms from time to time.
                                    Changes will be posted on our website and
                                    become effective upon publication. Continued
                                    use of our services after changes are posted
                                    constitutes your acceptance.
                                </p>
                            </li>
                            <li>
                                <h2>Contact Us</h2>
                                <p>
                                    If you have any questions about these Terms,
                                    please contact us at:
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
                                "name": "Terms & Coditions | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/terms-conditions",
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
                                        "name": "Terms & Coditions",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/terms-conditions"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
