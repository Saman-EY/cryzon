'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
type FaqItem = {
    id: number
    question: string
    answer: string
}

export default function ProjectDetailsFAQ({ faqList }: { faqList: FaqItem[] }) {
    return (
        <div className="mt-8 space-y-6 lg:mt-12">
            <h3 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-2.5 text-xl/6.5 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3 lg:text-[22px]/7">
                Related questions
            </h3>
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
        </div>
    )
}
