import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import IconArrowUp from '@/components/icons/icon-arrow-up'
import IconArrowDown from '../icons/icon-arrow-down'

export default function TrustedLeading() {
    return (
        <div className="overflow-hidden px-4 lg:px-10">
            <div className="bg-primary relative py-12 sm:py-16 lg:py-25">
                <div className="absolute -top-35 -left-10 h-50 w-30 rotate-45 bg-white md:-top-20"></div>
                <div className="absolute -right-20 -bottom-25 h-30 w-50 -rotate-45 bg-white md:-bottom-10"></div>

                <span className="absolute -bottom-4 -left-4 hidden animate-pulse sm:block">
                    <IconArrowUp />
                </span>
                <span className="absolute -top-4 -right-4 hidden rotate-180 animate-pulse sm:block">
                    <IconArrowDown />
                </span>
                <div className="container flex flex-col items-center justify-around gap-5 text-white lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h2 className="font-red-hat mb-2 text-3xl leading-tight font-semibold drop-shadow-xl lg:mb-4 lg:text-5xl">
                            Trusted by Leading Businesses Worldwide.
                        </h2>
                        <p className="lg:text-lg/6">
                            Connect with our business consultants about how we
                            can support your growth.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="group relative grid shrink-0 place-content-center rounded-full"
                    >
                        <Image
                            src="/images/cta-btn-circle.png"
                            alt="cta-btn-circle"
                            width={112}
                            height={112}
                            className="mx-auto size-24 animate-[spin_8s_linear_infinite] lg:size-28"
                        />
                        <ArrowUpRight className="absolute top-1/2 left-1/2 size-7! -translate-1/2 rounded-full duration-300 group-hover:size-8! group-hover:bg-white/10" />
                    </button>
                </div>
            </div>
        </div>
    )
}
