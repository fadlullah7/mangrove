export function Sunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g transform="translate(200 200)">
        {rays.map((_, i) => {
          const angle = (i * 360) / rays.length;
          return (
            <rect
              key={i}
              x={-4}
              y={-200}
              width={8}
              height={200}
              fill="currentColor"
              opacity={0.18}
              transform={`rotate(${angle})`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function PosterMangrove({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="#F2E8D5" />
      <circle cx="310" cy="70" r="42" fill="#E8A93B" />
      {/* water */}
      <path d="M0 220 Q100 200 200 220 T400 220 V300 H0 Z" fill="#1F6F6F" />
      <path d="M0 245 Q100 230 200 245 T400 245 V300 H0 Z" fill="#3B2A20" opacity="0.35" />
      {/* boardwalk */}
      <path d="M40 240 L200 195 L360 240 L200 260 Z" fill="#C1502E" opacity="0.85" />
      <path d="M40 240 L200 195 L360 240 L200 260 Z" fill="none" stroke="#3B2A20" strokeWidth="2" />
      {/* mangroves */}
      {[60, 140, 260, 340].map((x, i) => (
        <g key={i} transform={`translate(${x} 170)`}>
          <path d="M0 60 L-10 20 L0 -30 L10 20 Z" fill="#3B2A20" />
          <circle cx="0" cy="-30" r="30" fill="#1F6F6F" />
          <circle cx="-18" cy="-15" r="22" fill="#1F6F6F" />
          <circle cx="18" cy="-15" r="22" fill="#1F6F6F" />
        </g>
      ))}
      {/* boat */}
      <g transform="translate(120 250)">
        <path d="M-30 0 Q0 20 30 0 L20 -6 L-20 -6 Z" fill="#3B2A20" />
        <rect x="-2" y="-30" width="2" height="24" fill="#3B2A20" />
        <path d="M0 -30 L14 -12 L0 -12 Z" fill="#C1502E" />
      </g>
    </svg>
  );
}

export function Postage({
  children,
  color = "text-rust",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 border-2 border-current ${color} px-4 py-2 rounded-full bg-cream/60 backdrop-blur-sm font-stamp text-sm font-medium`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center gap-3 my-10 text-ink/50">
      <div className="flex-1 border-t border-current" />
      <div className="flex-1 border-t border-current" />
    </div>
  );
}
