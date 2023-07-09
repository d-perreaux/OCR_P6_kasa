import './style.scss'
import Header from '../Header';
import Footer from '../Footer';

function BaseLayout({children}) {
    return (
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      );
}

export default BaseLayout