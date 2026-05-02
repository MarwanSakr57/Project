import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function EventCard({ Event_Title, Event_Date, Event_Location, Event_Description }) {
  const [isFav, setIsFav] = useState(false);
  return (
    <div>
    <Card style={{ width: '18rem' , border: '1px solid lightgray' , borderRadius: '10px' ,
          textAlign: 'left' , margin: '20px' , width: '400px' }}>
      <FaHeart
          size={24}
          color={isFav ? 'red' : 'gray'}
          style={{ cursor: 'pointer' , position: 'absolute' , top: '10px' , right: '10px' , 
            border: '1px solid red' , padding: '5px'}}
          onClick={() => setIsFav(!isFav)}
        />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>{Event_Title}</Card.Title>
        <h6>{Event_Date}</h6>
        <h6>{Event_Location}</h6>
        <Card.Text>
          {Event_Description}
        </Card.Text>
        <Button variant='light' style={{border: '1px solid blue' , color: 'blue', margin: '5px'}}>Details</Button>
        <Button variant="primary" style={{margin:'5px'}}>Register</Button>
      </Card.Body>
    </Card>
    </div>
  )
}