import { useEffect, useState } from "react";
import { bg_images } from "../../config/bg_options";
import { AnimatedTypography } from "../../pages/features/shared/AnimatedTypography";

interface TextImageProps{
    text: string;
    backgroundPosition: string;
    fontSize?: string;
}



export const TextImage: React.FC<TextImageProps> = ({ fontSize = 'clamp(10px, 1vw, 15px)' , text, backgroundPosition}) => {

    const [index, setIndex] = useState(-1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 10000); 
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % bg_images.length);
        }, 5500);
        
        return () => clearInterval(interval);
    }, []);
    return (
        <AnimatedTypography
            variant="h3"
            sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: fontSize,
                backgroundSize: 'auto',
                backgroundClip: 'text',
                backgroundImage:  (count === 0) ? `url(${bg_images[0]})` : `url(${bg_images[index]})`,
                color: 'rgba(255, 255, 255, 0.5)',
                WebkitBackgroundClip: 'text',
                MozTextFillColor: 'transparent',
                WebkitTextFillColor: 'transparent',
                backgroundPosition: backgroundPosition,
            }}
        >
            {text}
        </AnimatedTypography>
    );
}