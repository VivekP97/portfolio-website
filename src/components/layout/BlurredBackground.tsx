/**
 * Full-page blurred shapes layer for depth. Sage green palette, heavy blur.
 * Unified background – content scrolls over it; no section blocks.
 */
export function BlurredBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Large orbs – sage tones, heavily blurred */}
      <div
        className="absolute -left-[20%] top-[10%] h-[min(80vmax,420px)] w-[min(80vmax,420px)] rounded-full opacity-30 blur-[100px] dark:opacity-25"
        style={{ background: 'var(--blob-1)' }}
      />
      <div
        className="absolute -right-[15%] top-[35%] h-[min(70vmax,380px)] w-[min(70vmax,380px)] rounded-full opacity-25 blur-[90px] dark:opacity-20"
        style={{ background: 'var(--blob-2)' }}
      />
      <div
        className="absolute bottom-[15%] left-[10%] h-[min(60vmax,320px)] w-[min(60vmax,320px)] rounded-full opacity-20 blur-[80px] dark:opacity-15"
        style={{ background: 'var(--blob-3)' }}
      />
      <div
        className="absolute bottom-[25%] right-[5%] h-[min(50vmax,280px)] w-[min(50vmax,280px)] rounded-full opacity-25 blur-[85px] dark:opacity-18"
        style={{ background: 'var(--blob-4)' }}
      />
      <div
        className="absolute left-[25%] top-[50%] h-[min(55vmax,300px)] w-[min(55vmax,300px)] rounded-full opacity-22 blur-[82px] dark:opacity-16"
        style={{ background: 'var(--blob-5)' }}
      />
      <div
        className="absolute right-[20%] bottom-[40%] h-[min(45vmax,260px)] w-[min(45vmax,260px)] rounded-full opacity-20 blur-[78px] dark:opacity-14"
        style={{ background: 'var(--blob-6)' }}
      />
    </div>
  )
}
