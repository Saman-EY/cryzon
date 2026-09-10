import { Button } from '@/components/ui/button'
import NavLink from './nav-link'
import { ChevronsRight, Mail, MapPin, Phone } from 'lucide-react'
const Footer = () => {
    const currYear = new Date().getFullYear()
    return (
        <>
            <footer className="mt-auto mb-0">
                <div className="xl:px-4 2xl:px-10">
                    <div className="bg-gray-light">
                        <div className="container">
                            <div className="grid grid-cols-1 items-start justify-between gap-10 py-16 sm:grid-cols-2 lg:flex lg:py-25">
                                <div className="shrink-0 space-y-5 lg:max-w-70 lg:space-y-8 xl:max-w-80 2xl:max-w-106">
                                    <div className="font-red-hat text-primary space-y-2 text-3xl">
                                        <div>Ready To</div>
                                        <div className="font-bold">
                                            Work With Us?
                                        </div>
                                    </div>
                                    <p>
                                        We turn innovation into success with our
                                        expertise, passion, and commitment to
                                        excellence.
                                    </p>
                                    <Button type="button" asChild>
                                        <NavLink
                                            href="/contact"
                                            className="shadow-3xl! w-fit"
                                        >
                                            <span>Get a Quote</span>
                                        </NavLink>
                                    </Button>
                                </div>
                                <div className="shrink-0 space-y-6 sm:space-y-8">
                                    <h2 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-3 text-2xl font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3">
                                        Our Services
                                    </h2>
                                    <div className="space-y-1">
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Managed IT Services
                                        </NavLink>
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            System Integration
                                        </NavLink>
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            AI & Automation Services
                                        </NavLink>
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Cloud Services
                                        </NavLink>
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Software Development
                                        </NavLink>
                                        <NavLink
                                            href="/services/service-details"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            End-to-End Support
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="shrink-0 space-y-6 sm:space-y-8">
                                    <h2 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-3 text-2xl font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3">
                                        Pages
                                    </h2>
                                    <div className="space-y-1">
                                        <NavLink
                                            href="/project"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Projects
                                        </NavLink>
                                        <NavLink
                                            href="/services"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Services
                                        </NavLink>
                                        <NavLink
                                            href="/blog"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Blog
                                        </NavLink>
                                        <NavLink
                                            href="/terms-conditions"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Terms & Conditions
                                        </NavLink>
                                        <NavLink
                                            href="/privacy-policy"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Privacy Policy
                                        </NavLink>
                                        <NavLink
                                            href="/cookie-policy"
                                            className="footer-link"
                                        >
                                            <ChevronsRight className="size-4" />
                                            Cookie Policy
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <h2 className="text-primary font-red-hat after:bg-primary relative inline-flex pb-3 text-2xl font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/3">
                                        Contact Us
                                    </h2>
                                    <div className="grid max-w-125 gap-8 lg:gap-10 2xl:grid-cols-2">
                                        <div className="flex items-center gap-4">
                                            <Button
                                                type="button"
                                                asChild
                                                variant={'secondary'}
                                            >
                                                <NavLink
                                                    href="tel:+44 151 222 3344"
                                                    className="size-12 !bg-white !p-0"
                                                >
                                                    <span>
                                                        <Phone className="!size-6" />
                                                    </span>
                                                </NavLink>
                                            </Button>
                                            <div className="space-y-1">
                                                <div className="text-sm">
                                                    Call Us 24/7
                                                </div>
                                                <NavLink
                                                    href="tel:+44 151 222 3344"
                                                    className="text-primary font-semibold transition hover:opacity-80"
                                                >
                                                    +44 151 222 3344
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Button
                                                type="button"
                                                asChild
                                                variant={'secondary'}
                                            >
                                                <NavLink
                                                    href="https://maps.app.goo.gl/26wGhEPw6c2SNHid7"
                                                    target="_blank"
                                                    className="size-12 !bg-white !p-0"
                                                >
                                                    <span>
                                                        <MapPin className="!size-6" />
                                                    </span>
                                                </NavLink>
                                            </Button>
                                            <div className="space-y-1">
                                                <div className="text-sm">
                                                    Our Location
                                                </div>
                                                <NavLink
                                                    href="https://maps.app.goo.gl/26wGhEPw6c2SNHid7"
                                                    target="_blank"
                                                    className="text-primary font-semibold transition hover:opacity-80"
                                                >
                                                    XYZ Hilton Street, 125 Town
                                                    United State
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Button
                                                type="button"
                                                asChild
                                                variant={'secondary'}
                                            >
                                                <NavLink
                                                    href="mailto:support@example.com"
                                                    className="size-12 !bg-white !p-0"
                                                >
                                                    <span>
                                                        <Mail className="!size-6" />
                                                    </span>
                                                </NavLink>
                                            </Button>
                                            <div className="space-y-1">
                                                <div className="text-sm">
                                                    Work with us
                                                </div>
                                                <NavLink
                                                    href="mailto:support@example.com"
                                                    className="text-primary font-semibold transition hover:opacity-80"
                                                >
                                                    support@example.com
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-primary flex flex-col-reverse items-center justify-between gap-4 py-5 text-sm sm:flex-row">
                        <div>
                            <NavLink
                                href="/"
                                className="transition hover:opacity-80"
                            >
                                Cryzion
                            </NavLink>
                            &nbsp;- Copyright&nbsp;
                            <span>{currYear}</span>. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6">
                            <NavLink
                                href="/faqs"
                                className="transition hover:opacity-80"
                            >
                                FAQs
                            </NavLink>
                            <NavLink
                                href="/contact"
                                className="transition hover:opacity-80"
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
