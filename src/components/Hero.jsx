import { ShoppingCart, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import tortaImg from '../img/torta banner inicio.webp';


export default function Hero({ productos = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generar array de imágenes para el loop infinito
  const loopImages = [tortaImg];
  if (productos && productos.length > 0) {
    // Tomar hasta 4 imágenes más de los productos para hacer el loop
    const extraImages = productos.slice(0, 4).map(p => p.imagen);
    loopImages.push(...extraImages);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % loopImages.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [loopImages.length]);

  return (
    <section id="inicio" className="relative overflow-hidden py-16 lg:py-24 border-b border-sweetpink/40 cursor-auto">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A6243C_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Lado Izquierdo */}
          <div 
              data-aos="fade-up"
              className="w-full lg:w-7/12 flex flex-col text-center lg:text-left"
          >
            {/* BADGE DESKTOP: Arriba del título */}
            <div className="hidden lg:inline-flex items-center justify-start mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sweetpink text-burgundy border border-cherry/20">
                🎂 Pedidos y entregas con 48h de anticipación en Lima
              </span>
            </div>

            {/* Título y subtítulo */}
            <div className="mb-8 lg:mb-0 space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-burgundy leading-tight">
                Pasteles mágicos, <br /> cupcakes y bocaditos
              </h1>
            </div>

            {/* Imagen visible SÓLO en móviles, posicionada debajo del título */}
            <div className="lg:hidden w-full flex justify-center mb-6 mt-6">
              <div className="relative w-72 h-72 float-magic">
                <div className="absolute inset-0 bg-sweetpink rounded-full opacity-30 blur-2xl"></div>
                <img 
                  src={loopImages[currentImageIndex]} 
                  alt="Torta Loty Bakery" 
                  className="w-full h-full object-cover rounded-3xl relative z-10 shadow-xl border-4 border-white transition-all duration-700 animate-float" 
                />
              </div>
            </div>

            {/* BADGE MOBILE: Debajo de la imagen */}
            <div className="lg:hidden flex items-center justify-center mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sweetpink text-burgundy border border-cherry/20 shadow-sm">
                🎂 Pedidos y entregas con 48h de anticipación en Lima
              </span>
            </div>

            {/* Botón Ver Catálogo */}
            <div className="lg:mt-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/catalogo" className="w-full sm:w-auto px-8 py-3.5 bg-burgundy hover:bg-burgundy-light text-cream font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Ver Catálogo</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Lado Derecho (Desktop only - Imagen en loop) */}
          <div 
              data-aos="fade-up"
              className="hidden lg:flex w-full lg:w-5/12 justify-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 float-magic">
              <div className="absolute inset-0 bg-sweetpink rounded-full opacity-30 blur-2xl"></div>
              <img 
                src={loopImages[currentImageIndex]} 
                alt="Torta Loty Bakery" 
                className="w-full h-full object-cover rounded-[3rem] relative z-10 shadow-2xl border-4 border-white transition-all duration-700 animate-float" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
