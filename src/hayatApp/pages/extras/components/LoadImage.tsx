import React, { ImgHTMLAttributes, useEffect, useState } from "react";
import './loadimage.css';

interface LoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    placeholderSrc: string;
    src: string;
  }

export const LoadImage: React.FC<LoadImageProps> = ({ placeholderSrc, src, ...props }) => {

    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
    }, [src]);

    return <img
      {...{ src: placeholderSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />;
}