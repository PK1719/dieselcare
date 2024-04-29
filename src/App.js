import React from 'react';
import './App.css';
import Home from './pages/Home';
import Service from './pages/Service';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TestingE from './pages/TestingE';
import Equipement from './pages/Equipement';
import Products from './pages/Products';
import DFPage from './pages/DFPage';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/testingequipments' element={<TestingE />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/dieselfuelparts' element={<DFPage />}></Route>
        <Route path='/equipement/:number' element={<Equipement />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
