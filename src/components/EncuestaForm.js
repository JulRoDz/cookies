import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './EncuestaForm.css'; 

const EncuestaForm = () => {
  const preguntas = [
    "¿Cómo te enteraste de nuestro servicio?",
    "¿Qué tan satisfecho estás con nuestro servicio?",
    "¿Qué mejorarías en nuestro servicio?"
  ];

  const handleEnviarEncuesta = () => {
    const respuestas = [
      document.getElementById('pregunta1').value,
      document.getElementById('pregunta2').value,
      document.getElementById('pregunta3').value
    ];

    Cookies.set('respuestasEncuesta', JSON.stringify(respuestas), { expires: 7 });
  };

  return (
    <div className="encuesta-form-container">
      <h1>Encuesta</h1>
      <form>
        {preguntas.map((pregunta, index) => (
          <div key={index} className="pregunta-container">
            <label htmlFor={`pregunta${index + 1}`}>{pregunta}</label>
            <input type="text" id={`pregunta${index + 1}`} className="pregunta-input" />
          </div>
        ))}
        <button type="submit" className="enviar-encuesta-button" onClick={handleEnviarEncuesta}>
          Enviar Encuesta
        </button>
      </form>
      <Link to="/consultar" className="consultar-cookies-link">Consultar Cookies</Link>
    </div>
  );
};

export default EncuestaForm;
