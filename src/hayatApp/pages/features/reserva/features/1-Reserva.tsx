import { Box, Grid, Typography } from "@mui/material";


import { InfoFooter } from "../../../../ui/components/InfoFooter";
import { heightScreen } from "../../../../hooks/heightScreen";

export const Reserva1 = () => {
    const {height} = heightScreen();
    
    // const first_content = (height < 800) ? 800 * (85/100) : height * (70/100);
    // const second_content = (height < 800) ? 800 * (20/100): height * (22.7/100);

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            // border={2}
            sx={{ 
                backgroundAttachment: 'center',
                zIndex:1,
                // backgroundImage: `url(${urlImage5})`,
                // background: 'transparent',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={height * 70/100} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >02</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>04</Typography>
                </Grid>
            </Grid>

            <InfoFooter sizeContent={height * 20/100} />
        </Box>
    );
}