import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOptions } from '../../ui/config/menu-options';

import logoHayat from '../../../assets/hayat-logo-2.webp';

interface SideBarProps {
    drawerWidth: number;
    isOpen: boolean;
    handleSidebarToggle?: ()=>void;
}

const sxIconButton ={
    marginBottom: '5%',
    bgcolor: '#303030',
    height: {
        xs: '10vw',
        sm: '6vw',
        md: '33px',
        lg: '3vw',
        xl: '2.5vw'
    },
    width: {
        xs: '10vw',
        sm: '6vw',
        md: '33px',
        lg: '3vw',
        xl: '2.5vw'
    }
}

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
                    backgroundColor: 'rgba(238,238,238,0.8)',
                    height: '50%', //
                  }}
                }
                variant='temporary'
                open={isOpen}
                sx={{ 
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar sx={{margin: '10px 0 9px 0'}}>
                    <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: 140}} />
                </Toolbar>
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
                {/*<Typography margin={'0 0 15px 0'} style={{color: '#A8A8A8'}}>Conéctate con nosotros</Typography>
                <Grid container direction= 'row' justifyContent='start'>
                    <IconButton onClick={Links[1]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0866FF, #000000, #0866FF)', color: '#0866FF'}}} > <Facebook style={{ color: '#A8A8A8'}}/> </IconButton>
                    <Box width={widthSpace}></Box>
                    <IconButton onClick={Links[3]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #405de6, #5b51d8, #833ab4, #c13584, #e1306d, #fd1d1d,#f56040, #f77737, #fcaf45, #ffdc80)', color: '#DD2A7B'}}} > <Instagram style={{ color: '#A8A8A8'}}/> </IconButton>
                    <Box width={widthSpace}></Box>
                    <IconButton onClick={Links[2]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, red, #000000, red)', color: 'red'}}} > <YouTube style={{ color: '#A8A8A8'}}/> </IconButton>
                    <Box width={widthSpace}></Box>
                    <IconButton onClick={Links[0]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #25f4ee, #000000, #fe2c55)', color: '#383838'}}} > <TikTokIcon size='14px' color={'#A8A8A8'} /> </IconButton>
                    <Box width={widthSpace}></Box>
                    <IconButton onClick={Links[4]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0077B5, #000000, #0077B5)', color: '#0077B5'}}}> <LinkedIn style={{ color: '#A8A8A8'}}/> </IconButton>
                </Grid>*/}
            </Drawer>
        </Box>
    )
}
