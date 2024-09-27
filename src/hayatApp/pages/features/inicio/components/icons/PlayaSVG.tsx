
export const PlayaSVG = ({ size = (window.screen.width < 600) ? '40px' : '90px', color = '#DCA65E' }) => (
    <svg width={size} height={size} strokeWidth="0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 17.8264L1.67778 18.7186C1.82648 18.8969 2.04668 19 2.27886 19C2.51104 19 2.73124 18.8969 2.87994 18.7186L3.63442 17.8139C3.78312 17.6356 4.00332 17.5325 4.2355 17.5325C4.46768 17.5325 4.68788 17.6356 4.83658 17.8139L5.59106 18.7186C5.73976 18.8969 5.95996 19 6.19214 19C6.42432 19 6.64452 18.8969 6.79322 18.7186L7.5477 17.8139C7.6964 17.6356 7.9166 17.5325 8.14878 17.5325C8.38097 17.5325 8.60116 17.6356 8.74986 17.8139L9.50434 18.7186C9.65305 18.8969 9.87324 19 10.1054 19C10.3376 19 10.5578 18.8969 10.7065 18.7186L11.461 17.8139C11.6097 17.6356 11.8299 17.5325 12.0621 17.5325C12.2942 17.5325 12.5144 17.6356 12.6631 17.8139L13.4176 18.7186C13.5663 18.8969 13.7865 19 14.0187 19C14.2509 19 14.4711 18.8969 14.6198 18.7186L15.3743 17.8139C15.523 17.6356 15.7432 17.5325 15.9753 17.5325C16.2075 17.5325 16.4277 17.6356 16.5764 17.8139L17.3309 18.7186C17.4796 18.8969 17.6998 19 17.932 19C18.1642 19 18.3844 18.8969 18.5331 18.7186L19.0027 18.1575" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.21777 15.5767C10.354 14.7478 11.7246 14.3021 13.1311 14.3041H19.001" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.0306 6.20793C18.2705 6.12437 18.4549 5.92958 18.5252 5.68548C18.5955 5.44137 18.543 5.17832 18.3843 4.97994C16.313 2.38696 12.8314 1.38231 9.69701 2.47309C6.56262 3.56387 4.45697 6.51289 4.44288 9.83163C4.44144 10.0859 4.56357 10.3249 4.77039 10.4728C4.97721 10.6206 5.24296 10.6588 5.48303 10.5752L18.0306 6.20793Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.69883 2.47859L9.18457 1" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.7578 8.39124L13.8154 14.305" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);