import { Button, buttonVariants } from '@/components/ui/button'
import {
    CalendarDays,
    MessageSquareMore,
    SquareArrowOutUpRight,
    ThumbsUp,
    UserRoundPen,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Blog = {
    id: number
    title: string
    author: string
    date: string
    category: string
    description: string
    likes: number
    comments: number
}

export default function BlogCard({ item }: { item: Blog }) {
    return (
        <div className="border-border relative flex flex-col gap-6 border-2 bg-white px-4 py-4 pt-14 lg:gap-8">
            <div className="border-border absolute -top-6.75 -left-2 z-1 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>
            <Link
                href="/blog"
                className={`absolute! top-0! left-0! rounded-none! py-1.5! pr-3! pl-14.5! text-sm! after:rounded-none! ${buttonVariants()}`}
            >
                <span>{item.category}</span>
            </Link>
            <div className="space-y-4">
                <Link
                    href="/blog/blog-details"
                    className="text-primary font-red-hat hover:text-gray line-clamp-2 text-xl font-bold transition md:text-2xl"
                >
                    {item.title}
                </Link>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <UserRoundPen className="size-4!" />
                        <span>{item.author}</span>
                    </div>
                    <span className="bg-gray my-0.5 w-0.5 rotate-12"></span>
                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-4!" />
                        <span>{item.date}</span>
                    </div>
                </div>
            </div>
            <span className="bg-primary block h-0.5 w-1/2"></span>
            <div className="flex grow flex-col space-y-4">
                <p className="line-clamp-3 grow">{item.description}</p>
                <div className="flex items-end justify-between gap-2.5 font-medium">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                            <ThumbsUp className="size-4!" />
                            <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MessageSquareMore className="size-4!" />
                            <span>{item.comments}</span>
                        </div>
                    </div>
                    <Button type="button" variant={'secondary'} asChild>
                        <Link href="/blog/blog-details" className="size-12 p-0">
                            <span>
                                <SquareArrowOutUpRight className="size-5!" />
                            </span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
