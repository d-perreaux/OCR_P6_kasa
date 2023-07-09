import { Link } from "react-router-dom";
import './style.scss'

function ErrorComponent( { title, message}) {
    return (
        <section className='error'>
            <h1 className='error__title'>{title}</h1>
            <p className='error__message'>{message}</p>
            <Link className='error__redirect' to='/'>
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}

export default ErrorComponent