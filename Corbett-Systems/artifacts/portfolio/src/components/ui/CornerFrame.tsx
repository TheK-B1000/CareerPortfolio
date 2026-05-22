interface CornerFrameProps {
  size?: number;
  className?: string;
  color?: string;
}

export function CornerFrame({ size = 12, className = "", color = "border-white/25" }: CornerFrameProps) {
  const s = { width: size, height: size };
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className={`absolute top-0 left-0 border-t border-l ${color}`} style={s} />
      <div className={`absolute top-0 right-0 border-t border-r ${color}`} style={s} />
      <div className={`absolute bottom-0 left-0 border-b border-l ${color}`} style={s} />
      <div className={`absolute bottom-0 right-0 border-b border-r ${color}`} style={s} />
    </div>
  );
}
