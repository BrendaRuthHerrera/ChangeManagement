import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Portal from '../components/Portal';

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
        </main>
    )
}