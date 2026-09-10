'use client'
import { cn } from '@/lib/utils'
import { Play, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Counter from '@/components/custom/counter'

export default function OurJourney() {
    const [videoModal, setVideoModal] = useState(false)
    return (
        <div className="container grid md:grid-cols-2 lg:flex lg:max-w-none lg:gap-5 lg:px-0 lg:pb-14">
            <div className="relative z-1 mr-5 ml-auto h-60 w-full md:h-auto md:w-auto lg:mr-0 lg:w-6/12 xl:w-5/12">
                <div className="relative h-full px-5 md:px-0 lg:max-w-[calc(100%-60px)]">
                    <Image
                        src="/images/our-evolution.jpg"
                        alt="grid"
                        width={734}
                        height={744}
                        className="h-full w-full object-cover md:ml-auto"
                        loading="lazy"
                    />
                    <span className="absolute -top-10 -right-14 hidden h-25 w-35 rotate-45 bg-white xl:block"></span>
                    <div className="md:border-border/50 md:bg-primary/20 absolute top-1/2 left-1/2 -translate-1/2 rounded-full border text-white backdrop-blur-md transition duration-300 md:top-auto md:right-5 md:bottom-5 md:left-5 md:-translate-0 md:rounded-xl md:p-4 lg:left-auto lg:p-6">
                        <button
                            type="button"
                            onClick={() => setVideoModal(!videoModal)}
                            className="relative grid size-14 shrink-0 place-content-center rounded-full bg-white/20 md:mb-5 xl:size-16"
                        >
                            <span className="absolute inset-0 -z-1 animate-[ping_2s_ease-out_infinite] rounded-full bg-white/30 md:bg-white/10"></span>
                            <Play className="size-6! fill-white" />
                        </button>

                        <span className="hidden text-white/90 md:block">
                            Click for watch
                        </span>
                        <p className="hidden text-2xl font-medium md:block">
                            See our latest video
                        </p>
                    </div>
                </div>
            </div>
            <div className="-mt-20 grow md:mt-0 lg:pr-4 2xl:pt-10">
                <div className="bg-gray-light relative mr-auto h-full max-w-230 p-5 pt-27 md:py-10 lg:mt-14 lg:-ml-23 lg:p-12 2xl:px-14 2xl:py-25">
                    <div className="absolute -bottom-21 -left-4 mb-0 hidden h-40 w-18 rotate-135 bg-white lg:block"></div>
                    <div
                        className="section-heading aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        <h2>Our Journey</h2>
                        <h3 className="after:left-0 after:translate-0">
                            From Vision to Worldwide Impact
                        </h3>
                    </div>
                    <div className="mt-6 grow space-y-4 md:mt-10 md:space-y-6">
                        <p>
                            What began as a bold vision to simplify technology
                            for businesses has grown into a global mission to
                            drive digital transformation at scale.
                        </p>
                        <p>
                            Over the years, we’ve evolved from a local IT
                            consultancy into a trusted technology partner for
                            organizations around the world — helping them
                            modernize infrastructure, embrace the cloud, secure
                            their digital assets, and stay ahead in a rapidly
                            changing landscape.
                        </p>
                        <p>
                            Our journey is powered by people, guided by
                            strategy, and driven by a relentless focus on impact
                            — because your success is the measure of ours.
                        </p>
                    </div>
                    <div className="divide-gray/30 mt-10 grid max-w-140 grid-cols-3 divide-x">
                        <div className="pr-2 sm:pr-4">
                            <Counter
                                target={93}
                                interval={30}
                                step={1}
                                suffix="%"
                                className="text-primary"
                            />
                            <p className="text-sm">Project Success Rate</p>
                        </div>
                        <div className="px-2 sm:px-4">
                            <Counter
                                target={20}
                                interval={100}
                                step={1}
                                suffix="M"
                                className="text-primary"
                            />
                            <p className="text-sm">Worldwide Impact</p>
                        </div>
                        <div className="pl-2 sm:pl-4">
                            <Counter
                                target={8.5}
                                interval={200}
                                step={1}
                                suffix="x"
                                className="text-primary"
                            />
                            <p className="text-sm">Growth Acceleration</p>
                        </div>
                    </div>
                </div>
            </div>
            {videoModal && (
                <div
                    className={cn(
                        'fixed inset-0 z-51 hidden items-center justify-center overflow-y-auto bg-black/70',
                        videoModal && 'flex!',
                    )}
                    onClick={() => setVideoModal(false)}
                >
                    <div className="relative m-auto w-full max-w-6xl p-2">
                        <button
                            onClick={() => setVideoModal(false)}
                            type="button"
                            className="text-primary absolute top-0 right-0 rounded-full bg-white p-1 text-2xl transition hover:scale-105"
                        >
                            <X />
                        </button>
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/GGf1JjSAKP4?rel=0&autoplay=1&v=GGf1JjSAKP4"
                                allowFullScreen
                                className="h-full w-full rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
