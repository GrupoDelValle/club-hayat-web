import LoadingGif from '../../../assets/hayat-espera.gif';
import '../css/loadingScreen.css';

export const LoadingScreen = () => {
  
    return (
      <div className="LoadingScreen">
        <img src={LoadingGif} alt="Loading GIF" className="LoadingGif" />
      </div>
    );
  };