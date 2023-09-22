import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NavFooter from './NavFooter';
import Login from './Login';
import Signup from './Signup';
function App() {
  return (

    <Routes>
      <Route path='/' element={<NavFooter />} >
     <Route index element={<HomePage />} />
     <Route path='/about' element={<AboutPage />} />
     <Route path='/contact' element={<ContactPage />} />
     <Route path='/login' element={<Login />} />
     <Route path='/signup' element={<Signup />} />
      </Route>
      

    </Routes>
  );
}

export default App;
