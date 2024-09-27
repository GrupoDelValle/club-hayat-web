
export const GrupoSVG = ({ size = (window.screen.width < 600) ? '50px' : '80px', color = '#DCA65E' }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.9565 31.3913C15.9821 31.3913 18.4348 28.9386 18.4348 25.9131C18.4348 22.8875 15.9821 20.4348 12.9565 20.4348C9.93097 20.4348 7.47827 22.8875 7.47827 25.9131C7.47827 28.9386 9.93097 31.3913 12.9565 31.3913Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.913 42.3488C22.6359 37.3404 18.1252 33.8356 12.9565 33.8356C7.78784 33.8356 3.27713 37.3404 2 42.3488" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M47.0434 31.3913C50.069 31.3913 52.5217 28.9386 52.5217 25.9131C52.5217 22.8875 50.069 20.4348 47.0434 20.4348C44.0179 20.4348 41.5652 22.8875 41.5652 25.9131C41.5652 28.9386 44.0179 31.3913 47.0434 31.3913Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36.0869 42.3488C37.364 37.3404 41.8748 33.8356 47.0434 33.8356C52.2121 33.8356 56.7228 37.3404 58 42.3488" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 28.9565C33.0255 28.9565 35.4783 26.5038 35.4783 23.4783C35.4783 20.4527 33.0255 18 30 18C26.9744 18 24.5217 20.4527 24.5217 23.4783C24.5217 26.5038 26.9744 28.9565 30 28.9565Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M39.5326 36.73C37.4929 33.4235 33.8854 31.4103 30.0004 31.4103C26.1155 31.4103 22.508 33.4235 20.4683 36.73" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);