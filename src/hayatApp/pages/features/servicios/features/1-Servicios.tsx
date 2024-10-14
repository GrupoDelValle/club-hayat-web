import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

//import { InfoFooter } from "../../../../ui/components/InfoFooter";
import ConsultaAhoraSvg from "../../../../ui/components/TextSVG";

import { countState } from "../../../../hooks/countState";
import { heightScreen } from "../../../../hooks/heightScreen";
import { widthScreen } from "../../../../hooks/widthScreen";

import { AnimatedTypography } from "../../shared/AnimatedTypography";

import ImagenVistaConcierto from "../../../../../assets/vista-conciertos-mar.jpg"

interface Contacto1Props {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Servicios1: React.FC<Contacto1Props> = ({ showForm, setShowForm }) => {

    //const {height} = heightScreen();
    const {width} = widthScreen();

    const first_content = (width < 380) ? 620 : 750;
    //const second_content = (height < 800) ? 800 * (20/100): 150;

    const { count } = countState();

    const navigate = useNavigate();

    const handleCloseForm = (showForm : boolean) => {
        setShowForm(!showForm);
    };

    return (
        <Box
            id="membresia"
            bgcolor={'rgba(38,38,38,0.4)'}
            overflow='hidden'
            sx={{
                backgroundImage: `url(${ImagenVistaConcierto})`,
                backgroundColor: 'white',
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</AnimatedTypography>
                    <Box sx={{transition: 'height 0.5s ease-out'}} color='#DCA65E' border={3} width='1px' height={(count === 0) ? '16%' : `${16*count}%`} ></Box>
                    <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={(count === 0) ? '64%' : `${80-(16*count)}%`} ></Box>
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px'>05</AnimatedTypography>
                </Grid>

                <Box height={first_content} width='88%'>
                    <AnimatedTypography  
                        fontFamily='Archivo Black' 
                        padding={{
                            xs: '80px 6vw 0 0',
                            sm: '150px 5vw 0 0',
                            md: '155px 15vw 0 0',
                            lg: '150px 25vw 0 0',
                            xl: '160px 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '6vw',
                            sm: '4.5vw',
                            md: '4.5vw',
                            lg: '45px',
                            xl: '45px'
                        }} 
                        color='white'
                    > AMBIENTE PERFECTO
                    </AnimatedTypography>
                    <AnimatedTypography 
                        fontFamily='Archivo Black' 
                        padding={{
                            xs: '0 6vw 0 0',
                            sm: '0 5vw 0 0',
                            md: '0 15vw 0 0',
                            lg: '0 25vw 0 0',
                            xl: '0 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '6vw',
                            sm: '4.5vw',
                            md: '4.5vw',
                            lg: '45px',
                            xl: '45px'
                        }} 
                        color='white'
                    > CON EL CONFORT QUE TU MERECES
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='white' 
                        padding={{
                            xs: '40px 7vw 0 0',
                            sm: '50px 5vw 0 0',
                            md: '30px 24vw 0 0',
                            lg: '20px 20vw 0 0',
                            xl: '30px 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '13px',
                            sm: '14px',
                            md: '16px',
                            lg: '16px',
                            xl: '16px'
                        }} fontWeight='500'
                    > Se parte de nuestro exclusivo club, ''vive un mar de experiencias'' donde no podrás perderte de experiencias inolvidables.
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='white' 
                        padding={{
                            xs: '0 7vw 0 0',
                            sm: '0 5vw 0 0',
                            md: '0 24vw 0 0',
                            lg: '0 20vw 0 0',
                            xl: '0 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '13px',
                            sm: '14px',
                            md: '16px',
                            lg: '16px',
                            xl: '16px'
                        }} fontWeight='500'
                    > Ofrecemos un escape idílico con acceso privado a la suave arena dorada y las aguas cristalinas del océano en las playas del norte peruano.
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='white' 
                        padding={{
                            xs: '0 7vw 30px 0',
                            sm: '0 5vw 20px 0',
                            md: '0 24vw 30px 0',
                            lg: '0 20vw 30px 0',
                            xl: '0 25vw 18px 0'
                        }} 
                        fontSize={{
                            xs: '13px',
                            sm: '14px',
                            md: '16px',
                            lg: '16px',
                            xl: '16px'
                        }} fontWeight='500'
                    > Disfruta de una variedad de comodidades de lujo, desde exquisitos restaurantes y bares frente al mar hasta comodas cabañas y tumbonas para descansar bajo el cálido sol tropical.
                    </AnimatedTypography>
                    <IconButton  sx={{ height:'50px', width: (width < 550) ? '200px' : '280px', borderRadius:'30px' }}  onClick={()=>{handleCloseForm(showForm)}}>
                        <ConsultaAhoraSvg style={{ width: 300, height: (width < 650) ? 30 : 40 }} />
                    </IconButton>
                </Box>
            </Grid>
        </Box>
    );
}