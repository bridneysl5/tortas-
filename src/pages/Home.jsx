import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import GuiaPedido from '../components/GuiaPedido';

export default function Home({ addToCart, productos }) {
  return (
    <>
      <Hero />
      <BestSellers addToCart={addToCart} productos={productos} />
      <GuiaPedido />
    </>
  );
}
