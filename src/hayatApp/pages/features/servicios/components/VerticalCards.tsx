import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';

import './css/cardsExpVert.css';
import { ArrowUpIcon } from './ArrowUpIcon';
import { ArrowDownIcon } from './ArrowDownIcon';

import { cards } from "../config/cards";
import { widthScreen } from '../../../../hooks/widthScreen';


interface CardOneProps {
  index:string;
  img: string;
  title: string;
  content: string;
  onClick: ()=>void
  height: string;
}
const CardOne:React.FC<CardOneProps> = ({height = '170px', index, img, title, content}) => {

  const {width} = widthScreen();

  return (
    <div style={{ padding: (width < 550) ? '0'  : '0 15px', height:`${height}`}} className="card">
      <Box sx={{position:'relative'}} padding={{
        xs: '0 45% 0 5%',
        sm: '0 45% 0 4%',
        md: '0 45% 0 4%',
        lg: '0 45% 0 4%',
        xl: '0 45% 0 4%',
        }} borderRadius=' 0 100px 100px 0' width={'100%'} height='96%' bgcolor='#F8F8F8'
        boxShadow='5px 5px 10px rgba(38, 38, 38, 0.7)'
      >
        
        <Typography fontWeight='bold' padding={'5% 0 0 0'} textAlign='left' fontFamily={'Montserrat'} sx={{ fontSize: {
        xs: '16px',
        sm: '17px',
        md: '17px',
        lg: '17px',
        xl: '17px'
        } }}> {title}</Typography>
        <Typography fontWeight='bold' padding={'0 0 0 0'} textAlign='left' fontFamily={'Montserrat'} sx={{ fontSize: {
          xs: '16px',
          sm: '17px',
          md: '17px',
          lg: '17px',
          xl: '17px'
          } }}> {index}</Typography>
        <Box border={1.5} color='#DCA65E' margin={'0 0 5% 0'}/>
        <Typography textAlign='left' sx={{ mb: '15px', fontSize: {
          xs: '10px',
          sm: '10px',
          md: '10px',
          lg: '11px',
          xl: '12px'
          }}}> {content}
        </Typography>
        <Box sx={{ borderRadius: '0 60px 60px 0', ml:'52%', objectFit: 'cover', top: (width< 550) ? '16px' : '20px', position: "absolute",zIndex:1 }} component='img' width={'38%'}  height={(width < 550) ? '85%' : '80%'} overflow='auto' src={img} display='block' ></Box>
    </Box>
    </div>
  );
}

export const VerticalCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box className="vert-slider-container" p='0 13px 0 0'>
      <IconButton disableRipple className='arrow' onClick={handlePrev} sx={{ zIndex:1, width:'60px', height:'60px', position: 'absolute', top:0, left: 0}}>
        <ArrowUpIcon size='60px' color='#E4E4E4'/>
      </IconButton>
      <Box className="vert-slider-content">
        {cards.map((card, index) => (
          <Box
            m='0 0 0 50px'
            // bgcolor={(index % 2 === 0) ? 'greenyellow' : 'red'}
            key={index}
            className={`vert-slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateY(${-currentIndex * 100}%)` }}
          >
            <CardOne
              key={index}
              index={card.id}
              content={card.content}
              title={card.title}
              img={card.image}
              height={card.height}
              onClick={()=>{}}
            />
          </Box>
        ))}
      </Box>
      <IconButton className="arrow" sx={{ width:'60px', height:'60px', position: 'absolute', bottom:0, left: 0 }} onClick={handleNext}>
        <ArrowDownIcon size='60px' color='#E4E4E4'/>
      </IconButton>
      <Box className="dots-container">
        {cards.map((_, index) => (
          <Box
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};