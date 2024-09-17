import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { widthScreen } from "../../hooks/widthScreen";

import logoHayat from '../../../assets/hayat-logo.webp';

export const TermsAndConditionsPage = () => {
    const navigate = useNavigate();
    const handleOnClickLogo = ()=>{
        navigate('/');
    }

    const {width} = widthScreen();

    return <Box>
        <Box display='flex' justifyContent='end' color={'red'} height='100%' width={
          (width < 935) 
              ? (width < 400)
                  ? '45vw'
                  : '5vw'
              : '100%'} sx={{ transition: 'width  0.7s ease-in-out' }} >
          <Button sx={{ ml:'1%', position:'absolute', top:'10px', left:0}} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
              <img src={logoHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 50, borderRadius: '0' }} />
          </Button>
        </Box>
        <Typography fontWeight={'bold'} m={width<640 ? '10% 10%' :'5% 0'}  fontSize={ width<640 ? '25px' :'30px' } textAlign={'center'}>
            Términos y condiciones
        </Typography>
        <Box m={'0 10%'} >
            <Typography fontSize={width<640 ? '15px' : '19px'} mb={'2%'}>
                Al hacer clic en Enviar, acepta enviar su información a Club Hayat, quien acepta utilizarla de acuerdo con su política de privacidad. 
            </Typography>
            <Typography fontSize={width<640 ? '15px' : '19px'}>
                Facebook también lo utilizará sujeto a nuestra Política de datos, incluso para completar automáticamente formularios para anuncios. Ver la Política de datos de Facebook. Ver Política de Privacidad de Club Hayat Punta Sal
            </Typography>
        </Box>
    </Box>
}