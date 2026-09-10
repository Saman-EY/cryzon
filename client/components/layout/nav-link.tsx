'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProp {
    className?: string
    href: string
    active?: string
    target?: string
    targetPath?: string
    rel?: string
    children: React.ReactNode
    onClick?: () => void
}
export default function NavLink({
    className,
    href,
    active,
    target,
    rel,
    children,
    onClick,
    targetPath,
}: IProp) {
    const pathName = usePathname()

    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className={cn(
                'relative',
                {
                    'sub-menu-active':
                        active ||
                        (!active && pathName === href) ||
                        (targetPath && pathName.startsWith(targetPath)),

                    active:
                        active ||
                        (!active && pathName === href) ||
                        (targetPath && pathName.startsWith(targetPath)),
                },
                'nav-item',
                className,
            )}
            onClick={onClick && onClick}
        >
            {children}
        </Link>
    )
}
