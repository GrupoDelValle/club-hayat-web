import { Box } from "@mui/material";
import { widthScreen } from "../../../../hooks/widthScreen";
import Departamentos from "./Departamentos";
import { AnimatedTypography } from "../../shared/AnimatedTypography";

export const Reserva1 = () => {
    const {width} = widthScreen();

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
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', // Centra el contenido horizontalmente
            }}
        >
            <AnimatedTypography  
                fontFamily='Archivo Black' 
                padding={{
                    xs: '80px 6vw 0 6vw',
                    sm: '150px 5vw 0 5vw',
                    md: '155px 15vw 0 15vw',
                    lg: '150px 25vw 0 25vw',
                    xl: '160px 25vw 0 25vw'
                }} 
                fontSize={{
                    xs: '6vw',
                    sm: '4.5vw',
                    md: '4.5vw',
                    lg: '45px',
                    xl: '45px'
                }} 
                color='black'
                textAlign={'center'} // Asegura el alineamiento al centro del texto
                sx={{ width: '100%' }}
            > 
                SUITES Y PENTHOUSES
            </AnimatedTypography>
            <Departamentos/>
        </Box>
    );
}
