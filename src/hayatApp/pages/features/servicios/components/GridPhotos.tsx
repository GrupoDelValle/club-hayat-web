import { expCards } from '../config/expCards';
import './css/gridPhotos.css';

export const GridPhotos = () => {
    return (
        <section className="grid-container">
            {expCards.map((expCard, index) => (
                <div key={index} className="cardExp">
                    <div className="card__img">
                        <img
                            style={{ objectPosition: expCard.position }}
                            className="imgCover"
                            src={expCard.image}
                            alt={`Experiencia n. ${index} de Hayat `}
                        />
                        <div className="card__overlay">
                            <h2>{expCard.title}</h2>
                            <p>Hayat Club Punta Sal</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
