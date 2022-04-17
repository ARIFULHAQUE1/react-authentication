import './App.css';
import { Route, Routes, } from "react-router-dom";
import Home from './pages/Home/Home';
import Header  from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footrer'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
