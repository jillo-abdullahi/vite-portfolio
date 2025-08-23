import { useRef } from "react";

export default function HeroInteractive() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

  // Move the spotlight with the cursor
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  // "Magnetic" CTA: slight attraction toward the cursor
  const onCtaMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / 14; // tweak sensitivity
    const dy = (e.clientY - cy) / 14;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onCtaLeave = () => {
    const btn = ctaRef.current;
    if (btn) btn.style.transform = "translate(0, 0)";
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={() => {
        const el = sectionRef.current;
        if (el) {
          el.style.setProperty("--spot-x", "50%");
          el.style.setProperty("--spot-y", "35%");
        }
      }}
      className={[
        "relative isolate overflow-hidden",
        "min-h-[70dvh] flex items-center justify-center",
        // Base background + spotlight that follows the cursor (fast, pure CSS)
        "bg-neutral-950 text-white",
        "bg-[radial-gradient(600px_circle_at_var(--spot-x)_var(--spot-y),rgb(255_255_255/0.12),transparent_45%)]",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Build fast. <span className="text-white/70">Ship beautifully.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
          A minimal, elegant hero with a cursor spotlight and a subtle magnetic button.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            ref={ctaRef}
            onMouseMove={onCtaMove}
            onMouseLeave={onCtaLeave}
            className={[
              "relative rounded-2xl px-6 py-3",
              "bg-white text-neutral-900 font-medium",
              "shadow-[0_10px_30px_rgb(0_0_0/0.35)]",
              "transition-transform duration-75 will-change-transform",
              "hover:shadow-[0_14px_40px_rgb(0_0_0/0.45)]",
            ].join(" ")}
          >
            Get Started
          </button>

          <a
            href="#learn-more"
            className="text-white/70 hover:text-white underline-offset-4 hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* optional soft gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_50%_-20%,rgb(59_130_246/0.20),transparent_60%)]" />
    </section>
  );
}
