import { useRef } from "react";

export function BlobBackground() {
  const r = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = r.current!;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--bx", `${x}px`);
    el.style.setProperty("--by", `${y}px`);
  };

  return (
    <div
      ref={r}
      onMouseMove={onMove}
      className="relative isolate overflow-hidden rounded-3xl bg-neutral-950"
      style={
        {
          // soft, blurred blob that chases pointer
          background:
            "radial-gradient(220px 220px at var(--bx,50%) var(--by,40%), rgb(59 130 246 / 0.30), transparent 60%)",
        } as React.CSSProperties
      }
    >
      {/* hero content here */}
      <div className="p-12">
        <h2 className="text-4xl font-semibold">Soft Blob</h2>
        <p className="mt-2 text-white/70">A minimal interactive accent.</p>
      </div>
    </div>
  );
}
export default BlobBackground;