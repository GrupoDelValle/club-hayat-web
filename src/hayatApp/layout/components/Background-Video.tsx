
import { useState } from 'react';
import './css/background-video.css';
import { Box } from "@mui/material";
import bgpreview from '../../../assets/fondo-video.webp';
import videoPortada from '../../../assets/portada-web.mp4';


export const BackgroundVideo:React.FC = () => {

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 5000);
  };

    return (
    <Box className='video-background-container'
      style={{ backgroundImage: `url('${bgpreview}')`, height: '950px'}}
    >
      <video  className={`video-background ${isVideoLoaded ? 'loaded' : ''}`} autoPlay loop muted
        onCanPlayThrough={handleVideoLoaded}
      >
        <source src={videoPortada} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </Box>
    );
}