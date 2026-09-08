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
                <h2>Pricing Plans</h2>
                <h3>Explore Our Flexible Pricing Plans</h3>
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
                        <span>Monthly</span>
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
                        <span>Yearly</span>
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
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Basic
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    160
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /monthly
                                    </span>
                                </h4>
                                <p>
                                    Save{' '}
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>{' '}
                                    of consulting{' '}
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 top-0 -z-1 rotate-180 object-contain opacity-80"
                            />
                            <span className="bg-primary absolute top-0 left-0 py-1 pr-3 pl-14.5 text-xs text-white">
                                Recommended
                            </span>
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>
                            <div>
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Standard
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    180
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /monthly
                                    </span>
                                </h4>
                                <p>
                                    Save{' '}
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>{' '}
                                    of consulting{' '}
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Premium
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    260
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /monthly
                                    </span>
                                </h4>
                                <p>
                                    Save{' '}
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>{' '}
                                    of consulting{' '}
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary my-6 block h-0.5 w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Basic
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    1800
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /year
                                    </span>
                                </h4>
                                <p>
                                    Save
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>
                                    of consulting
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary h0.51 my-6 block w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
                            <Image
                                src="/images/square.jpg"
                                alt="square"
                                width={401}
                                height={268}
                                className="absolute inset-x-0 top-0 -z-1 rotate-180 object-contain opacity-80"
                            />
                            <span className="bg-primary absolute top-0 left-0 py-1 pr-3 pl-14.5 text-xs text-white">
                                Recommended
                            </span>
                            <div className="border-border absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>
                            <div>
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Standard
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    2000
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /year
                                    </span>
                                </h4>
                                <p>
                                    Save
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>
                                    of consulting
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary h0.51 my-6 block w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
                                <span className="text-primary font-red-hat mb-4 block text-xl font-bold">
                                    Premium
                                </span>
                                <h4 className="mb-6 flex gap-0.5 text-[56px]/14 font-semibold text-black">
                                    <span className="text-gray text-xl font-medium">
                                        $
                                    </span>
                                    2300
                                    <span className="text-gray mt-auto text-xl font-medium">
                                        /year
                                    </span>
                                </h4>
                                <p>
                                    Save
                                    <span className="font-medium text-black">
                                        20% offer
                                    </span>
                                    of consulting
                                    <span className="font-medium text-black">
                                        93K clients.
                                    </span>
                                </p>
                            </div>
                            <span className="bg-primary h0.51 my-6 block w-1/2 lg:my-8"></span>
                            <div>
                                <h5 className="mb-3 text-lg/5 font-medium text-black">
                                    Service Include:
                                </h5>
                                <ul className="mb-5 space-y-1 pl-2 [&>li]:flex [&>li]:gap-1.5">
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Business Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        24/7 Consultant Service
                                    </li>
                                    <li>
                                        <BadgeCheck className="fill-gray mt-1 size-4! [&>path:nth-child(2)]:text-white" />
                                        Great Customer Support
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        Market Growth Solution
                                    </li>
                                    <li>
                                        <BadgeCheck className="mt-1 size-4!" />
                                        24/7 Consultant Service
                                    </li>
                                </ul>
                            </div>
                            <Button
                                type="button"
                                className="hover:shadow-3xl! w-full"
                            >
                                <span>
                                    Purchase Now
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
