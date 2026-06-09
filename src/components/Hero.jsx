import { ShoppingCart, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import tortaImg from '../img/torta banner inicio.webp';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-16 lg:py-24 border-b border-sweetpink/40 cursor-auto">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A6243C_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Lado Izquierdo (Desktop) / Columna completa (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 flex flex-col text-center lg:text-left"
          >
            
            {/* Título y subtítulo */}
            <div className="order-1 lg:order-none mb-8 lg:mb-0 space-y-6">
              <div className="inline-flex items-center justify-center lg:justify-start">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sweetpink text-burgundy border border-cherry/20">
                  🎂 Pedidos y entregas con 48h de anticipación en Lima
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-burgundy leading-tight">
                Pasteles mágicos, <br /> cupcakes y bocaditos
              </h1>
            </div>

            {/* Imagen visible SÓLO en móviles, posicionada entre el título y los botones */}
            <div className="order-2 lg:hidden w-full flex justify-center mb-8">
              <div className="relative w-72 h-72 float-magic">
                <div className="absolute inset-0 bg-sweetpink rounded-full opacity-30 blur-2xl"></div>
                <img src={tortaImg} alt="Torta Loty Bakery" className="w-full h-full object-contain relative z-10 drop-shadow-xl" />
              </div>
            </div>

            {/* Botones y Footer del Hero */}
            <div className="order-3 lg:order-none lg:mt-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/catalogo" className="w-full sm:w-auto px-8 py-3.5 bg-burgundy hover:bg-burgundy-light text-cream font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Ver Catálogo</span>
                </Link>
                {/* Botón secundario retirado porque ya no hay laboratorio */}
              </div>
            </div>

          </motion.div>

          {/* Lado Derecho (Desktop only - Imagen del pastel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex w-full lg:w-5/12 justify-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 float-magic">
              <div className="absolute inset-0 bg-sweetpink rounded-full opacity-30 blur-2xl"></div>
              <img src={tortaImg} alt="Torta Loty Bakery" className="w-full h-full object-contain relative z-10 drop-shadow-xl" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
