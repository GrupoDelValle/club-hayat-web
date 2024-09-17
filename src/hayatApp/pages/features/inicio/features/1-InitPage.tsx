import { Box, Grid, IconButton } from "@mui/material";

import { InfoFooter } from "../../../../ui/components/InfoFooter";
import { heightScreen } from "../../../../hooks/heightScreen";
// import { countState } from "../../../../hooks/countState";

import { AnimatedTypography } from "../../shared/AnimatedTypography";
import { widthScreen } from "../../../../hooks/widthScreen";
import { useNavigate } from "react-router-dom";
import ConsultaAhoraSvg from "../../../../ui/components/TextSVG";
import { Room } from "@mui/icons-material";

export const InitPage1: React.FC = () => {

    const {height} = heightScreen();
    const {width} = widthScreen();

    const first_content = (width < 870) ? 580 : 690;
    const second_content = (height < 800) ? 170 : 140;

    // const { count } = countState();

    const navigate = useNavigate();

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.4)'}
            sx={{ 
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                {/* <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >{(count < 1) ? '01' : `0${count}`}</Typography>
                    <Box sx={{transition: 'height 0.5s ease-out'}} color='#E3641A' border={3} width='1px' height={`${16*count}%`} ></Box>
                    <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={`${80-(16*count)}%`} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>05</Typography>
                </Grid> */}

                <Box height={first_content} width='90%' p='0 0 0 8%' >
                    <AnimatedTypography
                        fontFamily='Archivo Black, sans-serif' 
                        padding={{
                            xs: '80px 6vw 0 0',
                            sm: '150px 5vw 0 0',
                            md: '155px 15vw 0 0',
                            lg: '150px 25vw 0 0',
                            xl: '160px 25vw 0 0'
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
                    
                    <Box m='15px 0 0 0' display='flex'  alignItems='center' >
                    <Room sx={{fontSize:{
                        xs: '25px',
                        sm: '25px',
                        md: '40px',
                        lg: '40px',
                        xl: '40px'
                    }, color: 'red'}} />
                    <AnimatedTypography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '0 7vw 0 0',
                            sm: '0 5vw 0 0',
                            md: '0 24vw 0 0',
                            lg: '0 20vw 0 0',
                            xl: '0 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '12px',
                            sm: '12px',
                            md: '19px',
                            lg: '19px',
                            xl: '20px'
                        }} fontWeight='bold'
                    >  PUNTA SAL, PERÚ
                    </AnimatedTypography>
                    </Box>
                    <AnimatedTypography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '10px 7vw 10px 0',
                            sm: '10px 5vw 10px 0',
                            md: '10px 24vw 10px 0',
                            lg: '10px 20vw 10px 0',
                            xl: '10px 25vw 10px 0'
                        }} 
                        fontSize={{
                            xs: '12px',
                            sm: '12px',
                            md: '17px',
                            lg: '17px',
                            xl: '18px'
                        }} fontWeight='500'
                    > A orillas del Océano Pacífico, en medio del magnetismo y belleza natural de Punta Sal. HAYAT CLUB presume del primer club de playa de lujo del Perú.
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '0 7vw 10px 0',
                            sm: '0 5vw 10px 0',
                            md: '0 24vw 10px 0',
                            lg: '0 20vw 10px 0',
                            xl: '0 25vw 10px 0'
                        }} 
                        fontSize={{
                            xs: '12px',
                            sm: '12px',
                            md: '17px',
                            lg: '17px',
                            xl: '18px'
                        }} fontWeight='500'
                    >
                    Ubicado en primera línea de playa, con una gran piscina, una variada oferta gastronómica, zona hotelera, suites, centro de convenciones, spa, gimnasio, canchas deportivas y una gran discoteca.
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '0 7vw 20px 0',
                            sm: '0 5vw 20px 0',
                            md: '0 24vw 30px 0',
                            lg: '0 20vw 30px 0',
                            xl: '0 25vw 30px 0'
                        }} 
                        fontSize={{
                            xs: '12px',
                            sm: '12px',
                            md: '17px',
                            lg: '17px',
                            xl: '18px'
                        }} fontWeight='500'
                    > 
                    HAYAT CLUB los invita a vivir una experiencia nunca antes vista.
                    </AnimatedTypography>
                    {/* <CustomRoundedButton
                        background='#E3641A'
                        onClick={()=>{}}
                        className=""
                    > <TextImage fontSize="20px" text="Registrate" backgroundPosition="bottom" urlImage={background1} />
                    </CustomRoundedButton> */}
                    <IconButton aria-label="¡CONSULTA AHORA!" sx={{ height:'50px', width:'280px', borderRadius:'30px' }}  onClick={()=>{navigate('/contacto#form-hayat')}}>
                        <ConsultaAhoraSvg style={{ width: 300, height: (width < 550) ? 35 : 40 }} />
                    </IconButton>
                </Box>
            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}