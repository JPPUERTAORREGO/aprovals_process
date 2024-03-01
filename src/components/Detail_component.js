import React, { useState } from 'react';
import Data from './Data.js';
import './Detail.css';

export const Detail_component = () => {
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(Data.usuarios[0].edad);

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    setContador(Data.usuarios[nuevaPosicion].edad);
  };

  const usuario = Data.usuarios[posicion];
  const [comentario, setComentario] = useState('');
  const [historialComentarios, setHistorialComentarios] = useState([]);

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleComentarioSubmit = () => {
    // Verificar que el comentario no esté vacío antes de agregarlo
    if (comentario.trim() !== '') {
      const nuevoComentario = {
        comentario: comentario,
        fecha: new Date().toLocaleDateString(), // Puedes personalizar el formato de la fecha
      };

      // Actualizar el historial de comentarios
      setHistorialComentarios([...historialComentarios, nuevoComentario]);

      // Limpiar el input después de agregar el comentario
      setComentario('');
    }
  };

  return (
    <section className='set'>
      <h2 className='titulo'>Detail</h2>
      <div className='principal'>
        <div className='bttn-usuario'>
          <button onClick={() => cambiarPosicion(0)}>Mostrar Usuario 1</button>
          <button onClick={() => cambiarPosicion(1)}>Mostrar Usuario 2</button>
          <button onClick={() => cambiarPosicion(2)}>Mostrar Usuario 3</button>
        </div>
        <div className='princi'>
          <div key={usuario.id} className='usuario-info'>
            <h2>{usuario.nombre} {usuario.apellido}</h2>
            <p>Edad: {contador}</p>
            <p>Correo: {usuario.correo}</p>
            <p>Cargo: {usuario.cargo}</p>
            <p>Área: {usuario.área}</p>
            <p>Estado: {usuario.status ? 'Activo' : 'Inactivo'}</p>
            <div className='bttn-increment'>
              <button onClick={() => { setContador(contador + 1) }}>incrementa</button>
              <button onClick={() => { setContador(contador - 1) }}>decrementa</button>
            </div>
          </div>
        </div>
      </div>
      <div className='historial'>
        <h3>Historial de comentarios</h3>
        <div className='histo1'>
          <input
            className='histo2'
            placeholder='Comentar'
            type='text'
            value={comentario}
            onChange={handleComentarioChange}
          />
        </div>
        <button className='envia' onClick={handleComentarioSubmit}>Enviar</button>
        {historialComentarios.map((comentario, index) => (
          <div key={index} className='histo1'>
            <p>{comentario.comentario}</p>
            <p>{comentario.fecha}</p>
          </div>
        ))}
      </div>
      <div className='solicitud'>
        <h2>Solicitud 1</h2>
        <img src='icons8-emoji-circulo-verde-48.png' alt='Emoji verde' />
      </div>
    </section>
  );
};



<div></div>