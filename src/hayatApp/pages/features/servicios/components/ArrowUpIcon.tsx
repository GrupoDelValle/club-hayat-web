import './css/iconHover.css';

export const ArrowUpIcon = ({ size = '30px', color = 'black' }) => (
  <svg  style={{ filter: 'drop-shadow(2px 4px 4px black)' }} fill={color} className='icon' width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DCA65E" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
    <g data-name="arrow-ios-upward">
      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
      <path stroke="#E4E4E4" strokeWidth='2'  d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/>
    </g>
    </g>
  </svg>
);