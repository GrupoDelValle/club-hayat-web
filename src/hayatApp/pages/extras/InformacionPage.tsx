// import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import { Box, Button, IconButton, Typography } from "@mui/material";
// import { HayatAppLayout } from "../../layout/HayatAppLayout";
import logoHayat from '../../../assets/hayat-logo.webp'
import { Download } from "@mui/icons-material";
import { widthScreen } from "../../hooks/widthScreen";
import { useNavigate } from "react-router-dom";


// const CustomIconButton = styled(IconButton)(() => ({
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#12af24',
//     },
//   }));


// const forceDownload = (url: string, fileName: string) => {
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', fileName);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

export const InformacionPage = () => {
    
    // const pdfUrl = "https://cdn.clubhayat.com/acta.pdf";
    // const handleDownload = () => {
    //     forceDownload(pdfUrl, 'acta.pdf');
    // };

    const navigate = useNavigate();
    const handleOnClickLogo = ()=>{
        navigate('/');
    }


    const { width } = widthScreen();

    return (
        // <HayatAppLayout disablePanel={true} type="photo" >
        <Box 
            sx={{
                backgroundImage: 'url(https://cdn.clubhayat.com/bg3.webp)',
                backgroundSize: 'cover',
            }}
            width='100vw' height='100vh' 
        >   
            <Box bgcolor='rgba(0,0,0,0.4)' position='absolute' width='100vw' height='100vh'  >
                <Box display='flex' justifyContent='end' color={'red'} width={
                    (width < 935) 
                        ? (width < 400)
                            ? '45vw'
                            : '5vw'
                        : '100%'} sx={{ transition: 'width  0.7s ease-in-out' }} >
                    <Button sx={{ ml:'1%', position:'absolute', top:'10px', left:0}} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                        <img src={logoHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 50, borderRadius: '0' }} />
                    </Button>
                </Box>
                <Box mt={'120px'} color='white'>
                    <Typography textAlign='center' fontWeight='500' fontSize='3vw' > INFORMACIÓN HAYAT </Typography>
                    <Box p={width < 600 ? '10% 3%' :'40px 20px'} borderRadius='50px' bgcolor='rgba(237, 239, 242,0.5)'  width={width < 600 ? '80vw' : '50vw'} height='380px' m='auto' >
                        <Box flexDirection='column' >
                            <Box key={'1'} borderRadius='30px' p='10px 30px' width={width < 600 ? '72vw' : '45vw'} bgcolor='rgba(252, 252, 252, 0.7)' display='flex' alignItems='center'>
                                <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'0 5% 0 0', transition: 'box-shadow 3s', width: width < 900 ? '5vw' : '50px'}} />
                                <Typography mr='auto' color='black' fontSize={width < 900 ? width < 600 ? '3vw' : '2vw' : '17px'} fontWeight='500' > Reglamento interno* </Typography>
                                <IconButton  >
                                    <Download sx={{ fontSize:width < 600 ? '18px' : '25px' }} />
                                </IconButton>
                            </Box>
                            <Box height='30px' />
                            <Box key={'2'} borderRadius='30px' p='10px 30px' width={width < 600 ? '72vw' : '45vw'} bgcolor='rgba(252, 252, 252, 0.7)' display='flex' alignItems='center'>
                                <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'0 5% 0 0', transition: 'box-shadow 3s', width: width < 900 ? '5vw' : '50px'}} />
                                <Typography mr='auto' color='black' fontSize={width < 900 ? width < 600 ? '3vw' : '2vw' : '17px'} fontWeight='500' > Manual de uso* </Typography>
                                <IconButton  >
                                    <Download sx={{ fontSize:width < 600 ? '18px' : '25px' }} />
                                </IconButton>
                            </Box>
                            <Box height='30px' />
                            <Box key={'3'} borderRadius='30px' p='10px 30px' width={width < 600 ? '72vw' : '45vw'} bgcolor='rgba(252, 252, 252, 0.7)' display='flex' alignItems='center'>
                                <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'0 5% 0 0', transition: 'box-shadow 3s', width: width < 900 ? '5vw' : '50px'}} />
                                <Typography mr='auto' color='black' fontSize={width < 900 ? width < 600 ? '3vw' : '2vw' : '17px'} fontWeight='500' > Tarifario de Ingreso* </Typography>
                                <IconButton  >
                                    <Download sx={{ fontSize:width < 600 ? '18px' : '25px' }} />
                                </IconButton>
                            </Box>

                        </Box>
                    </Box>
                    <Typography pt='15px' textAlign='center' mr='auto' color='white' fontSize={width < 900 ? width < 600 ? '3vw' : '2vw' : '17px'} fontWeight='500' > *Sujeto a cambios en el desarrollo de proyecto. </Typography>
                </Box>
            </Box>
        </Box>
        // </HayatAppLayout>
    );
}