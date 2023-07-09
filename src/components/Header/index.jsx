import main_logo from '../../assets/main_logo.svg'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Header() {
    return (
        <header>
            <img className="header__logo-kasa" src={main_logo} alt='Kasa logo'></img>
            <nav className="header__nav">
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header