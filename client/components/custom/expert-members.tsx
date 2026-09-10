'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Facebook, Instagram, Linkedin, Share2, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type Person = {
    id: number
    name: string
    position: string
    image: string
}

export default function ExpertMembers({
    MembersData,
}: {
    MembersData: Person[]
}) {
    const [activeMemberId, setActiveMemberId] = useState<number | null>(null)
    const menuRefs = useRef<Record<number, HTMLDivElement | null>>({})

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeMemberId !== null) {
                const menuRef = menuRefs.current[activeMemberId]
                if (menuRef && !menuRef.contains(event.target as Node)) {
                    setActiveMemberId(null)
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [activeMemberId])

    const toggleMemberMenu = (id: number) => {
        setActiveMemberId((prev) => (prev === id ? null : id))
    }
    return (
        <div className="container">
            <div
                className="section-heading aos-init aos-animate text-center"
                data-aos="fade-up"
            >
                <h2>Expert Members</h2>
                <h3>Professionals Team</h3>
            </div>
            <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 text-center sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-3 xl:grid-cols-4">
                {MembersData.map((member) => {
                    return (
                        <div
                            key={member.id}
                            className="border-border relative z-2 space-y-6 border-2 bg-white p-2 sm:p-4"
                        >
                            <div className="border-border absolute -top-6.75 -left-2 z-1 mb-0 h-20 w-10.5 rotate-45 border-r-2 bg-white"></div>
                            <div className="relative h-80 overflow-hidden sm:h-100">
                                <span className="bg-primary/10 absolute inset-0"></span>
                                <div className="absolute -top-6.75 -left-2 mb-0 h-20 w-10.5 rotate-45 bg-white"></div>
                                <Image
                                    width={325}
                                    height={400}
                                    src={member.image}
                                    alt="Profile"
                                    className="h-full w-full object-cover object-top"
                                />
                                <div className="absolute right-0 bottom-5 left-4 flex items-center gap-2 bg-white p-3 pr-2">
                                    <div
                                        className="relative"
                                        ref={(el) => {
                                            menuRefs.current[member.id] = el
                                        }}
                                    >
                                        <Button
                                            type="button"
                                            variant={'secondary'}
                                            onClick={() =>
                                                toggleMemberMenu(member.id)
                                            }
                                            className={cn(
                                                'size-10 !p-0',
                                                activeMemberId === member.id &&
                                                    'text-white! after:size-[calc(100%+2px)]!',
                                            )}
                                        >
                                            <span>
                                                {activeMemberId ===
                                                member.id ? (
                                                    <X />
                                                ) : (
                                                    <Share2 />
                                                )}
                                            </span>
                                        </Button>
                                        {activeMemberId === member.id && (
                                            <div className="divide-border absolute bottom-full mb-6 flex w-10.5 flex-col items-center divide-y bg-white p-2">
                                                <Link
                                                    href="https://www.facebook.com/sharer/sharer.php?u=https://cryzion-html.vercel.app/"
                                                    target="_blank"
                                                    className="hover:text-primary tranistion grid h-10 w-full place-content-center"
                                                >
                                                    <Facebook />
                                                </Link>
                                                <Link
                                                    href="https://www.instagram.com/?url=https%3A%2F%2Fcryzion-html.vercel.app%2F"
                                                    target="_blank"
                                                    className="hover:text-primary tranistion grid h-10 w-full place-content-center"
                                                >
                                                    <Instagram />
                                                </Link>
                                                <Link
                                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://cryzion-html.vercel.app/"
                                                    target="_blank"
                                                    className="hover:text-primary tranistion grid h-10 w-full place-content-center"
                                                >
                                                    <Linkedin />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className="grow space-y-1 text-right">
                                        <h2
                                            className="text-primary font-red-hat text-xl font-semibold"
                                            x-text="item.name"
                                        >
                                            {member.name}
                                        </h2>
                                        <p>{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
