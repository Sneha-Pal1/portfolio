export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#fcaa2d] text-[#191918] text-center py-2.5 px-4 z-50 relative">
      <p className="text-[11px] font-semibold tracking-[0.1em]">
        Jacq is now available on macOS.{" "}
        <a
          href="#"
          className="underline underline-offset-2 font-bold hover:opacity-70 transition-opacity"
        >
          Download and try it for free at jacquard.dev
        </a>
      </p>
    </div>
  );
}
