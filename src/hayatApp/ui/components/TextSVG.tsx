import { SvgIcon, SvgIconProps } from "@mui/material";
import { useEffect, useState } from "react";
import '../../pages/features/shared/ani-typo.css';

const ConsultaAhoraSvg: React.FC<SvgIconProps> = (props) => {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (<SvgIcon {...props} viewBox="0 0 350 50"
        sx={{ 
            '&:hover rect': { 
                // fill: 'url(#gradient)',
                scale: '1.04',
                opacity:'1',
            } 
        }}
    >
        <defs>
            <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
                className={ isVisible ? 'typography-enter' : ''}
                x="50%"
                y="50%"
                fontFamily='Montserrat'
                fontSize="28"
                fontWeight='bold'
                fill="black"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                ¡CONSULTA AHORA!
            </text>
            </mask>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fd1d1d" stopOpacity="1.2" />
                <stop offset="30%" stopColor="#f56040" stopOpacity="1" />
                <stop offset="60%" stopColor="#f77737" stopOpacity="1" />
                <stop offset="100%" stopColor="#fcaf45" stopOpacity="1" />
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx="25" ry="50" fill="#DCA65E" mask="url(#text-mask)" 
         clipPath="url(#text-clip)"
         style={{ opacity: 1, transition: ' transform 0.3s ease-in-out'  }}/>
        </SvgIcon>
    );
    }

  
  export default ConsultaAhoraSvg;