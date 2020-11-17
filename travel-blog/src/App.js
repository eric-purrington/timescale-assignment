import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import Navbar from "./components/Navbar";
import HeroBackground from "./components/HeroBackground";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroBackground img={heroBackground} />
      <BlogPost img={headshot} />
      <Footer />
    </div>
  );
}

export default App;
