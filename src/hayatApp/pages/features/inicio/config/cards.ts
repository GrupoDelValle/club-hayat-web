import ImagenParques from '../../../../../assets/parques.webp'
import ImagenAlamendas from '../../../../../assets/alamedas.webp'
import ImagenBallenas from '../../../../../assets/ballenas.webp'
import ImagenCanchasTennis from '../../../../../assets/cancha-de-tennis.webp'
import ImagenTortugas from '../../../../../assets/tortuga.webp'

export interface CardType{
    image: string;
    title: string;
    content: string;
    position:string;
    smallPosition: string;
}

export const cards: CardType[] = [
    {//Parques
        image: ImagenParques,
        title: 'Parques',
        content: 'Disfruta caminando y jugando en nuestros parques.', 
        position: 'center',
        smallPosition: 'center'
    },
    {//Alamedas
        image: ImagenAlamendas,
        title:'Alamedas',
        content: 'Creadas para vivir experiencias únicas en primera línea de mar.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Avistamiento de Ballenas
        image: ImagenBallenas,
        title:'Avistamiento de Ballenas',
        content: 'Creadas para vivir experiencias únicas en primera línea de mar.',
        position: 'center',
        smallPosition: 'center'
    },
    
    {//Cancha de Tennis
        image: ImagenCanchasTennis,
        title:'Cancha de Tennis',
        content: 'Qué mejor que poder ejercitarte y disfrutar del deporte en nuestras canchas de tennis.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Nadar con tortugas
        image: ImagenTortugas,
        title:'Nadar con Tortugas',
        content: 'Disfruta de la experiencia de nadar con tortugas.',
        position: 'center',
        smallPosition: 'center'
    },
]