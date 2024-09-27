import { Box, Typography, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';

import { widthScreen } from "../../../../hooks/widthScreen";
import { AnimatedTypography } from "../../shared/AnimatedTypography";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Flipbook from "./Flipbook";

export const ContenedorBrochure = () => {
    const {width} = widthScreen();

    const first_content = (width < 380) ? 620 : 750;
    
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            // border={2}
            sx={{ 
                backgroundAttachment: 'center',
                zIndex:1,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%',
            }}
        >
            <Grid container display='flex' direction='row' spacing={2} >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' size={2} >
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</AnimatedTypography>
                    <Box sx={{transition: 'height 0.5s ease-out'}} color='#DCA65E' border={3} width='1px' height={(count === 0) ? '16%' : `${16*count}%`} ></Box>
                    <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={(count === 0) ? '64%' : `${80-(16*count)}%`} ></Box>
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px'>05</AnimatedTypography>
                </Grid>

                <Grid paddingTop={12} paddingLeft={65} size={8}>
                    <Flipbook/>
                </Grid>

            </Grid>


            {/*<InfoFooter sizeContent={height * 20/100} />*/}
        </Box>
    );
}