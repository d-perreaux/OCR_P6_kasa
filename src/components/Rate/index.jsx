import './style.scss'
import activeStar from '../../assets/star-active.svg'
import inactiveStar from '../../assets/star-inactive.svg'


function Rate({ rate }) {
    console.log(rate);
    const maxStars = 5;
    const fullStarAmount = parseInt(rate);
  
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= fullStarAmount) {
        stars.push(<li className='accomodation__rate__item'><img key={i} src={activeStar} className='star__full' alt='étoile pleine' /></li>);
      } else {
        stars.push(<li className='accomodation__rate__item'><img key={i} src={inactiveStar} className='star__empty' alt='étoile vide' /></li>);
      }
    }
  
    return <>{stars}</>;
  }
  
  export default Rate;