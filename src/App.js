import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Shopping from './pages/Shopping';
import Trainer from './pages/Trainer';
import Communitypage from './pages/Communitypage';
import Mypage from './pages/Mypage'
import ProductDetail from './pages/ProductDetail';


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
          <Route path='/shopping/product/:title' element={<ProductDetail/>}/>



        </Routes>
      </BrowserRouter>
  
      <Footer/>
    </div>
  );
}

export default App;
