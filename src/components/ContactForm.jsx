import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <form>
            <label className='form-label'>Nombre</label>
            <input type="text" className='form-control'/>
            
            <label  className='form-label'>Correo electronico</label>
            <input type="text" className='form-control'/>
            
            <label  className='form-label'>Asunto</label>
            <input type="text" className='form-control'/>

            <label  className='form-label'>Mensaje</label>
            <textarea className='form-control'/>
        </form>
    )
}

export default ContactForm