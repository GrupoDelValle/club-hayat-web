import ImagenZonaParque from '../../../../../assets/zona-parque-acuatico.webp'
import ImagenZonaGeneral from '../../../../../assets/zona-general-hayat.webp'
import ImagenZonaDescanso from '../../../../../assets/zona-descanso.webp'
import ImagenZonaSpa from '../../../../../assets/zona-spa.webp'
import ImagenZonaConciertos from '../../../../../assets/zona-conciertos.webp'
import ImagenHoteles from '../../../../../assets/hoteles.webp'

export interface ExperienciasCardType{
    rate: string;
    image: string;
    title: string;
    position: string;
}


export let expCards: ExperienciasCardType[] = [
    {
        title: 'Zona de juegos acuáticos',
        image: ImagenZonaParque,
        rate: '4.5',
        position: 'center'
    },
    {
        title: 'Vista general Hayat',
        image: ImagenZonaGeneral,
        rate: '4.5',
        position: 'center'
    },
    {
        title: 'Restaurant y zona de descanso frente al mar',
        image: ImagenZonaDescanso,
        rate: '4.7',
        position: 'center'
    },
    {
        title: 'Zona de spa y gymnasio',
        image: ImagenZonaSpa,
        rate: '4.3',
        position: 'left'
    },
    {
        title: 'Zona de eventos',
        image: ImagenZonaConciertos,
        rate: '5',
        position: 'center'
    },
    {   
        title: 'Zona Residencial',
        image: ImagenHoteles,
        rate: '5',
        position: 'center'
    }
]