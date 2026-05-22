import { useEffect, useState } from "react";

/**
 * Returns a live UTC time string in HH:MM:SS format, updated every second.
 * Used for the mission-control telemetry indicators.
 */
export function useUtcClock() {
  const [time, setTime] = useState(() => formatNow());
  useEffect(() => {
    const id = setInterval(() => setTime(formatNow()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function formatNow() {
  const d = new Date();
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
