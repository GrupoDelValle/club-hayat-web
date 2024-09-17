import { Box } from "@mui/material"

export const MapaHayat = () => {
return <Box overflow='hidden'
        bgcolor={'#000000'}
        borderColor={'red'}
        sx={{ 
            padding: 'none',
            width: '100%',
            height: '640px',
        }}
    >
        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993568.6859085645!2d-80.87159043424467!3d-4.694272098497985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x903697006633ef11%3A0xf00d3fa49e8aa3fc!2sHAYAT%20CLUB%20PUNTA%20SAL!5e0!3m2!1sen!2spe!4v1720050245868!5m2!1sen!2spe" width="100%" height="99%" style={{ border:0 }} loading="lazy"></iframe>
    </Box>
}