'use client'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'

const testiMonials = [
    {
        id: 1,
        image: 'https://i.pravatar.cc/80?img=1',
        name: 'David K.',
        position: 'CEO, BlueNova Digital',
        review: '“It’s rare to find a tech partner that combines technical expertise with such clear communication and dedication. Highly recommend them.”',
        logo: '/images/partner-logo1.svg',
    },
    {
        id: 2,
        image: 'https://i.pravatar.cc/80?img=5',
        name: 'Alicia R.',
        position: 'COO, MedSys Solutions',
        review: '“From planning to execution, their strategic approach made a real difference. Our operations are more efficient, and our data is more secure than ever.”',
        logo: '/images/partner-logo4.svg',
    },
    {
        id: 3,
        image: 'https://i.pravatar.cc/80?img=3',
        name: 'Jason T.',
        position: 'IT Manager, Global Logistics',
        review: '“Their technical support is top-notch. Whether it’s server issues or cybersecurity concerns, they’re always available and incredibly efficient.”',
        logo: '/images/partner-logo3.svg',
    },
    {
        id: 4,
        image: 'https://i.pravatar.cc/80?img=9',
        name: 'Sarah M.',
        position: 'Product Manager, FinTechCorp',
        review: '“Cryzion helped us streamline our IT infrastructure and migrate to the cloud with zero downtime. Their team was responsive, knowledgeable, and genuinely invested in our success.”',
        logo: '/images/partner-logo2.svg',
    },
]

export default function TestimonialSection({
    variant = 'light',
}: {
    variant?: 'light' | 'dark'
}) {
    const isDark = variant === 'dark'
    return (
        <div>
            <div
                className={cn(
                    'pt-16 pb-50 lg:pt-25 lg:pb-60',
                    isDark ? 'bg-primary' : 'from-gray-light bg-gradient-to-t',
                )}
            >
                <div className="container">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
                        <div
                            className={cn(
                                'section-heading text-center md:text-left',
                                isDark ? '*:!text-white' : '',
                            )}
                            data-aos="fade-up"
                        >
                            <h2>Our Testimonial</h2>
                            <h3
                                className={cn(
                                    'md:after:left-0 md:after:translate-0',
                                    isDark ? 'after:bg-white' : '',
                                )}
                            >
                                Our Client Reviews
                            </h3>
                        </div>
                        <div
                            className={cn(
                                'flex max-w-75 items-start gap-15 text-center',
                                isDark ? 'text-white' : 'text-primary',
                            )}
                        >
                            <div className="space-y-2">
                                <h2 className="font-red-hat text-4xl font-bold lg:text-5xl">
                                    200+
                                </h2>
                                <p>Creative team to care for projects.</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-red-hat text-4xl font-bold lg:text-5xl">
                                    5
                                </h2>
                                <div className="flex justify-center gap-1 text-[#f2e15d]">
                                    <Star
                                        className="!size-4"
                                        fill="currentColor"
                                    />
                                    <Star
                                        className="!size-4"
                                        fill="currentColor"
                                    />
                                    <Star
                                        className="!size-4"
                                        fill="currentColor"
                                    />
                                    <Star
                                        className="!size-4"
                                        fill="currentColor"
                                    />
                                    <Star
                                        className="!size-4"
                                        fill="currentColor"
                                    />
                                </div>
                                <div>2,488 Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container -mt-40 md:-mt-30 lg:-mt-50 2xl:-mt-40">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={16}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.testimonialSlider-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1280: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="testimonialSlider grid !pb-10 md:!pb-15"
                >
                    {testiMonials.map((testimonial, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="!h-auto sm:h-full"
                            >
                                <div className="border-border flex h-full flex-col space-y-6 rounded-xl border bg-white px-4 py-6 shadow sm:space-y-8 sm:p-10">
                                    <div className="flex items-center gap-5 lg:gap-8">
                                        <div className="bg-gray-light size-20 overflow-hidden rounded-full">
                                            <Image
                                                src={testimonial.image}
                                                alt="Client"
                                                width={80}
                                                height={80}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-primary font-red-hat text-xl font-bold">
                                                {testimonial.name}
                                            </div>
                                            <div>{testimonial.position}</div>
                                        </div>
                                    </div>
                                    <p className="grow">{testimonial.review}</p>
                                    <div className="border-border mt-auto flex items-center justify-between gap-5 border-t pt-6 sm:pt-8">
                                        <Image
                                            src={testimonial.logo}
                                            alt="Client logo"
                                            width={120}
                                            height={30}
                                            className="w-25 opacity-50 sm:w-30"
                                        />
                                        <div className="flex justify-center gap-1 text-[#f2e15d]">
                                            <Star
                                                className="!size-4"
                                                fill="currentColor"
                                            />
                                            <Star
                                                className="!size-4"
                                                fill="currentColor"
                                            />
                                            <Star
                                                className="!size-4"
                                                fill="currentColor"
                                            />
                                            <Star
                                                className="!size-4"
                                                fill="currentColor"
                                            />
                                            <Star
                                                className="!size-4"
                                                fill="currentColor"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="testimonialSlider-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}
