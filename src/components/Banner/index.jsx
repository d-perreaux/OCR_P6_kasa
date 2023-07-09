import './style.scss'

function Banner({img, text}) {
    return(
        <div className='banner'>
            <img src={img} className='banner__img' alt='banière'></img>
            {text &&
            <div className='banner__text'>
                <p>Chez vous, partout et ailleurs</p>
            </div>}

        </div>
    )
}

export default Banner