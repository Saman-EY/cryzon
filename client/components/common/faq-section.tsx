'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type FaqItem = {
    id: number
    question: string
    answer: string
}

export default function FaqSection({ faqList }: { faqList: FaqItem[] }) {
    return (
        <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-15">
                <div className="flex flex-col items-center gap-10 lg:items-start lg:gap-15">
                    <div
                        className="section-heading text-center lg:text-left"
                        data-aos="fade-up"
                    >
                        <h2>FAQs</h2>
                        <h3 className="lg:after:left-0 lg:after:translate-0">
                            Your questions answered simply here
                        </h3>
                    </div>
                    <div className="hidden space-y-6 rounded-2xl bg-white px-4 py-6 shadow-sm sm:p-10 lg:inline-block">
                        <h2 className="text-primary font-red-hat text-xl font-semibold md:text-2xl">
                            Still have you any question?
                        </h2>
                        <p>
                            We&apos;re ready to help you to answer any
                            questions.
                        </p>
                        <Link
                            href="tel:+01 487 124 653"
                            className="text-primary inline-flex gap-3 font-bold transition hover:opacity-80"
                        >
                            <PhoneCall />
                            +01 487 124 653
                        </Link>
                    </div>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqList.map((faq) => (
                        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                            <AccordionTrigger>
                                <span className="flex-1">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-sm sm:p-10 lg:hidden">
                    <h2 className="text-primary font-red-hat text-xl font-semibold md:text-2xl">
                        Still have you any question?
                    </h2>
                    <p>We&apos;re ready to help you to answer any questions.</p>
                    <Link
                        href="tel:+01 487 124 653"
                        className="text-primary inline-flex gap-3 font-bold transition hover:opacity-80"
                    >
                        <PhoneCall />
                        +01 487 124 653
                    </Link>
                </div>
            </div>
        </div>
    )
}
