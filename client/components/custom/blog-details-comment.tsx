'use client'
import IconTwitter from '@/components/icons/icon-twitter'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    BrainCircuit,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    ReplyAll,
    Search,
    Youtube,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Comment = {
    id: number
    name: string
    date: string
    text: string
    avatar: string
    replies: { name: string; date: string; text: string; avatar: string }[]
    replyOpen: boolean
    replyText: string
}

export default function BlogDetailsComment() {
    const categories = ['Business Strategy', 'Marketing', 'Technology']
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            name: 'Matthew Larson',
            date: '8 weeks ago',
            text: 'Thank you for your comment! We appreciate your engagement and are glad you found the information helpful. If you have any further questions or topics you’d like us to cover, feel free to let us know! It’s great to hear that you found our valuable.',
            avatar: 'https://i.pravatar.cc/80?img=12',
            replies: [],
            replyOpen: false,
            replyText: '',
        },
        {
            id: 2,
            name: 'Sergio Daugherty',
            date: '5 weeks ago',
            text: 'Thank you for your insightful question! We understand how important this topic is, and we’ll be sure to address it in our future posts. If you need immediate assistance, please feel free to reach out to us directly; we appreciate your feedback.',
            avatar: 'https://i.pravatar.cc/80?img=25',
            replies: [],
            replyOpen: false,
            replyText: '',
        },
    ])

    const toggleReply = (i: number) => {
        setComments((prev) =>
            prev.map((c, idx) => ({
                ...c,
                replyOpen: idx === i ? !c.replyOpen : false,
            })),
        )
    }

    const cancelReply = (i: number) => {
        setComments((prev) =>
            prev.map((c, idx) =>
                idx === i ? { ...c, replyOpen: false, replyText: '' } : c,
            ),
        )
    }

    const submitReply = (i: number) => {
        setComments((prev) =>
            prev.map((c, idx) => {
                if (idx === i && c.replyText.trim()) {
                    return {
                        ...c,
                        replies: [
                            ...c.replies,
                            {
                                name: 'Admin',
                                date: new Date().toLocaleDateString(),
                                text: c.replyText.trim(),
                                avatar: 'https://i.pravatar.cc/80?img=1',
                            },
                        ],
                        replyText: '',
                        replyOpen: false,
                    }
                }
                return c
            }),
        )
    }

    return (
        <div className="container flex flex-col gap-10 lg:flex-row">
            <div className="grow">
                <Image
                    src="/images/blog2.jpg"
                    alt="Blog details"
                    width={1060}
                    height={596}
                    className="mb-7 aspect-video w-full object-cover lg:mb-10"
                />
                <div className="prose lg:prose-lg prose-li:pb-0! max-w-none">
                    <p>
                        In today’s competitive business environment, having a
                        recognizable and trustworthy brand identity is crucial.
                        A clear brand identity helps establish credibility,
                        attract loyal customers, and differentiate your business
                        from competitors.
                    </p>
                    <ol>
                        <li>
                            <h2>Introduction</h2>
                            <p>
                                A corporate brand identity is more than just a
                                logo or color scheme — it’s the personality of
                                your business. A strong identity helps you stand
                                out in a competitive market, build trust with
                                customers, and create a lasting impression.
                            </p>
                            <p>
                                In this article, we’ll explore the essential
                                elements needed to build and maintain a strong
                                corporate brand identity.
                            </p>
                        </li>
                        <li>
                            <h3>Why a Strong Brand Identity Matters</h3>
                            <p>
                                Your brand identity is the visual and emotional
                                representation of your company. It communicates
                                your values, culture, and professionalism.
                            </p>
                            <ul>
                                <li>Increased brand recognition</li>
                                <li>Stronger customer loyalty</li>
                                <li>Better marketing efficiency</li>
                                <li>
                                    Higher perceived value of products/services
                                </li>
                            </ul>
                            <blockquote>
                                <BrainCircuit />A strong identity helps you
                                stand out in a competitive market, build trust
                                with customers, and create a lasting impression.
                            </blockquote>
                        </li>

                        <li>
                            <h3>Core Elements of a Corporate Brand Identity</h3>
                            <ol>
                                <li>
                                    <h4>Brand Vision & Mission</h4>
                                    <p>
                                        Your vision defines your long-term goal,
                                        while your mission explains your
                                        purpose. Together, they guide
                                        decision-making and strategy.
                                    </p>
                                </li>
                                <li>
                                    <h4>Brand Values</h4>
                                    <p>
                                        Identify 3–5 core values that reflect
                                        your culture and principles.
                                        Consistently apply them to your
                                        marketing and customer interactions.
                                    </p>
                                </li>
                                <li>
                                    <h4>Visual Design System</h4>
                                    <ul>
                                        <li>
                                            <b>Logo:</b> A clean, memorable
                                            design with variations for different
                                            uses.
                                        </li>
                                        <li>
                                            <b>Color Palette:</b> 2–3 primary
                                            colors and 1–2 accent colors.
                                        </li>
                                        <li>
                                            <b>Typography:</b> Professional
                                            fonts for headings and body text.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Conclusion</h3>
                                    <p>
                                        A strong corporate brand identity is an
                                        investment that pays off in trust,
                                        loyalty, and growth. By focusing on
                                        clarity, consistency, and authenticity,
                                        your business can establish a brand
                                        presence that stands the test of time.
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className="border-border divide-border mt-8 divide-y border-y lg:mt-10 [&>div]:py-5">
                    <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
                        <div className="flex gap-2.5 xl:flex-col">
                            <span className="font-red-hat relative block text-lg font-bold lg:text-2xl">
                                Tags:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category, index) => {
                                    return (
                                        <Link
                                            href="/blog"
                                            className={`z-1 h-8 px-3! py-1.5! text-sm! ${buttonVariants()}`}
                                            key={index}
                                        >
                                            <span>{category}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex gap-2.5 xl:flex-col">
                            <span className="font-red-hat relative block text-lg font-bold lg:text-2xl">
                                Share:
                            </span>
                            <div className="flex items-center gap-2.5">
                                <Link
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className={`size-10 !p-0 ${buttonVariants()}`}
                                >
                                    <span>
                                        <Facebook className="!size-4" />
                                    </span>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                                    target="_blank"
                                    className={`size-10 !p-0 ${buttonVariants()}`}
                                >
                                    <span>
                                        <Instagram className="!size-4" />
                                    </span>
                                </Link>
                                <Link
                                    href="https://twitter.com/intent/tweet?url=&text=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className={`size-10 !p-0 ${buttonVariants()}`}
                                >
                                    <span>
                                        <IconTwitter />
                                    </span>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/login"
                                    target="_blank"
                                    className={`size-10 !p-0 ${buttonVariants()}`}
                                >
                                    <span>
                                        <Youtube className="!size-4" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button type="button" variant="secondary">
                            <span>
                                <ChevronLeft />
                                Previous
                            </span>
                        </Button>
                        <Button type="button" variant="secondary">
                            <span>
                                Next
                                <ChevronRight />
                            </span>
                        </Button>
                    </div>

                    <div className="space-y-3 py-8!">
                        <div className="section-heading mb-4 lg:mb-6">
                            <h3 className="pb-1! text-lg/6! after:left-0 after:translate-0 lg:text-2xl!">
                                Blog Comments (<span>{comments.length}</span>)
                            </h3>
                        </div>
                        {comments.map((comment, index) => {
                            return (
                                <article
                                    className="bg-gray-light/50 relative p-5"
                                    key={index}
                                >
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src={comment.avatar}
                                            alt="avatar"
                                            width={48}
                                            height={48}
                                            className="size-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <div>
                                                    <h3 className="text-primary text-lg font-semibold">
                                                        {comment.name}
                                                    </h3>
                                                    <p className="text-xs">
                                                        {comment.date}
                                                    </p>
                                                </div>

                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    className="text-gray flex items-center gap-1 text-sm font-medium !shadow-none hover:text-black"
                                                    onClick={() =>
                                                        toggleReply(index)
                                                    }
                                                >
                                                    <ReplyAll />
                                                    Reply
                                                </Button>
                                            </div>

                                            <p className="mt-3">
                                                {comment.text}
                                            </p>

                                            <div className="mt-4 space-y-3">
                                                {comment.replies.map(
                                                    (r, ri) => (
                                                        <div
                                                            className="border-primary border-l-2 pl-3"
                                                            key={ri}
                                                        >
                                                            <div className="flex items-start gap-2">
                                                                <Image
                                                                    src={
                                                                        r.avatar
                                                                    }
                                                                    width={32}
                                                                    height={32}
                                                                    className="size-8 rounded-full"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <p className="text-sm">
                                                                        <span className="font-medium">
                                                                            {
                                                                                r.name
                                                                            }
                                                                        </span>
                                                                        <span className="ml-1 text-xs text-slate-500">
                                                                            {
                                                                                r.date
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p className="mt-1 text-sm">
                                                                        {r.text}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                            {comment.replyOpen && (
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault()
                                                        submitReply(index)
                                                    }}
                                                    className="mt-4 space-y-2 transition-all duration-300"
                                                >
                                                    <Textarea
                                                        placeholder="Write your reply…"
                                                        className="!form-textarea w-full"
                                                        rows={3}
                                                        value={
                                                            comment.replyText
                                                        }
                                                        onChange={(e) =>
                                                            setComments(
                                                                (prev) =>
                                                                    prev.map(
                                                                        (
                                                                            c,
                                                                            idx,
                                                                        ) =>
                                                                            idx ===
                                                                            index
                                                                                ? {
                                                                                      ...c,
                                                                                      replyText:
                                                                                          e
                                                                                              .target
                                                                                              .value,
                                                                                  }
                                                                                : c,
                                                                    ),
                                                            )
                                                        }
                                                    ></Textarea>
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            type="submit"
                                                            className="hover:shadow-3xl px-3! py-2! text-sm!"
                                                        >
                                                            <span>
                                                                {' '}
                                                                Post Reply
                                                            </span>
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            variant={
                                                                'secondary'
                                                            }
                                                            onClick={() =>
                                                                cancelReply(
                                                                    index,
                                                                )
                                                            }
                                                            className="border border-black/50 px-3! py-2! text-sm!"
                                                        >
                                                            <span> Cancel</span>
                                                        </Button>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <form className="bg-gray-light border-border mt-10 border-t-4 px-4 py-6 sm:p-6 xl:p-8">
                    <div className="section-heading mb-4 space-y-3 lg:mb-6">
                        <h3 className="pb-1! text-lg/6! after:left-0 after:translate-0 lg:text-2xl!">
                            Leave a Comment
                        </h3>
                        <p>
                            Your email address will not be published. Required
                            fields are marked.
                        </p>
                    </div>
                    <div className="mb-6 grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="name"
                                className="text-gray text-sm font-medium"
                            >
                                Name
                            </Label>
                            <Input
                                type="text"
                                placeholder="Your Name"
                                className="!form-input w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="name"
                                className="text-gray text-sm font-medium"
                            >
                                Email
                            </Label>
                            <Input
                                type="text"
                                placeholder="Your Email"
                                className="!form-input w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="name"
                                className="text-gray text-sm font-medium"
                            >
                                Websites
                            </Label>
                            <Input
                                type="text"
                                placeholder="Your Sites"
                                className="!form-input w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <Label
                                htmlFor="name"
                                className="text-gray text-sm font-medium"
                            >
                                Your Message
                            </Label>
                            <Textarea
                                placeholder="Your Message"
                                rows={5}
                                className="!form-textarea w-full"
                            ></Textarea>
                        </div>
                    </div>
                    <Button type="button" className="hover:shadow-3xl">
                        <span> Post a Comment</span>
                    </Button>
                </form>
            </div>
            <div className="shrink-0 space-y-8 lg:w-96 lg:space-y-10 2xl:w-110">
                <div className="bg-gray-light border-border border-t-4 px-4 py-6 sm:p-6 xl:p-8">
                    <div className="section-heading mb-4 lg:mb-6">
                        <h3 className="pb-1! text-lg/6! after:left-0 after:translate-0">
                            Search here
                        </h3>
                    </div>
                    <form className="relative flex items-center">
                        <Input
                            type="text"
                            className="!form-input w-full"
                            placeholder="Search..."
                        />
                        <Button
                            type="submit"
                            className="hover:shadow-3xl absolute right-0 h-10 w-10 shrink-0 rounded-none! p-0! after:rounded-none!"
                        >
                            <span>
                                <Search />
                            </span>
                        </Button>
                    </form>
                </div>
                <div className="bg-gray-light border-border divide-gray/50 divide-y divide-dashed border-t-4 px-4 py-6 sm:p-6 xl:p-8">
                    <div className="flex items-center gap-2.5 pb-4 lg:gap-5">
                        <div className="size-12 shrink-0 overflow-hidden rounded-xl lg:h-28 lg:w-24">
                            <Image
                                src="/images/profile2.jpg"
                                alt="Client"
                                width={96}
                                height={112}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-5">
                            <div>
                                <Link
                                    href="/blog"
                                    className="text-primary font-red-hat hover:text-primary/70 text-xl/6 font-semibold transition"
                                >
                                    David Carter
                                </Link>
                                <p className="text-sm">Business</p>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <Link
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className="transition hover:opacity-80"
                                >
                                    <Facebook />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                                    target="_blank"
                                    className="transition hover:opacity-80"
                                >
                                    <Instagram />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link
                                    href="https://twitter.com/intent/tweet?url=&text=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className="transition hover:opacity-80"
                                >
                                    <IconTwitter />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className="transition hover:opacity-80"
                                >
                                    <Linkedin />
                                    <span className="sr-only">Linkedin</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1.5 pt-4 text-sm">
                        <div className="flex items-center gap-2.5">
                            <Phone className="!size-4" />
                            <Link
                                href="tel:+04 254 046 789"
                                className="transition hover:opacity-80"
                            >
                                +04 254 046 789
                            </Link>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Mail className="!size-4" />
                            <Link
                                href="mailto:example@gmail.com"
                                className="transition hover:opacity-80"
                            >
                                example@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-light border-border border-t-4 px-4 py-6 sm:p-6 xl:p-8">
                    <div className="section-heading mb-4 lg:mb-6">
                        <h3 className="pb-1! text-lg/6! after:left-0 after:translate-0">
                            Categories
                        </h3>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <Link
                            href="/blog"
                            className="hover:text-primary relative left-0 flex items-center gap-2 duration-300 hover:left-2"
                        >
                            <ChevronsRight className="size-4" />
                            Business Strategy
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-primary relative left-0 flex items-center gap-2 duration-300 hover:left-2"
                        >
                            <ChevronsRight className="size-4" />
                            Marketing
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-primary relative left-0 flex items-center gap-2 duration-300 hover:left-2"
                        >
                            <ChevronsRight className="size-4" />
                            Design Trends
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-primary relative left-0 flex items-center gap-2 duration-300 hover:left-2"
                        >
                            <ChevronsRight className="size-4" />
                            Leadership
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-primary relative left-0 flex items-center gap-2 duration-300 hover:left-2"
                        >
                            <ChevronsRight className="size-4" />
                            Technology
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-light border-border border-t-4 px-4 py-6 sm:p-6 xl:p-8">
                    <div className="section-heading mb-4 lg:mb-6">
                        <h3 className="pb-1! text-lg/6! after:left-0 after:translate-0">
                            Recent Posts
                        </h3>
                    </div>
                    <div className="divide-gray/50 space-y-4 divide-y divide-dashed [&>div]:pb-4 [&>div]:last:pb-0">
                        <div className="flex gap-3">
                            <div className="aspect-square max-w-20 shrink-0">
                                <Image
                                    src="/images/blog1.jpg"
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt="Blog"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Link
                                    href="/blog/blog-details"
                                    className="text-primary font-red-hat hover:text-primary/70 line-clamp-2 text-lg/6 font-semibold"
                                >
                                    Maximizing ROI with Targeted Marketing
                                </Link>
                                <div className="flex items-center gap-2 text-sm">
                                    <CalendarDays className="!size-4" />
                                    <span>Aug 09, 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="aspect-square max-w-20 shrink-0">
                                <Image
                                    src="/images/blog2.jpg"
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt="Blog"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Link
                                    href="/blog/blog-details"
                                    className="text-primary font-red-hat hover:text-primary/70 line-clamp-2 text-lg/6 font-semibold"
                                >
                                    Modern Web Design Principles for Businesses
                                </Link>
                                <div className="flex items-center gap-2 text-sm">
                                    <CalendarDays className="!size-4" />
                                    <span>jun 02, 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="aspect-square max-w-20 shrink-0">
                                <Image
                                    src="/images/blog3.jpg"
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt="Blog"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Link
                                    href="/blog/blog-details"
                                    className="text-primary font-red-hat hover:text-primary/70 line-clamp-2 text-lg/6 font-semibold"
                                >
                                    Content Marketing that Converts
                                </Link>
                                <div className="flex items-center gap-2 text-sm">
                                    <CalendarDays className="!size-4" />
                                    <span>jun 02, 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="aspect-square max-w-20 shrink-0">
                                <Image
                                    src="/images/blog5.jpg"
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt="Blog"
                                    unoptimized
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Link
                                    href="/blog/blog-details"
                                    className="text-primary font-red-hat hover:text-primary/70 line-clamp-2 text-lg/6 font-semibold"
                                >
                                    Leveraging AI to Improve Business Efficiency
                                </Link>
                                <div className="flex items-center gap-2 text-sm">
                                    <CalendarDays className="!size-4" />
                                    <span>jun 02, 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-border space-y-6 border">
                    <div className="relative h-110 overflow-hidden">
                        <Image
                            src="/images/person-img.png"
                            alt="Person img"
                            width={438}
                            height={440}
                            className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 p-5 text-center backdrop-blur-[2px]">
                            <h3 className="text-primary font-red-hat text-2xl/7 font-bold">
                                Need a talk with us?
                            </h3>
                            <p className="mt-1.5 font-semibold">
                                We are here to help you with your business.
                            </p>
                            <Link
                                href="/contact"
                                className={`mt-3.5 block w-full ${buttonVariants()}`}
                            >
                                <span>Book a free consultation</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
