import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Internship from './components/Internship';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Achievements from './components/Achievements'; 
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        { <Education /> }
        { <Internship /> }
        {<Publications />}
        {<Projects />}
        {<Achievements />}
        {<Volunteering />}
        {<Contact />}
      </main>
      {<Footer />}
    </>
  );
}