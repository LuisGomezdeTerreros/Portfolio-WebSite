import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white py-12 border-t-4 border-black font-mono">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* IZQUIERDA: Identidad */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">
            LG.DEV
          </h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Seville, Spain.
          </p>
        </div>

        {/* CENTRO: Tech Stack (Estilo etiqueta) */}
        <div className="border border-gray-700 px-4 py-2 text-xs uppercase tracking-widest text-gray-400">
          Built with React & Tailwind
        </div>

        {/* DERECHA: Botón Scroll Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 font-bold hover:text-yellow-400 transition-colors"
        >
          BACK TO TOP
          <ArrowUpIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform"/>
        </button>

      </div>
    </footer>
  )
}