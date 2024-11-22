import { Box, Typography } from "@mui/material"
import { widthScreen } from "../../../../hooks/widthScreen";
import { GridPhotos } from "../components/GridPhotos";



export const Experiencias2 = () => {

    const {width} = widthScreen();

    return (
    <Box  bgcolor='white' width='100%' height={'100%'} overflow='hidden' >
        <Box m='0 0 0 0' p=' 2vw' display='flex' alignItems='center' alignContent='center' >
            <Box border={1.5} color='#DCA65E' height={'0'} width={'100px'} />
            <Typography fontWeight='bold' fontSize='20px' p='10px 10px' >LAS MEJORES EXPERIENCIAS</Typography>
            <Typography fontWeight='500' p='10px 10px' >Disfruta de inumerables actividades a lo largo de tu estadía con nosotros</Typography>
        </Box>
        <Box sx={{
                boxShadow: '10px 10px 15px rgb(0 0 0 / 26%)',
                width: '95%',
                m: '0 2.5%',
                height: 'auto', // Se ajusta automáticamente a la altura del contenido
                overflow: 'visible',
            }}
            display='flex' alignContent='center' justifyContent='center' color='red' height= {(width < 700) ? '400px' : '600px'} >
            <GridPhotos/>
        </Box>
    </Box>
    );

}