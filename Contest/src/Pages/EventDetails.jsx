import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChair } from 'react-icons/fa';

function EventDetails({ id, title, category, date, time, location, seats, description }) {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="shadow-sm rounded-4" style={{ width: '100%', maxWidth: '650px' }}>

        {/* Header */}
        <Card.Header className="bg-primary text-white rounded-top-4 p-4">
          <Badge bg="light" text="primary" className="mb-2">{category}</Badge>
          <h3 className="fw-bold mb-0">{title}</h3>
        </Card.Header>

        <Card.Body className="p-4">

          <div className="d-flex flex-column gap-3 mb-4">

            <div className="d-flex align-items-center gap-2">
              <FaCalendarAlt color="#0d6efd" size={18} />
              <span className="fw-semibold">Date:</span>
              <span>{date}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaClock color="#0d6efd" size={18} />
              <span className="fw-semibold">Time:</span>
              <span>{time}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaMapMarkerAlt color="#0d6efd" size={18} />
              <span className="fw-semibold">Location:</span>
              <span>{location}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaChair color="#0d6efd" size={18} />
              <span className="fw-semibold">Available Seats:</span>
              <span>{seats}</span>
            </div>

          </div>

          <hr />

          <h6 className="fw-bold mb-2">About this Event</h6>
          <p className="text-muted">{description}</p>

          <Button variant="primary" className="w-100 py-2 fw-semibold mt-3">
            Register Now
          </Button>

        </Card.Body>
      </Card>
    </div>
  );
}

export default EventDetails;