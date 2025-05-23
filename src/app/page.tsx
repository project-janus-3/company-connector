// import { Container } from 'react-bootstrap';
import Link from 'next/link';

const Home = () => (
  <main>
    <div className="info">
      <div>
        <h1>Connecting UH Students to Career Opportunities</h1>
        <p className="lead">Discover internships, jobs, and more—tailored to your skills and interests.</p>
        <Link href="/auth/signin" className="btn btn-success mt-3">
          Get Started
        </Link>
      </div>
    </div>
  </main>
);

export default Home;
