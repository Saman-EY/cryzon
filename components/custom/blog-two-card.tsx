import { buttonVariants } from '@/components/ui/button'
import {
    CalendarDays,
    ChevronsRight,
    MessageSquareMore,
    ThumbsUp,
    UserRoundPen,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Blog = {
    id: number
    image: string
    title: string
    author: string
    date: string
    category: string
    description: string
    likes: number
    comments: number
}
export default function BlogTwoCard({ item }: { item: Blog }) {
    return (
        <div
            className="border-border group relative flex flex-col border-2 bg-white p-3"
            key={item.id}
        >
            <div className="border-border absolute -top-6.75 -left-2 z-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>
            <div className="relative mb-8">
                <span className="absolute -top-7.75 -left-3 z-1 mb-0 h-20 w-10.5 rotate-45 bg-white"></span>
                <Link
                    href="/blog/blog-two"
                    className={`absolute! right-2! -bottom-4! z-1 h-8! rounded-none! px-3! py-1.5! text-sm! ring-2 ring-white transition ring-inset after:rounded-none! ${buttonVariants()}`}
                >
                    <span>{item.category}</span>
                </Link>
                <Image
                    src={item.image}
                    alt="Blog"
                    width={467}
                    height={288}
                    className="h-60 w-full object-cover object-top xl:h-72"
                />
                <span className="group-hover:bg-primary/20 absolute inset-0 grid place-content-center opacity-0 duration-300 group-hover:opacity-100">
                    <Link
                        href="/blog/blog-details"
                        className={buttonVariants()}
                    >
                        <span>
                            Read More
                            <ChevronsRight />
                        </span>
                    </Link>
                </span>
            </div>
            <div className="flex grow flex-col gap-4 lg:px-2 lg:pb-2">
                <div className="grow space-y-3">
                    <div className="flex flex-wrap gap-3 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <UserRoundPen className="size-4!" />
                            <span>{item.author}</span>
                        </div>
                        <span className="bg-gray my-0.5 w-px rotate-12"></span>
                        <div className="flex items-center gap-2">
                            <CalendarDays className="size-4!" />
                            <span>{item.date}</span>
                        </div>
                    </div>
                    <Link
                        href="/blog/blog-details"
                        className="text-primary font-red-hat hover:text-gray line-clamp-2 text-xl font-bold transition md:text-2xl"
                    >
                        {item.title}
                    </Link>
                    <p className="line-clamp-2 grow">{item.description}</p>
                </div>
                <div className="flex items-center justify-between gap-2.5 font-medium">
                    <div className="bg-gray-light/50 ring-border flex gap-4 px-2.5 py-1 ring-1">
                        <div className="flex items-center gap-1.5">
                            <ThumbsUp className="size-4!" />
                            <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MessageSquareMore className="size-4!" />
                            <span>{item.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
