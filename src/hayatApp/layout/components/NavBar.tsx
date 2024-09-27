import { AppBar, Box, Button, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MenuOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { WhatsApp } from '@mui/icons-material';
import { CustomButton } from '../../ui/components';
import { MenuOptions } from '../../ui/config/menu-options';
import { CustomRoundedButton } from '../../ui/components/CustomRoundedButton';
import { TextImage } from '../../ui/components/TextImage';
import '../../ui/css/CustomRoundedButton.css';
import './css/beat.css';
import './css/navBar.css';
import { widthScreen } from '../../hooks/widthScreen';
import nombreHayat from '../../../assets/hayat-name.webp';
import logoHayat from '../../../assets/hayat-logo.webp';
import { RootState } from '../../../store';
import { useSectionObserver } from '../../hooks/useSectionObserver';

interface NavBarProps {
    onToggleSidebar: ()=>void;
}

export const NavBar: React.FC<NavBarProps> = ({onToggleSidebar}) => {
    const { width } = widthScreen();
    //const indexNav = useSelector((state: RootState) => state.nabBar.index);
    const sectionIds = MenuOptions.map(option => option.url);
    const activeSection = useSectionObserver(sectionIds);
    const [showAppBar, setShowAppBar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowAppBar(false);
            } else {
                setShowAppBar(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = (index: number) => {
        const option = MenuOptions[index];
        const sectionId = option.url; // El id de la sección debe coincidir con el URL de cada opción

        console.log(index, option, sectionId);

        // Buscar el elemento en la página y hacer scroll
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    const handleOnClickLogo = () => {
        const headerElement = document.getElementById('inicio');
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar 
            position='fixed'
            sx={{ 
                transition: 'top 0.7s ease-in-out',
                /*top: (showAppBar) ? 0 : '-120px',*/
                left: 0,
                right: 0,
                bgcolor: 'white',
                width: '100%',
                height: {
                    xs: '80px',
                    sm: '110px',
                    md: '120px',
                    lg: '120px',
                    xl: '120px' 
                },
                zIndex: 2
            }}
        >
            <Toolbar style={{ alignContent: 'center', justifyContent: 'start' }} className='header'>
                <Grid height={{
                    xs: '80px',
                    sm: '110px',
                    md: '120px',
                    lg: '120px',
                    xl: '120px' 
                }} width={'100%'} container direction='row' justifyContent='space-between' alignItems='center'>
                    <Grid size={3}>
                        <Box height='60px' justifyItems='center' display='flex' flexDirection='row' alignItems='center'>
                            {(width < 1180)
                            ? <IconButton onClick={handleToggleSidebar} sx={{ alignContent: 'center', width: '40px', height: '40px', background: 'rgba(238,238,238,0.9)'}}> 
                                <MenuOutlined sx={{color:'#DCA65E'}}  />
                            </IconButton>
                            : <Box width={(width < 431) ? '' : {
                                md: '54px',
                                lg: '120px',
                                xl: '200px' }} /> }
                            <Box display='flex' justifyContent='end' color={'red'} height='100%' width={
                                (width < 935) 
                                    ? (width < 400)
                                        ? '45vw'
                                        : showAppBar ? '50vw' : '5vw'
                                    : '100%'} sx={{ transition: 'width  0.7s ease-in-out' }} >
                                <Button sx={{ height:  '100%', paddingRight: '50px'}} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                                    <img src={logoHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 70, borderRadius: '0' }} />
                                    <Box width={'0.7vw'}/>
                                    <img src={nombreHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '12vw' : 80 : 130, borderRadius: '0' }} />
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={6} justifyContent={'center'} justifyItems='center' display='flex' flexDirection='row' alignItems='center'>
                        {width < 1180 ? null : MenuOptions.map((option, index) => (
                            activeSection === option.url
                            ? <CustomRoundedButton
                                key={index} 
                                className={`rounded-button ${activeSection === option.url ? 'selected-background' : ''}`}
                                onClick={() => {
                                    handleButtonClick(index);
                                }}>
                                    <TextImage text={option.title} />
                            </CustomRoundedButton>
                            : <CustomButton
                                key={index} 
                                className={`button ${activeSection === option.url ? 'selected-background' : ''}`}
                                onClick={() => {
                                    handleButtonClick(index);
                                }}>
                                <Typography color="#0c4a97" fontSize= 'clamp(13px, 1vw, 18px)' fontWeight="fontWeightBold" bgcolor={'transparent'} >{option.title}</Typography>
                            </CustomButton>
                        ))}
                    </Grid>
                    <Grid size={3} justifyContent={'center'} justifyItems='center' display='flex' flexDirection='row' alignItems='center'>
                    {(width>450) ? <Button
                        className='iconButton transparent'
                        sx={{ 
                            // transition: 'top 0.7s ease-in-out',
                            // top: showAppBar ? 0 : '97vh',
                            // scale: showAppBar ? '1' : '1.1',
                            m: '0 3.5vw 0 0 ',
                            color: '#F8F8F8',
                            // background: '#DCA65E',
                            background: '#25d366',
                            borderRadius: '30px',
                            height:(width < 424) ? '40px' : '30px',
                            // width: (width < 424) ? '30px' : '',
                            fontWeight: 'bold',
                            "&.MuiButtonBase-root:hover": { 
                                backgroundColor: "#075e54",
                            },
                            fontSize: (width < 431) ? '12px' : '14px'
                        }}
                        onClick={()=>{window.open('https://wa.me/51967392794?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20membres%C3%ADas.', '_blank')}}
                    ><Typography fontWeight={'bold'} textAlign={'center'} display={'flex'} justifyContent={'center'} >Conéctate <WhatsApp/></Typography>
                    </Button> 
                    : <IconButton
                        onClick={()=>{window.open('https://wa.me/51967392794?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20membres%C3%ADas.', '_blank')}}
                        className='iconButton delay1'
                        sx={{
                            // transition: 'top 0.7s ease-in-out',
                            // top: showAppBar ? 0 : '97vh',
                            // scale: showAppBar ? '1' : '1.3',
                            m: '0 4vw 0 0 ', 
                            backgroundColor: '#25d366', "&.MuiButtonBase-root:hover":{bgcolor:'#25d366'}}}>
                        <WhatsApp sx={{color: '#ffffff'}}/>
                    </IconButton> }
                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
