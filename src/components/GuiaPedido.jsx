export default function GuiaPedido() {
  return (
    <section id="como-pedir" className="py-16 bg-cream border-b border-sweetpink/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-cherry block">Guía de Experiencia Loty</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1 text-burgundy">Tu pedido perfecto paso a paso</h2>
          <p className="text-burgundy/80">Nos encargamos de que cada dulce y pastel llegue en las mejores condiciones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Paso 1 */}
          <div className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3">
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">1</div>
            <h4 className="font-serif text-lg font-bold">Selección o Creación</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Escoge uno de nuestros pasteles de catálogo por categoría (K-pop, Infantiles, Aesthetics, etc.) o diseña uno único desde nuestro laboratorio interactivo 2D.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3">
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">2</div>
            <h4 className="font-serif text-lg font-bold">Preparación Artesanal</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Todos nuestros pasteles se hornean y decoran a mano con ingredientes de la más alta calidad para asegurar que tanto el diseño como el sabor sean espectaculares.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3">
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">3</div>
            <h4 className="font-serif text-lg font-bold">Envío Seguro</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Despachamos tu pedido en nuestras icónicas cajas rígidas color Rosa Pastel con asas de cinta Guinda Profundo, manteniendo la cadena de frío y el diseño intacto.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
