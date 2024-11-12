import { Box } from "@mui/material";
import Departamentos from "./Departamentos";
import logoHayatVillas from '../assets/hayat_villas_azul.png';

export const Reserva1 = () => {

    return (
        <Box
            id="suite"
            bgcolor={'rgba(38,38,38,0.3)'}
            sx={{
                backgroundColor: 'white',
                backgroundAttachment: 'center',
                zIndex: 1,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '0',
                paddingTop: 5,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', // Centra el contenido horizontalmente
            }}
        >
            <img src={logoHayatVillas} alt="Logo" style={{width: '300px' }}/>
            <Departamentos/>
        </Box>
    );
}
