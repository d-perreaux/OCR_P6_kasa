import './style.scss'
import arrow from '../../assets/slider-arrow.svg'

import { useState } from 'react'

function Carousel({images}) {
    let [currentImg, setCurrentImg] = useState(0);
    let totalImg = images.length;

    const previousImg = () => {
        const newImgIndex = currentImg === 0 ? totalImg - 1 : currentImg - 1;
        setCurrentImg(newImgIndex);
    };  

    const nextImg = () => {
        const newImgIndex = currentImg === totalImg - 1 ? 0 : currentImg + 1;
        setCurrentImg(newImgIndex);
      };



    return(
        <div className="carousel">
            {
                totalImg > 1 && <img className="carousel__arrow arrow-left" src={arrow} alt="Contenu précedént" onClick={previousImg}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === currentImg ? 'carousel__img actif' : 'carousel__img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                totalImg > 1 && <img className="carousel__arrow arrow-right" src={arrow} alt="Contenu suivant" onClick={nextImg}/>
            }
        </div>
    );
}

export default Carousel;