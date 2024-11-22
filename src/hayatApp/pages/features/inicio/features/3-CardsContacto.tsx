import { Box, Typography } from "@mui/material";
import { CardsInfo } from "../components/Cards";

interface Contacto1Props {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const CardsContacto3: React.FC<Contacto1Props> = ({ showForm, setShowForm }) => {

    return (
    <Box 
        bgcolor={'#F8F8F8'}
        borderColor={'red'}
        sx={{ 
            padding: 'none',
            width: '100%', 
            height: '650px',
        }}
    >
        <Box height='15%' padding={'20px 2% 0 5%'} alignItems={'center'} justifyContent='start' display='flex' flexDirection='row'>
            <Box border={1} margin='0 20px 0 0' color={'#DCA65E'} height='0' width={'100px'} />
            <Typography margin='0 5% 0 0' fontSize={{
                xs: '15px',
                sm: '20px',
                md: '20px',
                lg: '22px',
                xl: '24px'
            }} fontWeight={'bold'}> DISFRUTA DE: </Typography>

        </Box>
        <Box height={'85%'} display={'flex'} flexDirection={'row'} alignItems='center' >
            <CardsInfo showForm={showForm} setShowForm={setShowForm}/>
        </Box>

    </Box>
    );
}