import { animated, useTransition } from "@react-spring/web";
import { RefObject, useEffect, useState } from "react";
import background from './css/background.module.css';

interface BackgroundSliderProps{
    images: string[];
    interval: number;
    contentRef: RefObject<HTMLDivElement>;
}
export const BackgroundSlider:React.FC<BackgroundSliderProps> = ({contentRef, images, interval}) => {
    const [actualHeight, setActualHeight] = useState<any>(0);
    const [showInitial, setShowInitial] = useState(true);
    const [index, set] = useState(0);

    const height = window.screen.height + 200;

    useEffect(() => {
      if(contentRef){
        setActualHeight(contentRef.current?.scrollHeight)
      }
      const timer = setTimeout(() => {
        setShowInitial(false);
      }, interval+4990);
      return () => clearTimeout(timer);
    }, [interval]);
    
    const transitions = useTransition(index, {
      key:    index,
      from:   { opacity: 0 },
      enter:  { opacity: 1 },
      leave:  { opacity: 0 },
      delay:  5000,
      config: { duration: interval },
      onRest: (_a, _b, item) => {
          if (index === item) {
              set(state => (state + 1) % images.length)
          }
      },
      exitBeforeEnter: false,
    })
  return (
    <div className="flex fill center" style={{backgroundSize: 'cover',position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
      {showInitial ? (
        <div
          className={background.bg}
          style={{
            zIndex: -1,
            height: (actualHeight>2000) 
              ? height
              : `${actualHeight}px` ,
            width: '100%',
            backgroundImage: `url(${images[0]})`,
          }}
        />
      ) : (
        transitions((style, i) => (
          <animated.div
            className={background.bg}
            style={{
              ...style,
              width: '100%',
              height: (actualHeight>2000) 
                ? height 
                : `${actualHeight}px` ,
              zIndex: -1,
              backgroundSize: 'cover',
              backgroundImage: `url(${images[i]})`,
            }}
          />
        ))
      )}
    </div>
  );
}