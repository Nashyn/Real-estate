import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage'; // Assuming Homepage component is in the same directory
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}