export default function TickerBanner() {
  const items = [
    "-70% tiempo administrativo",
    "100% cumplimiento legal",
    "10+ módulos integrados",
    "24/7 acceso cloud",
    "RGPD garantizado",
    "0 papel",
  ];

  return (
    <div className="w-full bg-[#0d0e14]/50 border-y border-white/[0.06] backdrop-blur-md py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap gap-8 animate-infinite-scroll">
        <div className="flex items-center gap-8 justify-around min-w-full text-xs sm:text-sm font-medium text-zinc-400">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-zinc-700">|</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 justify-around min-w-full text-xs sm:text-sm font-medium text-zinc-400" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-zinc-700">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
