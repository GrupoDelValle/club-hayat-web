import { Box } from '@mui/material';
import { Nosotros1 } from './features/1-Nosotros';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';

export const NosotrosPage = () => {
// const { theme } = useSelector( (state: RootState) => state.theme );
  const { isLoading } = loadingScreenHook();
  return ((isLoading) 
  ? <LoadingScreen/> 
  : <Box 
    flexDirection='column'
    justifyContent='top' 
    alignItems='center' 
    className='animate__animated animate__fadeIn animate__faster'
    >
      <Nosotros1 />
    </Box>
  )
}
