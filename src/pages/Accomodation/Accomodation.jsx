import { useParams, useNavigate  } from 'react-router-dom'
import adverts from '../../backToFront/adverts.json'
import { useEffect, useState } from 'react'

import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Carousel from '../../components/Carousel';

import './style.scss'
import Collapse from '../../components/Collapse';


function Accomodation() {
    const [currentAdvertId, setCurrentAdvertId] = useState(null);
    const [currentAdvert, setCurrentAdvert] = useState(null);
    const [isIdCorrect, setIsIdCorrect] = useState(null);

    const urlId = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentAdvertId(urlId.advertId);
    }, [])

    useEffect(() => {
        const foundAdvert = (adverts.find(advert => advert.id === currentAdvertId));
        if(currentAdvertId != null){
            if (foundAdvert) {
                setIsIdCorrect(true);
                setCurrentAdvert(foundAdvert);
            } else {
                navigate('/error');
            }
        }
    }, [currentAdvertId])

    return (
        <div className='accomodation'>
            {isIdCorrect && (
                <>
                    <div className='first-accomodation-wrapper'>
                        <Carousel images={currentAdvert.pictures} />
                        <div className='second-accomodation-wrapper'>
                            <div className='accomodation__informations'>
                                <p className='accomodation__informations__title'>{currentAdvert.title}</p>
                                <p className='accomodation__informations__location'>{currentAdvert.location}</p>
                                <ul className='accomodation__informations__tagList'>
                                    {currentAdvert.tags.map((tag, index) =>
                                        <Tag key={`${index}-${tag}`} name={tag} />
                                    )}
                                </ul>
                            </div>
                            <div className='accomodation__host'>
                                <div className="accomodation__host__information">
                                    <div className="accomodation__host__information__name">
                                        {currentAdvert.host.name.split(' ')[0]}
                                        <br />
                                        {currentAdvert.host.name.split(' ')[1]}
                                    </div>
                                    <div className="accomodation__host__information__picture">
                                        <img className='accomodation__host__information__picture__img ' src={currentAdvert.host.picture} alt='hôte'></img>
                                    </div>
                                </div>
                                <ul className='accomodation__host__rate'>
                                    <Rate rate={currentAdvert.rating} />
                                </ul>
                            </div>
                        </div>
                        <div className='third-accomodation-wrapper'>
                                <Collapse title='Description' content={currentAdvert.description} />
                                <Collapse title='Équipements' content={currentAdvert.equipments.map((current, index) => <span key={`${index}-${current}`}>{current}</span>)} />
                        </div>
                    </div>
                </>)}

        </div>
    )
}

export default Accomodation