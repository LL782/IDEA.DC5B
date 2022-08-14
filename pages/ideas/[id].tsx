import ideas from "../../data/ideas";
import { IdeaDetails } from "../../ideaDetails";

export default IdeaDetails;

export async function getStaticProps({ params }) {
  const idea = ideas.find(({ id }) => id === params.id);
  return { props: { idea } };
}

export async function getStaticPaths() {
  const paths = ideas.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}
