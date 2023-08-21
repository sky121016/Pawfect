import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Record from './components/Record';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <Services/>
      <Record/>
    </div>
  );
}

export default App;
