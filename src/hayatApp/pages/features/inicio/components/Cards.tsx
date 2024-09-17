import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import './css/cards.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomRoundedButton } from "../../../../ui/components/CustomRoundedButton";
import { CardType, cards } from "../config/cards";
import { widthScreen } from "../../../../hooks/widthScreen";
import { useNavigate } from "react-router-dom";

interface CardProps {
  img: string;
  title: string;
  content: string;
  position: string;
  smallPosition: string;
  onClick: ()=>void
}

const CardOne:React.FC<CardProps> = ({smallPosition, position, img, title, content, onClick}) => {

  const {width} = widthScreen();

  return (
    <div style={{ padding: (width < 550) ? ' 0 10px 0 10px'  : '0 15px'}} className="slide">
      <Box loading="lazy" sx={{ ml:'6%', objectPosition: width < 600 ? smallPosition : position, objectFit: 'cover', top: (width< 550) ? '40px' : '2%', position: "absolute", zIndex:1 }} component='img' width={'38%'} height={(width < 550) ? '80%' : '90%'} overflow='auto' src={img} display='flex' ></Box>
      <Box sx={{ display:'flex', flexDirection:'column', position:'relative'}} padding={{
            xs: '10px 3% 0 50%',
            sm: '0 3% 0 48%',
            md: '0 3% 0 48%',
            lg: '0 3% 0 48%',
            xl: '0 3% 0 48%',
        }} borderRadius='50px' width={(width < 550) ? '100%' : '92%'} height='75%' bgcolor='F8F8F8'
        boxShadow='5px 5px 10px rgba(38, 38, 38, 0.7)'
      >
        <Typography padding={'7% 4% 4% 0'} textAlign='left' fontFamily={'Montserrat'} sx={{ fontWeight: 500 ,fontSize: {
            xs: '16px',
            sm: '20px',
            md: '17px',
            lg: '18px',
            xl: '19px'
        } }}> {title}</Typography>
        <Typography textAlign='left' sx={{ mb: '15px', fontSize: (width < 400) 
        ? '11px' : {
            xs: '13px',
            sm: '14px',
            md: '14px',
            lg: '14px',
            xl: '14px'
        }}}> {content}
        </Typography>
        <CustomRoundedButton 
          width={width} 
          background="#007EB9" className="" onClick={onClick}> <Typography margin={{
            xs: '0 0px',
            sm: '0 10px',
            md: '0 10px',
            lg: '0 10px',
            xl: '0 40px'
          }} color='white' 
          
          fontSize={{
            xs: '12px',
            sm: '14px',
            md: '20px',
            lg: '20px',
            xl: '20px'}} 
          fontWeight={'bold'} >DESCUBRE</Typography>   </CustomRoundedButton>
    </Box>
    </div>
  );
}

export const CardsInfo: React.FC = () => {

  const {width} = widthScreen();
  const navigate = useNavigate();

  const settings = {
    arrows: false,
    speed: 500,
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: (width < 800) ? false : true,
    autoplaySpeed: 5000,
    centerPadding: (width < 950 ) ? '4%' : "5%",
    slidesToShow: (width < 1200) ? 1 : 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div style={{width: (width< 550) ? '100%' : '100%'}}  className="slider-container">
      <Slider {...settings}>
        {cards.map((card: CardType, index) =>{
          return (
          <CardOne
            key={index}
            content={card.content}
            title={card.title}
            img={card.image}
            position={card.position}
            smallPosition={card.smallPosition}
            onClick={()=>{navigate('/contacto#form-hayat')}}
          />)
        })}
      </Slider>
    </div>
  );
};