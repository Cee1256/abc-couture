import { brand } from "@/config/brand";

export function AnnouncementBar() {
  return (
    <div className="border-b border-stone bg-ivory">
      <p className="px-4 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-ink sm:tracking-[0.28em]">
        {brand.announcement}
      </p>
    </div>
  );
}
