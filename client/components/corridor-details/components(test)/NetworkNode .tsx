export const NetworkNode = ({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) => {
    return (
        <div className="group relative w-full max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 text-center transition-all duration-300 hover:border-sky-400/40 hover:bg-white/[0.09]">
                <h3 className="font-semibold tracking-wide">{title}</h3>

                <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
            </div>
        </div>
    )
}
