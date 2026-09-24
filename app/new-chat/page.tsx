import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function NewChatPage() {
  return (
    <section className="mx-auto flex min-h-full max-w-5xl flex-col justify-center py-12">
      <Link href="/" className="mb-12 inline-flex w-fit items-center gap-2 text-sm text-foreground/55 transition hover:text-foreground">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>

      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10">
          <MessageCircle size={21} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">A fresh start</p>
        <h1 className="font-header text-4xl font-semibold tracking-tight sm:text-5xl">What’s on your mind?</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-foreground/60">
          Every good conversation starts somewhere. Share a question, an idea, or whatever you’re working through.
        </p>
      </div>
    </section>
  );
}
