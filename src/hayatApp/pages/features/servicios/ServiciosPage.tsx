import Grid from '@mui/material/Grid2';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Servicios1 } from './features/1-Servicios';
import { Experiencias2 } from './features/2-Experiencias';

import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';

export const ServiciosPage = () => {
  const { isLoading } = loadingScreenHook();

  return ((isLoading) 
  ? <LoadingScreen/> 
  :  <HayatAppLayout disablePanel={true} >
      <Grid container 
          overflow='hidden'
          direction='row' 
          justifyContent='space-between' 
          alignItems='center' 
          className='animate__animated animate__fadeIn animate__faster'
      >
          <Servicios1/>
          <Experiencias2/>
      </Grid>
    </HayatAppLayout>
  )
}
