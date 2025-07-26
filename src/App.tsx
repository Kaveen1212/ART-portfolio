import Hero from './components/Hero';
import Black from './components/Black';
import Projects from './components/Project';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import About from './components/About';
import ContactInput from './components/ContactInput';

function App() {
  return (
    <div>
      <Navigation />
      {/* Hero section (fixed) */}
      <Hero />
      {/* Black section (sticky/full screen) */}
      <Black />
      {/* Projects and Contact sections */}
      <div style={{ position: 'relative', zIndex: 100 }}>
        <section style={{ minHeight: '100vh' }}>
          <Projects />
        </section>
        <section style={{ minHeight: '100vh' }}>
          <About />
        </section>
        <section style={{ minHeight: '100vh' }}>
          <Contact />
        </section>
        <section style={{ minHeight: '100vh' }}>
          <ContactInput/>
        </section>
      </div>
    </div>
  );
}

export default App;