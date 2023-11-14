import React from 'react';
import { Link } from 'react-router-dom';

const BarraSuperior = ({ token, setToken, OnLogout }) => (
  <div style={barraSuperiorStyle}>
    <span style={nombreAppStyle}>Hospitapp</span>
    <Link to="/inicio" style={volverAlInicioStyle}>Volver al inicio</Link>
    <button onClick={OnLogout} style={cerrarSesionStyle}>
      Cerrar sesión
    </button>
  </div>
);

const barraSuperiorStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  padding: '20px',
  textAlign: 'left',
  width: '100%',
};

const nombreAppStyle = {
  color: 'white',
  fontSize: '1.5em',
};

const volverAlInicioStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '20px', // Ajusta el margen según sea necesario
};

const cerrarSesionStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '11px',
  borderRadius: '100px',
  cursor: 'pointer',
};

export default BarraSuperior;
