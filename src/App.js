import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Team from './components/Team';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer copy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
