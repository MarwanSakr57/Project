
import React, { useEffect, useState } from 'react'
import { initialEvents } from '../../Data/events';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    setEvents(initialEvents);
    console.log(initialEvents);
  }
  return (
    <div>
      
    </div>
  )

}