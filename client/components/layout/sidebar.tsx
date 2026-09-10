import IconTwitter from '@/components/icons/icon-twitter'
import NavLink from '@/components/layout/nav-link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <div
            className={cn(
                'w-full grow bg-white p-5 pt-24 transition-all duration-300',
            )}
        >
            <div className="space-y-10">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={120}
                    height={33}
                />
                <p>
                    We must explain to you how all seds this mistakens idea
                    denouncing pleasures and praising account. All seds this
                    mistakens idea denouncing pleasures.
                </p>
                <div className="space-y-8">
                    <p className="text-primary font-red-hat text-xl font-semibold">
                        Get In Touch
                    </p>
                    <div className="text-primary space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="!size-4" />
                            <NavLink
                                href="tel:+44 151 222 3344"
                                className="transition hover:opacity-80"
                            >
                                +44 151 222 3344
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="!size-4" />
                            <NavLink
                                href="mailto:support@example.com"
                                className="transition hover:opacity-80"
                            >
                                support@example.com
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="!size-4" />
                            <div>XYZ Hilton Street, 125 Town United State</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <NavLink
                            href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                            target="_blank"
                            className={`size-10 p-0! ${buttonVariants()}`}
                        >
                            <span>
                                <Facebook className="size-4!" />
                            </span>
                        </NavLink>
                        <NavLink
                            href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                            target="_blank"
                            className={`size-10 p-0! ${buttonVariants()}`}
                        >
                            <span>
                                <Instagram className="size-4!" />
                            </span>
                        </NavLink>
                        <NavLink
                            href="https://twitter.com/intent/tweet?url=&text=https://cryzion-html.vercel.app/"
                            target="_blank"
                            className={`size-10 p-0! ${buttonVariants()}`}
                        >
                            <span>
                                <IconTwitter />
                            </span>
                        </NavLink>
                        <NavLink
                            href="https://www.youtube.com/login"
                            target="_blank"
                            className={`size-10 p-0! ${buttonVariants()}`}
                        >
                            <span>
                                <Youtube className="size-4!" />
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
