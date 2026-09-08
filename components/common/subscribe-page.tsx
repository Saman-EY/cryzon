import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SubscribePage() {
    return (
        <div className="overflow-hidden px-4">
            <div className="bg-primary relative py-12 sm:py-16 lg:py-22">
                <Image
                    src="/images/squaer-left.png"
                    alt="grid"
                    width={96}
                    height={119}
                    className="animate-customPulse absolute -bottom-7 -left-2 hidden w-24 -rotate-45 object-cover sm:block"
                />
                <Image
                    src="/images/squaer-right.png"
                    alt="grid"
                    width={96}
                    height={155}
                    className="animate-customPulse absolute -top-7 -right-2 hidden w-24 -rotate-45 object-cover sm:block"
                />
                <div className="absolute -top-40 -left-10 h-50 w-30 rotate-45 bg-white sm:-top-35 xl:-top-20"></div>
                <div className="absolute -right-20 -bottom-30 h-30 w-50 -rotate-45 bg-white xl:-bottom-10"></div>
                <div className="container flex flex-col items-center justify-evenly gap-8 text-white lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h2 className="font-red-hat mb-4 w-full text-2xl leading-tight font-semibold drop-shadow-xl sm:text-3xl lg:max-w-150 lg:text-4xl">
                            Subscribe to Our Insights – Straight to Your Inbox.
                        </h2>
                        <p className="max-w-180 lg:text-lg/6">
                            Get the latest in tech trends, cybersecurity
                            updates, IT best practices, and exclusive corporate
                            solutions.
                        </p>
                    </div>
                    <form className="relative w-full max-w-120">
                        <Input
                            type="text"
                            className="py-3.5 pr-26 pl-2 focus:ring-2! focus:ring-white! sm:pr-33 sm:pl-4"
                            placeholder="Enter your email"
                        />
                        <Button
                            type="submit"
                            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-none! py-2! after:rounded-none!"
                        >
                            <span>Subscribe</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
