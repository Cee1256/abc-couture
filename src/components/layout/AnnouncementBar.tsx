import { brand } from "@/config/brand";

export function AnnouncementBar() {
  return (
    <div className="border-b border-stone bg-ivory">
      <p className="px-4 py-2 text-center text-[10px] uppercase tracking-[0.18em] text-charcoal sm:text-[11px] sm:tracking-[0.22em]">
        {brand.announcement}
      </p>
    </div>
  );
}
