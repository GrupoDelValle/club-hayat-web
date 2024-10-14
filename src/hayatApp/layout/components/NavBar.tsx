import { AppBar, Box, Button, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MenuOutlined } from '@mui/icons-material';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
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
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarOpen: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({onToggleSidebar, showForm, setShowForm, isSidebarOpen}) => {
    const { width } = widthScreen();
    //const indexNav = useSelector((state: RootState) => state.nabBar.index);
    const sectionIds = MenuOptions.map(option => option.url);
    const activeSection = useSectionObserver(sectionIds);
    const [showAppBar, setShowAppBar] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('transparent'); // Nuevo estado para fondo
    

    const componentRef = useRef<HTMLDivElement | null>(null); // Crear referencia para el contenedor
    const [componentWidth, setComponentWidth] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const handleCloseForm = (showForm : boolean) => {
        setShowForm(!showForm);
      };

    useEffect(() => {
        if (componentRef.current) {
            setComponentWidth(componentRef.current.clientWidth);
          }

        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowAppBar(false);
                setBackgroundColor('white'); // Cambiar a blanco al hacer scroll
            } else {
                setShowAppBar(true);
                setBackgroundColor('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    const handleOnClickLogo = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            const headerElement = document.getElementById('inicio');
            if (headerElement) {
                headerElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <AppBar 
            position='fixed'
            sx={{ 
                transition: 'background-color 0.8s ease-in-out',
                //top: (showAppBar) ? 0 : '-120px',
                left: 0,
                right: 0,
                bgcolor: backgroundColor || 'transparent',
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
                            
                        {!isSidebarOpen ? (
                            <>
                                <IconButton onClick={handleToggleSidebar} sx={{ alignContent: 'center', width: '40px', height: '40px', background: 'rgba(238,238,238,0.9)' }}>
                                    <MenuOutlined sx={{ color: '#DCA65E' }} />
                                </IconButton>
                                <Box width={(width < 431) ? '' : {
                                    md: '54px',
                                    lg: '120px',
                                    xl: '200px'
                                }} />
                                <Box display='flex' justifyContent='end' color={'red'} height='100%' width={(width < 1180)
                                    ? (width < 1150)
                                        ? '45vw'
                                        : showAppBar ? '50vw' : '5vw'
                                    : '100%'} sx={{ transition: 'width 0.7s ease-in-out' }}>
                                    <Button sx={{ height: '100%', paddingRight: '50px' }} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                                        <img src={logoHayat} alt="Logo" style={{ padding: 'none', margin: 'none', borderColor: 'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 70, borderRadius: '0' }} />
                                        <Box width={'0.7vw'} />
                                        <img src={nombreHayat} alt="Logo" style={{ padding: 'none', margin: 'none', borderColor: 'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '12vw' : 80 : 130, borderRadius: '0' }} />
                                    </Button>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box width={(width < 431) ? '' : {
                                    md: '54px',
                                    lg: '120px',
                                    xl: '200px'
                                }}
                                position={'absolute'} />
                                <Box display='flex' justifyContent='start' color={'red'} height='100%' width={(width < 1180)
                                    ? (width < 1150)
                                        ? '45vw'
                                        : showAppBar ? '50vw' : '5vw'
                                    : '100%'} sx={{ transition: 'width 0.7s ease-in-out' }}>
                                    <Button sx={{ height: '100%', paddingRight: '50px' }} disableRipple color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                                        <img src={logoHayat} alt="Logo" style={{ padding: 'none', margin: 'none', borderColor: 'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '5.5vw' : 35 : 70, borderRadius: '0' }} />
                                        <Box width={'0.7vw'} />
                                        <img src={nombreHayat} alt="Logo" style={{ padding: 'none', margin: 'none', borderColor: 'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 640) ? (width < 322) ? '12vw' : 80 : 130, borderRadius: '0' }} />
                                    </Button>
                                </Box>
                            </>
                        )}

                        </Box>
                    </Grid>
                    <Grid size={3} justifyContent={'center'} justifyItems='center' display='flex' flexDirection='row' alignItems='center'>
                    {(width>850) ? <Button
                        className='iconButton transparent'
                        sx={{ 
                            // transition: 'top 0.7s ease-in-out',
                            // top: showAppBar ? 0 : '97vh',
                            // scale: showAppBar ? '1' : '1.1',
                            m: '0 3.5vw 0 0 ',
                            color: '#F8F8F8',
                            // background: '#DCA65E',
                            background: '#0c4a97',
                            borderRadius: '30px',
                            height:(width < 424) ? '40px' : '30px',
                            // width: (width < 424) ? '30px' : '',
                            fontWeight: 'bold',
                            "&.MuiButtonBase-root:hover": { 
                                backgroundColor: "#DCA65E",
                            },
                            fontSize: (width < 431) ? '12px' : '14px'
                        }}
                        onClick={() => (handleCloseForm(showForm))}
                    ><Typography fontWeight={'bold'} textAlign={'center'} display={'flex'} justifyContent={'center'} >Contáctanos <EmailIcon/></Typography>
                    </Button> 
                    : <IconButton
                        onClick={() => (handleCloseForm(showForm))}
                        className='iconButton delay1'
                        sx={{
                            // transition: 'top 0.7s ease-in-out',
                            // top: showAppBar ? 0 : '97vh',
                            // scale: showAppBar ? '1' : '1.3',
                            m: '0 4vw 0 0 ', 
                            backgroundColor: '#0c4a97', "&.MuiButtonBase-root:hover":{bgcolor:'#25d366'}}}>
                        <EmailIcon sx={{color: '#ffffff'}}/>
                    </IconButton> }
                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
