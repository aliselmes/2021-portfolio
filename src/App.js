import './App.css';
import Hero from './components/HeroComponent';
import About from './components/AboutComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
