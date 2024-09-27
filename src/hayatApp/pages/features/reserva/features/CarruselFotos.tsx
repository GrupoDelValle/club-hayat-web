
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Depa1 from "../assets/depa1.jpg";
import Depa2 from "../assets/depa2.jpg";
import Depa3 from "../assets/depa3.jpg";
import Depa4 from "../assets/depa4.jpg";
import Depa5 from "../assets/depa5.jpg";


export const CarruselFotos = () => {

    const images = [
        {
          original: Depa1,
          thumbnail: Depa1,
        },
        {
          original: Depa2,
          thumbnail: Depa2,
        },
        {
          original: Depa3,
          thumbnail: Depa3,
        },
        {
          original: Depa4,
          thumbnail: Depa4,
        },
        {
          original: Depa5,
          thumbnail: Depa5,
        },
    ];

    return (
        <ImageGallery items={images}/>
    )
}