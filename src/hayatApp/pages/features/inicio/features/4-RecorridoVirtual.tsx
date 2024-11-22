import { Box} from "@mui/material";
// import { Icon360 } from "../components/icon360";
import fondo3d from '../../../../../assets/fondo-3d.webp'

export const RecorridoVirtual4: React.FC = () => {

    return (
        <Box
            id="recorrido-virtual"
            sx={{ 
                backgroundImage: fondo3d,
                backgroundPosition:'center',
                backgroundSize:'cover',
                padding: '30px',
                width: '100%', 
                height: '75vh',
                display:'flex'
            }}
        >
            <iframe width="100%" height="100%" style={{ border:'none' }} allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://kuula.co/share/collection/7ZgvC?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
        </Box>
    );
}