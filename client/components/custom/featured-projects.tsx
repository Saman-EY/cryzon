'use client'
import ProjectCard from '@/components/custom/project-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Category = string

type Project = {
    id: number
    title: string
    description: string
    image: string
    category: string
    url: string
}

export default function FeaturedProjects({
    categories,
    projects,
}: {
    categories: Category[]
    projects: Project[]
}) {
    return (
        <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
                <h2>Featured Projects</h2>
                <h3>Digital Transformation for Leading Retail Chain</h3>
            </div>
            {/* <div className="mt-8 overflow-x-auto pb-0.5 text-center">
                <div className="bg-gray-light relative z-1 mx-auto flex w-max gap-2.5 rounded-xl p-2">
                    {categories.map((category, index) => (
                        <Button
                            type="button"
                            variant={'secondary'}
                            key={index}
                            className={cn(
                                'px-4! py-1.5!',
                                activeCategory === category
                                    ? 'text-white! after:h-[calc(100%+2px)]! after:w-[calc(100%+2px)]!'
                                    : '',
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            <span>{category}</span>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 xl:gap-10">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div> */}
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
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 xl:gap-10">
                            {projects
                                .filter((project) =>
                                    category === 'All'
                                        ? true
                                        : project.category === category,
                                )
                                .map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
