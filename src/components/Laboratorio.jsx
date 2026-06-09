import { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';

export default function Laboratorio({ addToCart }) {
  const [flavor, setFlavor] = useState('vainilla');
  const [frostingColor, setFrostingColor] = useState('#FFFDF0');
  const [toppings, setToppings] = useState({
    macarons: false,
    hearts: true,
    sparkles: true,
    strawberries: false
  });
  const [message, setMessage] = useState('');

  const handleToppingToggle = (topping) => {
    setToppings(prev => ({ ...prev, [topping]: !prev[topping] }));
  };

  const addCustomCake = () => {
    const customCake = {
      id: `custom-${Date.now()}`,
      nombre: 'Torta Personalizada (Laboratorio)',
      categoria: 'custom',
      badge: 'Única ✨',
      imagen: 'https://images.unsplash.com/photo-1557925923-33b251d591fc?auto=format&fit=crop&q=80&w=600', // Imagen placeholder pastel
      detalles: `Sabor: ${flavor}, Color: ${frostingColor}, Mensaje: "${message}"`
    };
    addToCart(customCake);
  };

  const resetCustomizer = () => {
    setFlavor('vainilla');
    setFrostingColor('#FFFDF0');
    setToppings({ macarons: false, hearts: true, sparkles: true, strawberries: false });
    setMessage('');
  };

  return (
    <section id="disenador" className="py-16 bg-cream border-b border-sweetpink/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-sweetpink text-burgundy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Taller de Creación</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">Laboratorio Interactivo de Tortas</h2>
          <p className="text-burgundy/80 mt-1">Elige los colores de cobertura, toppings y escribe la dedicatoria en letra script que nuestros pasteleros replicarán con exactitud.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Panel de Configuración */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-sweetpink/40 space-y-6">
            
            {/* Sabor del bizcocho */}
            <div>
              <label className="block text-sm font-semibold mb-2">1. Sabor del Bizcocho y Relleno:</label>
              <select 
                value={flavor} 
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full px-4 py-3 border border-sweetpink/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cherry bg-cream/30"
              >
                <option value="vainilla">Vainilla Manjar Blanco (Clásico)</option>
                <option value="redvelvet">Red Velvet Fudge Especial</option>
                <option value="chocolate">Chocolate Belga con Frambuesa</option>
                <option value="zanahoria">Zanahoria Especiada con Queso Cream</option>
              </select>
            </div>

            {/* Color de Glaseado */}
            <div>
              <label className="block text-sm font-semibold mb-3">2. Color del Glaseado de Cobertura:</label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { hex: '#FFFDF0', title: 'Crema Suave / Marfil' },
                  { hex: '#F7C5CC', title: 'Rosa Pastel Dulce' },
                  { hex: '#D96276', title: 'Rosa Viejo (Dusty Rose)' },
                  { hex: '#A6243C', title: 'Rojo Cereza Medio' },
                  { hex: '#5C0612', title: 'Guinda Profundo (Burgundy)' }
                ].map(color => (
                  <button 
                    key={color.hex}
                    onClick={() => setFrostingColor(color.hex)} 
                    className={`w-full h-10 rounded-lg border-2 transition-all flex items-center justify-center shadow-sm ${
                      frostingColor === color.hex ? 'border-cherry scale-105' : 'border-transparent hover:scale-105 bg-cream/50'
                    }`}
                    title={color.title}
                  >
                    <div className="w-4 h-4 rounded-full border border-burgundy/20" style={{ backgroundColor: color.hex }}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selección de Toppings */}
            <div>
              <label className="block text-sm font-semibold mb-3">3. Decoraciones Finas:</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'macarons', label: 'Macarons Finos' },
                  { id: 'hearts', label: 'Corazones Loty' },
                  { id: 'sparkles', label: 'Destellos Mágicos' },
                  { id: 'strawberries', label: 'Fresas Frescas' }
                ].map(top => (
                  <label key={top.id} className="flex items-center space-x-3 p-3 border border-sweetpink/40 rounded-xl hover:bg-cream/50 cursor-pointer transition-colors select-none">
                    <input 
                      type="checkbox" 
                      checked={toppings[top.id]}
                      onChange={() => handleToppingToggle(top.id)}
                      className="rounded text-cherry focus:ring-cherry w-4 h-4" 
                    />
                    <span className="text-xs font-medium">{top.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Dedicatoria Escrita sobre la Torta */}
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="cake-message-input">
                4. Dedicatoria en Letra Script (Máx. 24 letras):
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  id="cake-message-input" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={24} 
                  placeholder="Ej: Love You" 
                  className="w-full px-4 py-3 border border-sweetpink/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cherry bg-cream/30"
                />
                <span className="absolute right-3 top-3 text-xs text-burgundy/40">
                  {message.length}/24
                </span>
              </div>
            </div>

            {/* Añadir a Cesta */}
            <div className="pt-4 border-t border-sweetpink/30 flex items-center justify-end">
              <button 
                onClick={addCustomCake} 
                className="w-full sm:w-auto px-8 py-3.5 bg-burgundy hover:bg-burgundy-light text-cream font-bold rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
                <span>Añadir a Cesta para Cotización</span>
              </button>
            </div>

          </div>

          {/* Lienzo de Visualización Interactiva 2D */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-square bg-white rounded-3xl border border-sweetpink/30 p-6 flex flex-col justify-center items-center shadow-lg overflow-hidden">
              
              {/* Fondo decorativo tipo estudio */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#A6243C_2px,transparent_2px)] [background-size:24px_24px]"></div>
              
              {/* SVG Interactivo del Pastel en el Laboratorio */}
              <svg className="w-full h-auto max-h-[350px] relative z-10" viewBox="0 0 400 400">
                <ellipse cx="200" cy="320" rx="150" ry="25" fill="#5C0612" opacity="0.1" />
                
                {/* Stand del pastel */}
                <path d="M120 320h160v12c0 10-20 15-80 15s-80-5-80-15v-12z" fill="#FFFDF0" stroke="#5C0612" strokeWidth="4" />
                <path d="M180 320h40v20h-40z" fill="#FFFDF0" stroke="#5C0612" strokeWidth="4" />
                <line x1="120" y1="320" x2="280" y2="320" stroke="#5C0612" strokeWidth="4" />

                {/* Estructura del Pastel */}
                <path d="M90 200c0-15 45-25 110-25s110 10 110 25v120c0 20-50 30-110 30S90 340 90 320v-120z" fill={frostingColor} stroke="#5C0612" strokeWidth="5" style={{ transition: 'fill 0.3s ease' }} />
                <ellipse cx="200" cy="200" rx="110" ry="25" fill={frostingColor} stroke="#5C0612" strokeWidth="5" style={{ transition: 'fill 0.3s ease' }} />

                {/* Brillo de cobertura */}
                <ellipse cx="200" cy="205" rx="100" ry="20" fill="none" stroke="#FFF" strokeWidth="3" opacity="0.4" />

                {/* Topping: Corazones */}
                {toppings.hearts && (
                  <g className="transition-all duration-300">
                    <path d="M140 180 C 135 170, 125 172, 125 182 C 125 192, 140 202, 140 202 C 140 202, 155 192, 155 182 C 155 172, 145 170, 140 180 Z" fill="#D96276" stroke="#5C0612" strokeWidth="2" />
                    <path d="M260 190 C 255 180, 245 182, 245 192 C 245 202, 260 212, 260 212 C 260 212, 275 202, 275 192 C 275 182, 265 180, 260 190 Z" fill="#A6243C" stroke="#5C0612" strokeWidth="2" />
                    <path className="float-magic" d="M210 110 C 205 100, 195 102, 195 112 C 195 122, 210 132, 210 132 C 210 132, 225 122, 225 112 C 225 102, 215 100, 210 110 Z" fill="#5C0612" stroke="#FFF" strokeWidth="1.5" />
                  </g>
                )}

                {/* Topping: Destellos */}
                {toppings.sparkles && (
                  <g className="transition-all duration-300">
                    <path d="M120 140 L123 145 L129 147 L123 149 L120 154 L117 149 L111 147 L117 145 Z" fill="#A6243C" />
                    <path d="M280 150 L282 154 L287 155 L282 157 L280 161 L278 157 L273 155 L278 154 Z" fill="#D96276" />
                  </g>
                )}

                {/* Topping: Macarons */}
                {toppings.macarons && (
                  <g className="transition-all duration-300">
                    <g transform="translate(110, 185) scale(0.6)">
                      <rect x="0" y="0" width="40" height="20" rx="10" fill="#F7C5CC" stroke="#5C0612" strokeWidth="3" />
                      <line x1="0" y1="10" x2="40" y2="10" stroke="#5C0612" strokeWidth="2" />
                    </g>
                    <g transform="translate(250, 185) scale(0.6)">
                      <rect x="0" y="0" width="40" height="20" rx="10" fill="#D96276" stroke="#5C0612" strokeWidth="3" />
                      <line x1="0" y1="10" x2="40" y2="10" stroke="#5C0612" strokeWidth="2" />
                    </g>
                  </g>
                )}

                {/* Topping: Fresas Frescas */}
                {toppings.strawberries && (
                  <g className="transition-all duration-300">
                    <path d="M170 190c-5-5-15 0-15 10 0 10 15 20 15 20s15-10 15-20c0-10-10-15-15-10z" fill="#A6243C" stroke="#5C0612" strokeWidth="2" />
                    <path d="M230 190c-5-5-15 0-15 10 0 10 15 20 15 20s15-10 15-20c0-10-10-15-15-10z" fill="#A6243C" stroke="#5C0612" strokeWidth="2" />
                  </g>
                )}

                {/* Mensaje Script Dinámico */}
                <text x="200" y="270" textAnchor="middle" fontFamily="'Playball', cursive" fontSize="24" fill="#5C0612" fontWeight="bold" className="select-none pointer-events-none">
                  {message || '¡Tu Mensaje!'}
                </text>
              </svg>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-burgundy/60 font-semibold bg-cream/80 backdrop-blur-sm p-3 rounded-xl border border-sweetpink/30">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-600 mr-1.5" /> Formato de foto premium: 1080x1350px</span>
                <button onClick={resetCustomizer} className="text-cherry hover:underline">Reiniciar</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
