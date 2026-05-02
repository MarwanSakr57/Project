import { initialEvents } from '../../Data/events';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from '../Components/EventCard';
import{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';

export default function Events({events}) {
const [Query,setQuery]=useState("");
const filtered = initialEvents.filter(e =>
    e.title.toLowerCase().includes(Query.trim().toLowerCase())
  );
  return (
    <div>
      <h2 className="mt-4 text-center">All Events</h2>
      <p className="text-center text-muted p-3">Search and filter events</p>

      <Form className="mb-4">
        <Form.Control
          type="search"
          placeholder="Search events by title..."
          value={Query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      <Row>
      {filtered.map(e => (
        <Col key={e.id} md={6} lg={4}>
          <EventCard Event_Title={e.title} Event_Date={e.date} Event_Time={e.time} Event_Location={e.location} Event_Description={e.description} Event_Category={e.category}  />
        </Col>
     ))}
    </Row>
    /</div>
  )

}