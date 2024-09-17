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

export interface CardType{
    image: string;
    title: string;
    content: string;
    position:string;
    smallPosition: string;
}

export const cards: CardType[] = [
    {//Comida
        image: ImagenGastronomia,
        title: 'Gastronomía',
        content: 'Experiencias culinarias frente al mar con fusión de sabores nacionales e internacionales.', 
        position: 'center',
        smallPosition: 'center'
    },
    {//Bar
        image: ImagenBar,
        title:'Discoteca',
        content: 'Cuando cae la noche, podrás disfrutar de una de las discotecas más seductoras del norte peruano, creado para vivir experiencias únicas en primera línea de mar.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Show de especiales
        image: ImagenShowEspeciales,
        title:'Eventos y conciertos',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados que incluyen música en vivo, shows temáticos y entretenimiento exclusivo para nuestros miembros.',
        position: 'center',
        smallPosition: '65%'
    },
    {//Parque acuatico
        image: ImagenParque,
        title:'Water Park',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos, ideal para la diversión de toda la familia frente al mar.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Hotel
        image: ImagenHoteles,
        title:'Zona Hotelera',
        content: 'Disfruta de una estadía lujosa en nuestro hotel con más de 800 habitaciones con vistas panorámicas al mar, garantizando una experiencia única.',
        position: 'left',
        smallPosition: '40%'
    },
    {//Spa y gym
        image: ImagenSpa,
        title:'Spa y Gym',
        content: 'Relájate en nuestro spa con tratamientos holísticos y masajes rejuvenecedores, y mantén tu rutina de ejercicio en un gimnasio moderno con vistas al mar.',
        position: 'center',
        smallPosition: '60%'
    },
    {//Sala de reunion
        image: ImagenOficina,
        title:'Centro de convenciones',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas con vistas al océano.',
        position: 'center',
        smallPosition: '30%'
    },
    {//Relajacion
        image: ImagenYoga,
        title:'Relajación',
        content: 'Conecta todos tus sentidos con la naturaleza y maravíllate con la espectacular vista al mar.',
        position: '25%',
        smallPosition: '25%'
    },
    {//Sport Water
        image: ImagenSportWater,
        title:'Sport Water',
        content: 'Diviértete con actividades en el mar y en una plataforma flotante de mas de 2,000 m2.',
        position: 'left',
        smallPosition: '35%'
    },
    {//Extreme Hayat
        image: ImagenExtremeHayat,
        title:'Extreme Hayat',
        content: 'Vive juegos extremos, divertidos y emocionantes para niños.',
        position: 'center',
        smallPosition: '45%'
    },
]