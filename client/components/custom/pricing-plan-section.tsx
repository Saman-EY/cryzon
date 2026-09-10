'use client'
import Image from 'next/image'
import { BadgeCheck, ChevronsRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function PricingPlanSection() {
    const [active, setActive] = useState('monthly')
    return (
        <div className="container">
            <div
                className="section-heading aos-init aos-animate text-center"
                data-aos="fade-up"
            >
                <h2>TRANSPORT SOLUTIONS</h2>
                <h3>Move Cargo. Choose the Right Route</h3>
            </div>
            <div className="mx-auto mt-10 max-w-7xl lg:mt-14">
                <div className="bg-gray-light relative z-1 mx-auto mb-6 flex w-max gap-2.5 rounded-xl p-2">
                    <Button
                        onClick={() => setActive('monthly')}
                        variant={'secondary'}
                        className={cn(
                            'px-4! py-1.5!',
                            active === 'monthly'
                                ? 'text-white! after:h-[calc(100%+2px)]! after:w-[calc(100%+2px)]!'
                                : '',
                        )}
                    >
                        <span>Rail</span>
                    </Button>
                    <Button
                        onClick={() => setActive('yearly')}
                        variant={'secondary'}
                        className={cn(
                            'px-4! py-1.5!',
                            active === 'yearly'
                                ? 'text-white! after:h-[calc(100%+2px)]! after:w-[calc(100%+2px)]!'
                                : '',
                        )}
                    >
                        <span>Sea</span>
                    </Button>
                </div>
                {active === 'monthly' && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    GENERAL CARGO
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        MACHINERY & INDUSTRIAL GOODS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        PALLETIZED CARGO
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        STEEL & CONSTRUCTION MATERIALS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        COMMERCIAL GOODS
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    BULK & BAGGED CARGO
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        GRAIN & AGRICULTURAL PRODUCTS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        JUMBO BAGS & FIBC
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        HOPPER CARGO
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        FERTILIZERS & RAW MATERIALS
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    DANGEROUS & SPECIAL CARGO
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        CHEMICALS & HAZARDOUS GOODS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        PETROLEUM PRODUCTS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        ISO TANK CONTAINERS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        SPECIAL & REGULATED CARGO
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                    </div>
                )}

                {active === 'yearly' && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    LIQUID BULK
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        EDIBLE & INDUSTRIAL OILS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        CHEMICALS & LIQUID PRODUCTS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        PETROLEUM PRODUCTS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        ISO TANK CONTAINERS
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    DRY BULK
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        GRAIN & AGRICULTURAL COMMODITIES
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        CORN & SOY
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        MINERALS & RAW MATERIALS
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        BULK CARGO
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                        <div className="border-border relative border-2 px-6 pt-12 pb-8 2xl:px-8">
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 bottom-0 -z-1 object-contain opacity-80"
                            />
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>

                            <div>
                                <h4 className="mb-6 flex gap-0.5 text-4xl font-semibold text-black">
                                    CONTAINER & PROJECT CARGO
                                </h4>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        FCL & CONTAINERIZED CARGO
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        GENERAL & PALLETIZED CARGO
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        HEAVY & OVERSIZED CARGO
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        PROJECT CARGO
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    EXPLORE ALL SERVICES
                                    <ChevronsRight />
                                </span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
