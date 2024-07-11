import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Common/Navbar';
import { Home } from './components/Home/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,  
      once: false,      
      easing: 'ease-out-back',  
    });
  }, []);
  return (
    <div className='container-box main-div'>
      
      <Home/>
    </div>
  );
}

export default App;
