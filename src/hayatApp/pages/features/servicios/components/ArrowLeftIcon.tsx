import './css/iconHover.css';

export const ArrowLeftIcon = ({ size = '30px', color = 'black' }) => (
  <svg style={{ filter: 'drop-shadow(2px 4px 4px black)' }}  className='icon' fill={color} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DCA65E" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
    <g data-name="arrow-ios-back">
      <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
      <path stroke="#B9B8B5" strokeWidth='0' d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
    </g>
    </g>
  </svg>
);