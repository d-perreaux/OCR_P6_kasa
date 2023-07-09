import logo_white from '../../assets/logo_white.svg'
import './style.scss'

function Footer() {
    return (
        <footer className="footer">
            <img src={logo_white} className="footer__logo" alt="kasa logo"></img>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer