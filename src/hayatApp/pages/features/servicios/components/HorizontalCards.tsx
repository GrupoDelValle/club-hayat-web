import React from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography } from "@mui/material";

import './css/cardsExpHori.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ExperienciasCardType, cards } from "../config/cards";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { widthScreen } from "../../../../hooks/widthScreen";


function SamplePrevArrow(props: any){
  const { style, onClick } = props;
  return (
    <IconButton disableRipple className="arrow" sx={{ left:'-25px', display: 'flex', justifyContent:'center' ,top:'15%'}} onClick={onClick} style={{ ...style, position:'absolute', zIndex:1, display: "flex", background: "transparent" }}>
      <ArrowLeftIcon size="100px" color="#E4E4E4"/>
    </IconButton>
  );
}

function SampleNextArrow(props: any) {

  const { style, onClick } = props;
  return (
    <IconButton disableRipple className="arrow" sx={{ display: 'flex', justifyContent:'center', right:'-25px' ,top:'15%'}} onClick={onClick} style={{ ...style, position:'absolute', zIndex:1, display: "flex", background: "transparent" }}>
      <ArrowRightIcon size='100px' color='#E4E4E4'/>
    </IconButton>
  );
}

interface CardOneProps {
  img: string;
  title: string;
  content: string;
  onClick: ()=>void
  height: string;
  position: string;
}

const CardOne:React.FC<CardOneProps> = ({position, height = '170px', img, title, content}) => {

  const {width} = widthScreen();

  return (
    <div style={{ padding: (width < 550) ? '0'  : '0 15px', height:`${height}`}} className="card">
      <Box className="hover-box" sx={{position:'relative'}} padding={{
        xs: '0 45% 0 5%',
        sm: '0 45% 0 4%',
        md: '0 45% 0 4%',
        lg: '0 45% 0 4%',
        xl: '0 45% 0 4%',
        }} borderRadius=' 0 100px 100px 0' width={(width < 550) ? '100%' : '95%'} height='96%' bgcolor='#F8F8F8'
        //boxShadow='5px 5px 10px rgba(38, 38, 38, 0.7)'
      >
        
        <Typography fontWeight='bold' padding={'5% 0 0 0'} textAlign='left' fontFamily={'Montserrat'} sx={{ fontSize: {
        xs: '16px',
        sm: '17px',
        md: '17px',
        lg: '17px',
        xl: '17px'
        } }}> {title}</Typography>
        <Box border={1.5} color='#DCA65E' margin={'0 0 5% 0'}/>
        <Typography textAlign='left' sx={{ mb: '15px', fontSize: {
          xs: '13.5px',
          sm: '10px',
          md: '10px',
          lg: '11px',
          xl: '12px'
          }}}> {content}
        </Typography>
        <Box loading="lazy" sx={{display:'flex', objectPosition:{position}, borderRadius: '0 60px 60px 0', ml:'52%', objectFit: 'cover', top: (width< 550) ? '40px' : '20px', position: "absolute",zIndex:1 }} component='img' width={'38%'}  height={(width < 550) ? '85%' : '80%'} overflow='auto' src={img}></Box>
    </Box>
    </div>
  );
}

export const HorizontalCards: React.FC = () => {

  const {width} = widthScreen();

  const settings = {
    arrows: true,
    speed: 500,
    infinite: true,
    centerMode: true,
    autoplay:true,
    autoplaySpeed: 5000,
    centerPadding: (width < 1300 ) ? '20%' : "30%",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow/>
  };

  return (
    <Box>
    <div style={{width: '100%'}}  className="slider-cards">
      <Slider {...settings}>
        {cards.map((card: ExperienciasCardType, index) =>{
          return (
          <CardOne
            key={index}
            content={card.content}
            title={card.title}
            img={card.image}
            height={card.height}
            position={card.position}
            onClick={()=>{}}
          />)
        })}
      </Slider>
    </div>
    </Box>
  );
};