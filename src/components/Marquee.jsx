import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="bg-yellow-400 border-y-4 border-black py-3 overflow-hidden whitespace-nowrap rotate-1 scale-105 z-20 relative">
      <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="inline-block font-black text-2xl tracking-widest text-black"
      >
          AVAILABLE FOR WORK • DOWNLOAD CV • AVAILABLE FOR WORK • DOWNLOAD CV • AVAILABLE FOR WORK • DOWNLOAD CV • 
          AVAILABLE FOR WORK • DOWNLOAD CV • AVAILABLE FOR WORK • DOWNLOAD CV • 
      </motion.div>
    </div>
  )
}