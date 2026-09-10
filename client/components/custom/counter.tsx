'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
type CounterProps = {
    target: number
    step?: number
    interval?: number
    suffix?: string
    className?: string
}

export default function Counter({
    target,
    step = 1,
    interval = 30,
    suffix = '',
    className,
}: CounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let current = 0
        const id = setInterval(() => {
            current += step
            if (current >= target) {
                current = target
                clearInterval(id)
            }
            setCount(current)
        }, interval)
        return () => clearInterval(id)
    }, [target, step, interval])

    return (
        <h3 className={cn('text-3xl font-bold', className)}>
            {count}
            {suffix}
        </h3>
    )
}
