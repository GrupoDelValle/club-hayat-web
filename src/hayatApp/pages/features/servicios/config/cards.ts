import ImagenYoga from '../../../../../assets/yoga.webp'
import ImagenGastronomia from '../../../../../assets/gastronomia.webp'
import ImagenSportWater from '../../../../../assets/caminata-marina.webp'
import ImagenExtremeHayat from '../../../../../assets/extreme-hayat.webp'
import ImagenBar from '../../../../../assets/bar.webp'
import ImagenShowEspeciales from '../../../../../assets/show-especiales-card.webp'
import ImagenParque from '../../../../../assets/parque-acuatico.webp'
import ImagenHoteles from '../../../../../assets/hoteles.webp'
import ImagenSpa from '../../../../../assets/zona-spa.webp'
import ImagenOficina from '../../../../../assets/oficina.webp'

export interface ExperienciasCardType{
    id: string;
    image: string;
    title: string;
    content: string;
    height: string;
    position:string;
}


export const cards: ExperienciasCardType[] = [
    {//comida
        id: '01',
        title: 'Gastronomía',
        content: 'Experiencias culinarias frente al mar con fusión de sabores nacionales e internacionales.', 
        image: ImagenGastronomia,
        height: '170px',
        position: 'center'
    },
    {//bar
        id: '02',
        title: 'Discoteca',
        content: 'Cuando cae la noche, podrás disfrutar de una de las discotecas más seductoras, creado para vivir experiencias únicas en primera línea de mar.',
        image: ImagenBar,
        height: '170px',
        position: 'center'
    },
    {//Show de especiales
        id: '03',
        image: ImagenShowEspeciales,
        title:'Eventos y conciertos',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados y exclusivos para nuestros miembros.',
        height: '170px',
        position: 'center'
    },
    {//Parque acuatico
        id: '04',
        image: ImagenParque,
        title:'Water Park',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos, ideal para la diversión de toda la familia frente al mar.',
        height: '170px',
        position: 'center'
    },
    {//Hotel
        id: '05',
        image: ImagenHoteles,
        title:'Zona Hotelera',
        content: 'Disfruta de una estadía lujosa en nuestro hotel con más de 800 habitaciones y suits.',
        height: '170px',
        position: 'left'
    },
    {//Spa y gym
        id: '06',
        image: ImagenSpa,
        title:' Gym y Spa',
        content: 'Relájate en nuestro spa, y mantén tu rutina de ejercicio en un gimnasio moderno.',
        height: '170px',
        position: 'center'
    },
    {//Sala de reunion
        id: '06',
        image: ImagenOficina,
        title:'Salas de Reunión',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas.',
        height: '170px',
        position: 'center'
    },
    {//Relajacion
        id: '07',
        image: ImagenYoga,
        title:'Relajación',
        content: 'Conecta todos tus sentidos con la naturaleza y maravíllate con la espectacular vista al mar.',
        height: '170px',
        position: 'left'
    },
    {//Sport Water
        id: '08',
        image: ImagenSportWater,
        title:'Sport Water',
        content: 'Diviértete con actividades en el mar y en una plataforma flotante de mas de 2,000 m2.',
        //Sumergéte desde nuestro muelle flotante con una plataforma de más de 2,000 m2.
        height: '170px',
        position: 'center'
    },
    {//Extreme Hayat
        id: '09',
        image: ImagenExtremeHayat,
        title:'Extreme Hayat',
        content: 'Vive juegos extremos, divertidos y emocionantes para niños.',
        height: '170px',
        position: 'center'
    },
]