import { GetStaticProps } from "next/types";
import ideas from "../../src/productIdeas/data/ideas";
import { Details } from "../../src/productIdeas/ui/Details";

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
