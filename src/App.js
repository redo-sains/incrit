import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './component/Pages/home'
import Gallery from './component/Pages/gallery'
import Member from './component/Pages/member'
import ContactUs from './component/Pages/contact us'
import AboutUs from './component/Pages/about us'
import Navbar from './component/Utility/navbar';
import NotFound from './component/Pages/404';
import LogIn from './component/Pages/login';


function App() {
  return (
    <div className='w-full overflow-x-hidden'>      
    <Routes>
      <Route path="/" element={<Navbar/>} >
        <Route path="home" element={<Home/>} />      
        <Route path="member" element={<Member/>} />      
        <Route path="contact-us" element={<ContactUs/>} />      
        <Route path="gallery" element={<Gallery/>} />      
        <Route path="about-us" element={<AboutUs/>} />      
        <Route path="*" element={<NotFound/>} />      
      </Route>
      <Route path="/login" element={<LogIn/>} />
    </Routes>
    </div>
  );
}

export default App;
