import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import img from '../assets/banner_about.jpg'

const aboutDatas = [
    { 
        title:'Fiabilité', 
        content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' 
    },
    { 
        title: 'Respect', 
        content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    { 
        title: 'Service', 
        content:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    { 
        title: 'Sécurité', 
        content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notes aussi bien à l\'hôte qu\'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés.  Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ]

function About() {
    return(
        <>
            <Banner img={img} />
            <div className='about'>
                {aboutDatas.map( (data, index) => 
                    <Collapse key={`${index}-${data.title}`} title={data.title} content={data.content} />
                )}
            </div>
        </>
    )
}

export default About