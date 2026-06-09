import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(p => (
            <div key={p.id} className="bg-cream/40 rounded-2xl border border-sweetpink/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[1080/1350] bg-sweetpink/20 overflow-hidden">
                  <img 
                    src={p.imagen} 
                    alt={p.nombre} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/1080x1350/FFFDF0/5C0612?text=${encodeURIComponent(p.nombre)}`;
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-burgundy text-cream text-[9px] font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-serif text-lg font-bold text-burgundy group-hover:text-cherry transition-colors duration-200">{p.nombre}</h4>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button 
                  onClick={() => addToCart(p)}
                  className="w-full py-2.5 bg-cherry hover:bg-cherry-light text-cream font-bold text-xs rounded-xl transition-all shadow flex items-center justify-center space-x-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Añadir al Pedido</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
