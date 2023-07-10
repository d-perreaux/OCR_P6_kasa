import './style.scss'

function Tag({name}) {
    return(
        <li className='accomodation__tagList__tag'>
            <span className='accomodation__tagList__tag__name'>{name}</span>
        </li>
    )
}

export default Tag