import { FacebookRounded, Instagram, YouTube, PlayArrowRounded } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

import { widthScreen } from "../../hooks/widthScreen";

interface InfoFooterProps {
    sizeContent: number
}

export const InfoFooter: React.FC<InfoFooterProps> = ({sizeContent}) => {

    const {width}  = widthScreen();

    const icons_separation = {
        xs: '0 0 15px 0',
        sm: '0 25px 0 0',
        md: '0 50px 0 0',
        lg: '0 70px 0 0',
        xl: '0 75px 0 0'
    }

    const icon_radius = {
        xs: '31px',
        sm: '34px',
        md: '40px',
        lg: '42px',
        xl: '50px'
    }

    const icons_size = {
        xs: '27px',
        sm: '30px',
        md: '32px',
        lg: '37px',
        xl: '40px'
    }

    return (
    <Box bgcolor='rgba(38,38,38, 0.6)' height={sizeContent}>
        <Grid container justifyContent='space-between' display='flex' color='#B8B8B8' direction='row'>
            <Box justifyContent= {(width<600) ? 'center' : 'right' } flexDirection={(width<600) ? 'column' : 'row'} alignItems='center' display='flex' width='32vw'  height={sizeContent}>
                <IconButton onClick={()=>{window.open('https://www.facebook.com/profile.php?id=61558631184828', '_blank');}} sx={{margin:icons_separation, background: '#F8F8F8', width: icon_radius, height:icon_radius}} > 
                    <FacebookRounded 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize: icons_size, 
                            color: "#585858"
                        }}
                    /> 
                </IconButton>
                <IconButton onClick={()=>{window.open('https://youtube.com/@hayatperu?si=wxofF2uo--mIiV2C', '_blank')}} sx={{margin:icons_separation, background: '#F8F8F8', width: icon_radius, height: icon_radius}} > 
                    <YouTube 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize: icons_size, 
                            color: "#585858"
                        }}
                        />
                </IconButton>
                <IconButton onClick={()=>{window.open('https://www.instagram.com/hayatclubpuntasal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}} sx={{ margin:icons_separation, background: '#F8F8F8', width: icon_radius, height: icon_radius}} > 
                    <Instagram 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize: icons_size, 
                            color: "#585858"
                        }}
                        /> 
                </IconButton>

            </Box>
            <Box alignSelf='center' justifyContent='center' border={1.2} height={sizeContent * (75/100)} display='flex' color='white' />
            
            <Box width='40vw' p={(width < 600) ? '0 10%' : '0'} height={sizeContent} display={'flex'} justifyContent='center' alignItems='center' justifyItems='center' alignContent='center'>
                <Typography color='white' textAlign={'center'} fontWeight='bold' fontSize={(width < 900) ? (width < 600) ? '3vw' : '2.5vw' : '25px'}>HAYAT CLUB PUNTA SAL</Typography>
            {/* {(width < 900)
                ? <SmallSizeScreenContent sizeContent={sizeContent} width={width}/>
                : <HighSizeScreenContent  sizeContent={sizeContent} width={width}/>
            } */}
            </Box>
            <Box alignSelf='center' justifyContent='center' border={1.2} height={sizeContent * (75/100)} display='flex' color='white' />
            <Box width='24vw' justifyContent='center' alignItems='center' display='flex' flexDirection={(width < 733) ? 'column' : 'row' } height={sizeContent}>
                <Box 
                sx={{
                    '&:hover': {
                        cursor: 'pointer',
                        color: 'primary.light',
                        transform: 'scale(1.4)',
                        transition: 'all 0.3s ease-in-out',
                    },
                }}
                
                display='flex' color='white' justifyContent='center' border={3} borderRadius='30px' width='50px' height='50px' >
                    <IconButton onClick={()=>{ window.open('https://youtube.com/@hayatclubpuntasal?si=sQypIKHSlGCDhSJD', '_blank') }} > 
                        <PlayArrowRounded 
                            sx={{
                                color:'white',
                                fontSize: '150%',
                                '&:hover': {
                                    cursor: 'pointer',
                                    color: 'primary.light',
                                    transform: 'scale(1.3)',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}/> 
                    </IconButton>
                </Box>
                <Typography color='white' padding={ (width < 733) ? '6px 0 0 0'  : '0 0 0 10px'} fontSize={(width<504) ? '3vw' : '120%'} fontWeight='bold'>EXPLORAR</Typography>
            </Box>
        </Grid>
    </Box>
    );
}

// interface ScreenContentProps{
//     width: number;
//     sizeContent: number
// };
// const SmallSizeScreenContent:React.FC<ScreenContentProps> = ({width, sizeContent}) => {
//     return (
//     <Grid container padding='0 5px' height={sizeContent} alignContent='center' justifyContent={(width < 424) ? 'center' : 'space-between'} direction={(width < 430) ? 'column' : 'column'} >
//          <Box height={(width < 430) ? '40%': '100%'} width={(width < 430) ? '100%': '50%'}flexDirection='column' display='flex' alignItems='center' justifyContent='center' >
//             <Box component='img' overflow='hidden' src='https://cdn.clubhayat.com/show-especiales.jpg' alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: (width < 424) ? '45%' : '50%'}} />
//             <Typography textAlign='center' fontSize={(width < 424) ? '9px' : '13px'} color='white' fontWeight='bold' > SHOW ESPECIALES </Typography>
//             {(width < 640) 
//                 ? null 
//                 : <Typography textAlign='center' fontSize='13px' color='white'> No te pierdas de ...</Typography>}
//          </Box>
//          <Box height={(width < 430) ? '40%': '100%'} width={(width < 430) ? '100%': '50%'}textAlign='center' flexDirection='column' display='flex' alignItems='center' justifyContent='center'>
//             <Box component='img' overflow='hidden' src='https://cdn.clubhayat.com/comida-hayat.jpg' alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: (width < 424) ? '45%' : '50%' }} />
//             <Typography textAlign='center' fontSize={(width < 424) ? '9px' : '13px'}color='white' fontWeight='bold'> COMIDAS Y BEBIDAS </Typography>
//             {(width < 640) 
//                 ? null 
//                 : <Typography textAlign='center' fontSize='13px' color='white'> No te pierdas de ...</Typography>}
            
//          </Box>
//      </Grid>
//      );
//  }

// const HighSizeScreenContent:React.FC<ScreenContentProps>  = ({sizeContent}) => {
//    return (
//    <Grid container padding='0 20px' alignContent='center' height={sizeContent} justifyContent='space-between' direction='row' >
//         <Box component='img' height={{md: '50%', lg: '50%', xl: '50%'}} width={{md: '24%', lg: '20%', xl: '17%'}}  
//             overflow='hidden' src='https://cdn.clubhayat.com/show-especiales.jpg' alt="Logo" style={{objectFit: 'cover', textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s'}} />
//         <Box alignContent='center' justifyContent='center' width='24%' >
//             <Typography fontSize={{
//                 md: '13px',
//                 lg: '15px',
//                 xl: '15px'
//             }} color='white' fontWeight='bold' > SHOW ESPECIALES </Typography>
//             <Typography fontSize={{
//                 md: '13px',
//                 lg: '15px',
//                 xl: '15px'
//             }} color='white'> No te pierdas de ...</Typography>
//         </Box>
//         <Box component='img' height={{md: '50%', lg: '50%', xl: '50%'}} width={{md: '24%', lg: '20%', xl: '17%'}} 
//         overflow='hidden' src='https://cdn.clubhayat.com/comida-hayat.jpg' alt="Logo" style={{objectFit: 'cover', textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s'}} />
//         <Box alignContent='center' justifyContent='center' width='24%'height='auto' >
//             <Typography fontSize={{
//                 md: '13px',
//                 lg: '15px',
//                 xl: '15px'
//             }} color='white' fontWeight='bold'> COMIDAS Y BEBIDAS </Typography>
//             <Typography fontSize={{
//                 md: '13px',
//                 lg: '15px',
//                 xl: '15px'
//             }} color='white'> No te pierdas de ...</Typography>
//         </Box>
//     </Grid>
//     );
// }