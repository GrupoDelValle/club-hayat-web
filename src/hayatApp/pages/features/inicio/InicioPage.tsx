import { Box } from '@mui/material';

import { InitPage1 } from './features/1-InitPage';
import { CardsContacto3 } from './features/3-CardsContacto';
// import { RecorridoVirtual4 } from './features/4-RecorridoVirtual';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { changeIndex } from '../../../../store/navbar/navBatSlice';
import { CardsInfo2 } from './features/2-CardsInfo';
import { MapaHayat } from './features/4-Maps-hayat';
import { RecorridoVirtual4 } from './features/4-RecorridoVirtual';

export const InicioPage = () => {
  const { isLoading } = loadingScreenHook();
  const dispatch = useAppDispatch();
  const indexNav= useSelector((state: RootState) => state.nabBar.index);

  useEffect(()=>{
    if(indexNav !== 0)
      dispatch( changeIndex(0) )
  },[])
  
  return (isLoading) 
      ? <LoadingScreen/> 
      : <HayatAppLayout type='video' >
        <Box 
            flexDirection='column'
            justifyContent='top' 
            alignItems='center' 
            className='animate__animated animate__fadeIn animate__faster'
        >
            <InitPage1 />
            <CardsInfo2/>
            <CardsContacto3/>
            <RecorridoVirtual4/>
            <MapaHayat/>
        </Box>
        </HayatAppLayout>

}
