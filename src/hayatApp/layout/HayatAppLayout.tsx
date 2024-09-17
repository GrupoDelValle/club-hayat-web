import { Box } from '@mui/system';
import { Footer, NavBar, SideBar } from '../ui/components';
import { ReactNode, useEffect, useRef, useState } from 'react';
import './components/css/transitions.css';

import { bg_images } from '../config/bg_options';
import './components/css/beat.css';
import './components/css/popup.css';

import { BackgroundSlider } from './components/Background-Slider';
import { BackgroundVideo } from './components/Background-Video';
// import { Button, IconButton } from '@mui/material';
// import { Close } from '@mui/icons-material';
// import Banner from '../../assets/banner.png';
// import { widthScreen } from '../hooks/widthScreen';
// import ConsultaAhoraSvg from '../ui/components/TextSVG';
import { useNavigate } from 'react-router-dom';
import { BackgroundNosotros } from './components/Background-Image';
import { nosotrosImages } from '../config/bg_nosotros';

interface AuthLayoutProps {
  children: ReactNode;
  type?: string;
  disablePanel?: boolean;
}

export const HayatAppLayout: React.FC<AuthLayoutProps> = ({disablePanel=false, type='slider', children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  // const [isExiting, setIsExiting] = useState(false);
  // const { width } = widthScreen();

  const contentRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPanel(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const handleClose = () => {
    // setIsExiting(true);
    setTimeout(() => {
      setShowPanel(false);
      // setIsExiting(false);
    }, 400);
  };

  return (
    <Box
      sx={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor:'green',
        display: 'relative', 
        flexDirection: 'column',
        // minHeight: '100vh',
        // minWidth: '90%',
      }} 
      // className="fade-in-out"
    >
        {(type === 'slider') 
          ? <BackgroundSlider images={bg_images} interval={500} contentRef={contentRef}/>
          : (type === 'video')
            ? <BackgroundVideo/>
            : <BackgroundNosotros images={nosotrosImages} interval={500} contentRef={contentRef} />
            // : <BackgroundImage imageSrc={fondoImagen}  />
        }
        { ( isSidebarOpen ) ? <SideBar drawerWidth={ 230 } isOpen={ isSidebarOpen } handleSidebarToggle={handleSidebarToggle}/> : null }
        <NavBar
          onToggleSidebar={handleSidebarToggle}
        />
        {/* {(disablePanel) 
          ? null 
          : 
          <Box 
            className='iconButton'
            zIndex={2} 
            top={ (showPanel) ? '56vh' :'-500px'} width='25vh' mt='2%' mr='5%' height='35vh' display='flow' bgcolor='trasnparent' right='0' position='fixed' 
            sx={{ 
              transition: 'top 0.9s ease-in-out',
              backgroundImage: `url(${Banner})`,
              backgroundPosition: 'center',
              backgroundSize:'cover',
            }} 
          >
            <IconButton
              onClick={handleClose}
              sx={{ zIndex:1,  border:'2px solid black', position: 'absolute', right: '-1vw', top: '-1vw' }}
            >
              <Close sx={{ color:'black', fontSize: '25px'}} />
            </IconButton>
            <Button  onClick={()=>{navigate('/contacto#form-hayat')}} sx={{ ml:'5%', mt:'5%', width: '90%', height:'90%', borderRadius: '80px' }} ></Button>
          </Box>
        } */}

        {/* { (showPanel && !disablePanel) && (
        <Box
          zIndex={2}
          bgcolor="rgba(0,0,0,0.4)"
          width="100vw"
          height="100vh"
          display="flex"
          position="fixed"
          sx={{ top: 0 }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ border:'2px solid white', position: 'absolute', right: '5vw', top: '10vh' }}
          >
            <Close sx={{ color:'white', fontSize: '25px'}} />
          </IconButton>
          <Box display='flex' width='100%' height='50vh' justifyContent='center' className={isExiting ? 'popup-exit' : 'popup-enter'} top='15vh' position='absolute' bgcolor="transparent">
            <img src={Banner} height='100%' alt="Precios Limitados" />
            <IconButton  sx={{ position: 'absolute', bottom:0, mb: (width < 550) ? '15%' : '10%', height:'50px', width:'280px', borderRadius:'30px' }}  onClick={()=>{navigate('/contacto#form-hayat')}}>
              <ConsultaAhoraSvg style={{ width: 300, height: (width < 550) ? 35 : '30vw' }} />
            </IconButton>
          </Box>
        </Box>
      )} */}

        <Box
          component='main'
          overflow={'auto'}
          zIndex={1}
          ref={contentRef}
          sx={{ 
            flexGrow: 1, 
            p: '0 0 0 0',
            overflow: 'auto',
            position: 'relative'
          }}
        >
          { children }  
        </Box>
        <Footer />
        
    </Box>
  )
}
