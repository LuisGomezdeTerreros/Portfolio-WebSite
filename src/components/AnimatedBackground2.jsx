import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gray-400">
      {/* Patrón de puntos estático base */}
      <div 
        className="absolute inset-0 opacity-[0.3] " 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 2.5px, transparent 2.5px )', 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* Capa de puntos animada superpuesta (crea el efecto de movimiento) */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "24px 24px"] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-[0.2]"
        style={{ 
          backgroundImage: 'radial-gradient(#0000ff 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
    </div>
  );
}