'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const partners = [
    {
        src: '/images/partner-logo1.svg',
        width: 128,
        height: 32,
    },
    {
        src: '/images/partner-logo2.svg',
        width: 128,
        height: 32,
    },
    {
        src: '/images/partner-logo3.svg',
        width: 123,
        height: 32,
    },
    {
        src: '/images/partner-logo4.svg',
        width: 128,
        height: 32,
    },
    {
        src: '/images/partner-logo5.svg',
        width: 96,
        height: 32,
    },
    // {
    //     src: '/images/partner-logo1.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo2.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo3.svg',
    //     width: 123,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo4.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo5.svg',
    //     width: 96,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo1.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo2.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo3.svg',
    //     width: 123,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo4.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo5.svg',
    //     width: 96,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo1.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo2.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo3.svg',
    //     width: 123,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo4.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo5.svg',
    //     width: 96,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo1.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo2.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo3.svg',
    //     width: 123,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo4.svg',
    //     width: 128,
    //     height: 32,
    // },
    // {
    //     src: '/images/partner-logo5.svg',
    //     width: 96,
    //     height: 32,
    // },
]

export default function LogoAnimate() {
    return (
        <div className="overflow-hidden px-4">
            <div className="bg-gray-light relative">
                <div className="absolute -top-35 -left-10 hidden h-50 w-30 rotate-45 bg-white md:-top-20 lg:block"></div>
                <div className="absolute -right-20 -bottom-25 hidden h-30 w-50 -rotate-45 bg-white md:-bottom-10 lg:block"></div>
                <div className="relative w-full overflow-hidden py-16 lg:px-8 lg:py-25">
                    <div className="absolute inset-y-5 left-1/2 z-10 grid -translate-x-1/2 place-content-center mask-[linear-gradient(to_right,transparent,#f2f2f2,#f2f2f2,transparent),linear-gradient(to_bottom,transparent,#f2f2f2,#f2f2f2)] px-4 py-4 text-center backdrop-blur-xl sm:px-10">
                        <span className="text-3xl font-semibold text-black">
                            119+
                        </span>
                        <span className="mt-2 font-semibold tracking-wider whitespace-nowrap uppercase">
                            LOGISTICS NETWORK
                        </span>
                    </div>

                    <div className="relative overflow-hidden whitespace-nowrap">
                        <span className="via-gray-light/60 from-gray-light absolute inset-y-0 left-0 z-2 h-full w-20 bg-gradient-to-r"></span>
                        <span className="via-gray-light/60 from-gray-light absolute inset-y-0 right-0 z-2 h-full w-20 bg-gradient-to-l"></span>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView="auto"
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={5000}
                            className="LogoSwiper"
                        >
                            {logos.map((item, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <div className="flex items-center justify-center px-4">
                                        <span className="text-lg font-bold text-black">
                                            {item.name}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

const logos = [
    {
        name: 'RUSSIA',
        image: '',
    },
    {
        name: 'CENTRAL ASIA ',
        image: '',
    },
    {
        name: 'CASPIAN',
        image: '',
    },
    {
        name: 'NORTH–SOUTH',
        image: '',
    },
    {
        name: 'EAST–WEST',
        image: '',
    },
    {
        name: 'RUSSIA',
        image: '',
    },
    {
        name: 'CENTRAL ASIA ',
        image: '',
    },
    {
        name: 'CASPIAN',
        image: '',
    },
    {
        name: 'NORTH–SOUTH',
        image: '',
    },
    {
        name: 'EAST–WEST',
        image: '',
    },
    {
        name: 'RUSSIA',
        image: '',
    },
    {
        name: 'CENTRAL ASIA ',
        image: '',
    },
    {
        name: 'CASPIAN',
        image: '',
    },
    {
        name: 'NORTH–SOUTH',
        image: '',
    },
    {
        name: 'EAST–WEST',
        image: '',
    },
]
