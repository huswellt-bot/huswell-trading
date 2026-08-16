import Link from "next/link";

export default function PageHero({
  overline,
  title,
  body,
}: {
  overline: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
        <Link href="/" className="btn-line-light mb-6 !px-4 !py-2.5">
          ← Back to home
        </Link>
        <p className="micro-label mb-5 text-accent-hover">{overline}</p>
        <h1 className="max-w-3xl text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-ink">
          {title}
        </h1>
        {body && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">{body}</p>
        )}
      </div>
    </section>
  );
}