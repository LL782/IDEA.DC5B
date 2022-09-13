import { PrimaryLink } from "src/atomic-ui/PrimaryLink";
import { SecondaryLink } from "../../atomic-ui/SecondaryLink";

interface Props {
  blogPost?: string;
  type?: "primary";
}

export const TalkAboutIt = ({ blogPost, type }: Props) => {
  if (!blogPost) {
    return null;
  }
  const text = "Let's talk about it...";
  return (
    <p>
      {type === "primary" ? (
        <PrimaryLink href={blogPost}>{text}</PrimaryLink>
      ) : (
        <SecondaryLink href={blogPost}>{text}</SecondaryLink>
      )}
    </p>
  );
};
