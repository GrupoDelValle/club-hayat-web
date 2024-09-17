import { Box, Button, Typography } from "@mui/material"
import { widthScreen } from "../../hooks/widthScreen"
import { useNavigate } from "react-router-dom";

import logoHayat from '../../../assets/hayat-logo.webp';

export const HayatTermsAndConditions:React.FC = () => {
    const navigate = useNavigate();
    const handleOnClickLogo = ()=>{
        navigate('/');
    }
    const { width } = widthScreen();

    return <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} >
        <Box display='flex' justifyContent='end' color={'red'} width={
          (width < 935) 
              ? (width < 400)
                  ? '45vw'
                  : '5vw'
              : '100%'} sx={{ transition: 'width  0.7s ease-in-out' }} >
          <Button sx={{ ml:'1%', position:'absolute', top:'10px', left:0}} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
              <img src={logoHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 50, borderRadius: '0' }} />
          </Button>
        </Box>
        <Typography  sx={{ color:'black' }} fontWeight='bold' m={width<640 ? '10% 10%' :'5% 0'} fontSize={ width<640 ? '25px' :'30px' }textAlign='center' > Términos y Condiciones Hayat </Typography>
        <Typography fontSize={width<640 ? '13px' : '17px'} m={width<640 ? '0 10%' :'0 5%' }>
            En atención a lo dispuesto en la Ley N° 29733, Ley de Protección de Datos Personales (Ley) y el Decreto Supremo N° 003-2013-JUS (Reglamento), mediante mi aceptación (firma), autorizo de manera libre, previa, expresa, inequívoca e informada, que los datos que completaré en el mismo sean recolectados, almacenados y utilizados por HAYAT CLUB PUNTA SAL S.A.C., quién utilizará dicha información para efectos de la gestión de los productos y/o servicios solicitados y/o contratados, así como realizarme encuestas, estadísticas y análisis de tendencias de mercado respecto a sus productos y/o servicios, en tal sentido podrá remitirme publicidad y ofrecerme promociones comerciales, ofertas, descuentos e información relacionada a los productos y/o servicios que HAYAT CLUB PUNTA SAL comercializa. Declaro que se me ha informado, que puedo revocar la autorización para el tratamiento de sus datos personales en cualquier momento, de conformidad con lo previsto en la Ley de Protección de Datos Personales (Ley Nro. 29733) y su Reglamento (Decreto Supremo Nro. 003-2013-JUS). Para ejercer este derecho o cualquier otro previsto en dichas normas, podré revocar mi consentimiento presentando mi solicitud en la Oficina ubicada en Av. El Derby 254 Oficina 1701 Lima Central Tower, Distrito de Santiago de Surco, Provincia y Departamento de Lima.
        </Typography>
    </div>
}