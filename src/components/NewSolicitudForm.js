import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const NewSolicitudForm = (props) => {
  const {handleOnChageSelect,handleOnChangeAge, handleOnClick} = props

  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Select onChange={handleOnChageSelect} >
          <option>Radiation resistance</option>
          <option>Turning tiny</option>
          <option>Radiation blast</option>
        </Form.Select>
        <Form.Control type="number" 
        placeholder="Enter age" 
        onChange={handleOnChangeAge}/>
        <Form.Control type="text" placeholder="Enter secrete id" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOnClick}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

