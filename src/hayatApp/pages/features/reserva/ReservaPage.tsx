import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Reserva1 } from './features/1-Reserva';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';

export const ReservaPage = () => {
  const { isLoading } = loadingScreenHook();

  return ((isLoading) 
  ? <LoadingScreen/> 
  :  <HayatAppLayout>
    <Grid container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Reserva1 />
    </Grid>
    </HayatAppLayout>
  )
}
