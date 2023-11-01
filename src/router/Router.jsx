import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import BaseLayout from '../components/BaseLayout';
import Home from '../pages/Home';
import Accomodation from '../pages/Accomodation/Accomodation';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage';

function RouterComponent() {
    return (
        <React.StrictMode>
            <HashRouter basename="/OCR_P6_kasa">
            
                <BaseLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/accomodation/:advertId" element={<Accomodation />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </BaseLayout>
            
            </HashRouter>
        </React.StrictMode>
    )
}

export default RouterComponent