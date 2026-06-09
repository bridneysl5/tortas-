import { motion } from 'framer-motion';

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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3"
          >
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">1</div>
            <h4 className="font-serif text-lg font-bold">Selección y Diseño</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Explora nuestro catálogo y elige el modelo. Si quieres toques especiales, escríbelos en los detalles antes de añadir al carrito.
            </p>
          </motion.div>

          {/* Paso 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3"
          >
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">2</div>
            <h4 className="font-serif text-lg font-bold">Preparación Artesanal</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Todos nuestros pasteles se hornean y decoran a mano con ingredientes de la más alta calidad para asegurar que tanto el diseño como el sabor sean espectaculares.
            </p>
          </motion.div>

          {/* Paso 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl border border-sweetpink/30 space-y-3"
          >
            <div className="w-10 h-10 bg-sweetpink rounded-xl flex items-center justify-center font-bold text-burgundy">3</div>
            <h4 className="font-serif text-lg font-bold">Envío Seguro (Lima)</h4>
            <p className="text-xs text-burgundy/80 leading-relaxed">
              Llevamos tu pedido con máximo cuidado en auto climatizado directamente a tu evento o domicilio para que llegue intacto.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
