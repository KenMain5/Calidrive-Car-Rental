import React from 'react';
import './global.scss';
import LoginPage from './pages/MainPage/LoginPage/LoginPage';
import PageLayout from '/src/pagelayouts/PageLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '/src/pagelayouts/Home';
import About from '/src/pages/AboutPage/About';
import CarSelection from '/src/pages/ReservationProcess/CarSelection/CarSelection'
import CurrentUserSelection from '/src/pages/ReservationProcess/currentUserSelection/CurrentUserSelection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <PageLayout>
        <Home />        
        </PageLayout> 
        } />

        <Route path="/login" element= {
        <PageLayout>
        <LoginPage/>     
        </PageLayout>  
        }/>
        
        <Route path="/about" element={
        <PageLayout>
        <About /> 
        </PageLayout> 
        } />
        
        {/* <Route path="test" element={
        <PageLayout>
        <CurrentUserSelection/>
        <CarSelection/> 
        </PageLayout> 
        } /> */}

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App



