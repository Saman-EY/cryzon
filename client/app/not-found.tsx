import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="relative flex grow overflow-hidden px-4 py-8">
            <Image
                src="/images/not-found.jpg"
                alt="auth-image"
                width={1920}
                height={551}
                className="absolute inset-0 size-full object-cover object-top"
            />
            <span className="absolute inset-0 bg-black/30"></span>

            <div className="relative z-2 m-auto">
                <div className="space-y-8 text-center text-white">
                    <h1 className="font-red-hat animate-pulse text-9xl/20 font-extrabold sm:text-[200px]/40 lg:text-[360px]/65">
                        404
                    </h1>
                    <p className="mx-auto w-full max-w-140 sm:text-lg/6 lg:text-xl/6.5">
                        The page you’re looking for might have taken a different
                        path, but we’re here to guide you back on track.
                    </p>
                    <Link href="/" className={buttonVariants()}>
                        <span>Return to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
