import Banner from "../components/Banner"
import img from '../assets/banner_home.jpg'
import Gallery from '../components/Gallery'

function Home() {
   return (
    <>
        <Banner img={img} text />
        <Gallery />
    </>
    ) 
   }
        

export default Home