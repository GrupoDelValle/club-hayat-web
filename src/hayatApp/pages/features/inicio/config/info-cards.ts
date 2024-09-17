
import { BienestarSVG } from '../components/icons/BienestarSVG';
import { FamilySVG } from '../components/icons/FamilySVG';
import { GatronomySVG } from '../components/icons/GastronomySVG';
import { LujoSVG } from '../components/icons/LujoSVG';
import { PlayaSVG } from '../components/icons/PlayaSVG';

export interface InfoCardType{
    icon: React.ElementType
    title: string;
    description: string;
}

export const infoCards:InfoCardType[] = [
    {
        icon: PlayaSVG,
        title: 'Ubicación Privilegiada',
        description: 'Hotel en primera línea de playa, con magníficas vistas al Oceano Pacifico en Punta Sal.'
    },{
        icon: GatronomySVG,
        title: 'Gastronomía',
        description: 'Propuesta culinaria basada en la cocina internacional y local.'
    },{
        icon: FamilySVG,
        title: 'BlackLevel',
        description: 'Atención personalizada y espacios exclusivos sólo para adultos o familias.'
    },{
        icon: BienestarSVG,
        title: 'Spa by Hayat',
        description: 'Energía positiva para su armonía y bienestar'
    },{
        icon: LujoSVG,
        title: 'Eventos y conciertos',
        description: 'Modernidad, musica y luz para celebraciones y eventos '
    }
];