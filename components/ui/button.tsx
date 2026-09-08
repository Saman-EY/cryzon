import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "relative inline-flex shrink-0 items-center justify-center font-medium after:absolute after:-bottom-px after:left-1/2 after:size-0 after:-translate-x-1/2 after:rounded-lg after:duration-300 hover:shadow-sm hover:after:h-[calc(100%+2px)] hover:after:w-[calc(100%+2px)] lg:after:rounded-xl disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-0 [&_span]:relative [&_span]:z-1 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:gap-1.5 [&_span]:transition",
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-white hover:text-primary after:bg-gray-light ',
                outline:
                    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
                secondary:
                    'after:bg-primary text-primary bg-gray-light hover:text-white',
                ghost: 'hover:bg-transparent bg-transparent p-0!',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default:
                    'px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg lg:rounded-xl',
                sm: '',
                lg: '',
                icon: '',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
