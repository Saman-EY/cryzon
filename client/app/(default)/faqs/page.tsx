import FaqSection from '@/components/common/faq-section'
import HeroSection from '@/components/common/hero-section'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'FAQs | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/faqs',
        title: 'FAQs | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'FAQs | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/faqs`,
    },
}

export default function Faqs() {
    const faqs = [
        {
            id: 1,
            question: 'What is the purpose of this project?',
            answer: 'The primary objective is to achieve operational efficiency and business growth by implementing modern solutions tailored to our organizational goals.',
        },
        {
            id: 2,
            question: 'What is the expected timeline for project completion?',
            answer: 'The project is scheduled to start on [Start Date] and is expected to be completed by [End Date], depending on milestone approvals and testing phases.',
        },
        {
            id: 3,
            question: 'How is the project being managed?',
            answer: 'We are using Agile/Waterfall/Hybrid methodology supported by project management tools such as Jira, Microsoft Project, or Asana, ensuring transparency and timely updates.',
        },
        {
            id: 4,
            question: 'How will progress be communicated?',
            answer: 'Regular updates will be provided through weekly meetings, email summaries, and real-time dashboards accessible via the project management tool.',
        },
        {
            id: 5,
            question:
                'Will employees receive training on new systems or tools?',
            answer: 'Yes. Comprehensive training sessions, user guides, and support resources will be provided to ensure smooth adoption and minimal disruption.',
        },
        {
            id: 6,
            question: 'How can I share feedback or raise a concern?',
            answer: 'You can use the feedback form available on the project portal or contact the Project Manager directly via email or during scheduled check-ins.',
        },
        {
            id: 7,
            question: 'Where can I access project documentation?',
            answer: 'All relevant documents are stored in the Project Repository on our internal server or cloud drive (e.g., SharePoint, Google Drive), accessible to authorized team members.',
        },
        {
            id: 8,
            question: 'What is payment schedule?',
            answer: "Payments will be made on a monthly basis, with a minimum of two months' advance notice. Payment terms and conditions will be clearly outlined in the project agreement.",
        },
        {
            id: 9,
            question: 'What if the project goes off schedule or budget?',
            answer: 'Risk management protocols are in place to identify, assess, and mitigate delays or cost overruns. Contingency plans and change request procedures will guide such scenarios.',
        },
    ]
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'FAQs' },
                    ]}
                    title={<>Frequently Asked Questions</>}
                    description={
                        'Find answers to the most commonly asked questions about our project, including scope, timelines, communication plans, and stakeholder involvement.'
                    }
                />
                <FaqSection faqList={faqs} />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map(
                            (faq: { question: string; answer: string }) => ({
                                '@type': 'Question',
                                name: faq.question,
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: faq.answer,
                                },
                            }),
                        ),
                    }),
                }}
            />
        </>
    )
}
