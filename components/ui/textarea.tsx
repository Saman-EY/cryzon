import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                'border-border placeholder:text-gray focus:border-primary text-primary w-full border bg-white px-4 py-2.5 text-base/5 transition outline-none placeholder:font-normal focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    )
}

export { Textarea }
