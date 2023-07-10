import { useParams } from 'react-router-dom'
import adverts from '../../backToFront/adverts.json'
import { useEffect, useState } from 'react'

import Tag from '../../components/Tag';

import './style.scss'


function Accomodation() {
    const [currentAdvertId, setCurrentAdvertId] = useState(null);
    const [currentAdvert, setCurrentAdvert] = useState(null);
    const [isIdCorrect, setIsIdCorrect] = useState(false);

    const urlId = useParams();

    useEffect(() => {
        setCurrentAdvertId(urlId.advertId)
    }, [] )

    useEffect(() => {
        if (currentAdvertId > 0) {

        }
        const foundAdvert = (adverts.find( advert => advert.id === currentAdvertId))
        if (foundAdvert) {
            setIsIdCorrect(true);
            setCurrentAdvert(foundAdvert);
        }
        
    }, [currentAdvertId])


    return(
        <div className='accomodation'>
            <h1>Accomodation</h1>
            { isIdCorrect && (<>
            <p>{currentAdvertId}</p>
            <ul className='accomodation__tagList'>
            {currentAdvert.tags.map( (tag, index) => 
                <Tag key={`${index}-${tag}`} name={tag} />
            )}
            </ul>
            </>)}
            
        </div>
    )
}

export default Accomodation