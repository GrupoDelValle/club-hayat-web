import { Box } from "@mui/material";
import ImagenPrincipal from "../../../../../assets/fondo.webp";
import ImagenPrincipalMovil from "../../../../../assets/fondo-movil.webp";
import TextoBrochure from "../../../../../assets/titulo-brochure.webp";
import { widthScreen } from "../../../../hooks/widthScreen";

export const InitPage1: React.FC = () => {

    const {width} = widthScreen();

    return (
        <Box
            id="inicio"
            bgcolor={'rgba(38,38,38,0.4)'}
            sx={{
                backgroundImage: `url(${(width<1100) ? ImagenPrincipalMovil : ImagenPrincipal})`,
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <img src={TextoBrochure} alt="Título Hayat" style={{marginBottom: (width < 1100) ? '150px' : '30px', width: (width < 1100) ? '300px' : 'auto' }}/>
        </Box>
    );
};
