import Hero from './components/Hero';
import Black from './components/Black';
// import Projects from './components/Project';
// import About from './components/About';
// import Contact from './components/Contact';
// import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <section style={{ height: '150vh', position: 'relative' }}>
        <Hero />
        <Black />
      </section>
      {/* <section style={{ height: '100vh' }}>
        <Projects />
      </section>
      <section style={{ height: '100vh' }}>
        <About />
      </section>
      <section style={{ height: '100vh' }}>
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
