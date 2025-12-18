export default function GradientAvatar({ seed = 1 }) {
  const gradients = [
    ["#f472b6", "#ec4899", "#a855f7"],
    ["#fb7185", "#f43f5e", "#ec4899"],
    ["#c084fc", "#a855f7", "#6366f1"],
    ["#f9a8d4", "#f472b6", "#fb7185"],
  ];

  const g = gradients[seed % gradients.length];

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${g[0]}'/>
          <stop offset='50%' stop-color='${g[1]}'/>
          <stop offset='100%' stop-color='${g[2]}'/>
        </linearGradient>
      </defs>
      <rect width='400' height='500' fill='url(#g)'/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
