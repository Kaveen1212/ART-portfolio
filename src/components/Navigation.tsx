import Navigation from './Navigation';
// import Hero from './components/Hero';
import Hero from './Hero';
import Black from './Black';
import About from './About';
import Contact from './Contact';
import Project from './Project';

function App() {
  return (
    <div>
      <Navigation />
      {/* Hero is fixed, Black overlaps, then normal scroll */}
      <div style={{ position: "relative", minHeight: "300vh" }}>
        {/* Fixed Hero */}
        <Hero />
        {/* Black overlay (sticky, scrolls over Hero) */}
        <Black />
        {/* Main content after Black */}
        <div className="relative z-10">
          <Project />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;