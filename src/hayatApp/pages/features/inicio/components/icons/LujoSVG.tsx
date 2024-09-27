
export const LujoSVG = ({ size = (window.screen.width < 600) ? '40px' : '80px', color = '#DCA65E' }) => (
    <svg width={size} height={size} strokeWidth='1' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.81 8.98853H1.19751" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.96851 8.98968L14.0044 1.19312L19.0402 8.98968" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.78467 1.25879L14.0044 26.8067" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.2241 1.25879L14.0044 26.8067" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5642 26.584C13.6658 26.7258 13.8296 26.8099 14.0041 26.8099C14.1785 26.8099 14.3423 26.7258 14.444 26.584L26.6516 9.48971C26.8649 9.18858 26.8613 8.78472 26.6427 8.48743L21.4097 1.41584C21.3046 1.27563 21.1396 1.19312 20.9643 1.19312H7.04607C6.8708 1.19312 6.70577 1.27563 6.60061 1.41584L1.36541 8.48298C1.14682 8.78026 1.14323 9.18413 1.3565 9.48525L13.5642 26.584Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);