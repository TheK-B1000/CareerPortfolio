import { useUtcClock } from "@/hooks/useUtcClock";

/**
 * Isolated live UTC clock — kept as its own component so the 1Hz tick only
 * re-renders this tiny subtree, not the entire Navbar/Hero/MissionControl trees.
 */
export function MissionClock({ className }: { className?: string }) {
  const utc = useUtcClock();
  return (
    <span className={className ?? "tabular-nums"}>
      T+ {utc} UTC
    </span>
  );
}
