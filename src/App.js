import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Team from './components/Team';
import About from './components/About';
import Service from './components/Service';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
