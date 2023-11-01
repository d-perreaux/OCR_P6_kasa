import './style.scss'

function Banner({img, text}) {
    return(
        <div className='banner'>
            <img src={img} className='banner__img' alt='banière'></img>
            {text &&
            <div className='banner__text'>
                <p>coucou</p>
            </div>}

        </div>
    )
}

export default Banner