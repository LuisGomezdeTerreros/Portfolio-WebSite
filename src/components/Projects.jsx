import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { SiGithub } from 'react-icons/si'


const projects = [
  {
    id: 1,
    title: 'DeliverUS',
    description: 'DeliverUS is a made-up company whose business is focused on delivering food from 3rd parties (restaurants) to customers. To this end, the needed software products were requested, which hopefully will boost the company.',
    // Usa una imagen real o este placeholder de color sólido brutalista
    image: '/images/deliverus.png', 
    tech: ['JAVASCRIPT', 'REACT'],
    link: '',
    color: 'bg-red-200'
  },
  
  {
    id: 2,
    title: 'Video Miner',
    description: 'Project with the objective of creating a service that could implement the APIs of other videoplatforms like Youtube and Vimeo for the use of their data',
    image: '/images/videominer.jpg',
    tech: ['JAVA', 'POSTMAN', 'API'],
    link: '',
    color: 'bg-blue-200'
  },
  {
    id: 3,
    title: 'IMDB ANALYZER',
    description: 'A Java-based system for the massive processing of film data. It implements OOP architecture, Streams APIs, and complex data structures to filter and analyze metrics from over 1000 films.',
    image: '/images/imbd-java.png', // Tienes que poner una foto (lee abajo mis consejos).
    tech: ['JAVA', 'JUNIT', 'OOP', 'STREAMS'],
    link: 'https://github.com/FP-22-23/java-term-project-LuisGomezdeTerreros', // Pon el link real
    color: 'bg-orange-200' // Rojo por Java
  },
  {
    id: 4,
    title: 'GAME SALES DATA',
    description: 'Python data analysis script. Processes global video game sales datasets to generate statistical reports, filter by region, and visualize market share with graphs.',
    image: '/images/phyton.jpeg', // Tienes que poner una foto
    tech: ['PYTHON', 'MATPLOTLIB', 'DATA ANALYSIS'],
    link: 'https://github.com/FP-22-23/term-project-LuisGomezdeTerreros', // Pon el link real
    color: 'bg-yellow-200' // Verde por Python (o amarillo)
  },
  {
    id: 5,
    title: 'NATURSUR COMMERCE',
    description: 'Full-stack platform combining e-commerce and appointment scheduling. Features a dynamic product catalog with infinite scroll, RESTful backend and Telegram Chatbot. Containerized with Docker and deployed on Render.',
    image: '/images/natusur.png', // ¡Recuerda poner una foto en public/images!
    tech: ['DJANGO', 'PYTHON', 'DOCKER'],
    link: 'https://github.com/crigarmen1/PGPI-Natursur', 
    color: 'bg-green-200' // Verde porque es "Natur"-sur
  },
  {
    id: 5,
    title: 'PORTFOLIO WEBSITE',
    description: 'The website you are currently browsing. A responsive SPA built with React and Vite, featuring a custom Neo-Brutalist design system, complex animations with Framer Motion, and serverless email integration via EmailJS.',
    image: '/images/Aspect_ratio_-_4x3.svg.png', // ¡Recuerda poner una foto en public/images!
    tech: ['TAILWIND', 'REACT', 'VITE'],
    link: '', 
    color: 'bg-purple-200' // Verde porque es "Natur"-sur
  },
]

export default function Projects() {
  return (
    // Mantenemos el fondo blanco sólido para Proyectos
    <div id="projects" className="relative pt-24 pb-24 border-t-4 border-black ">
      
      

   

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ... resto del contenido de proyectos ... */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase inline-block bg-black text-white px-4 py-1 rotate-2">
            Main Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
            >
              
              {/* Header de la "Ventana" del proyecto */}
              <div className="border-b-4 border-black bg-gray-100 p-2 flex gap-2 items-center">
                <div className="w-4 h-4 rounded-full border-2 border-black bg-red-400"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-green-400"></div>
                <span className="ml-auto font-mono text-xs font-bold uppercase truncate">{project.title}.EXE</span>
              </div>

              {/* Imagen con filtro blanco y negro que se quita al hover */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b-4 border-black group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter  group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Contenido */}
              <div className={`flex flex-1 flex-col justify-between p-6 ${project.color}`}>
                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                        <span key={tech} className="bg-white border-2 border-black px-2 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {tech}
                        </span>
                        ))}
                    </div>
                    
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-2xl font-black text-black uppercase leading-tight">
                            {project.title}
                        </h3>
                        {project.link !== "" && (
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-1.5 bg-black border-2 border-black px-2 py-1 hover:bg-white transition-colors group"
                                title="Ver código en GitHub"
                            >
                                <span className="text-xs font-black text-white group-hover:text-black">CODE</span>
                                <SiGithub className="w-4 h-4 text-white group-hover:text-black transition-colors"/>
                            </a>
                        )}
                    </div>
                    <p className="text-sm font-medium text-black  leading-relaxed border-l-2 border-black pl-3">
                        {project.description}
                    </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}