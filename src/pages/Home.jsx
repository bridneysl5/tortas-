import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import GuiaPedido from '../components/GuiaPedido';

export default function Home({ addToCart, productos }) {
  return (
    <>
      <Hero productos={productos} />
      <BestSellers addToCart={addToCart} productos={productos} />
      <GuiaPedido />
    </>
  );
}
