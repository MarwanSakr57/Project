import EventCard from '../Components/EventCard';

export default function MyEvents({ registeredEvents }) {
  return (
    <>
      {registeredEvents.map(e => (
        <div key={e.id}>
          <span className="badge bg-success mb-2">Registered</span>
          <EventCard
            Event_Title={e.title}
            Event_Date={e.date}
            Event_Time={e.time}
            Event_Location={e.location}
            Event_Description={e.description}
            Event_Category={e.category}
          />
        </div>
      ))}
    </>
  );
}