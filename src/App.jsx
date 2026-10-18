import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Teledrama from './components/Teledrama.jsx';
import RedSoil from './components/RedSoil.jsx';
import LiveShows from './components/LiveShows.jsx';
import Watch from './components/Watch.jsx';
import CeoMessage from './components/CeoMessage.jsx';
import GivingBack from './components/GivingBack.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Teledrama />
        <RedSoil />
        <LiveShows />
        <Watch />
        <CeoMessage />
        <GivingBack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
