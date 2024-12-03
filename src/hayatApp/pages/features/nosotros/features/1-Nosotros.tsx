import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Mail, Phone, TripOrigin } from "@mui/icons-material";

import { widthScreen } from "../../../../hooks/widthScreen";

import IkiLogo from '../../../../../assets/logo-iki.webp';
import HayatLogo from '../../../../../assets/hayat-logo-bw.webp';
import AudioFest from '../../../../../assets/logo-audiofest-blanco.webp';

import GrupoDelValleLogo from '../../../../../assets/grupo-del-valle-white.webp';
import { AnimatedTypography } from "../../shared/AnimatedTypography";

export const Nosotros1 = () => {

    const {width} = widthScreen();

    const first_content = 
        (width < 480) 
            ? 1130 
            : (width < 850) ? 1050 : 900;

    const spaceTextSide = {
        xs: '0 10px  0 30px',
        sm: '20px 10px  0 70px',
        md: '105px 40px 0 100px',
        lg: '100px 40px 0 15vw',
        xl: '120px 40px 0 15vw'
    }
    const fontTextSize = {
        xs: '15px',
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '16px'
    }

    const fontDirectionsText = {
        xs: '16px',
        sm: '16px',
        md: '17px',
        lg: '17px',
        xl: '17px'
    }

    const boxNumberPhoneSize = {
        xs: '180px',
        sm: '250px',
        md: '240px',
        lg: '240px',
        xl: '240px'
    }

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            sx={{ 
                // backgroundImage: `url(${fondoNosotros})`,
                backgroundColor:'rgba(0,0,0,0.4)',
                // backgroundAttachment: 'center',
                // backgroundPosition: 'right',
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                width: '100%',
            }}
        >
            <Box bgcolor={'rgba(38,38,38,0.4)'} >
            <Grid height={first_content} container display='flex' direction='row' >
                <Grid color={'red'} width='100%' fontWeight='500'  p={spaceTextSide}>
                    { (width < 900) 
                    ? width < 640 
                        ? <Box justifyItems={'center'} alignItems='center' display={'flex'} flexDirection='column' >
                            <Box height={'100%'} width='32%' m={'100px 0 30px 0'} display='flex' justifyContent='center'>
                                <Box height={'100%'}  width={'100%'} alignContent='center' display='flex' justifyContent='center' top={'-10px'} >
                                    <img src={GrupoDelValleLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', height:'100%', maxWidth:'100%', width: '100%'}} />        
                                </Box>
                            </Box>
                            <Box m={'0 0 30px 0'} color={'white'} width={'80%'}>
                            <AnimatedTypography color={'white'} fontSize={fontTextSize} > 
                            Grupo del Valle, es un holding de inversión con capitales peruanos y extranjeros,
                            con profesionales altamente especializados en desarrollos inmobiliarios de alta envergadura.
                            Inmerso en desarrollos inmobiliarios, grandes eventos, turismo y entretenimiento de lujo,
                            conecta sueños empresariales con capital para impulsar el éxito mediante
                            estrategias financieras efectivas.
                            </AnimatedTypography>
                        </Box> 
                        </Box>
                    
                        : <Box justifyItems={'center'} alignItems='center' display={'flex'} flexDirection='row' >
                        <Box height={'100%'} width='32%' m={'140px 0 30px 0'} display='flex' justifyContent='center'>
                            <Box height={'100%'}  width={'80%'} alignContent='center' display='flex' justifyContent='center' top={'-10px'} >
                                <img src={GrupoDelValleLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', height:'100%', maxWidth:'100%', width: '100%'}} />        
                            </Box>
                        </Box>
                        <Box m={'130px 0 30px 0'} color={'white'} width={'65%'}>
                        <AnimatedTypography color={'white'} fontSize={fontTextSize} > 
                            Grupo del Valle Investment & Holding es un grupo empresarial con altos estándares de gestión. Nuestra marca se posiciona como el catalizador que conecta los sueños 
                            empresariales con el capital necesario, empoderando el éxito a través de una estrategia financiera efectiva.
                        </AnimatedTypography>
                        </Box>
                        
                      </Box>
                    :   <Box display={'flex'} width={'100%'} flexDirection='row'>
                            <Box width={'100%'} display='flex' justifyContent='start' left='20%' top='210px' >
                                <img src={GrupoDelValleLogo} alt="Logo" style={{textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '80%'}} />        
                            </Box>
                            <Box color={'white'}>
                                <AnimatedTypography color={'white'} fontSize={fontTextSize} > 
                                    Grupo del Valle, es un holding de inversión con capitales peruanos y extranjeros,
                                    con profesionales altamente especializados en desarrollos inmobiliarios de alta envergadura.
                                    Inmerso en desarrollos inmobiliarios, grandes eventos, turismo y entretenimiento de lujo,
                                    conecta sueños empresariales con capital para impulsar el éxito mediante
                                    estrategias financieras efectivas.
                                </AnimatedTypography>
                            </Box>
                        </Box>
                        
                    }

                    <AnimatedTypography margin={ width<640 ? '20px 20% 0 10%' : '20px 20% 0 34%'} fontWeight={'bold'} fontSize={fontTextSize} color='#DCA65E' > Encuéntranos en nuestras oficinas: </AnimatedTypography>
                    
                    {width < 640 ? <Box height='1%' /> : null}
                    <AnimatedTypography margin={ width<640 ? '0 0 0 10%' : '0 0 0 34%'} padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <TripOrigin sx={{fontSize: '20px', mr:'10px', color:'#DCA65E'}} /> Av. Luis Montero 390, Urb. Miraflores, Castilla - Piura</AnimatedTypography>
                    {width < 640 ? <Box height='1%' /> : null}
                    <AnimatedTypography margin={ width<640 ? '0 0 0 10%' : '0 0 0 34%'} padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <TripOrigin sx={{fontSize: '20px', mr:'10px', color:'#DCA65E'}} /> Calle Morelli 217, Oficina 202, Segundo Piso, San Borja - Lima </AnimatedTypography>
                    {width < 640 ? <Box height='1%' /> : null}
                    <AnimatedTypography margin={ width<640 ? '0 0 0 10%' : '0 0 0 34%'} padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <TripOrigin sx={{fontSize: '20px', mr:'10px', color:'#DCA65E'}} /> Calle José Santos Chocano 617, Urb. Umacollo - Arequipa </AnimatedTypography>
                    
                    <Typography m={width<640 ? '20px 0 0 10%' : '20px 0 0 34.5%'} fontWeight={'bold'} fontSize={fontTextSize} color='#DCA65E'> Contáctanos: </Typography>
                    <Box m={ width<640 ? '5px 0 0 10%' : '5px 0 0 32%'} display={'flex'} flexDirection={(width<840) ? 'column' :'row'}>
                        <Box borderRadius='30px' height='40px' width={boxNumberPhoneSize} alignItems='center' justifyContent='center' display='flex'> 
                            <IconButton href="tel:967392794" >
                            <Typography color='white' fontSize={fontDirectionsText}> 
                                <Phone sx={{ alignItems:'center', fontSize: fontDirectionsText}} /> +51 967-392-794
                            </Typography> 
                            </IconButton>
                        </Box>

                        <Box ml='20px' borderRadius='30px' flexDirection='row' height='40px' width={boxNumberPhoneSize} alignItems='center' justifyContent='center' display='flex'>
                            <IconButton href="mailto:info@clubhayat.com">
                            <Typography color='white' fontSize={fontDirectionsText}> 
                                <Mail sx={{ height:'100%', alignItems:'center', fontSize: fontDirectionsText}} /> info@clubhayat.com
                            </Typography> 
                        </IconButton>
                        </Box>
                    </Box>
                    
                    <Box alignItems='center' m={width<640 ? '10% 0 0 0' :'5% 0 0 0'} width={(width < 900) ? '100%' :'85%'} flexDirection={(width < 840) ? 'column' :'column'} display={'flex'} >
                        <Typography textAlign='center' alignContent='center' mb='3%' fontSize={fontTextSize} justifyContent='center' width='100%' color='white' fontWeight='bold' >MARCAS DEL HOLDING: </Typography>
                        <Box justifyItems='center' alignItems={'center'} justifyContent={'center'} display='flex' height={'100%'} >
                            <IconButton onClick={()=>{ window.open('https://condominioplayaiki.com/', '_blank') } } disableRipple sx={{ maxWidth:'170px', borderRadius: 0, padding:0, margin:0, width: '20%' }} >
                                <Box width={'100%'} height={'100%'} display='flex' justifyContent='center'>
                                    <img src={IkiLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s',height:'100%', width: '100%'}} />        
                                </Box>
                            </IconButton>
                            <Box width='12%' />
                            <IconButton href="/" disableRipple sx={{ maxWidth:'140px', borderRadius: 0, padding:0, margin:0, width: '18%' }} >
                            <Box width={'100%'} height={'100%'} display='flex' justifyContent='center'>
                                <img src={HayatLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', height:'100%', width: '80%'}} />        
                            </Box>
                            </IconButton>
                            <Box width='10%' />
                            <Box sx={{ maxWidth:'260px'}} height={'100%'}  width={'34%'}  display='flex' alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
                                <img src={AudioFest} alt="Logo" style={{ padding:'10% 0 0 0', textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', height: '100%', width: '80%', }} />        
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
            </Box>
        </Box>
    );
}