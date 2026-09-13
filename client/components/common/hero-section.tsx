import { Button } from '@/components/ui/button'
import {
    CalendarDays,
    ChevronRight,
    MessageSquareMore,
    ThumbsUp,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type BreadcrumbItem = {
    label: string
    href?: string
}

type HeroSectionProps = {
    breadcrumbs: BreadcrumbItem[]
    title: ReactNode
    description?: string
    descriptions?: string[]
    descriptionClassName?: string
    category?: string
    date?: string
    likes?: number
    comments?: number
}

export default function HeroSection({
    breadcrumbs,
    title,
    description,
    descriptions,
    descriptionClassName,
    category,
    date,
    likes,
    comments,
}: HeroSectionProps) {
    return (
        <div className="bg-primary relative py-16">
            <Image
                src="/images/squaer-left.png"
                alt="grid"
                width={96}
                height={119}
                className="animate-customPulse absolute bottom-10 left-0 hidden w-24 object-cover sm:block"
            />
            <Image
                src="/images/squaer-right.png"
                alt="grid"
                width={120}
                height={194}
                className="animate-customPulse absolute top-5 right-0 w-20 object-cover md:top-10 md:w-30"
            />
            <div className="container text-white">
                <div className="text-gray-light border-border/20 mb-5 flex items-center gap-2 border-b pb-2.5">
                    {breadcrumbs.map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            {item.href ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : (
                                <p className="text-white">{item.label}</p>
                            )}
                            {i < breadcrumbs.length - 1 && (
                                <ChevronRight className="size-4!" />
                            )}
                        </span>
                    ))}
                </div>
                <h1 className="font-red-hat mb-4 flex flex-wrap items-center justify-between gap-1 text-4xl leading-tight font-semibold drop-shadow-xl sm:mb-6 sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                {description && (
                    <p className={descriptionClassName || ''}>{description}</p>
                )}
                
                {descriptions &&
                    descriptions.map((item, idx) => <p key={idx}>{item}</p>)}

                {category && (
                    <div className="text-gray-light flex flex-wrap gap-5">
                        <Button type="button" asChild>
                            <Link
                                href="/blog"
                                className="z-1 h-6 rounded-none! px-2.5! py-1.25! text-sm! ring-1 ring-white/50 transition ring-inset after:rounded-none!"
                            >
                                <span> {category} </span>
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CalendarDays className="size-4!" />
                            {date}
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-1.5">
                                <ThumbsUp className="size-4! shrink-0" />
                                {likes}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MessageSquareMore className="size-4! shrink-0" />
                                {comments}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
