import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from '../Components/EventCard';
import { initialEvents } from '../../Data/events';

export default function Home({events}) {
  return (
    <div>
      <div className = "bg-primary text-white text-center p-5">
        <h1>Welcome to Campus Event Hub</h1>
        <p>Discover,create,save, and register for campus events in one place</p>
        <Button as={Link} to ="/Events" variant="light">Explore Events</Button>
      </div>
      <h2 className="mt-4">Featured Events</h2>
      <p className="text-muted p-3">Here are some events you can join</p>
    <Row>
      {events.map(e => (
        <Col key={e.id} md={6} lg={4}>
          <EventCard Event_Title={e.title} Event_Date={e.date} Event_Time={e.time} Event_Location={e.location} Event_Description={e.description} Event_Category={e.category}  />
        </Col>
     ))}
    </Row>
    </div>
  )
}
