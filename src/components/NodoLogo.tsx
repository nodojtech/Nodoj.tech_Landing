const NodoLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="100" x2="100" y2="0">
        <stop offset="0%" stopColor="hsl(220, 80%, 55%)" />
        <stop offset="100%" stopColor="hsl(160, 100%, 45%)" />
      </linearGradient>
    </defs>
    {/* Outer network connections */}
    <polygon points="50,8 85,25 92,62 72,90 28,90 8,62 15,25" stroke="url(#logoGrad)" strokeWidth="3" fill="none" />
    {/* Inner connections */}
    <line x1="50" y1="8" x2="50" y2="45" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="15" y1="25" x2="50" y2="45" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="85" y1="25" x2="50" y2="45" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="8" y1="62" x2="35" y2="55" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="92" y1="62" x2="65" y2="55" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="28" y1="90" x2="40" y2="72" stroke="url(#logoGrad)" strokeWidth="2.5" />
    <line x1="72" y1="90" x2="60" y2="72" stroke="url(#logoGrad)" strokeWidth="2.5" />
    {/* J letter */}
    <path d="M42,30 L62,30 L62,62 Q62,78 50,78 Q38,78 36,66" stroke="url(#logoGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Nodes (circles at vertices) */}
    {[
      [50, 8], [85, 25], [92, 62], [72, 90], [28, 90], [8, 62], [15, 25],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill="url(#logoGrad)" />
    ))}
  </svg>
);

export default NodoLogo;
