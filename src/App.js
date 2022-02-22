
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NoPage from './Components/NoPage/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;