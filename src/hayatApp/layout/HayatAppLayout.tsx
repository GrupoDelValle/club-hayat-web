import { Box } from '@mui/system';
import { Footer, NavBar, SideBar } from '../ui/components';
import { ReactNode, useEffect, useRef, useState } from 'react';
import './components/css/transitions.css';
import './components/css/beat.css';
import './components/css/popup.css';
import imagenFondo from '../../assets/portada-web.webp'
import { widthScreen } from '../hooks/widthScreen';

interface AuthLayoutProps {
  children: ReactNode;
  type?: string;
  disablePanel?: boolean;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HayatAppLayout: React.FC<AuthLayoutProps> = ({disablePanel=false, type='slider', children, showForm, setShowForm }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = widthScreen();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPanel(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor:'green',
        display: 'relative', 
        flexDirection: 'column',
        backgroundImage: imagenFondo
        // minHeight: '100vh',
        // minWidth: '90%',
      }} 
      // className="fade-in-out"
    >
        {/*(type === 'slider') 
          ? <BackgroundSlider images={bg_images} interval={500} contentRef={contentRef}/>
          : <BackgroundNosotros images={nosotrosImages} interval={500} contentRef={contentRef} />*/}
        { ( isSidebarOpen ) ? <SideBar drawerWidth={ (width > 700) ? 350 : 250 } isOpen={ isSidebarOpen } handleSidebarToggle={handleSidebarToggle}/> : null }
        <NavBar
          showForm={showForm}
          setShowForm={setShowForm}
          onToggleSidebar={handleSidebarToggle}
          isSidebarOpen={isSidebarOpen}
        />
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
