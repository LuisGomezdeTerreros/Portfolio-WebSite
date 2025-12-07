import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground'; // <--- Importamos el fondo
import AnimatedBackground2 from './components/AnimatedBackground2'; // <--- Importamos el fondo


function App() {
  return (
    <div className="bg-[#f0f0f0] overflow-x-hidden">
      
      

      {/* ZONA UNIFICADA: INFO & SKILLS */}
      <div className="relative border-b-4 border-black">
        {/* El fondo animado vive aquí y cubre ambas secciones */}
        <AnimatedBackground />
        <Hero />
        {/* Contenido sobre el fondo */}
      
      </div>
      {/* ZONA UNIFICADA: INFO & SKILLS */}
      <div className="relative border-b-4 border-black">
        {/* El fondo animado vive aquí y cubre ambas secciones */}
        <AnimatedBackground2 />
        {/* Contenido sobre el fondo */}
        <div className="relative z-10">
          <About />
          <Skills />
          
        </div>
      </div>
      
      {/* ZONA SEPARADA: PROYECTOS */}
      <div className="relative border-b-4 border-black">
        {/* El fondo animado vive aquí y cubre ambas secciones */}
        <AnimatedBackground />
        <Projects />
        {/* Contenido sobre el fondo */}
      
      </div>
       <div className="relative border-b-4 border-black">
        {/* El fondo animado vive aquí y cubre ambas secciones */}
        <AnimatedBackground2 />
        <Contact />
        {/* Contenido sobre el fondo */}
      
      </div>       

      
      <Footer />
    </div>
  )
}

export default App