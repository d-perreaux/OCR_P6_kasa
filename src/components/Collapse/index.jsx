import chevron from '../../assets/chevron.svg'
import './style.scss'
import { useState } from 'react'



function Collapse({ title, content }) {
    const [isOpen, SetisOpenRotation] = useState(false);

    const handleClick = () =>
        SetisOpenRotation((currentValue) => !currentValue)

    return (
        <>  
        <div className='collapse'>
            <div className='collapse__wrapper'>
                <p className='collapse__wrapper__title'>{title}</p>
                <button className={`collapse__wrapper__button ${isOpen? '--open' : ''}`} onClick={handleClick} >
                    <img className='collapse__wrapper__button__chevron' src={chevron} alt='cliquer pour deployer le texte'></img>
                </button>
            </div>
            <div className={`collapse__collapsible ${isOpen? '--open' : ''}`}>
                <p className={`collapse__content ${isOpen? '--open' : ''}`}>{content}</p>
            </div>
        </div>
        </>
    )
}

export default Collapse