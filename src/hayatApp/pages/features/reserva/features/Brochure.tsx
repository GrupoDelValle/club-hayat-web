import Grid from '@mui/material/Grid2';
import { HayatAppLayout } from '../../../../layout/HayatAppLayout';
import { loadingScreenHook } from '../../../../hooks/loadingWait';
import { LoadingScreen } from '../../../../ui/components/LoadingScreen';
import { ContenedorBrochure } from './ContenedorBrochure';

export const Brochure = () => {
  const { isLoading } = loadingScreenHook();

  return ((isLoading) 
  ? <LoadingScreen/> 
  :  <HayatAppLayout disablePanel={true} >
      <Grid container 
          direction='row' 
          justifyContent='space-between' 
          alignItems='center' 
          className='animate__animated animate__fadeIn animate__faster'
      >
          <ContenedorBrochure />
      </Grid>
    </HayatAppLayout>
  )
}
