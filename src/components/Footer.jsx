export default function Footer() {
  return (
    <footer className="bg-burgundy text-cream py-12 border-t-4 border-cherry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sweetpink mb-4">Pasteles & Cupcakes</h4>
          <ul className="space-y-2.5 text-xs text-sweetpink/95">
            <li><a href="/catalogo" className="hover:underline">Pasteles de Cumpleaños</a></li>
            <li><a href="/catalogo" className="hover:underline">Bentos de Aniversario</a></li>
            <li><a href="/catalogo" className="hover:underline">Pasteles Infantiles</a></li>
            <li><a href="/catalogo" className="hover:underline">Tarta de K-pop y Coquette</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sweetpink mb-4">Experiencia Premium</h4>
          <ul className="space-y-2.5 text-xs text-sweetpink/95">
            <li><a href="/#como-pedir" className="hover:underline">Guía de Envío a Lima</a></li>
            <li><a href="/catalogo" className="hover:underline">Catálogo de Productos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sweetpink mb-4">¡Haz tu Pedido!</h4>
          <p className="text-xs text-sweetpink/80 leading-relaxed">
            Lima, Perú<br/>
            Pedidos con un mínimo de 48 horas de anticipación para asegurar máxima frescura.<br/>
            <strong>WhatsApp:</strong> +51 916 098 803
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-sweetpink/20 flex flex-col sm:flex-row items-center justify-between text-xs text-sweetpink/70">
        <span>© 2026 Loty Bakery. Todos los derechos reservados.</span>
        <span className="flex items-center mt-2 sm:mt-0 font-script text-lg text-cream">Con amor y sabor!</span>
      </div>
    </footer>
  );
}
