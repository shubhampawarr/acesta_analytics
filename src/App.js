import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './fixed/Header';
import Home from "./component/Home"
import Services from "./component/Services"
import About from './component/About';
import ContactUs from './component/ContactUs'
import PageNotFound from './fixed/PageNotFound';
import Footer from './fixed/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/services' element={<Services />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/contact' element={<ContactUs />}  />
          <Route path='*' element={<PageNotFound />}  />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
