import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';
import Test from './pages/Test';

import Error from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);

