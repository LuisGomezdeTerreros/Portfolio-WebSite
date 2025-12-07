import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { Dialog, DialogPanel } from '@headlessui/react'

import { Bars3Icon, XMarkIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'



const navigation = [

  { name: 'Proyects', href: '#projects' },

  { name: 'About me', href: '#about' },

  { name: 'Skills', href: '#skills' },

  { name: 'Contact', href: '#contact' },

]



const roles = ["ENGINEER", "DEVELOPER", "CREATOR", "SOLVER"]



export default function Hero() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [roleIndex, setRoleIndex] = useState(0)



  // Lógica simple para rotar las palabras

  useEffect(() => {

    const interval = setInterval(() => {

      setRoleIndex((prev) => (prev + 1) % roles.length)

    }, 2000)

    return () => clearInterval(interval)

  }, [])



  return (

    <div className="relative min-h-screen text-black overflow-hidden flex flex-col font-sans">

     

      {/* 1. FONDO CON TEXTURA DE PUNTOS (Estilo Cómic/Retro) */}

     



      {/* NAVBAR ESTILO "RETRO UI" */}

      <header className="relative z-50 border-b-4 border-black bg-white">

        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">

          <div className="flex lg:flex-1">

            <a href="#" className="-m-1.5 p-1.5 text-2xl font-black tracking-tighter uppercase italic border-2 border-black bg-yellow-400 px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">

              LG.DEV

            </a>

          </div>

          <div className="flex lg:hidden">

            <button

              type="button"

              onClick={() => setMobileMenuOpen(true)}

              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"

            >

              <Bars3Icon className="h-8 w-8" aria-hidden="true" />

            </button>

          </div>

          <div className="hidden lg:flex lg:gap-x-12">

            {navigation.map((item) => (

              <a key={item.name} href={item.href} className="text-sm font-bold uppercase tracking-widest hover:underline decoration-4 decoration-pink-500 underline-offset-4">

                {item.name}

              </a>

            ))}

          </div>

        </nav>

       

      </header>



      {/* CONTENIDO PRINCIPAL - LAYOUT ASIMÉTRICO */}

      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center p-6 gap-12 lg:gap-24">

       

        {/* LADO IZQUIERDO: TEXTO MASIVO */}

        <motion.div

          initial={{ x: -100, opacity: 0 }}

          animate={{ x: 0, opacity: 1 }}

          transition={{ duration: 0.8, type: "spring" }}

          className="max-w-2xl text-left"

        >

          <div className="inline-block bg-pink-500 border-2 border-black px-4 py-1 font-bold text-white mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">

            👋 OPEN TO WORK

          </div>

         

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9] mb-6">

            LUIS <br/>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{ WebkitTextStroke: '2px black' }}>

              GÓMEZ

            </span>

          </h1>

         

          <div className="text-2xl sm:text-4xl font-bold font-mono h-16 flex items-center gap-2">

            I AM A

            <motion.span

              key={roleIndex}

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              exit={{ y: -20, opacity: 0 }}

              className="bg-yellow-300 px-2 border-b-4 border-black"

            >

              {roles[roleIndex]}

            </motion.span>

          </div>



          <p className="mt-6 text-xl font-medium text-gray-700 max-w-lg border-l-4 border-black pl-4">

            Software engineer with aspirations to make a positive impact in peoples lives.

          </p>



          <div className="mt-10 flex gap-4">

            <a

            href="curriculum.pdf"

            target="_blank"

            rel="noopener noreferrer"

            className="group relative px-8 py-3 bg-black text-white font-bold text-lg border-2 border-black shadow-[6px_6px_0px_0px_#4f46e5] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"

          >

            DOWNLOAD CV

          </a>

            <a href="#contact" className="px-8 py-3 bg-white text-black font-bold text-lg border-2 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center gap-2">

              CONTACT <ArrowLongRightIcon className="w-6 h-6" />

            </a>

          </div>

        </motion.div>



        {/* LADO DERECHO: ELEMENTO ARTÍSTICO (TARJETA FLOTANTE) */}

        <motion.div

            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}

            animate={{ scale: 1, opacity: 1, rotate: 3 }}

            transition={{ delay: 0.2, duration: 0.8 }}

            className="hidden lg:block relative"

        >

            {/* Elemento Decorativo 1 (Cuadrado detrás) */}

            <div className="absolute top-0 right-0 w-80 h-96 bg-blue-500 border-4 border-black translate-x-4 -translate-y-4"></div>

           

            {/* Tarjeta Principal ("La Foto") */}

            <div className="relative w-80 h-96 bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-orange-300 to-red-300 opacity-80"></div>

                <h2 className="relative z-10 text-9xl font-black opacity-20 rotate-[-45deg]">LG</h2>

                <div className="absolute bottom-4 left-4 bg-white border-2 border-black px-2 py-1 font-mono text-xs font-bold transform -rotate-2">

                    EST. 2025

                </div>

            </div>



            {/* Elemento Decorativo 2 (Círculo flotante) */}

            <motion.div

                animate={{ y: [0, -15, 0] }}

                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

                className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-400 rounded-full border-4 border-black flex items-center justify-center font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"

            >

                JS

            </motion.div>

        </motion.div>



      </div>



      {/* FOOTER ANIMADO (MARQUEE INFINITO) */}

      <div className="bg-yellow-400 border-t-4 border-black py-3 overflow-hidden whitespace-nowrap">

        <motion.div

            animate={{ x: [0, -1000] }}

            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

            className="inline-block font-black text-2xl tracking-widest"

        >

            SOFTWARE ENGINEER • FULL STACK • REACT • CREATIVE DEVELOPER • OPEN TO WORK • SOFTWARE ENGINEER • FULL STACK • REACT • CREATIVE DEVELOPER • OPEN TO WORK • SOFTWARE ENGINEER • FULL STACK • REACT • CREATIVE DEVELOPER • OPEN TO WORK • SOFTWARE ENGINEER • FULL STACK • REACT • CREATIVE DEVELOPER • OPEN TO WORK •

        </motion.div>

      </div>



    </div>

  )

}

