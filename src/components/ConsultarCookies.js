import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para crear enlaces
import Cookies from 'js-cookie';
import './ConsultarCookies.css'; 

const ConsultarCookies = () => {
  // Obtener las respuestas de la encuesta desde las cookies
  const respuestasCookie = Cookies.get('respuestasEncuesta');
  const respuestasJSON = respuestasCookie ? JSON.parse(respuestasCookie) : [];

  // Formatear las respuestas en una cadena legible para el usuario
  const respuestasLegibles = respuestasJSON.join(', ');

  return (
    <div className="consultar-cookies-container">
      <h2>Respuestas de la Encuesta (Formato Crudo)</h2>
      <pre className="respuestas-formato-crudo">{respuestasCookie}</pre>

      <h2>Respuestas de la Encuesta (Formato Legible)</h2>
      <ul className="respuestas-formato-legible">
        {respuestasJSON.map((respuesta, index) => (
          <li key={index}>{respuesta}</li>
        ))}
      </ul>

      {/* Botón para volver a la encuesta */}
      <div className="volver-encuesta-container">
        <Link to="/" className="volver-encuesta-button">Volver a la Encuesta</Link>
      </div>
    </div>
  );
};

export default ConsultarCookies;
