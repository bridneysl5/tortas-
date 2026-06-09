import Catalogo from '../components/Catalogo';

export default function CatalogPage({ addToCart, productos }) {
  return (
    <>
      <div className="bg-cream pt-10"></div> {/* Space below navbar */}
      <Catalogo addToCart={addToCart} productos={productos} />
    </>
  );
}
