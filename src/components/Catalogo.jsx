import { PlusCircle, Heart, PartyPopper, Music, Star, Gift, FilterX } from 'lucide-react';


const OCASIONES = [
  { id: 'todas', label: 'Todas las Ocasiones' },
  { id: 'cumpleanos', label: 'Cumpleaños', icon: PartyPopper },
  { id: 'aniversarios', label: 'Aniversarios', icon: Heart },
  { id: 'infantiles', label: 'Infantiles', icon: Star },
  { id: 'kpop', label: 'K-pop', icon: Music },
  { id: 'aesthetics', label: 'Aesthetics', icon: Heart }
];

const TIPOS = [
  { id: 'todos', label: 'Todos los Tipos' },
  { id: 'Pasteles / Tortas', label: 'Pasteles / Tortas', icon: Star },
  { id: 'Cupcakes', label: 'Cupcakes', icon: PartyPopper },
  { id: 'Bocaditos', label: 'Bocaditos', icon: Gift }
];

import { useState } from 'react';

export default function Catalogo({ addToCart, productos = [] }) {
  const [filtroOcasion, setFiltroOcasion] = useState('todas');
  const [filtroTipo, setFiltroTipo] = useState('todos');

  const productosFiltrados = productos.filter(p => {
    let matchOcasion = true;
    let matchTipo = true;

    if (filtroOcasion !== 'todas') {
      const ocLabel = OCASIONES.find(o => o.id === filtroOcasion)?.label;
      matchOcasion = p.ocasion && Array.isArray(p.ocasion) && p.ocasion.includes(ocLabel);
    }

    if (filtroTipo !== 'todos') {
      matchTipo = p.categoria && Array.isArray(p.categoria) && p.categoria.includes(filtroTipo);
    }

    return matchOcasion && matchTipo;
  });

  const clearFilters = () => {
    setFiltroOcasion('todas');
    setFiltroTipo('todos');
  };

  return (
    <section className="py-16 bg-cream/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center lg:text-left">
          <span className="text-xs uppercase tracking-widest font-bold text-cherry block mb-1">Loty Bakery Shop</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Catálogo Completo</h2>
          <p className="text-burgundy/75 mt-1">Explora nuestras creaciones y encuentra el postre ideal.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Barra Lateral Izquierda (Filtros) */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-sweetpink/40 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-bold text-burgundy">Filtros</h3>
                {(filtroOcasion !== 'todas' || filtroTipo !== 'todos') && (
                  <button onClick={clearFilters} className="text-[10px] text-cherry hover:underline flex items-center">
                    <FilterX className="w-3 h-3 mr-1" /> Limpiar
                  </button>
                )}
              </div>

              {/* Filtro: Ocasiones */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-burgundy/60 mb-4 border-b border-sweetpink/30 pb-2">Ocasiones / Temáticas</h4>
                <div className="space-y-2">
                  {OCASIONES.map(oc => {
                    const Icon = oc.icon;
                    const isActive = filtroOcasion === oc.id;
                    return (
                      <button 
                        key={oc.id}
                        onClick={() => setFiltroOcasion(oc.id)}
                        className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive ? 'bg-burgundy text-cream' : 'text-burgundy hover:bg-sweetpink/20'
                        }`}
                      >
                        {Icon && <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-cream' : 'text-cherry'}`} />}
                        {!Icon && <span className="w-4 h-4 mr-3"></span>}
                        {oc.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Filtro: Tipos */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-burgundy/60 mb-4 border-b border-sweetpink/30 pb-2">Tipo de Dulce</h4>
                <div className="space-y-2">
                  {TIPOS.map(tp => {
                    const Icon = tp.icon;
                    const isActive = filtroTipo === tp.id;
                    return (
                      <button 
                        key={tp.id}
                        onClick={() => setFiltroTipo(tp.id)}
                        className={`w-full flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive ? 'bg-burgundy text-cream' : 'text-burgundy hover:bg-sweetpink/20'
                        }`}
                      >
                        {Icon && <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-cream' : 'text-cherry'}`} />}
                        {!Icon && <span className="w-4 h-4 mr-3"></span>}
                        {tp.label}
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>
          </aside>

          {/* Rejilla Principal de Productos (Derecha) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productosFiltrados.length > 0 ? productosFiltrados.map((p, index) => (
                <div 
                  data-aos="fade-up"
                  key={p.id} 
                  className="bg-cream/40 rounded-2xl border border-sweetpink/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
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
                      {p.emprendimiento && (
                        <span className="absolute top-3 left-3 bg-burgundy text-cream text-[9px] font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                          {p.emprendimiento}
                        </span>
                      )}
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="font-serif text-lg font-bold text-burgundy group-hover:text-cherry transition-colors duration-200">{p.nombre}</h4>
                      <p className="text-cherry font-bold mt-2">S/ {p.precioVenta.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 mt-auto">
                    <button 
                      onClick={() => addToCart(p)}
                      className="w-full py-2.5 bg-cherry hover:bg-cherry-light text-cream font-bold text-xs rounded-xl transition-all shadow flex items-center justify-center space-x-1.5"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Añadir al Pedido</span>
                    </button>
                  </div>
                </div>
              )) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-burgundy/50 bg-white rounded-2xl border border-dashed border-sweetpink/40">
                  <FilterX className="w-12 h-12 mb-3 text-sweetpink" />
                  <p className="text-lg font-serif">No hay delicias que coincidan con estos filtros.</p>
                  <button onClick={clearFilters} className="mt-4 px-6 py-2 bg-sweetpink/30 hover:bg-sweetpink/50 text-burgundy text-sm font-bold rounded-lg transition-colors">
                    Ver todo el catálogo
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
