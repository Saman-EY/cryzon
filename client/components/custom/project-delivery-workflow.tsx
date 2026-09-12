'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronsRight, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProjectDeliveryWorkflow() {
    const [videoModal, setVideoModal] = useState(false)

    return (
        <div className="overflow-hidden sm:px-4">
            <div className="bg-primary py-16">
                <div className="container">
                    <div
                        className="section-heading text-center"
                        data-aos="fade-up"
                    >
                        <h2 className="text-white">OUR OPERATING MODEL</h2>
                        <h3 className="text-white after:bg-white">
                            CORRIDOR-LED LOGISTICS
                        </h3>
                    </div>
                    <div className="border-border/10 relative mt-12 flex flex-col items-center gap-6 border-b pb-12 text-white lg:mt-16 lg:flex-row lg:gap-16 lg:pb-0">
                        <span className="absolute inset-y-0 left-1/2 h-full w-px -translate-x-1/5 bg-white/50 lg:hidden"></span>
                        <div className="relative flex grow flex-col gap-6 lg:gap-14 lg:pt-18 lg:pb-14">
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:ml-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    01
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>ROUTE ENGINEERING</p>
                                    <p>
                                        Corridor selection based on cargo
                                        profile, border crossings, port access,
                                        transit restrictions and final
                                        destination.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -right-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:mx-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    02
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>CARGO & EQUIPMENT</p>
                                    <p>
                                        Matching each shipment with the right
                                        equipment, including ISO Tank
                                        Containers, hopper wagons, platforms,
                                        containers and specialized vehicles.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -right-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:ml-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    03
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>DOCUMENTATION & CUSTOMS</p>
                                    <p>
                                        Coordinating transit documents, customs
                                        procedures, cargo release, permits and
                                        cross-border requirements.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -right-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                        </div>
                        <div className="clip-shape relative z-1 order-3 mt-auto h-72 w-full overflow-hidden lg:order-none lg:h-170 lg:w-90">
                            <Image
                                src="/images/our-evolution.jpg"
                                alt="grid"
                                width={320}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="order-2 flex grow flex-col gap-6 lg:order-none lg:gap-14 lg:pt-18 lg:pb-14">
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:mr-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    04
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>MULTIMODAL EXECUTION</p>
                                    <p>
                                        Coordinating rail, road and sea legs as
                                        one continuous movement, with controlled
                                        transfers between transport modes and
                                        terminals.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -left-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:mx-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    05
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>BORDER & TERMINAL COORDINATION</p>
                                    <p>
                                        Managing handovers at border crossings,
                                        ports, railway terminals and
                                        transshipment points to maintain cargo
                                        continuity.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -left-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                            <div className="border-border/50 bg-primary relative flex min-w-78 md:max-w-90 items-center gap-2 border px-3 py-3 sm:gap-4 sm:px-4 lg:mr-auto">
                                <span className="shrink-0 text-sm/4 font-extrabold">
                                    06
                                </span>
                                <ChevronsRight className="size-3.5! shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p>DELIVERY CONTROL</p>
                                    <p>
                                        Tracking operational milestones from
                                        origin to destination, coordinating
                                        carriers and resolving route-level
                                        issues throughout the shipment.
                                    </p>
                                </div>
                                <span className="absolute top-1/2 -left-full hidden h-px w-full -translate-y-1/2 border-t border-white lg:block"></span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-222 pt-8 text-center text-white lg:pt-12">
                        <p>
                            Every shipment is planned as a complete logistics
                            chain — from origin and equipment allocation to
                            border clearance, multimodal transfer and final
                            delivery.
                        </p>
                        <div className="mt-5">
                            <Button
                                type="button"
                                variant={'secondary'}
                                onClick={() => setVideoModal(true)}
                                className="hover:after:bg-primary/90"
                            >
                                <span>Watch Video</span>
                            </Button>
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
                    <div
                        className="relative m-auto w-full max-w-6xl p-2"
                        x-show="videoModal"
                    >
                        <button
                            onClick={() => setVideoModal(false)}
                            className="text-primary absolute top-0 right-0 rounded-full bg-white p-1 text-2xl transition hover:scale-105"
                        >
                            <X />
                        </button>
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/GGf1JjSAKP4?rel=0&autoplay=1&v=GGf1JjSAKP4"
                                frameBorder="0"
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
