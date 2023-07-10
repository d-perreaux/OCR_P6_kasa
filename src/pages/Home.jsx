import Banner from "../components/Banner"
import img from '../assets/banner_home.jpg'
import Gallery from '../components/Gallery'
import adverts from '../backToFront/adverts.json'



function Home() {

    return (
        <>
            <Banner img={img} text />
            <Gallery data={adverts} />
        </>
        ) 
    }

export default Home