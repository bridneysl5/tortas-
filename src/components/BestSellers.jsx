import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BestSellers({ addToCart, productos = [] }) {
  // Simular los más vendidos tomando los primeros 4
  const bestSellers = productos.slice(0, 4);

  return (
    <section className="py-16 bg-white border-b border-sweetpink/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-cherry block mb-1">Favoritos de Loty</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Nuestros Más Vendidos</h2>
            <p className="text-burgundy/75 mt-1">Los clásicos que nunca fallan y enamoran a todos.</p>
          </div>
          <Link to="/catalogo" className="px-6 py-2.5 bg-burgundy text-cream font-semibold rounded-xl hover:bg-burgundy-light transition-all shadow-sm flex items-center justify-center">
            Ver Todo el Catálogo
          </Link>
        </div>

        {/* Rejilla de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group border border-sweetpink/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Etiqueta flotante estética */}
                <div className="absolute top-3 right-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-sweetpink/30">
                  <span className="text-[10px] font-bold text-cherry uppercase tracking-wider">Top Ventas</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold text-burgundy mb-1 line-clamp-1">{item.nombre}</h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-cherry">S/ {item.precioVenta.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="flex items-center space-x-1.5 text-xs font-bold bg-burgundy text-cream px-3 py-2 rounded-lg hover:bg-burgundy-light transition-colors"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
