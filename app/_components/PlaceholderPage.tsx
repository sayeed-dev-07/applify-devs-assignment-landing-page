interface PlaceholderPageProps {
    title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
    return (
        <main className="flex-1 h-full/2 w-full">
            <div className="mx-auto flex min-h-full max-w-5xl flex-col justify-center px-6 py-16">
                <p className="mb-3 text-sm font-medium uppercase font-outfit tracking-[0.2em] text-foreground/45">
                    {title}
                </p>
                <h1 className="font-header text-3xl tracking-tight text-foreground sm:text-4xl">
                    Same Design, Different Page
                </h1>
            </div>
        </main>
    );
}
