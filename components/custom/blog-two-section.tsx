'use client'
import BlogTwoCard from './blog-two-card'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
type Category = string

type BlogList = {
    id: number
    image: string
    title: string
    author: string
    date: string
    category: string
    description: string
    likes: number
    comments: number
}

export default function BlogTwoSection({
    categories,
    blogList,
}: {
    categories: Category[]
    blogList: BlogList[]
}) {
    return (
        <div className="container">
            <Tabs defaultValue="All">
                <div className="overflow-x-auto pb-0.5">
                    <TabsList>
                        {categories.map((category, index) => (
                            <TabsTrigger key={index} value={category}>
                                <span>{category}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {categories.map((category) => (
                    <TabsContent
                        key={category}
                        value={category}
                        className="mt-10 lg:mt-14"
                    >
                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {blogList
                                .filter((item) =>
                                    category === 'All'
                                        ? true
                                        : item.category === category,
                                )
                                .map((item) => (
                                    <BlogTwoCard key={item.id} item={item} />
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
            <div className="mt-8 flex justify-center gap-2.5 text-lg font-medium lg:mt-10 lg:gap-3">
                <button
                    type="button"
                    className="hover:text-primary grid size-10 place-content-center !p-0 transition hover:scale-110"
                >
                    <ChevronLeft className="size-6!" />
                </button>
                <Button
                    type="button"
                    variant={'secondary'}
                    className="size-10 !p-0"
                >
                    <span>1</span>
                </Button>
                <Button
                    type="button"
                    variant={'default'}
                    className="after:bg-primary size-10 p-0! text-white! after:h-[calc(100%+2px)] after:w-[calc(100%+2px)]"
                >
                    <span>2</span>
                </Button>
                <Button
                    type="button"
                    variant={'secondary'}
                    className="size-10 !p-0"
                >
                    <span>3</span>
                </Button>
                <div className="grid size-10 items-end justify-center">
                    <Ellipsis className="size-6!" />
                </div>
                <Button
                    type="button"
                    variant={'secondary'}
                    className="size-10 !p-0"
                >
                    <span>4</span>
                </Button>
                <button
                    type="button"
                    className="hover:text-primary grid size-10 place-content-center !p-0 transition hover:scale-110"
                >
                    <ChevronRight className="size-6!" />
                </button>
            </div>
        </div>
    )
}
