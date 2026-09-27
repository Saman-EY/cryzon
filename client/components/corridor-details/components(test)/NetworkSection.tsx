import { NetworkNode } from "./NetworkNode "

function NetworkSection() {
    return (
        <section className="relative overflow-hidden bg-[#20282D] py-10 text-white">
            {/* Background decoration */}
            {/* <div className="pointer-events-none absolute top-1/2 -left-40 size-96 -translate-y-1/2 rounded-full bg-[#1e4f85]/20 blur-3xl" /> */}
            {/* <div className="pointer-events-none absolute top-1/4 -right-40 size-96 rounded-full bg-[#1e4f85]/20 blur-3xl" /> */}

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <div className="mb-14 max-w-2xl">
                    <span className="mb-3 block text-sm font-medium tracking-[0.25em] text-sky-400 uppercase">
                        Transport Network
                    </span>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Network Overview
                    </h2>
                </div>

                {/* Network */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-sm sm:p-10">
                    {/* Main corridor */}
                    <div className="flex flex-col items-center">
                        {/* Russia */}
                        <NetworkNode
                            title="RUSSIA"
                            subtitle="Origin & Northern Gateway"
                        />

                        <NetworkArrow />

                        {/* Azerbaijan */}
                        <NetworkNode
                            title="AZERBAIJAN"
                            subtitle="Caucasus Corridor"
                        />

                        <NetworkArrow />

                        {/* Astara */}
                        <NetworkNode title="ASTARA" subtitle="Border Gateway" />

                        <NetworkArrow />

                        {/* Iran */}
                        <div className="w-full max-w-3xl">
                            <div className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-6 text-center shadow-lg">
                                <div className="text-xs font-medium tracking-[0.2em] text-sky-400 uppercase">
                                    Transit Corridor
                                </div>

                                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                                    IRAN TRANSIT NETWORK
                                </h3>
{/* 
                                <p className="mt-2 text-sm text-slate-400">
                                    Strategic connection between northern
                                    corridors and southern markets
                                </p> */}
                            </div>
                        </div>

                        {/* Branches */}
                        <div className="relative mt-10 w-full max-w-5xl">
                            {/* Vertical connector */}
                            <div className="absolute top-0 left-1/2 hidden h-8 w-px -translate-y-full bg-white/20 md:block" />

                            {/* Horizontal line */}
                            <div className="absolute top-0 right-[12.5%] left-[12.5%] hidden h-px bg-white/20 md:block" />

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <NetworkBranch
                                    title="AFGHANISTAN"
                                    subtitle="Central Asia"
                                />

                                <NetworkBranch
                                    title="PAKISTAN"
                                    subtitle="South Asia"
                                />

                                <NetworkBranch
                                    title="IRAQ"
                                    subtitle="Middle East"
                                />

                                <NetworkBranch
                                    title="TÜRKİYE"
                                    subtitle="Europe Gateway"
                                />
                            </div>
                        </div>

                        {/* Gulf */}
                        <div className="mt-10 flex flex-col items-center">
                            <div className="h-8 w-px bg-white/20" />

                            <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-8 py-4 text-center">
                                <div className="text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
                                    Southern Gateway
                                </div>

                                <div className="mt-1 text-lg font-semibold">
                                    GULF
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Network highlights */}
                {/* <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <NetworkStat
                        value="4"
                        label="Primary Modes"
                        description="Rail, road, sea & multimodal"
                    />

                    <NetworkStat
                        value="7+"
                        label="Key Markets"
                        description="Connected regional destinations"
                    />

                    <NetworkStat
                        value="3"
                        label="Major Gateways"
                        description="Russia, Astara & Gulf"
                    />

                    <NetworkStat
                        value="24/7"
                        label="Logistics Coordination"
                        description="Continuous shipment management"
                    />
                </div> */}
            </div>
        </section>
    )
}

export default NetworkSection

const NetworkArrow = () => {
    return (
        <div className="flex h-12 flex-col items-center justify-center">
            <div className="h-7 w-px bg-gradient-to-b from-sky-400/70 to-white/20" />

            <div className="-mt-1 text-sky-400">↓</div>
        </div>
    )
}

const NetworkBranch = ({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) => {
    return (
        <div className="relative flex flex-col items-center">
            {/* connector to horizontal line */}
            <div className="mb-3 h-5 w-px bg-white/20 md:h-8" />

            <div className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/5">
                <div className="text-sm font-semibold">{title}</div>

                <div className="mt-1 text-[11px] tracking-wider text-slate-500 uppercase">
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

const NetworkStat = ({
    value,
    label,
    description,
}: {
    value: string
    label: string
    description: string
}) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#132538] p-5">
            <div className="text-2xl font-semibold text-sky-400">{value}</div>

            <div className="mt-1 font-medium">{label}</div>

            <p className="mt-1 text-xs leading-5 text-slate-500">
                {description}
            </p>
        </div>
    )
}
