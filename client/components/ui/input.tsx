import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                'border-border placeholder:text-gray focus:border-primary text-primary w-full border bg-white px-4 py-2.5 text-base/5 transition outline-none placeholder:font-normal focus:ring-0 focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:ring-0',
                'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
                className,
            )}
            {...props}
        />
    )
}

export { Input }
