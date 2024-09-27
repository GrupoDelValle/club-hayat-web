import { Box, SvgIcon, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { infoCards } from "../config/info-cards";

import '../components/css/transition-horizontal.css';
import '../components/css/transition-vertical.css';

import { widthScreen } from "../../../../hooks/widthScreen";

export const CardsInfo2 = () => {
    const { width } = widthScreen();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardHover = (index: any) => {
        setActiveIndex(index);
    };

    const handleCardLeave = () => {
        setActiveIndex(null);
    };

    return <Box 
        bgcolor={'#F8F8F8'}
        borderColor={'red'}
        flexDirection='column'
        sx={{
            display:'flex',
            padding: 'none',
            width: '100%',
            height: (width < 980) ? (width < 600) ? '420px' :'500px' :'290px',
        }}
        
    >
    <Box mt= { width<600 ? '5%' : '2%'} ml='5%' width='90%' border={1} color={'#DCA65E'} />
    { (width < 980) 
        ? <Grid container width={'90%'} alignSelf='center' justifyContent='center' spacing={2}>
            {infoCards.map((data, index) => (
            <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                <Box
                    className="cardInfoVer"
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                >
                <SvgIcon component={data.icon} style={{ fontSize: '10px' }} />
                <Typography variant="subtitle1">{data.title}</Typography>
                {width > 600 && activeIndex === index && (
                    <Box className="overlayInfo">
                        <Typography fontSize='12px' variant="subtitle1">{data.title}</Typography>
                        <Typography fontSize='10px' variant="body1">{data.description}</Typography>
                    </Box>
                )}
                </Box>
            </Grid>
            ))}
          </Grid>
        
        : <Box display="flex" width='90%' alignSelf='center' flexDirection="row" justifyContent={'center'} alignItems="end">
          {infoCards.map((data, index) => (
            <Box
                key={index}
                sx={{ 
                    height:'170px',
                    '&:hover':{
                        paddingTop: (index === 0 || index === 4) ? '20px' : '0',
                        alignContent:'start',
                        height: '180px',
                        color:  (width > 599) ? '#000' : 'rgba(0,0,0,0.1)'
                    }
                }}
                className="cardInfo"
            >
                <SvgIcon component={data.icon} style={{ fontSize: 50 }} />
                <Typography className='title' variant="subtitle1">{data.title}</Typography>
                <Typography textAlign='center' className="description">{data.description}</Typography>
            </Box>
          ))}
    </Box>}
    <Box mt='2%' ml='5%' width='90%' border={1} color={'#DCA65E'} />
    </Box>
}