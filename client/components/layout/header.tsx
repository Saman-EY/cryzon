'use client'
import { useEffect, useState } from 'react'
import IconTwitter from '../icons/icon-twitter'
import NavLink from './nav-link'
import { cn } from '@/lib/utils'
import {
    ArrowRight,
    ChevronDown,
    Clock,
    Facebook,
    Instagram,
    Menu,
    Phone,
    X,
    Youtube,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Sidebar from '@/components/layout/sidebar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

function NavMenu({ className }: { className?: string }) {
    const pathname = usePathname()
    const [openDropdown, setOpenDropdown] = useState<
        'services' | 'corridor' | 'blog' | null
    >(null)

    const handleOpenChange =
        (menu: 'services' | 'corridor' | 'blog') => (isOpen: boolean) => {
            if (isOpen) {
                setOpenDropdown(menu)
            } else {
                if (openDropdown === menu) {
                    setOpenDropdown(null)
                }
            }
        }

    return (
        <div
            className={cn(
                'flex w-full grow flex-col gap-2 bg-white px-4 py-6 transition-all duration-500 md:gap-5 lg:flex-row lg:items-center lg:bg-transparent lg:p-0',
                className,
            )}
        >
            <div className="flex items-center justify-between border-b border-black/10 pb-4 lg:hidden">
                <NavLink href="/" className="inline-flex shrink-0">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={406}
                        height={110}
                        className="w-30"
                    />
                </NavLink>
            </div>
            <NavLink href="/" className="nav-link">
                Home
            </NavLink>
            <NavLink href="/about-us" className="nav-link">
                About
            </NavLink>
            <Popover
                open={openDropdown === 'services'}
                onOpenChange={handleOpenChange('services')}
            >
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn(
                            'nav-link flex w-full items-center justify-between gap-1.5 data-[state=open]:after:w-full [&[data-state=open]>svg]:rotate-180',
                            pathname.startsWith('/services') && 'after:w-full!',
                        )}
                    >
                        Services
                        <ChevronDown className="size-4! transition" />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start">
                    <NavLink
                        href="/services"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        href="/services/service-details"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Service details
                    </NavLink>
                </PopoverContent>
            </Popover>
            <Popover
                open={openDropdown === 'corridor'}
                onOpenChange={handleOpenChange('corridor')}
            >
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn(
                            'nav-link flex w-full items-center justify-between gap-1.5 data-[state=open]:after:w-full [&[data-state=open]>svg]:rotate-180',
                            pathname.startsWith('/corridor') && 'after:w-full!',
                        )}
                    >
                        Corridor
                        <ChevronDown className="size-4! transition" />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start">
                    <NavLink
                        href="/corridor"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Corridor
                    </NavLink>
                    <NavLink
                        href="/corridor/corridor-details"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Corridor details
                    </NavLink>
                </PopoverContent>
            </Popover>
            {/* <Popover
                open={openDropdown === 'blog'}
                onOpenChange={handleOpenChange('blog')}
            >
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn(
                            'nav-link flex w-full items-center justify-between gap-1.5 data-[state=open]:after:w-full [&[data-state=open]>svg]:rotate-180',
                            pathname.startsWith('/blog') && 'after:w-full!',
                        )}
                    >
                        Blog
                        <ChevronDown className="size-4! transition" />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start">
                    <NavLink
                        href="/blog"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        href="/blog/blog-two"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Blog style two
                    </NavLink>
                    <NavLink
                        href="/blog/blog-details"
                        className="flex w-full items-center gap-2 px-3 py-2 transition hover:text-black"
                        onClick={() => setOpenDropdown(null)}
                    >
                        Blog details
                    </NavLink>
                </PopoverContent>
            </Popover> */}
            <NavLink href="/contact" className="nav-link">
                Contact
            </NavLink>
            {/* <NavLink
                href="/rail-logistics"
                className="nav-link whitespace-nowrap"
            >
                Rail logistics
            </NavLink>
            <NavLink
                href="/sea-logistics"
                className="nav-link whitespace-nowrap"
            >
                Sea logistics
            </NavLink>
            <NavLink
                href="/4pl-logistics"
                className="nav-link whitespace-nowrap"
            >
                4PL LOGISTICS
            </NavLink> */}
        </div>
    )
}
const Header = () => {
    const pathName = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled =
                window.scrollY > 0 &&
                document.body.getBoundingClientRect().top === 0
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        setIsOpen(false)
    }, [pathName])

    return (
        <>
            <div className="border-border relative hidden min-h-11 items-center border-b bg-white lg:flex">
                <div className="bg-primary absolute -left-5 h-full w-1/2 -skew-x-[20deg] xl:w-2/5"></div>
                <div className="relative container">
                    <div className="flex items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-1 text-white">
                            Want to grow your business faster?
                            <NavLink
                                href="/contact"
                                className="flex items-center gap-1 transition hover:opacity-80 hover:[&_svg]:translate-x-0.5"
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="size-5 shrink-0 duration-300" />
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="size-4 shrink-0" />
                                <div>Working: 8:00 am - 5:00 pm</div>
                            </div>
                            <div className="bg-border h-11 w-px -skew-x-12"></div>
                            <div className="flex items-center gap-3">
                                Visit Us:
                                <div className="flex items-center gap-3.5">
                                    <Link
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                                        className="transition hover:opacity-80"
                                        target="_blank"
                                    >
                                        <Facebook />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                                        className="transition hover:opacity-80"
                                        target="_blank"
                                    >
                                        <Instagram />
                                    </Link>
                                    <Link
                                        href="https://twitter.com/intent/tweet?url=&text=https://cryzion-html.vercel.app/"
                                        className="transition hover:opacity-80"
                                        target="_blank"
                                    >
                                        <IconTwitter />
                                    </Link>
                                    <Link
                                        href="https://www.youtube.com/login"
                                        className="transition hover:opacity-80"
                                        target="_blank"
                                    >
                                        <Youtube />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    'border-border sticky top-0 z-51 border-b bg-white py-4 transition-all duration-300 lg:py-0',
                    scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : '',
                )}
            >
                <div className="container">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-10 xl:gap-20">
                            <NavLink href="/" className="shrink-0">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width={120}
                                    height={33}
                                    className="w-26 sm:w-30"
                                />
                            </NavLink>
                            <NavMenu className="hidden lg:flex" />
                        </div>
                        <div className="flex items-center gap-2.5 sm:gap-4 xl:gap-6">
                            <div className="hidden items-center gap-4 xl:flex">
                                <Button
                                    type="button"
                                    variant={'secondary'}
                                    asChild
                                >
                                    <NavLink
                                        href="tel:+441512223344"
                                        className="size-12 p-0"
                                    >
                                        <span>
                                            <Phone className="!size-6" />
                                        </span>
                                    </NavLink>
                                </Button>
                                <div className="space-y-1">
                                    <div className="text-sm">
                                        Call us anytime
                                    </div>
                                    <NavLink
                                        href="tel:+441512223344"
                                        className="text-primary font-semibold transition hover:opacity-80"
                                    >
                                        +44 151 222 3344
                                    </NavLink>
                                </div>
                            </div>
                            <Button type="button" asChild>
                                <NavLink
                                    href="/contact"
                                    className={`px-2.5 sm:px-6`}
                                >
                                    <span>Book a Meeting</span>
                                </NavLink>
                            </Button>

                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'secondary'}
                                        className="size-9 p-0 lg:!hidden lg:size-12"
                                    >
                                        <span>
                                            <Menu className="!size-5 lg:!size-6" />
                                        </span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left">
                                    <SheetTitle className="sr-only" />
                                    <SheetDescription className="sr-only" />
                                    <NavMenu />
                                    <SheetClose asChild>
                                        <Button
                                            type="button"
                                            className="!absolute !top-5 !right-5 z-51 size-9! !p-0"
                                        >
                                            <span>
                                                <X className="size-5" />
                                            </span>
                                        </Button>
                                    </SheetClose>
                                </SheetContent>
                            </Sheet>
                            <div className="relative hidden lg:flex">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button
                                            type="button"
                                            variant={'secondary'}
                                            className="size-12 !p-0"
                                        >
                                            <span>
                                                <Menu className="!size-6" />
                                            </span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetTitle className="sr-only" />
                                        <SheetDescription className="sr-only" />
                                        <Sidebar />
                                        <SheetClose asChild>
                                            <Button
                                                type="button"
                                                className="!absolute !top-5 !right-5 z-51 size-12 !p-0"
                                            >
                                                <span>
                                                    <X className="!size-6" />
                                                </span>
                                            </Button>
                                        </SheetClose>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
