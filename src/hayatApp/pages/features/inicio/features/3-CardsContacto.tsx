import { Box, Typography } from "@mui/material";
import { CardsInfo } from "../components/Cards";

export const CardsContacto3: React.FC = () => {

    return (
    <Box 
        bgcolor={'#F8F8F8'}
        borderColor={'red'}
        sx={{ 
            padding: 'none',
            width: '100%', 
            height: '650px',
        }}
    >
        <Box height='15%' padding={'20px 2% 0 5%'} alignItems={'center'} justifyContent='start' display='flex' flexDirection='row'>
            <Box border={1} margin='0 20px 0 0' color={'red'} height='0' width={'100px'} />
            <Typography margin='0 5% 0 0' fontSize={{
                xs: '15px',
                sm: '20px',
                md: '20px',
                lg: '22px',
                xl: '24px'
            }} fontWeight={'bold'}> MAR DE EXPERIENCIAS </Typography>

        </Box>
        <Box height={'85%'} display={'flex'} flexDirection={'row'} alignItems='center' >
            <CardsInfo/>
        </Box>

    </Box>
    );
}