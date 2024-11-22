import { Box } from "@mui/material";

import Grid from '@mui/material/Grid2';

import { AnimatedTypography } from "../../shared/AnimatedTypography";
import { widthScreen } from "../../../../hooks/widthScreen";
import ImagenPrincipal from "../../../../../assets/hayat-villas-lotes-vista-aerea.webp"
import logoHayatVillas from '../../../../../assets/hayat_villas_azul.webp';
import ImagenPrincipalMovil from "../../../../../assets/hayat-villas-lotes-vista-aerea-movil.webp"

export const HayatvillasPortada: React.FC = () => {
    const {width} = widthScreen();

    const first_content = (width < 870) ? 580 : 950;

    return (
        <Box
            id="lotes"
            bgcolor={'rgba(38,38,38,0.4)'}
            sx={{ 
                backgroundImage: `url(${(width < 870) ? ImagenPrincipalMovil : ImagenPrincipal})`,
                backgroundColor: '#DCA65E',
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100vw'
            }}
        >
            <Grid container >

                <Box height={first_content-30} width='100%' p='0 0 0 8%' >
                    <AnimatedTypography
                        fontFamily='Archivo Black, sans-serif' 
                        textAlign='start'
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
                    > LOTES PARA TÍ Y TU FAMILIA
                    </AnimatedTypography>
                    <img src={logoHayatVillas} alt="Logo" style={{width: (width < 870) ? '150px' : '300px' }}/>
                    <AnimatedTypography
                        fontFamily='Archivo Black, sans-serif' 
                        textAlign='start'
                        color='#0c4a97'
                    > 1RA ETAPA
                    </AnimatedTypography>
                </Box>
            </Grid>
        </Box>
    );
}