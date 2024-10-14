import { Box } from "@mui/material";

import Grid from '@mui/material/Grid2';

import { heightScreen } from "../../../../hooks/heightScreen";
// import { countState } from "../../../../hooks/countState";

import { AnimatedTypography } from "../../shared/AnimatedTypography";
import { widthScreen } from "../../../../hooks/widthScreen";
import { useNavigate } from "react-router-dom";
import { Room } from "@mui/icons-material";
import ImagenPrincipal from "../../../../../assets/imagen-principal-hayat.jpg"

export const InitPage1: React.FC = () => {

    const {height} = heightScreen();
    const {width} = widthScreen();

    const first_content = (width < 870) ? 580 : 950;
    const second_content = (height < 800) ? 170 : 140;

    // const { count } = countState();

    const navigate = useNavigate();

    return (
        <Box
            id="inicio"
            bgcolor={'rgba(38,38,38,0.4)'}
            sx={{ 
                backgroundImage: `url(${ImagenPrincipal})`,
                backgroundColor: '#DCA65E',
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%'
            }}
        >
            <Grid container >

                <Box height={first_content-30} width='100%' p='0 0 0 8%' >
                    <AnimatedTypography
                        fontFamily='Archivo Black, sans-serif' 
                        textAlign="center"
                        padding={{
                            xs: '40px 0 0 0',
                            sm: '75px 0 0 0',
                            md: '80px 0 0 0',
                            lg: '75px 0 0 0',
                            xl: '80px 0 0 0'
                        }} 
                        fontSize={{
                            xs: '4.6vw',
                            sm: '4.6vw',
                            md: '4.6vw',
                            lg: '45px',
                            xl: '45px'
                        }} 
                        color='#F8F8F8'
                    > ¡BIENVENIDO A UN MAR DE EXPERIENCIAS!
                    </AnimatedTypography>
                </Box>
            </Grid>
        </Box>
    );
}