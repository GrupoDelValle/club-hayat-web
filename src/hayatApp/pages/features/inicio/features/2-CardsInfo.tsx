import { Box, SvgIcon, Typography } from "@mui/material";
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

    return (
        <Box 
            bgcolor={'#F8F8F8'}
            borderColor={'#DCA65E'}
            flexDirection='column'
            sx={{
                display: 'flex',
                padding: 'none',
                width: '100%',
                height: (width < 980) ? (width < 600) ? '420px' : '500px' : '290px',
            }}
        >
            <Box mt={width < 600 ? '5%' : '2%'} ml='5%' width='90%' border={1} color={'#DCA65E'} />

            {(width < 980)
                ? (
                    <Grid container width={'90%'} alignSelf='center' justifyContent='center' spacing={2}>
                        {infoCards.map((data, index) => (
                            <Grid sx={{ xs: 6, sm: 6, md: 6, lg: 6 }} key={index}>
                                <Box
                                    className="cardInfoVer"
                                    onMouseEnter={() => handleCardHover(index)}
                                    onMouseLeave={handleCardLeave}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        padding: '10px',
                                        textAlign: 'center',
                                        overflow: 'hidden', // Evita que el contenido se salga del contenedor
                                        backgroundColor: activeIndex === index ? '#EFEFEF' : 'transparent',
                                    }}
                                >
                                    <SvgIcon 
                                        component={data.icon} 
                                        sx={{ 
                                            fontSize: '40px', 
                                            maxHeight: '100%', 
                                            maxWidth: '100%', 
                                            marginBottom: '10px',
                                        }} 
                                    />
                                    <Typography variant="subtitle1">{data.title}</Typography>
                                    {width > 600 && activeIndex === index && (
                                        <Box className="overlayInfo" sx={{ textAlign: 'center' }}>
                                            <Typography fontSize='12px' variant="subtitle1">{data.title}</Typography>
                                            <Typography fontSize='10px' variant="body1">{data.description}</Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )
                : (
                    <Box display="flex" width='90%' alignSelf='center' flexDirection="row" justifyContent={'center'} alignItems="end">
                        {infoCards.map((data, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: '170px',
                                    width: '150px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px',
                                    overflow: 'hidden', // Evita que el contenido se salga del contenedor
                                    '&:hover': {
                                        paddingTop: (index === 0 || index === 4) ? '20px' : '0',
                                        alignContent: 'start',
                                        height: '180px',
                                        color: (width > 599) ? '#000' : 'rgba(0,0,0,0.1)',
                                        backgroundColor: '#EFEFEF',
                                    },
                                }}
                                className="cardInfo"
                            >
                                <SvgIcon 
                                    component={data.icon} 
                                    sx={{ 
                                        fontSize: '50px', 
                                        maxHeight: '100%', 
                                        maxWidth: '100%', 
                                        marginBottom: '10px',
                                    }} 
                                />
                                <Typography className='title' variant="subtitle1">{data.title}</Typography>
                                <Typography textAlign='center' className="description">{data.description}</Typography>
                            </Box>
                        ))}
                    </Box>
                )
            }

            <Box mt='2%' ml='5%' width='90%' border={1} color={'#DCA65E'} />
        </Box>
    );
};
