import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiReact, SiDjango, SiMysql, 
  SiGit, SiGithub, SiDocker, SiPostman, 
  SiFigma, SiEclipseide, SiIntellijidea,SiTailwindcss
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaCogs } from "react-icons/fa";

const skills = [
  // He agrupado los colores para que combinen con tu estilo brutalista
  // Colores: bg-yellow-300, bg-blue-300, bg-pink-300, bg-green-300
  { name: "React", icon: SiReact, bg: "bg-blue-300" },
  { name: "JavaScript", icon: SiJavascript, bg: "bg-yellow-300" },
  { name: "Java", icon: FaJava, bg: "bg-red-300" },
  { name: "Python", icon: SiPython, bg: "bg-blue-400" },
  { name: "Django", icon: SiDjango, bg: "bg-green-400" },
  { name: "SQL", icon: SiMysql, bg: "bg-orange-300" },
  { name: "TailWind", icon: SiTailwindcss, bg: "bg-teal-300" },
  { name: "Git & GitHub", icon: SiGithub, bg: "bg-gray-300" },
  { name: "Docker", icon: SiDocker, bg: "bg-blue-200" },
  { name: "Figma", icon: SiFigma, bg: "bg-purple-300" },
  { name: "VS Code", icon: VscVscode, bg: "bg-blue-500" },
];

export default function Skills() {
  return (
    <div id="skills" className="relative bg-transparent pb-24 pt-0">
      
      {/* BORRA CUALQUIER DIV DE FONDO AQUÍ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase border-b-8 border-yellow-400 inline-block">
            TECHNOLOGIES AND TOOLS
          </h2>
      
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              className={`
                flex items-center gap-3 px-6 py-4 
                ${skill.bg} 
                border-4 border-black 
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1 transition-all cursor-default
              `}
            >
              <skill.icon className="text-2xl text-black" />
              <span className="font-bold text-lg text-black uppercase tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}