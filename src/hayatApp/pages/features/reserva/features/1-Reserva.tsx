import { Box, Typography, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import VerBrochure from "../../../../ui/components/TextSVG2";

import { widthScreen } from "../../../../hooks/widthScreen";
import { AnimatedTypography } from "../../shared/AnimatedTypography";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarruselFotos } from "./CarruselFotos";

export const Reserva1 = () => {
    const {width} = widthScreen();

    const first_content = (width < 380) ? 620 : 750;
    
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    return (
        <Box
            id="suite"
            bgcolor={'rgba(38,38,38,0.3)'}
            // border={2}
            sx={{ 
                backgroundColor: '#DCA65E',
                backgroundAttachment: 'center',
                zIndex:1,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%',
            }}
        >
        { (width < 980) 
            ? <Box maxWidth={"980px"}>
                <Grid container display='flex' direction='row' spacing={2} >
                    <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' size={2} >
                        <AnimatedTypography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</AnimatedTypography>
                        <Box sx={{transition: 'height 0.5s ease-out'}} color='#DCA65E' border={3} width='1px' height={(count === 0) ? '16%' : `${16*count}%`} ></Box>
                        <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={(count === 0) ? '64%' : `${80-(16*count)}%`} ></Box>
                        <AnimatedTypography fontWeight='bold' color='white' fontSize='20px'>05</AnimatedTypography>
                    </Grid>

                    <Grid paddingTop={12} width={'80%'} maxHeight={100} size={10}>
                        <CarruselFotos/>
                        <AnimatedTypography 
                            fontFamily='Archivo Black'
                            fontSize={{
                                xs: '6vw',
                                sm: '4.5vw',
                                md: '4.5vw',
                                lg: '30px',
                                xl: '30px'
                            }}
                            textAlign={'center'}
                            color='white'
                        > SUITES Y PENTHOUSES
                        </AnimatedTypography>
                        <AnimatedTypography 
                            color='#F8F8F8'
                            fontSize={{
                                xs: '13px',
                                sm: '14px',
                                md: '16px',
                                lg: '16px',
                                xl: '16px'
                            }} fontWeight='500'
                        > Un proyecto que crece contigo, porque entendemos que hoy por hoy, lo más importante es encontrar un lugar correcto para vivir.
                        </AnimatedTypography>
                        <br/>
                        <AnimatedTypography 
                            textAlign={"center"}
                            color='#F8F8F8'
                            fontSize={{
                                xs: '13px',
                                sm: '14px',
                                md: '16px',
                                lg: '16px',
                                xl: '16px'
                            }} fontWeight='500'
                        > PUNTA SAL, PERÚ
                        </AnimatedTypography>
                        {/*<IconButton  sx={{ height:'50px', width: (width < 550) ? '200px' : '280px', borderRadius:'30px'}}  onClick={()=>{navigate('/brochure-departamentos')}}>
                            <VerBrochure style={{ width: 300, height: (width < 650) ? 30 : 40 }} />
                        </IconButton>*/}
                    </Grid>
                </Grid>
            </Box>

                : <Grid container display='flex' direction='row' spacing={2} >
                    <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' size={2} >
                        <AnimatedTypography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</AnimatedTypography>
                        <Box sx={{transition: 'height 0.5s ease-out'}} color='#DCA65E' border={3} width='1px' height={(count === 0) ? '16%' : `${16*count}%`} ></Box>
                        <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={(count === 0) ? '64%' : `${80-(16*count)}%`} ></Box>
                        <AnimatedTypography fontWeight='bold' color='white' fontSize='20px'>05</AnimatedTypography>
                    </Grid>

                    <Grid paddingTop={12} width={'60%'} maxHeight={100} size={8}>
                        <CarruselFotos/>
                    </Grid>

                    <Grid paddingTop={12}  width={'25%'}  size={2} >
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <AnimatedTypography 
                            fontFamily='Archivo Black'
                            fontSize={{
                                xs: '6vw',
                                sm: '4.5vw',
                                md: '4.5vw',
                                lg: '30px',
                                xl: '30px'
                            }}
                            textAlign={'center'}
                            color='white'
                        > SUITES Y PENTHOUSES
                        </AnimatedTypography>
                        <br/>
                        <AnimatedTypography 
                            color='#F8F8F8'
                            fontSize={{
                                xs: '13px',
                                sm: '14px',
                                md: '16px',
                                lg: '16px',
                                xl: '16px'
                            }} fontWeight='500'
                        > Un proyecto que crece contigo, porque entendemos que hoy por hoy, lo más importante es encontrar un lugar correcto para vivir.
                        </AnimatedTypography>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <AnimatedTypography 
                            color='#F8F8F8'
                            fontSize={{
                                xs: '13px',
                                sm: '14px',
                                md: '16px',
                                lg: '16px',
                                xl: '16px'
                            }} fontWeight='500'
                        > PUNTA SAL, PERÚ
                        </AnimatedTypography>
                        <br/>
                        <br/>
                        {/*<IconButton  sx={{ height:'50px', width: (width < 550) ? '200px' : '280px', borderRadius:'30px'}}  onClick={()=>{navigate('/brochure-departamentos')}}>
                            <VerBrochure style={{ width: 300, height: (width < 650) ? 30 : 40 }} />
                        </IconButton>*/}
                    </Grid>
                </Grid>
        }
        </Box>
    );
}