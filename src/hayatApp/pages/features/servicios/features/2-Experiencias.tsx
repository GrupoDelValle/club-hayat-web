import { Box, Typography } from "@mui/material"
import { HorizontalCards } from "../components/HorizontalCards";

import { VerticalCards } from "../components/VerticalCards";
import { widthScreen } from "../../../../hooks/widthScreen";
import { GridPhotos } from "../components/GridPhotos";



export const Experiencias2 = () => {

    const {width} = widthScreen();

    return (
    <Box  bgcolor='white' width='100%' height={ (width < 700) ? '1250px' : '1150px'} overflow='hidden' >
    {(width > 700) 
    ? <Box m='50px 0 0 0' display='flex' width='100%' height='250px'      
        p={(width < 950 )
                ? (width < 580)
                    ? '0'
                    : '0  30px 0 30px'
                : '0 8% 0 8%'}
      >
        <Box display='flex' flexDirection={'column'} justifyContent='center' height='100%' width='30%' color='black'>
            <Typography fontWeight='bold' fontSize='1.7vw'>DESCUBRE NUESTROS</Typography>
            <Box display='flex'>
                <Typography fontWeight='bold' fontSize='1.7vw'>SERVICIOS</Typography>
            </Box>
            <Box border={1.5} color='#DCA65E' width={'100%'} ></Box>
        </Box>
        <Box m={'0 0 0 4%'} height='100%' width='70%' color='black'>
            <HorizontalCards/>
        </Box>
      </Box>
    : <Box m='50px 0 0 0' display='flex' flexDirection='column' width='100%' height='500px'  
        p={'0 0 0 8%'} >
        <Box p={(width < 540 ) ? '0 7%' : '0 9%'} height={(width < 540 ) ? '25%' : '35%'} width='97%' color='black'>
            <Typography fontWeight='bold' fontSize={(width < 550) ? '6.0vw' : '5vw'} >DESCUBRE NUESTROS</Typography>
            <Box display='flex'>
                <Typography fontWeight='bold' fontSize={(width < 550) ? '6.0vw' : '5vw'}>SERVICIOS</Typography>
            </Box>
            <Box border={1.5} color='#DCA65E' width={'100%'} ></Box>
        </Box>
        <Box height='60%' width='100%' color='black'>
            <VerticalCards/>
        </Box>
      </Box>
    }

    <Box m='0 0 10px 0' p=' 2vw' display='flex' alignItems='center' alignContent='center' >
        <Box border={1.5} color='#DCA65E' height={'0'} width={'100px'} />
        <Typography fontWeight='bold' fontSize='20px' p='10px 10px' >LAS MEJORES EXPERIENCIAS</Typography>
        <Typography fontWeight='500' p='10px 10px' >Disfruta de inumerables actividades a lo largo de tu estadía con nosotros</Typography>
    </Box>

    <Box sx={{
        boxShadow: '10px 10px 15px rgb(0 0 0 / 26%)',
        width: '95%',
        m:'0 2.5%',
        overflowY: 'scroll',
        overflowX:'hidden',
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        }}
         display='flex' alignContent='center' justifyContent='center' color='red' height= {(width < 700) ? '400px' : '600px'} >
        {/* <MovingImageEffect/> */}
        <GridPhotos/>
    </Box>


    </Box>
    );

}