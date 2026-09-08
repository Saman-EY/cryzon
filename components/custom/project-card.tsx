'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Project = {
    id: number | string
    title: string
    description: string
    image: string
    url: string
    category?: string
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-auto">
            <Image
                src={project.image}
                alt={project.title}
                width={355}
                height={355}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-square"
                unoptimized
            />

            <div className="from-primary via-primary/80 absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t to-transparent p-4 pb-16 text-white transition-all duration-500 group-hover:pb-20 sm:pb-4 md:px-6">
                <span className="absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_12.5%,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.5)_37.5%)] backdrop-blur-md"></span>
                <h3 className="mb-1 text-xl/6 font-semibold sm:mb-2">
                    {project.title}
                </h3>
                <p className="line-clamp-2 text-sm md:text-base">
                    {project.description}
                </p>
            </div>

            <Button type="button" variant={'secondary'} asChild>
                <Link
                    href={project.url}
                    className="absolute! inset-x-4! bottom-4 z-10 duration-300 group-hover:bottom-4 sm:-bottom-full"
                    aria-label="View Project Details"
                >
                    <span>View Project</span>
                </Link>
            </Button>
        </div>
    )
}
