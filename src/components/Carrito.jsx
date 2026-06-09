import { ShoppingBasket, X, ShoppingCart, CheckSquare } from 'lucide-react';

export default function Carrito({ isOpen, toggleCart, cartItems, changeQty, procesarPago }) {
  return (
    <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-sweetpink/40 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      <div className="p-6 border-b border-sweetpink/40 flex items-center justify-between bg-cream">
        <div className="flex items-center space-x-2">
          <ShoppingBasket className="w-5 h-5 text-burgundy" />
          <h3 className="font-serif text-lg font-bold text-burgundy">Tu Cesta de Pedido</h3>
        </div>
        <button onClick={toggleCart} className="p-2 hover:bg-sweetpink/40 rounded-full transition-colors text-burgundy">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Contenedor dinámico de ítems de compra */}
      <div className="flex-grow p-6 overflow-y-auto space-y-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 text-burgundy/50 flex flex-col items-center justify-center space-y-3">
            <ShoppingCart className="w-12 h-12 stroke-[1.5]" />
            <p className="text-sm font-semibold">Tu cesta está vacía. ¡Agrega delicias de nuestro menú!</p>
          </div>
        ) : (
          cartItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="flex items-center justify-between p-3.5 bg-cream/40 rounded-xl border border-sweetpink/30 space-x-3 text-burgundy">
              <div className="flex-grow space-y-1 text-left">
                <span className="text-xs font-bold block">{item.nombre}</span>
                {item.detalles && (
                  <span className="text-[10px] opacity-80 block">{item.detalles}</span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => changeQty(idx, -1)} 
                  className="w-6 h-6 rounded-full bg-sweetpink/30 hover:bg-sweetpink/60 flex items-center justify-center text-xs font-bold"
                >
                  -
                </button>
                <span className="text-xs font-bold">{item.qty}</span>
                <button 
                  onClick={() => changeQty(idx, 1)} 
                  className="w-6 h-6 rounded-full bg-sweetpink/30 hover:bg-sweetpink/60 flex items-center justify-center text-xs font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pie de Carrito con Total de Compra */}
      <div className="p-6 border-t border-sweetpink/40 bg-cream/50 space-y-4">
        <div className="space-y-2">
          <button 
            onClick={procesarPago} 
            className="w-full py-3.5 bg-burgundy hover:bg-burgundy-light text-cream font-bold rounded-xl transition-all shadow flex items-center justify-center space-x-2"
          >
            <CheckSquare className="w-4.5 h-4.5" />
            <span>Enviar Pedido para Cotización WhatsApp</span>
          </button>
          <p className="text-[9px] text-center text-burgundy/50">Todos los pasteles se preparan frescos de forma artesanal.</p>
        </div>
      </div>
    </div>
  );
}
