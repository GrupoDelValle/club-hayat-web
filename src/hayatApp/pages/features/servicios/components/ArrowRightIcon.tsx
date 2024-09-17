import './css/iconHover.css';

export const ArrowRightIcon = ({ size = '30px', color = 'black' }) => (
  <svg style={{ filter: 'drop-shadow(2px 4px 4px black)' }}  className='icon' fill={color} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arrowRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4D4D4D" stopOpacity="1" />
        <stop offset="25%" stopColor="#D8D8D8" stopOpacity="1" />
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="75%" stopColor="#D8D8D8" stopOpacity="1" />
        <stop offset="100%" stopColor="#4D4D4D" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
    <g data-name="arrow-ios-forward">
      <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/>
      <path stroke="#B9B8B5" strokeWidth='0' d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/>
    </g>
    </g>
  </svg>
);