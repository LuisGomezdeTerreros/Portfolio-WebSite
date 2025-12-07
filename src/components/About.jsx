import { motion } from 'framer-motion'
import { AcademicCapIcon, MapPinIcon, UserIcon, BoltIcon } from '@heroicons/react/24/outline'

const educationData = [
  
  {
    school: "University of Seville",
    degree: "BSc in Software Engineering",
    year: "2022 - Present",
    location: "Seville, Spain",
    description: "Studying in the English Group. Building a strong foundation in algorithms, OOP, and software architecture.",
    color: "bg-yellow-300",
    rotate: "-rotate-1"
  },
  {
    school: "CVUT Prague",
    degree: "Erasmus+ Exchange Program",
    year: "2024 - 2025",
    location: "Prague, Czech Republic",
    description: "International experience at the Czech Technical University. Focus on advanced software engineering and adaptability.",
    color: "bg-blue-300",
    rotate: "rotate-1"
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-transparent py-24 overflow-hidden">
      
      {/* BORRA CUALQUIER DIV DE FONDO AQUÍ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
                className="inline-block"
            >
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter bg-pink-500 text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0px_0px_#000] rotate-[-2deg]">
                    About Me
                </h2>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* --- LEFT COLUMN: PERSONAL BIO (The ID Card) --- */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <div className="bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_#000]">
                    
                    {/* Header of the Card */}
                    <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                        <div className="w-20 h-20 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center overflow-hidden">
                             {/* Puedes poner tu foto aquí en el futuro */}
                             <UserIcon className="w-10 h-10 text-black" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black uppercase">Luis Gómez</h3>
                            <span className="font-mono text-base bg-black text-white px-3 py-1">SOFTWARE ENGINEER</span>
                        </div>
                    </div>

                    <p className="text-base font-medium leading-relaxed mb-6">
                        I am a Software Engineering student driven by <span className="bg-yellow-200 px-1 border border-black">problem-solving</span> and technology. 
                        Organized, communicative, and highly motivated to start my professional career.
                    </p>
                    
                    <p className="text-base font-medium leading-relaxed">
                        I am looking for an <span className="font-bold underline decoration-4 decoration-blue-400">internships </span> 
                        to demonstrate my commitment, work in a team, and grow under the mentorship of experienced professionals.
                    </p>

                    {/* Fun Stats / Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="flex items-center gap-1 font-bold text-sm uppercase border-2 border-black px-4 py-2 rounded-full bg-green-300">
                            <BoltIcon className="w-5 h-5"/> Proactive
                        </span>
                        <span className="flex items-center gap-1 font-bold text-sm uppercase border-2 border-black px-4 py-2 rounded-full bg-orange-300">
                            <UserIcon className="w-5 h-5"/> Team Player
                        </span>
                        <span className="flex items-center gap-1 font-bold text-sm uppercase border-2 border-black px-4 py-2 rounded-full bg-purple-300">
                            <MapPinIcon className="w-5 h-5"/> Seville
                        </span>
                    </div>
                </div>
                
                {/* Decoración detrás */}
                <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gray-900 border-4 border-black"></div>
            </motion.div>


            {/* --- RIGHT COLUMN: EDUCATION TIMELINE --- */}
            <div className="relative">
                {/* Línea vertical del timeline */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-black"></div>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative pl-12`}
                        >
                            {/* Dot del timeline */}
                            <div className="absolute left-0 top-6 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center z-10">
                                <div className="w-4 h-4 bg-black rounded-full"></div>
                            </div>

                            {/* Tarjeta de Educación */}
                            <div 
                                className={`
                                    p-5 border-4 border-black shadow-[6px_6px_0px_0px_#000] 
                                    hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all
                                    ${edu.color} ${edu.rotate}
                                `}
                            >
                                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                    <h4 className="text-2xl font-black uppercase">{edu.school}</h4>
                                    <span className="font-mono text-base font-bold bg-white border-2 border-black px-3 py-1">
                                        {edu.year}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-2 text-base font-bold mb-3 border-b-2 border-black/20 pb-2">
                                    <AcademicCapIcon className="w-5 h-5"/>
                                    {edu.degree}
                                </div>

                                <p className="font-medium text-base">
                                    {edu.description}
                                </p>

                                <div className="mt-3 flex items-center gap-1 text-sm font-bold opacity-70">
                                    <MapPinIcon className="w-4 h-4"/>
                                    {edu.location}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}