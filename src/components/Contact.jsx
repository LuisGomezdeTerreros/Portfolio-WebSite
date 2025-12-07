import { useRef, useState } from 'react'

import { motion } from 'framer-motion'

import { EnvelopeIcon, PhoneIcon, PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

import { SiLinkedin } from 'react-icons/si'

import emailjs from '@emailjs/browser'



export default function Contact() {

  const form = useRef()

  const [status, setStatus] = useState('idle') // idle, sending, success, error



  const sendEmail = (e) => {

    e.preventDefault()

    setStatus('sending')



    // REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS

    const SERVICE_ID = 'service_q2yahhl'

    const TEMPLATE_ID = 'template_amyxved'

    const PUBLIC_KEY = '5O-VyVlEYsFsUNleW'



    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)

      .then((result) => {

          console.log(result.text)

          setStatus('success')

          form.current.reset() // Limpia el formulario

          setTimeout(() => setStatus('idle'), 3000) // Vuelve al estado normal después de 3 seg

      }, (error) => {

          console.log(error.text)

          setStatus('error')

          alert("Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.")

          setStatus('idle')

      })

  }



  return (

    <section id="contact" className="relative py-24 border-t-4 border-black overflow-hidden">

     

      {/* BACKGROUND DECORATION */}

      



      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

       

        {/* HEADER */}

        <div className="text-center mb-16">

            <motion.div

                initial={{ scale: 0.9, opacity: 0 }}

                whileInView={{ scale: 1, opacity: 1 }}

                viewport={{ once: false, amount: 0.2 }}

                className="inline-block bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]"

            >

                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">

                    LET'S TALK

                </h2>

            </motion.div>

            <p className="mt-6 text-xl font-bold font-mono max-w-2xl mx-auto">

                Ready to turn ideas into code? I am available for internships and junior positions.

            </p>

        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

           

            {/* --- LEFT COLUMN: CONTACT INFO --- */}

            <div className="space-y-6">

                <motion.a

                    href="mailto:luisgoteor@gmail.com"

                    whileHover={{ x: 5, y: 5, boxShadow: '0px 0px 0px 0px #000' }}

                    className="block bg-blue-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer"

                >

                    <div className="flex items-center gap-4">

                        <div className="bg-white p-3 border-2 border-black rounded-full">

                            <EnvelopeIcon className="w-8 h-8 text-black" />

                        </div>

                        <div>

                            <h3 className="text-xl font-black uppercase group-hover:underline decoration-2">Email Me</h3>

                            <p className="font-bold text-sm sm:text-lg">luisgoteor@gmail.com</p>

                        </div>

                    </div>

                </motion.a>



                <motion.a

                    href="https://linkedin.com/in/luis-gómez"

                    target="_blank"

                    rel="noopener noreferrer"

                    whileHover={{ x: 5, y: 5, boxShadow: '0px 0px 0px 0px #000' }}

                    className="block bg-pink-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer"

                >

                    <div className="flex items-center gap-4">

                        <div className="bg-white p-3 border-2 border-black rounded-full">

                            <SiLinkedin className="w-8 h-8 text-black" />

                        </div>

                        <div>

                            <h3 className="text-xl font-black uppercase group-hover:underline decoration-2">LinkedIn</h3>

                            <p className="font-bold text-sm sm:text-lg">Connect professionally</p>

                        </div>

                    </div>

                </motion.a>



                <div className="block bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

                    <div className="flex items-center gap-4">

                        <div className="bg-white p-3 border-2 border-black rounded-full">

                            <PhoneIcon className="w-8 h-8 text-black" />

                        </div>

                        <div>

                            <h3 className="text-xl font-black uppercase">Phone</h3>

                            <p className="font-bold text-sm sm:text-lg">+34 640 28 01 43</p>

                        </div>

                    </div>

                </div>

            </div>



            {/* --- RIGHT COLUMN: THE FORM (Ahora funcional) --- */}

            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">

               

                <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-bold px-4 py-1 border-2 border-black rotate-3 shadow-[4px_4px_0px_0px_#000]">

                    SEND ME A MESSAGE!

                </div>



                <form ref={form} onSubmit={sendEmail} className="space-y-6">

                    <div>

                        <label className="block text-sm font-black uppercase mb-2">Name</label>

                        <input

                            type="text"

                            name="name" // Importante: debe coincidir con tu template de EmailJS (ej: {{user_name}})

                            className="w-full bg-gray-50 border-2 border-black p-3 focus:outline-none focus:ring-0 focus:bg-yellow-100 focus:shadow-[4px_4px_0px_0px_#000] transition-all font-mono"

                            placeholder="YOUR NAME"

                            required

                        />

                    </div>

                   

                    <div>

                        <label className="block text-sm font-black uppercase mb-2">Email</label>

                        <input

                            type="email"

                            name="email"

                            className="w-full bg-gray-50 border-2 border-black p-3 focus:outline-none focus:ring-0 focus:bg-yellow-100 focus:shadow-[4px_4px_0px_0px_#000] transition-all font-mono"

                            placeholder="YOUR@EMAIL.COM"

                            required

                        />

                    </div>



                    <div>

                        <label className="block text-sm font-black uppercase mb-2">Message</label>

                        <textarea

                            name="message"

                            rows={4}

                            className="w-full bg-gray-50 border-2 border-black p-3 focus:outline-none focus:ring-0 focus:bg-yellow-100 focus:shadow-[4px_4px_0px_0px_#000] transition-all font-mono resize-none"

                            placeholder="TELL ME ABOUT YOUR PROJECT..."

                            required

                        />

                    </div>



                    <button

                        type="submit"

                        disabled={status === 'sending' || status === 'success'}

                        className={`

                            w-full font-black text-xl py-4 border-2 border-black transition-all flex items-center justify-center gap-2 group

                            ${status === 'success' ? 'bg-green-400 text-black' : 'bg-black text-white hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_0px_#000]'}

                        `}

                    >

                        {status === 'idle' && (

                            <>SEND <PaperAirplaneIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></>

                        )}

                        {status === 'sending' && 'SENDING...'}

                        {status === 'success' && (

                            <>SENT! <CheckCircleIcon className="w-6 h-6"/></>

                        )}

                    </button>

                </form>

            </div>



        </div>





      </div>

    </section>

  )
}