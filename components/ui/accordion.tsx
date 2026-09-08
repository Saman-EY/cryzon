'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(
                'border-border data-[state=open]:border-primary/20 block overflow-hidden rounded-xl border',
                className,
            )}
            {...props}
        />
    )
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <div className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'text-primary group hover:bg-gray-light/50 data-[state=open]:bg-gray-light/50 flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-base font-medium transition-all duration-300 outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:text-lg [&[data-state=open]>svg_path]:nth-[2]:rotate-180',
                    className,
                )}
                {...props}
            >
                {children}
                <Plus className="!size-4 shrink-0" />
            </AccordionPrimitive.Trigger>
        </div>
    )
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
            {...props}
        >
            <div className={cn('p-4', className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
