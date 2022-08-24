import { GetStaticProps } from "next/types";
import ideas from "../../data/ideas";
import { IdeaDetails } from "../../ideaDetails";

export default IdeaDetails;

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
