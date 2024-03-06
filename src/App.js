import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { DashboardPage, MenuPage } from './pages';
import DashboardPage from './pages/Dashboard/page';
import MenuPage from './pages/Menu/page';
import LandingPage from './pages/LandingPage/page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} Component={LandingPage} />
        <Route path='/menu' exact={true} Component={MenuPage} />
        <Route path='/dashboard' exact={true} Component={DashboardPage} />

      </Routes>
    </div>
  );
}

export default App;