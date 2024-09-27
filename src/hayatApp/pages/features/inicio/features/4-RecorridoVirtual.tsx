import { Box, IconButton, Typography } from "@mui/material";
// import { Icon360 } from "../components/icon360";
import { widthScreen } from "../../../../hooks/widthScreen";
import fondo3d from '../../../../../assets/fondo-3d.webp'

import { PlayArrowRounded } from "@mui/icons-material";
import { useState } from "react";
import { YouTubePlayer } from "../components/YoutubeMedia";
import { Icon360 } from "../components/icon360";

export const RecorridoVirtual4: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false);
    const {width} = widthScreen();

    return (
        <Box
            id="recorrido-virtual"
            sx={{ 
                backgroundImage: fondo3d,
                backgroundPosition:'center',
                backgroundSize:'cover',
                padding: 'none',
                width: '100%', 
                height: '75vh',
                display:'flex'
            }}
        >
            <iframe width="100%" height="100%" style={{ border:'none' }} allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://kuula.co/share/collection/7KDcZ?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
        </Box>
    );
}