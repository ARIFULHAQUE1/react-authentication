import './App.css';
import { Route, Routes, } from "react-router-dom";

import Header  from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footrer'

import Hospital from './pages/Hospital/Hospital';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes> 
        <Route path='/' element={<Hospital></Hospital>}></Route>
        <Route  path='/hospital' element={<Hospital></Hospital>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='service' element={<Services></Services>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
