import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Record from './components/Record';
import Shop from './components/Shop';
import Training from './components/Training';
import Community from './components/Community';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Record/>
      <Shop/>
      <Training/>
      <Community/>
    </div>
  );
}

export default App;
