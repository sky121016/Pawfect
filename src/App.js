import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Record from './components/Record';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <Services/>
      <Record/>
      <Shop/>
    </div>
  );
}

export default App;
