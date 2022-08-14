import products from "../../data/products";
import ProductDetails from "../../productDetails/ProductDetails";

export default ProductDetails;

export async function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === params.id);
  return { props: { product } };
}

export async function getStaticPaths() {
  const paths = products.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}
