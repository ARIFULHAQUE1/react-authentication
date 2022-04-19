import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
      const {name,description,img}=service;
      const navigate=useNavigate()
      const appointment=()=>{
            navigate('/appointment')
      }
      return (
      <div className=' col-lg-4'>
      <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
      <Card.Title><span className='text-primary'>{name}</span></Card.Title>
      <Card.Text>
            {description}
      </Card.Text>
      <Button onClick={appointment} variant="primary">Appointment</Button>
      </Card.Body>
      </Card>
  </div>
      );
};

export default Service;