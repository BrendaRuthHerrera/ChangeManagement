import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Portal from '../components/Portal';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar/>
            <body>
                <div className='Título'>
                <h1>Change Management</h1>
                </div>
                <Portal/>
            </body>
            <Footer/>
        </main>
    )
}