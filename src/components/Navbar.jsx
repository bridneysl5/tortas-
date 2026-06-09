import { ShoppingBag, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Navbar({ cartCount, toggleCart }) {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-sweetpink/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logotipo Oficial */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="Loty Bakery Logo" 
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Menú de navegación enfocado en ventas */}
        <nav className="hidden md:flex space-x-8 font-medium text-burgundy items-center">
          <Link to="/" className="hover:text-cherry transition-colors duration-200">Inicio</Link>
          <Link to="/catalogo" className="hover:text-cherry transition-colors duration-200 font-bold">Catálogo</Link>
          <a href="/#como-pedir" className="hover:text-cherry transition-colors duration-200">Guía de Pedido</a>
        </nav>

        {/* Carrito y enlace rápido a Instagram */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleCart} className="relative p-2.5 bg-sweetpink/40 hover:bg-sweetpink/70 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-burgundy" />
            <span className="absolute -top-1 -right-1 bg-cherry text-cream text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow border-2 border-cream">
              {cartCount}
            </span>
          </button>
          <a href="https://instagram.com/lotybakery_co" target="_blank" rel="noreferrer" className="hidden sm:flex items-center space-x-1 text-xs text-cherry font-medium hover:underline">
            <Instagram className="w-4 h-4" />
            <span>@lotybakery_co</span>
          </a>
        </div>
      </div>
    </header>
  );
}
