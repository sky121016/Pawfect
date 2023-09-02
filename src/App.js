import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Record from './components/Record';
import Shop from './components/Shop';
import Training from './components/Training';
import Community from './components/Community';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Record/>
      <Shop/>
      <Training/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
