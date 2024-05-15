import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import EncuestaForm from './components/EncuestaForm';
import ConsultarCookies from './components/ConsultarCookies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/encuesta" />} />
        <Route path="/encuesta" element={<EncuestaForm />} />
        <Route path="/consultar" element={<ConsultarCookies />} />
      </Routes>
    </Router>
  );
};

export default App;
