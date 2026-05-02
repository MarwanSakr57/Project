import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className = "bg-primary text-white text-center p-5">
        <h1>Welcome to Campus Event Hub</h1>
        <p>Discover,create,save, and register for campus events in one place</p>
        <Button as={Link} to ="/Events" variant="light">Explore Events</Button>
      </div>
      <h2 className="mt-4">Featured Events</h2>
      <p className="text-muted p-3">Here are some events you can join</p>

    </div>
  )
}
