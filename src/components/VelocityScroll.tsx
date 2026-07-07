/**
 * VelocityScroll — horizontal marquee ticker, pure CSS animation.
 * Duplicate items to create seamless loop (each track = 50% width).
 */

type VelocityScrollProps = {
  /** Items to display in the ticker */
  items: string[];
  /** Separator rendered between each item */
  separator?: React.ReactNode;
  /** Second row, runs in reverse if provided */
  reverse?: boolean;
  /** Extra class names for the outer wrapper */
  className?: string;
};

function Track({
  items,
  separator,
  reverse = false,
}: {
  items: string[];
  separator: React.ReactNode;
  reverse: boolean;
}) {
  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee-wrap flex overflow-hidden select-none whitespace-nowrap`}
      aria-hidden="true"
    >
      <div
        className={`flex shrink-0 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span className="px-6 font-stamp font-medium text-sm">
              {item}
            </span>
            <span className="opacity-40 text-base">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function VelocityScroll({
  items,
  separator = "✦",
  reverse = false,
  className = "",
}: VelocityScrollProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Track items={items} separator={separator} reverse={reverse} />
    </div>
  );
}
