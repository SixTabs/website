import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Team from './components/Team';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
