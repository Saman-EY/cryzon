'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn('flex flex-col', className)}
            {...props}
        />
    )
}

function TabsList({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            className={cn(
                'bg-gray-light relative z-1 mx-auto flex w-max gap-2.5 rounded-xl p-2',
                className,
            )}
            {...props}
        />
    )
}

function TabsTrigger({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                "text-primary bg-gray-light relative inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-medium whitespace-nowrap transition hover:text-white hover:shadow-sm focus-visible:ring-0 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white lg:rounded-xl lg:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                'after:bg-primary after:absolute after:-bottom-px after:left-1/2 after:size-0 after:-translate-x-1/2 after:rounded-lg after:duration-300 hover:shadow-sm hover:after:h-[calc(100%+2px)] hover:after:w-[calc(100%+2px)] data-[state=active]:after:h-[calc(100%+2px)] data-[state=active]:after:w-[calc(100%+2px)] lg:after:rounded-xl',
                '[&_span]:relative [&_span]:z-1 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:gap-1.5 [&_span]:transition',
                className,
            )}
            {...props}
        />
    )
}

function TabsContent({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn('flex-1 outline-none', className)}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
