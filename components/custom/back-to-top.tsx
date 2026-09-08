import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTopBtn() {
    const [show, setShow] = useState(false)
    const handleScroll = () => {
        setShow(window.scrollY > 300)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (!show) return null
    return (
        <div
            className="bg-primary fixed right-6 bottom-6 z-50 mb-0 cursor-pointer rounded-full p-4 text-white shadow-xl ring-2 ring-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12 hover:ring-white/40"
            title="Back to top"
            onClick={scrollToTop}
        >
            <ArrowUp className="h-5 w-5" />
        </div>
    )
}
