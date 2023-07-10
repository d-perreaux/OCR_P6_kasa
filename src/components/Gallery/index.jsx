import './style.scss'
import { Link } from 'react-router-dom'

function Gallery ( {data}) {
    return (
        <div className='gallery'>
            {data.map( (data, index) => (
                <div key={`${index}-${data.id}`} className='gallery__card'>
                    <Link to={`accomodation/${data.id}`} className='gallery__card__link'>
                        <img src={data.cover} alt='appartement' className='gallery__card__link__img'></img>
                        <p className='gallery__card__link__img__title'>
                            {data.title}
                        </p>
                    </Link>
                </div>
            )
            )}
        </div>
    )
}

export default Gallery