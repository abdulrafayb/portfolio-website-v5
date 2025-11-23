import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './sections/About';
import Marquee from './sections/Marquee';
import Services from './sections/Services';
import Work from './sections/Work';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Marquee />
    </>
  );
}

export default App;
