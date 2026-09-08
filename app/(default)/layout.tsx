'use client'
import '../globals.css'
import { ReactNode, useEffect, useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ScreenLoading } from '@/components/custom/screen-loading'
import BackToTopBtn from '@/components/custom/back-to-top'

export default function DefaultLayout({ children }: { children: ReactNode }) {
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 2000)
    }, [])

    if (isLoad) {
        return <ScreenLoading />
    }
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTopBtn />
        </>
    )
}
