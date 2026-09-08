import type { Metadata } from 'next'
import './globals.css'
import helper from '@/lib/helper'
import { DM_Sans, Red_Hat_Display } from 'next/font/google'
import AOSProvider from '@/components/custom/aos-provider'
import clsx from 'clsx'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://example.com'

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
})

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    variable: '--font-red-hat-display',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
})

export const metadata: Metadata = {
    title: 'Cryzion',
    description:
        'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
    metadataBase: new URL(siteUrl),
    openGraph: {
        ...helper.openGraphData,
        url: `${siteUrl}/`,
        type: 'website',
    },
    alternates: {
        canonical: `${siteUrl}/`,
    },
    twitter: {
        site: '@cryzion',
        title: 'Cryzion',
    },
    robots: {
        index: true,
        follow: true,
    },
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    `${dmSans.variable} ${redHatDisplay.variable}`,
                    'text-gray font-dm-sans flex min-h-screen flex-col bg-white text-base antialiased',
                )}
            >
                <AOSProvider />
                {children}
            </body>
        </html>
    )
}
