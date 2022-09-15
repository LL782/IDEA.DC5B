import { GetStaticProps } from "next/types";
import { PricedProduct, RawIdea } from "src/productIdeas/businessLogic/Idea";
import { IdeaDetails } from "src/productIdeas/ui/IdeaDetails";
import { ProductDetails } from "src/productIdeas/ui/ProductDetails";
import ideas from "../../src/productIdeas/data/ideas";

interface Props {
  idea: RawIdea | PricedProduct;
}

const Details = ({ idea }: Props) => {
  if (idea.type === "Raw idea") {
    return <IdeaDetails idea={idea} />;
  }
  return <ProductDetails idea={idea} />;
};

export default Details;

export const getStaticProps: GetStaticProps = ({ params }) => {
  const idea = ideas.find(({ id }) => id === params?.id);
  return { props: { idea } };
};

export const getStaticPaths = () => {
  const paths = ideas.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};
