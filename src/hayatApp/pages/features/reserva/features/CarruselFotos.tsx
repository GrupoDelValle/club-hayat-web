import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Definir el tipo para los elementos de las imágenes
interface Image {
  original: string;
  thumbnail: string;
}

interface CarruselFotosProps {
  images: Image[];
}

export const CarruselFotos: React.FC<CarruselFotosProps> = ({ images }) => {
  return (
    <ImageGallery items={images}/>
  );
};
