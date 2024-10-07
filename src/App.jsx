/* eslint-disable */

import { useState } from 'react';
import PageLayout from './components/PageLayout';
import './App.css';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import PetsPage from './pages/OtherPetsPage.jsx'
import AboutUs from './pages/AboutUs.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dogs" element={<DogPage />} />
            <Route path="/cats" element={<CatPage />} />
            <Route path="/otherpets" element={<PetsPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
