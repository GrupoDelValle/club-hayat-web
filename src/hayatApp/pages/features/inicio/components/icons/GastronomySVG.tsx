

export const GatronomySVG = ({ size = (window.screen.width < 600) ? '50px' : '100px', color = '#DCA65E' }) => (
    <svg width={size} height={size} strokeWidth='1.5' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.37342 42.2174C6.8808 42.2175 6.43679 42.5145 6.24861 42.9698C6.06043 43.425 6.16516 43.9488 6.51394 44.2967L8.94872 46.7315C9.17688 46.9591 9.48595 47.0869 9.8082 47.087H50.1915C50.5146 47.0876 50.8247 46.9597 51.0534 46.7315L53.4882 44.2967C53.8373 43.9485 53.9419 43.4241 53.7531 42.9686C53.5643 42.5131 53.1194 42.2165 52.6263 42.2174" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 42.2174H58" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 20.3043C32.017 20.3043 33.6521 18.6692 33.6521 16.6522C33.6521 14.6351 32.017 13 30 13C27.9829 13 26.3478 14.6351 26.3478 16.6522C26.3478 18.6692 27.9829 20.3043 30 20.3043Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.08691 42.2174C8.08691 30.1151 17.8977 20.3043 30 20.3043C42.1022 20.3043 51.913 30.1151 51.913 42.2174" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);