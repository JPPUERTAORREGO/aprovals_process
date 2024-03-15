import React, { useState } from 'react';
import data from './solicitud.json';
import './Detail.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Detail_component = ({ cambiarPosicion, cambiarContador, posicion, contador, activeKey, setActiveKey, soli }) => {
  const usuario = data.solicitudes[posicion];
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

  const handleAccordionToggle = () => {
    setActiveKey(activeKey === null ? String(posicion) : null);
  };

  const { 
    "id": id,
    "tipo de novedad": tipoDeNovedad,
    "Descripción": descripcion,
    "Código de equipo": codigoDeEquipo,
    "Ubicacion técnica": ubicacionTecnica,
    "Justificación": justificacion,
    "Valor activo": valorActivo,
    "Archivo": archivo,
    "Aprovador": aprovador
  } = soli;
  
  return (
    <>
      <Accordion activeKey={activeKey} >
        <Accordion.Item eventKey={String(posicion)}>
          <Accordion.Header onClick={handleAccordionToggle}>{usuario['tipo de novedad']} </Accordion.Header>
          <Accordion.Body>
            <section className='set'>
              <h2 className='titulo'>Detail</h2>
              <div className='principal'>
                <div key={usuario.id} className='usuario-info'>
                  <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <h2>Novedad: {usuario['tipo de novedad']} </h2>
                      <Card.Title>usuario: {[usuario.id]} </Card.Title>
                      <Card.Text>
                        <p>Descripción: {usuario.Descripción}</p>
                        <p>Codigo de equipo: {contador}</p>
                        <p>Ubicacion técnica: {usuario['Ubicacion técnica']}</p>
                        <p>Justificación: {usuario.Justificación}</p>
                        <p>Valor activo: {usuario['Valor activo']}</p>
                        <p>Archivo: {usuario.Archivo ? 'Activo' : 'Inactivo'}</p>
                        <p>Aprovador: {usuario.Aprovador}</p>
                      </Card.Text>
                      <Button className='bttn-increment' onClick={() => { cambiarContador(contador + 1) }} variant="primary">incrementa</Button>
                      <Button onClick={() => { cambiarContador(contador - 1) }} variant="primary">decrementa</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className='historial'>
                <Card style={{ width: '35rem' }}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
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
                      <Button className='envia' onClick={handleComentarioSubmit} variant="primary">Enviar</Button>
                      {historialComentarios.map((comentario, index) => (
                        <div key={index} className='histo1'>
                          <p>{comentario.comentario}</p>
                          <p>{comentario.fecha}</p>
                        </div>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
              <div className='solicitud'>
                <h2>Solicitud {[usuario.id]}</h2>
                <img src='icons8-emoji-circulo-verde-48.png' alt='Emoji verde' />
              </div>
            </section>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};


<div></div>
