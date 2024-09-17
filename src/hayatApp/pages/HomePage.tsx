import { HayatAppLayout } from '../layout/HayatAppLayout';
import { RootState, useAppDispatch } from '../../store';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { InicioPage } from './features/inicio/InicioPage';
import { ContactoPage } from './features/contacto/ContactoPage';
import { NosotrosPage } from './features/nosotros/NosotrosPage';
import { ServiciosPage } from './features/servicios/ServiciosPage';
// import { ReservaPage } from './features/reserva/ReservaPage';
import { changeIndex } from '../../store/navbar/navBatSlice';


interface HomePagePros{
    index?: number;
}

export const HomePage: React.FC<HomePagePros> = ({index}) => {
    
    const dispatch = useAppDispatch();

    const [currentComponent, setCurrentComponent] = useState<JSX.Element>(<InicioPage />);

    let indexNav= useSelector((state: RootState) => state.nabBar.index);
    
    if(index){
        dispatch( changeIndex(index) )
    }


    useEffect(() => {
        if (indexNav === 0) {
          setCurrentComponent(<InicioPage />);
        } else if (indexNav === 1) {
          setCurrentComponent(<ContactoPage />);
        } else if (indexNav === 2){
          setCurrentComponent(<NosotrosPage/>);
        } else if (indexNav === 3){
            setCurrentComponent(<NosotrosPage/>);
        } else if (indexNav === 4){
            setCurrentComponent(<ServiciosPage/>);
        }
        // } else if (indexNav === 5){
        //     setCurrentComponent(<ReservaPage/>);
        // }
      }, [indexNav]);

    return (
        <HayatAppLayout>
            {currentComponent}
        </HayatAppLayout>
    )
}
