import { Box } from "@mui/material";
//import Grid from '@mui/material/Grid2';
//import VerBrochure from "../../../../ui/components/TextSVG2";

import { widthScreen } from "../../../../hooks/widthScreen";

//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Departamentos from "./Departamentos";

export const Reserva1 = () => {
    const {width} = widthScreen();

    //const first_content = (width < 380) ? 620 : 900;

    //const navigate = useNavigate();

    return (
        <Box
            id="suite"
            bgcolor={'rgba(38,38,38,0.3)'}
            // border={2}
            sx={{ 
                backgroundColor: 'white',
                backgroundAttachment: 'center',
                zIndex:1,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '0 0 0 0',
                width: '100%',
            }}
        >
        <Departamentos/>
        </Box>
    );
}