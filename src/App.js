import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Pages/Home';
import WallStreetJournal from './components/Pages/WallStreetJournal';
import Business from './components/Pages/Business';
import TechCrunch from './components/Pages/TechCrunch';
import { Route, Routes, Outlet } from 'react-router-dom';
import Profile from './components/UserProfile/Profile';



function App() {

  return (
    <>
      <Navbar />
      
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/TechCrunch' element={<TechCrunch />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/WallStreetJournal' element={<WallStreetJournal />} />
        </Routes>
      </div>

      {/* This is the outlet for all your routes!*/}
      <div className='outlet-window'> 
        <Outlet />
      </div>
      
    </>
  );
}

export default App;
