'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Button } from '@/components/ui/button'

type Service = {
    id: number
    title: string
    description: string
    image: string
}

export default function RecentServices({ services }: { services: Service[] }) {
    return (
        <div className="container">
            <div className="flex items-end justify-between gap-4">
                <div className="section-heading" data-aos="fade-up">
                    <h3 className="after:left-0 after:translate-0">
                        Rencent Services
                    </h3>
                </div>
                <div className="ml-auto flex gap-2.5 sm:gap-4">
                    <Button
                        type="button"
                        className="service-swiper-button-prev size-10 p-0 sm:size-12"
                    >
                        <span>
                            <ChevronLeft className="size-6!" />
                        </span>
                    </Button>
                    <Button
                        type="button"
                        className="service-swiper-button-next size-10 p-0 sm:size-12"
                    >
                        <span>
                            <ChevronRight className="size-6!" />
                        </span>
                    </Button>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.service-swiper-button-next',
                    prevEl: '.service-swiper-button-prev',
                }}
                loop={true}
                spaceBetween={24}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 32 },
                }}
                className="service-swiper mt-12! grid"
            >
                {services.map((service) => {
                    return (
                        <SwiperSlide key={service.id}>
                            <div className="group relative z-2 flex h-full flex-col overflow-hidden rounded-3xl p-px transition-all">
                                <span className="from-border to-border absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent duration-300"></span>
                                <Link
                                    href="/services/service-details"
                                    className="absolute inset-0 z-3"
                                ></Link>
                                <div className="after:from-gray-light/50 after:to-gray-light/50 relative z-1 flex h-full flex-col overflow-hidden rounded-3xl bg-white px-4 pt-28 pb-4 transition-all duration-300 group-hover:size-full after:absolute after:top-1/2 after:left-1/2 after:-z-1 after:-translate-1/2 after:rounded-2xl after:bg-gradient-to-bl after:via-transparent after:opacity-0 after:duration-500 group-hover:after:inset-0 group-hover:after:translate-0 group-hover:after:opacity-100 sm:pt-28 lg:pt-36 2xl:px-6">
                                    <div className="absolute top-6 left-6">
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
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
