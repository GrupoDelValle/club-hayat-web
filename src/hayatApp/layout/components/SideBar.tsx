import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { useRef, useEffect, useState } from 'react';
import { MenuOptions } from '../../ui/config/menu-options';
import { Close as CloseIcon, Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import Grid from "@mui/material/Grid2"
import { IconButton } from "@mui/material";
import { TikTokIcon } from "./TikTokIcon";

interface SideBarProps {
    drawerWidth: number;
    isOpen: boolean;
    handleSidebarToggle?: ()=>void;
}
const Links = [
    () => {
        window.open('https://www.tiktok.com/@hayatclubpuntasal', '_blank');
    },
    () => {
        window.open('https://www.facebook.com/profile.php?id=61558631184828', '_blank');
    },
    () => {
        window.open('https://youtube.com/@hayatperu?si=oMJ6JK3bg1FmAH-o', '_blank');
    },
    () => {
        window.open('https://www.instagram.com/hayatclubpuntasal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    },
    () => {
        window.open('https://www.linkedin.com/company/grupo-del-valle-sac/?originalSubdomain=pe', '_blank');
    },
]

const sxIconButton = {
    bgcolor: '#303030',
    height: {
        xs: '6vw',   // Reducido de 8vw
        sm: '4vw',   // Reducido de 5vw
        md: '22px',  // Reducido de 28px
        lg: '2vw',   // Reducido de 2.5vw
        xl: '1.8vw'  // Reducido de 2vw
    },
    width: {
        xs: '6vw',   // Reducido de 8vw
        sm: '4vw',   // Reducido de 5vw
        md: '22px',  // Reducido de 28px
        lg: '2vw',   // Reducido de 2.5vw
        xl: '1.8vw'  // Reducido de 2vw
    },
    borderRadius: '50%' // Mantiene la forma circular
};

export const SideBar: React.FC<SideBarProps> = ({ drawerWidth = 240, isOpen, handleSidebarToggle}) => {
    const [_, setWidthScreen] = useState(window.innerWidth);
    
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setNewWidthScreen = () => {
            setWidthScreen(window.innerWidth);
        };
        window.addEventListener('resize', setNewWidthScreen);
        return () => {
            window.removeEventListener('resize', setNewWidthScreen);
        };
        
    }, []);

    let counts = 0;
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            counts++;
            if (!(counts%2)  && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                if(handleSidebarToggle) handleSidebarToggle();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    const handleButtonClick = (index: number) => {
        const option = MenuOptions[index];
        const sectionId = option.url; // El id de la sección debe coincidir con el URL de cada opción

        // Buscar el elemento en la página y hacer scroll
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box ref={sidebarRef}
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                PaperProps={{
                    sx: {
                    backgroundColor: 'rgba(238,238,238,0.5)',
                    height: '100%', //
                  }}
                }
                variant='temporary'
                open={isOpen}
                sx={{ 
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {/* Botón para cerrar el Sidebar */}
                <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleSidebarToggle}
                    aria-label="close"
                    sx={{ ml: 'auto', mr: 1 }}
                >
                    <CloseIcon />
                </IconButton>
                </Toolbar>
                <br/>
                <br/>
                <Divider />
                <br/>
                <List >
                    {MenuOptions.map((option, index) => (
                
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleButtonClick(index)}>
                                <ListItemText primary={option.title} />
                            </ListItemButton>
                        </ListItem>))
                    }
                </List>
                <br/>
                <Divider />
                <br/>
                <Box>
                    <Grid container spacing={2} direction= 'row' justifyContent='center' alignItems={'center'}>
                        <IconButton onClick={Links[1]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0866FF, #000000, #0866FF)', color: '#0866FF'}}} > <Facebook style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box></Box>
                        <IconButton onClick={Links[3]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #405de6, #5b51d8, #833ab4, #c13584, #e1306d, #fd1d1d,#f56040, #f77737, #fcaf45, #ffdc80)', color: '#DD2A7B'}}} > <Instagram style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box></Box>
                        <IconButton onClick={Links[2]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, red, #000000, red)', color: 'red'}}} > <YouTube style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box></Box>
                        <IconButton onClick={Links[0]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #25f4ee, #000000, #fe2c55)', color: '#383838'}}} > <TikTokIcon size='14px' color={'#A8A8A8'} /> </IconButton>
                        <Box></Box>
                        <IconButton onClick={Links[4]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0077B5, #000000, #0077B5)', color: '#0077B5'}}}> <LinkedIn style={{ color: '#A8A8A8'}}/> </IconButton>
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}
