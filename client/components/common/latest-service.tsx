import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Service = {
    id: number
    title: string
    description: string
    image: string
}

type LatestServiceProps = {
    services: Service[]
    viewAllButton?: boolean
}

export default function LatestService({
    services,
    viewAllButton,
}: LatestServiceProps) {
    return (
        <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
                <h2>Our Latest Services</h2>
                <h3>Service We Provide</h3>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
                {services.map((service) => {
                    return (
                        <div
                            key={service.id}
                            className="group relative z-2 flex flex-col overflow-hidden rounded-3xl p-px transition-all"
                        >
                            <span className="from-border to-border absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent duration-300"></span>
                            <Link
                                href="/services/service-details"
                                className="absolute inset-0 z-3"
                            ></Link>
                            <div className="after:from-border/60 after:to-border/60 relative z-1 flex h-full flex-col overflow-hidden rounded-3xl bg-white px-4 pt-28 pb-4 transition-all duration-300 group-hover:size-full after:absolute after:top-1/2 after:left-1/2 after:-z-1 after:-translate-1/2 after:rounded-2xl after:bg-gradient-to-bl after:via-transparent after:opacity-0 after:duration-500 group-hover:after:inset-0 group-hover:after:translate-0 group-hover:after:opacity-100 sm:pt-28 lg:pt-36 2xl:px-6">
                                <div className="absolute top-6 left-5 2xl:left-6">
                                    <div className="bg-gray-light grid size-16 place-content-center rounded-2xl duration-300 lg:size-20">
                                        <Image
                                            src={service.image}
                                            alt="Idea icon"
                                            width={48}
                                            height={48}
                                            className="size-10 duration-300 lg:size-12"
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto space-y-2">
                                    <h2 className="text-primary font-red-hat group-hover:text-primary/80 text-xl font-bold duration-300 md:text-2xl">
                                        {service.title}
                                    </h2>
                                    <p className="line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {viewAllButton && (
                <div className="mt-10 text-center lg:mt-14">
                    <Link href="/services" className={buttonVariants()}>
                        <span>View All Services</span>
                    </Link>
                </div>
            )}
        </div>
    )
}
