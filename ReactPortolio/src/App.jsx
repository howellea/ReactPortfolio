// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
    return (
        <>
        <Nav />
        <main>
            <Outlet /> {/* This is where the routed pages will show */}
        </main>
        <Footer />
        </>
    );
    }

export default App;
