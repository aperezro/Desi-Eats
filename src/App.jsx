import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';  
import Footer from './components/footer';  
import Home from './pages/Home';
import Customize from './pages/Customize';
import Menu from './pages/Menu';
import About from './pages/About';
import Connect from './pages/Connect';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
