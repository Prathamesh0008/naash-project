export default function DemoImage(seed = 1) {
  const colors = [
    ["#a855f7", "#ec4899"],
    ["#ec4899", "#f97316"],
    ["#6366f1", "#a855f7"],
    ["#f43f5e", "#f59e0b"],
    ["#8b5cf6", "#d946ef"],
  ];

  const [c1, c2] = colors[seed % colors.length];

  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='520'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${c1}'/>
        <stop offset='100%' stop-color='${c2}'/>
      </linearGradient>
    </defs>
    <rect width='400' height='520' fill='url(#g)'/>
    <circle cx='200' cy='170' r='70' fill='rgba(255,255,255,0.35)'/>
    <rect x='80' y='260' rx='40' ry='40' width='240' height='180' fill='rgba(255,255,255,0.25)'/>
  </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
