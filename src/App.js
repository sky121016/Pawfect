import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Shopping from './components/Shopping';
import Trainer from './components/Trainer';
import Communitypage from './components/Communitypage';
import Mypage from './components/Mypage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shopping' element={<Shopping/>}/>
          <Route path='/trainer' element={<Trainer/>}/>
          <Route path='/communitypage' element={<Communitypage/>}/>
          <Route path='/mypage' element={<Mypage/>}/>

        </Routes>
      </BrowserRouter>
  
      <Footer/>
    </div>
  );
}

export default App;
