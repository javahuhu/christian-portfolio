import './HeroGraphic.css'

export function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-label="Software engineering capabilities diagram">
      <svg className="constellation" viewBox="0 0 330 300" aria-hidden="true">
        <defs>
          <linearGradient id="faceTop" x1="0" x2="1"><stop stopColor="#7c6cff" stopOpacity=".6"/><stop offset="1" stopColor="#57a3ff" stopOpacity=".28"/></linearGradient>
          <linearGradient id="faceLeft" x1="0" x2="1"><stop stopColor="#6e46dd" stopOpacity=".5"/><stop offset="1" stopColor="#11172c" stopOpacity=".7"/></linearGradient>
          <linearGradient id="faceRight" x1="0" x2="1"><stop stopColor="#10182f" stopOpacity=".8"/><stop offset="1" stopColor="#6e46dd" stopOpacity=".38"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <g className="guide-lines">
          <path d="M165 15 298 92 298 230 165 292 32 230 32 92Z"/>
          <path d="M165 15v277M32 92l266 138M298 92 32 230"/>
          <path d="M165 58 260 112 260 209 165 259 70 209 70 112Z"/>
        </g>
        <g className="cube" filter="url(#glow)">
          <path fill="url(#faceTop)" d="m165 76 63 36-63 36-63-36Z"/>
          <path fill="url(#faceLeft)" d="m102 112 63 36v72l-63-36Z"/>
          <path fill="url(#faceRight)" d="m165 148 63-36v72l-63 36Z"/>
          <path d="m102 112 63-36 63 36v72l-63 36-63-36Z"/>
        </g>
        <g className="nodes">
          <circle cx="165" cy="76" r="3"/><circle cx="102" cy="112" r="3"/><circle cx="228" cy="112" r="3"/>
          <circle cx="102" cy="184" r="3"/><circle cx="228" cy="184" r="3"/><circle cx="165" cy="220" r="3"/>
          <circle cx="165" cy="15" r="2"/><circle cx="298" cy="92" r="2"/><circle cx="298" cy="230" r="2"/>
          <circle cx="165" cy="292" r="2"/><circle cx="32" cy="230" r="2"/><circle cx="32" cy="92" r="2"/>
        </g>
      </svg>
      <div className="cube-monogram">CG</div>
      <span className="orbit-label label-ai">AI / ML</span>
      <span className="orbit-label label-mobile">Mobile</span>
      <span className="orbit-label label-backend">Backend</span>
      <span className="orbit-label label-cloud">Cloud</span>
      <span className="orbit-label label-database">Database</span>
    </div>
  )
}
