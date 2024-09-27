import './css/iconHover.css';

export const ArrowDownIcon = ({ size = '30px', color = 'black' }) => (
  <svg style={{ filter: 'drop-shadow(2px 4px 4px black)' }}  className='icon' fill={color} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DCA65E" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
    <g data-name="arrow-ios-downward">
      <rect width="24" height="24" opacity="0"/>
      <path stroke="#E4E4E4" strokeWidth='2' d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/>
    </g>
    </g>
  </svg>
);