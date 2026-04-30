export default function FabtronixLogo({ height = 46 }) {
  return (
    <svg
      height={height}
      width={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fabtronix Logo"
      style={{ display: 'block', shapeRendering: 'geometricPrecision' }}
    >
      {/* White circle */}
      <circle cx="50" cy="50" r="49" fill="white" />
      <circle cx="50" cy="50" r="49" fill="none" stroke="#e0e0e0" strokeWidth="1" />

      {/* Left side: 3D printer frame */}
      {/* Vertical rail */}
      <rect x="16" y="14" width="5" height="46" rx="2.5" fill="#1a7abf" />
      {/* Horizontal arm */}
      <rect x="16" y="18" width="26" height="5" rx="2.5" fill="#1a7abf" />
      {/* Print head body */}
      <rect x="35" y="14" width="9" height="12" rx="2" fill="#1a7abf" />
      {/* Nozzle triangle */}
      <polygon points="37,26 44,26 40.5,33" fill="#1a7abf" />
      {/* Green extrusion dot */}
      <circle cx="40" cy="34.5" r="3" fill="#44bb44" />

      {/* Gear centered on left side lower */}
      <g transform="translate(27, 46)">
        {/* Gear teeth - 8 teeth */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const r = (deg * Math.PI) / 180
          const x1 = 10 + Math.cos(r) * 9
          const y1 = 10 + Math.sin(r) * 9
          const x2 = 10 + Math.cos(r) * 14
          const y2 = 10 + Math.sin(r) * 14
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a7abf" strokeWidth="4" strokeLinecap="round" />
        })}
        <circle cx="10" cy="10" r="8" fill="none" stroke="#1a7abf" strokeWidth="3" />
        <circle cx="10" cy="10" r="3.5" fill="#1a7abf" />
      </g>

      {/* Divider line */}
      <line x1="51" y1="14" x2="51" y2="72" stroke="#ddd" strokeWidth="1" />

      {/* Right side: PCB */}
      <rect x="53" y="14" width="32" height="46" rx="3" fill="#3cb88a" />
      {/* PCB inner border */}
      <rect x="55" y="16" width="28" height="42" rx="2" fill="none" stroke="#2a9060" strokeWidth="0.8" />

      {/* IC chip */}
      <rect x="58" y="26" width="18" height="12" rx="1.5" fill="#111" />
      {/* IC pins left */}
      <line x1="55" y1="29" x2="58" y2="29" stroke="#aaa" strokeWidth="1.2" />
      <line x1="55" y1="32" x2="58" y2="32" stroke="#aaa" strokeWidth="1.2" />
      <line x1="55" y1="35" x2="58" y2="35" stroke="#aaa" strokeWidth="1.2" />
      {/* IC pins right */}
      <line x1="76" y1="29" x2="79" y2="29" stroke="#aaa" strokeWidth="1.2" />
      <line x1="76" y1="32" x2="79" y2="32" stroke="#aaa" strokeWidth="1.2" />
      <line x1="76" y1="35" x2="79" y2="35" stroke="#aaa" strokeWidth="1.2" />

      {/* LEDs */}
      <circle cx="59" cy="21" r="2.5" fill="#ff4422" />
      <circle cx="66" cy="21" r="2.5" fill="#ffaa00" />
      <circle cx="73" cy="21" r="2.5" fill="#44cc44" />

      {/* Capacitor */}
      <rect x="75" y="40" width="6" height="9" rx="1" fill="#e0a800" />
      <line x1="78" y1="40" x2="78" y2="38" stroke="#888" strokeWidth="1.2" />

      {/* Traces */}
      <line x1="57" y1="43" x2="73" y2="43" stroke="#267a50" strokeWidth="1.2" />
      <line x1="57" y1="47" x2="70" y2="47" stroke="#267a50" strokeWidth="1.2" />

      {/* Header pins row */}
      {[0,4,8,12,16,20,24].map((x, i) => (
        <rect key={i} x={56 + x} y="52" width="2.5" height="5" rx="0.8" fill="#555" />
      ))}

      {/* FABTRONIX text */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="10.5"
        letterSpacing="1"
        fill="#1a5fa0"
      >
        FABTRONIX
      </text>
    </svg>
  )
}
