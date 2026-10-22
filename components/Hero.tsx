export default function Hero() {
    return (
        <section className="mx-auto flex min-h-[80vh] max-w-3xl flex-col justify-center px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Hello, I&apos;m
            </p>
            <h1 className="mt-2 text-5xl font-bold sm:text-7xl">Lee Casquejo</h1>
            <p className="mt-4 text-lg text-slate-400">I build things for the web.</p>
            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-400"
                >
                    View my work
                </a>
                <a
                    href="#contact"
                    className="rounded-full border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500"
                >
                    Contact me
                </a>
            </div>
        </section>
    );
}