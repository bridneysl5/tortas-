import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Escuchar a Firebase solo por los productos del Emprendimiento "Tortas"
    const q = query(collection(db, "productos"), where("emprendimiento", "==", "Tortas"));
    const unsub = onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        docs.push({
          id: doc.id,
          nombre: data.nombre,
          // La app Admin guarda `precioVenta`, el Catalogo Loty Bakery espera `precioVenta` en vez de usar precio.
          // O bien podemos setear todo el data object.
          ...data,
          imagen: data.imageUrl || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600' // fallback
        });
      });
      setProductos(docs);
    });

    return () => unsub();
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (producto) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === producto.id);
      if (existing && !producto.detalles_personalizados) {
        return prev.map(item => 
          item.id === producto.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...producto, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const changeQty = (idx, delta) => {
    setCartItems(prev => {
      const newItems = [...prev];
      newItems[idx].qty += delta;
      if (newItems[idx].qty <= 0) {
        newItems.splice(idx, 1);
      }
      return newItems;
    });
  };

  const procesarPago = () => {
    if (cartItems.length === 0) {
      alert("Tu cesta está vacía. Agrega delicias de pastelería.");
      return;
    }
    let msg = "¡Hola Loty Bakery! Deseo solicitar cotización para el siguiente pedido:\n\n";
    cartItems.forEach(item => {
      msg += `- ${item.nombre} (Cant: ${item.qty}) - S/ ${item.precioVenta}\n`;
      if (item.detalles_personalizados) {
        msg += `  Detalles: ${item.detalles_personalizados}\n`;
      }
    });
    msg += "\nPor favor, confirmen disponibilidad de diseño para la fecha de mi evento. ¡Muchas gracias!";

    const wpUrl = `https://api.whatsapp.com/send?phone=51916098803&text=${encodeURIComponent(msg)}`;
    window.open(wpUrl, '_blank');
    
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Router>
      <Navbar cartCount={totalCartCount} toggleCart={toggleCart} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} productos={productos} />} />
          <Route path="/catalogo" element={<CatalogPage addToCart={addToCart} productos={productos} />} />
        </Routes>
      </main>
      <Footer />
      
      <Carrito 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartItems={cartItems} 
        changeQty={changeQty}
        procesarPago={procesarPago}
      />
      <FloatingButtons toggleCart={toggleCart} cartCount={totalCartCount} />
    </Router>
  );
}

export default App;
