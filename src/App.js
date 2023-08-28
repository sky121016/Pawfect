import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Record from './components/Record';
import Shop from './components/Shop';
import Training from './components/Training';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <Services/>
      <Record/>
      <Shop/>
      <Training/>
    </div>
  );
}

export default App;
