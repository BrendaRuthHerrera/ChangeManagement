import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </>
        </Router>
    );
}

export default App;