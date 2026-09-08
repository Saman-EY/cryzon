import HeroSection from '@/components/common/hero-section'
import IconTwitter from '@/components/icons/icon-twitter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import helper from '@/lib/helper'
import {
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Map,
    MapPin,
    Phone,
    Youtube,
} from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Contact | Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/contact',
        title: 'Contact | Cryzion',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cryzion',
        title: 'Contact | Cryzion',
        description:
            'Modern corporate template crafted for startups, IT companies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        images: [process.env.NEXT_PUBLIC_APP_URL + '/images/logo.png'],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    },
}

export default function Contact() {
    return (
        <>
            <div className="mb-16 grow space-y-16 lg:mb-25 lg:space-y-25">
                <HeroSection
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Contact us' },
                    ]}
                    title={<>Customer Support & Inquiries</>}
                    description={
                        'We’re here to help. Whether you have a question, need support, or want to explore a potential partnership, our team is ready to assist you.'
                    }
                />

                <div className="container space-y-16">
                    <div className="divide-border mx-auto w-full max-w-7xl divide-y">
                        <div className="divide-border grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0 md:pb-8">
                            <div className="group space-y-6 p-4 text-center md:px-6 md:py-8">
                                <Button
                                    type="button"
                                    variant={'secondary'}
                                    asChild
                                >
                                    <Link
                                        href="tel:+44 151 222 3344"
                                        className="size-12 bg-white p-0 shadow-md group-hover:after:h-[calc(100%+2px)] group-hover:after:w-[calc(100%+2px)]"
                                    >
                                        <span>
                                            <Phone className="!size-6 group-hover:text-white" />
                                        </span>
                                    </Link>
                                </Button>
                                <div className="font-red-hat flex flex-col gap-1 font-semibold">
                                    <span className="tracking-wider uppercase">
                                        Phone
                                    </span>
                                    <Link
                                        href="tel:+44 151 222 3344"
                                        className="text-primary text-lg/6 transition hover:opacity-80"
                                    >
                                        +44 151 222 3344
                                    </Link>
                                </div>
                            </div>
                            <div className="group space-y-6 p-4 text-center md:px-6 md:py-8">
                                <Button
                                    type="button"
                                    variant={'secondary'}
                                    asChild
                                >
                                    <Link
                                        href="https://maps.app.goo.gl/26wGhEPw6c2SNHid7"
                                        target="_blank"
                                        className="size-12 bg-white p-0 shadow-md group-hover:after:h-[calc(100%+2px)] group-hover:after:w-[calc(100%+2px)]"
                                    >
                                        <span>
                                            <MapPin className="!size-6 group-hover:text-white" />
                                        </span>
                                    </Link>
                                </Button>
                                <div className="font-red-hat flex flex-col gap-1 font-semibold">
                                    <span className="tracking-wider uppercase">
                                        Location
                                    </span>
                                    <Link
                                        href="https://maps.app.goo.gl/26wGhEPw6c2SNHid7"
                                        target="_blank"
                                        className="text-primary text-lg/6 transition hover:opacity-80"
                                    >
                                        XYZ Hilton Street, 125 Town United State
                                    </Link>
                                </div>
                            </div>
                            <div className="group space-y-6 p-4 text-center md:px-6 md:py-8">
                                <Button
                                    type="button"
                                    variant={'secondary'}
                                    asChild
                                >
                                    <Link
                                        href="mailto:support@example.com"
                                        className="size-12 bg-white p-0 shadow-md group-hover:after:h-[calc(100%+2px)] group-hover:after:w-[calc(100%+2px)]"
                                    >
                                        <span>
                                            <Mail className="!size-6 group-hover:text-white" />
                                        </span>
                                    </Link>
                                </Button>
                                <div className="font-red-hat flex flex-col gap-1 font-semibold">
                                    <span className="tracking-wider uppercase">
                                        Email
                                    </span>
                                    <Link
                                        href="mailto:support@example.com"
                                        className="text-primary text-lg/6 transition hover:opacity-80"
                                    >
                                        support@example.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="divide-border grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0 md:pt-8">
                            <div className="group space-y-6 p-4 text-center md:px-6 md:py-8">
                                <span className="text-primary mx-auto grid size-12 place-content-center rounded-xl bg-white shadow-md">
                                    <Clock className="!size-6" />
                                </span>
                                <div className="font-red-hat flex flex-col gap-2 font-semibold">
                                    <span className="tracking-wider uppercase">
                                        Business Hours
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-primary text-lg/6">
                                            Monday – Friday : 8:00 AM – 5:00 PM
                                        </p>
                                        <p className="text-sm/4">
                                            Closed on weekends and public
                                            holidays
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group space-y-6 p-4 text-center md:px-6 md:py-8">
                                <span className="text-primary mx-auto grid size-12 place-content-center rounded-xl bg-white shadow-md">
                                    <Map className="!size-6" />
                                </span>
                                <div className="font-red-hat flex flex-col gap-2 font-semibold">
                                    <span className="tracking-wider uppercase">
                                        Head Office
                                    </span>
                                    <Link
                                        href="https://maps.app.goo.gl/26wGhEPw6c2SNHid7"
                                        target="_blank"
                                        className="text-primary mx-auto max-w-104 text-lg/6"
                                    >
                                        XYZ Hilton Street, 125 Town United State
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto h-96 w-full max-w-7xl grow overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.1385166193645!2d-78.64470441013478!3d41.96122918604141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cd80395f65f001%3A0xc6f4499e236f03bf!2s125%20Hilton%20St%2C%20Bradford%2C%20PA%2016701%2C%20USA!5e1!3m2!1sen!2sin!4v1756384129192!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="mx-auto flex max-w-5xl flex-wrap">
                        <div className="grow">
                            <form className="border-border grid w-full grow space-y-4 border px-5 py-8 text-black md:px-12">
                                <h2 className="font-red-hat text-2xl font-semibold text-black">
                                    Send Us a Message
                                </h2>
                                <span className="bg-primary mb-6 h-0.5 w-40 rounded-full"></span>
                                <label className="flex flex-col gap-2">
                                    <span>Name</span>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span>Email</span>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span>Phone</span>
                                    <Input
                                        type="text"
                                        placeholder="Phone number"
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span>Subject</span>
                                    <Input
                                        type="text"
                                        placeholder="Enter your subject"
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span>Message</span>
                                    <Textarea
                                        rows={4}
                                        placeholder="Message here..."
                                    ></Textarea>
                                </label>
                                <Button type="submit" className="mt-4">
                                    <span>Submit</span>
                                </Button>
                            </form>
                        </div>
                        <div className="bg-primary flex w-full shrink-0 flex-col px-5 py-8 text-white sm:w-40">
                            <h2 className="font-red-hat text-2xl font-semibold">
                                Let’s Connect
                            </h2>

                            <div className="border-border/20 divide-border/20 mt-6 flex grow divide-x border sm:mt-10 sm:flex-col sm:divide-x-0 sm:divide-y">
                                <Link
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className="group relative z-1 grid grow place-content-center p-2 after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white after:duration-300 hover:after:h-full sm:p-5"
                                >
                                    <Facebook className="group-hover:text-primary size-6! delay-150" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                                    target="_blank"
                                    className="group relative z-1 grid grow place-content-center p-2 after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white after:duration-300 hover:after:h-full sm:p-5"
                                >
                                    <Instagram className="group-hover:text-primary size-6! delay-150" />
                                </Link>
                                <Link
                                    href="https://twitter.com/intent/tweet?url=&text=https://cryzion-html.vercel.app/"
                                    target="_blank"
                                    className="group relative z-1 grid grow place-content-center p-2 after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white after:duration-300 hover:after:h-full sm:p-5"
                                >
                                    <IconTwitter className="group-hover:text-primary size-6! delay-150" />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/login"
                                    target="_blank"
                                    className="group relative z-1 grid grow place-content-center p-2 after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white after:duration-300 hover:after:h-full sm:p-5"
                                >
                                    <Youtube className="group-hover:text-primary size-6! delay-150" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://corporate-theme-html.vercel.app/"
                                    target="_blank"
                                    className="group relative z-1 grid grow place-content-center p-2 after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white after:duration-300 hover:after:h-full sm:p-5"
                                >
                                    <Linkedin className="group-hover:text-primary size-6! delay-150" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Contact | Cryzion",
                                "url": "${process.env.NEXT_PUBLIC_APP_URL}/contact",
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
                                        "name": "Contact",
                                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/contact"
                                    }
                                    ]
                                }
                            }`,
                }}
            />
        </>
    )
}
