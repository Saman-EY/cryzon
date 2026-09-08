import Image from 'next/image'

export const ScreenLoading = () => {
    return (
        <div className="relative">
            <div
                id="preloader"
                className="fixed inset-0 z-60 flex h-dvh w-full items-center justify-center bg-white"
            >
                <span className="border-gray animate-customPingReverse absolute top-1/2 left-1/2 size-16 -translate-1/2 border"></span>
                <Image
                    src="/images/loader.png"
                    alt="Loader"
                    width={270}
                    height={330}
                    className="animate-customPing w-10"
                />
            </div>
        </div>
    )
}
